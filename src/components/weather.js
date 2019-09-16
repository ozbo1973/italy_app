import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Divider
} from "@material-ui/core";
import Rain from "@material-ui/icons/BeachAccess";
import ClearDay from "@material-ui/icons/WbSunny";
import Cloudy from "@material-ui/icons/WbCloudy";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  }
}));

const weatherData = {
  timezone: "Italy/Rome",
  currently: {
    time: 1509993277,
    summary: "Drizzle",
    temperature: 66.1,
    icon: "clear-day",
    cloudCover: 0.7,
    visibility: 9.84
  },
  daily: {
    summary: "Rain starting in afternoon,continue until the evening",
    data: [
      {
        summary: "Clearing in the morning and evening",
        temperatureHigh: 66.35,
        temperatureLow: 41.28,
        icon: "rain"
      },
      {
        summary: "Cloudy in the evening",
        temperatureHigh: 72.35,
        temperatureLow: 52.28,
        icon: "clear-day"
      },
      {
        summary: "Cloudy most of the day",
        temperatureHigh: 65.35,
        temperatureLow: 52.28,
        icon: "cloudy"
      }
    ]
  }
};

const weatherIcons = {
  rain: <Rain />,
  clearday: <ClearDay />,
  cloudy: <Cloudy />
};

const Weather = ({ location }) => {
  const classes = useStyles();
  const { currently, daily } = weatherData;
  const getIcon = icon => weatherIcons[icon.split("-").join("")];

  return (
    <Paper className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h5">
            Weather {getIcon(currently.icon)}
          </Typography>

          <Typography variant="h6" component="h6">
            Temperature: {currently.temperature}
          </Typography>
          <Typography variant="body2">Summary: {currently.summary}</Typography>
          <Typography variant="body2">{`Cloud Cover: ${currently.cloudCover}`}</Typography>
          <Divider />
          <Typography variant="body2">
            <span>Tomorrow:</span> {getIcon(daily.data[1].icon)}
            <span>
              H:{daily.data[1].temperatureHigh}
              L:{daily.data[1].temperatureLow}
            </span>
            <div>{daily.data[1].summary}</div>
          </Typography>
          <Typography variant="body2">
            <span>Next Day:</span> {getIcon(daily.data[1].icon)}
            <span>
              H:{daily.data[2].temperatureHigh}
              L:{daily.data[2].temperatureLow}
            </span>
            <div>{daily.data[2].summary}</div>
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default Weather;
