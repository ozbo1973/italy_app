import { useWeatherIcons } from "../../helpers/hooks/useWeatherIcons";
import { useFormatItalyDate } from "../../helpers/hooks/useStaticData";
import useStyles from "../../styles/weather.style";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const WeatherMobile = ({ page, imgSrc, weatherData, isLoading, day }) => {
  const classes = useStyles();
  const { itDate } = useFormatItalyDate();
  const [getIcon] = useWeatherIcons();
  const { currently, daily } = weatherData;

  return isLoading ? (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} />
    </div>
  ) : (
    <div className={classes.root}>
      <Grid container justify={"center"} className={classes.header}>
        <Grid xs={2} alignItems="center" item>
          <Avatar src={imgSrc} alt={page} className={classes.avatar} />
        </Grid>
        <Grid xs={10} item>
          <Typography variant="h6" component="h6" className={classes.tempTitle}>
            Temp: {currently.temperature} {getIcon(currently.icon)}
            <Typography variant="body2">{itDate}</Typography>
            <Typography variant="body2">
              Currently: {currently.summary}
            </Typography>
            <Typography variant="body2">{`Cloud Cover: ${currently.cloudCover}`}</Typography>
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={2} className={classes.header}>
        {daily.data.map((data, i) => {
          return (
            i < 3 && (
              <Grid key={`${day[i]}_mb`} item>
                <Typography variant="body2">
                  <span className={classes.forecastDay}>{day[i]}: </span>{" "}
                  {getIcon(data.icon)}
                  <span className={classes.forecastHiLow}>
                    <em>H: </em>
                    {data.temperatureHigh} <em>L: </em>
                    {data.temperatureLow}
                  </span>
                  <div className={classes.forecastSummary}>{data.summary}</div>
                </Typography>
              </Grid>
            )
          );
        })}
      </Grid>
    </div>
  );
};

export default WeatherMobile;
