require("dotenv").config();
const express = require("express");
const expressValidator = require("express-validator");
const formData = require("express-form-data");
const os = require("os");
const mongoose = require("mongoose");
const next = require("next");
const itinRoutes = require("./routes/itineraryRoutes");
const linksdocsRoutes = require("./routes/linksDocsRoutes");
const docsDataRoutes = require("./routes/docsDataRoutes");
const otherAPIRoutes = require("./routes/otherAPIRoutes");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const dbConnect = dev
  ? "mongodb://127.0.0.1:27017/trip-app"
  : process.env.MONGO_URI;
const app = next({ dev });
const handle = app.getRequestHandler();

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

mongoose
  .connect(dbConnect, mongooseOptions)
  .then(() => console.log("DB connected"));

mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

const formDataOptions = {
  uploadDir: os.tmpdir(),
  autoClean: true
};

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  // server.use(express.urlencoded({ extended: true }));

  /* used to format data from forms */
  server.use(formData.parse(formDataOptions));
  server.use(formData.format());
  server.use(formData.stream());
  server.use(formData.union());

  server.use("/api/itin", itinRoutes);
  server.use("/api/linksdocs", linksdocsRoutes);
  server.use("/api/docsData", docsDataRoutes);
  server.use("/api/other", otherAPIRoutes);

  server.get("/fileViewer/:id", (req, res) => {
    app.render(req, res, "/fileViewer");
  });

  server.get("/docsData/:cat", (req, res) => {
    app.render(req, res, "/docsData");
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> listening on port: ${port}`);
  });
});

// const express = require("express");
// const next = require("next");
// // const session = require("express-session");
// const mongoose = require("mongoose");
// // const logger = require("morgan");
// const mongoSessionStore = require("connect-mongo");
// const expressValidator = require("express-validator");
// // const passport = require("passport");
// // const helmet = require("helmet");
// // const compression = require("compression");

// /* Loads all variables from .env file to "process.env" */
// require("dotenv").config();
// /* Require our models here so we can use the mongoose.model() singleton to reference our models across our app */
// require("./models/itinerarySchema");
// const routes = require("./routes/itineraryRoutes");
// // require("./passport");

// const dev = process.env.NODE_ENV !== "production";
// const port = process.env.PORT || 3000;
// const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const mongooseOptions = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// };

// mongoose
//   .connect(
//     process.env.MONGO_URI,
//     mongooseOptions
//   )
//   .then(() => console.log("DB connected"));

// mongoose.connection.on("error", err => {
//   console.log(`DB connection error: ${err.message}`);
// });

// app.prepare().then(() => {
//   const server = express();

//   // if (!dev) {
//   //   /* Helmet helps secure our app by setting various HTTP headers */
//   //   server.use(helmet());
//   //   /* Compression gives us gzip compression */
//   //   server.use(compression());
//   // }

//   /* Body Parser built-in to Express as of version 4.16 */
//   server.use(express.json());
//   /* Express Validator will validate form data sent to the backend */
//   server.use(expressValidator());

//   /* give all Next.js's requests to Next.js server */
//   server.get("/_next/*", (req, res) => {
//     handle(req, res);
//   });

//   server.get("/static/*", (req, res) => {
//     handle(req, res);
//   });

//   // const MongoStore = mongoSessionStore(session);
//   // const sessionConfig = {
//   //   name: "next-connect.sid",
//   //   // secret used for using signed cookies w/ the session
//   //   secret: process.env.SESSION_SECRET,
//   //   store: new MongoStore({
//   //     mongooseConnection: mongoose.connection,
//   //     ttl: 14 * 24 * 60 * 60 // save session for 14 days
//   //   }),
//   //   // forces the session to be saved back to the store
//   //   resave: false,
//   //   // don't save unmodified sessions
//   //   saveUninitialized: false,
//   //   cookie: {
//   //     httpOnly: true,
//   //     maxAge: 1000 * 60 * 60 * 24 * 14 // expires in 14 days
//   //   }
//   // };

//   // if (!dev) {
//   //   sessionConfig.cookie.secure = true; // serve secure cookies in production environment
//   //   server.set("trust proxy", 1); // trust first proxy
//   // }

//   // /* Apply our session configuration to express-session */
//   // server.use(session(sessionConfig));

//   // /* Add passport middleware to set passport up */
//   // server.use(passport.initialize());
//   // server.use(passport.session());

//   // server.use((req, res, next) => {
//   //   /* custom middleware to put our user data (from passport) on the req.user so we can access it as such anywhere in our app */
//   //   res.locals.user = req.user || null;
//   //   next();
//   // });

//   /* morgan for request logging from client
//   - we use skip to ignore static files from _next folder */
//   server.use(
//     logger("dev", {
//       skip: req => req.url.includes("_next")
//     })
//   );

//   /* apply routes from the "routes" folder */
//   server.use("/", routes);

//   /* Error handling from async / await functions */
//   server.use((err, req, res, next) => {
//     const { status = 500, message } = err;
//     res.status(status).json(message);
//   });

//   /* create custom routes with route params */
//   server.get("/profile/:userId", (req, res) => {
//     const routeParams = Object.assign({}, req.params, req.query);
//     return app.render(req, res, "/profile", routeParams);
//   });

//   /* default route
//      - allows Next to handle all other routes
//      - includes the numerous `/_next/...` routes which must    be exposedfor the next app to work correctly
//      - includes 404'ing on unknown routes */
//   server.get("*", (req, res) => {
//     handle(req, res);
//   });

//   server.listen(port, err => {
//     if (err) throw err;
//     console.log(`Server listening on ${ROOT_URL}`);
//   });
// });
