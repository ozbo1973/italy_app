import moment from "moment";
import { useWeatherIcons } from "../../helpers/hooks/useWeatherIcons";
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

const WeatherDesk = ({ page, imgSrc, weatherData, isLoading, day }) => {
  const classes = useStyles();
  const [getIcon] = useWeatherIcons();
  const { itDate } = useFormatItalyDate();
  const { currently, daily } = weatherData;

  return isLoading ? (
    <Paper className={classes.root}>
      <CircularProgress className={classes.progress} />
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

        <Typography variant="h6" component="h6">
          Temperature: {currently.temperature} {getIcon(currently.icon)}
        </Typography>
        <Typography variant="body2">Currently: {currently.summary}</Typography>
        <Typography variant="body2">{`Cloud Cover: ${currently.cloudCover}`}</Typography>
        <Divider className={classes.divider} />
        {daily.data.map((data, i) => {
          return (
            i < 3 && (
              <Typography key={`${day[i]}_desk`} variant="body2">
                <span className={classes.forecastDay}>{day[i]}:</span>{" "}
                {getIcon(data.icon)}
                <span className={classes.forecastHiLow}>
                  <em>H: </em>
                  {`${Math.round(data.temperatureHigh)}`} <em>L: </em>
                  {`${Math.round(data.temperatureLow)}`}
                </span>
                <div className={classes.forecastSummary}>{data.summary}</div>
              </Typography>
            )
          );
        })}
      </CardContent>
    </Card>
  );
};

export default WeatherDesk;
