import { useContext } from "react";
import { useWeatherIcons } from "../../helpers/hooks/useWeatherIcons";
import { WeatherContext } from "../../contexts/weather.context";
import { useFormatItalyDate } from "../../helpers/hooks/useStaticData";
import useStyles from "../../styles/weather.style";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const WeatherDesk = () => {
  const classes = useStyles();
  const { data, errMsg, day, isLoading, imgSrc, pageRoute } = useContext(
    WeatherContext
  );
  const [getIcon] = useWeatherIcons();
  const { itDate } = useFormatItalyDate();
  const page = pageRoute.split("/").join("")[1];

  const { currently, daily } = data;

  return isLoading || errMsg ? (
    <Paper className={classes.root}>
      <CircularProgress className={classes.progress} />
      <Typography variant="h4" color="error" className={classes.error}>
        {errMsg}
      </Typography>
    </Paper>
  ) : (
    <Card className={classes.root}>
      <CardContent>
        <Grid container wrap="nowrap">
          <Grid item xs={6}>
            <Avatar src={imgSrc} alt={page} className={classes.avatar} />
          </Grid>
          <Grid item container wrap="nowrap" direction="column">
            <Grid item xs={6}>
              <Typography variant="h5" component="h5">
                Weather
              </Typography>
            </Grid>
            <Grid item>
              <Typography component="span">{itDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap">
          <Grid item xs={12}>
            <Typography variant="h6" component="h6">
              Temperature: {currently.temperature} {getIcon(currently.icon)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Currently: {currently.summary}
            </Typography>
            <Typography variant="body2">{`Cloud Cover: ${currently.cloudCover}`}</Typography>
          </Grid>
        </Grid>

        <Divider className={classes.divider} />

        <Grid container direction="column">
          {daily.data.map((data, i) => {
            return (
              i < 3 && (
                <Grid item container direction="column" key={`${day[i]}_desk`}>
                  <Grid item md={12}>
                    <Typography variant="body2">
                      <span className={classes.forecastDay}>{day[i]}:</span>{" "}
                      {getIcon(data.icon)}
                      <span className={classes.forecastHiLow}>
                        <em>H: </em>
                        {`${Math.round(data.temperatureHigh)}`} <em>L: </em>
                        {`${Math.round(data.temperatureLow)}`}
                      </span>{" "}
                    </Typography>
                  </Grid>
                  <Grid item md={12}>
                    <Typography variant="body2" align="right">
                      <span className={classes.forecastSummary}>
                        {data.summary}
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
              )
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherDesk;
