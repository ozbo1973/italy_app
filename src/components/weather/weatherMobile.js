import { useContext } from "react";
import { useWeatherIcons } from "../../helpers/hooks/useWeatherIcons";
import { useFormatItalyDate } from "../../helpers/hooks/useStaticData";
import useStyles from "../../styles/weather.style";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { WeatherContext } from "../../contexts/weather.context";

const WeatherMobile = () => {
  const { imgSrc, data, isLoading, day, errMsg, pageRoute } = useContext(
    WeatherContext
  );
  const classes = useStyles();
  const { itDate } = useFormatItalyDate();
  const [getIcon] = useWeatherIcons();
  const { currently, daily } = data;
  const page = pageRoute.split("/").join("")[1];

  return isLoading || errMsg ? (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} />
      <Typography variant="h4" color="error">
        {errMsg}
      </Typography>
    </div>
  ) : (
    <div className={classes.root}>
      <Grid container spacing={2} justify={"center"} className={classes.header}>
        <Grid xs={2} item>
          <Avatar src={imgSrc} alt={page} className={classes.avatar} />
        </Grid>
        <Grid xs={10} item>
          <Typography variant="h6" component="h6" className={classes.tempTitle}>
            Temp: {currently.temperature} {getIcon(currently.icon)}
            <Typography variant="body2">{itDate}</Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            <span className={classes.forecastDay}>Currently:</span>{" "}
            {currently.summary}
          </Typography>
          <Typography variant="body2">{`Cloud Cover: ${currently.cloudCover}`}</Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container direction="column" spacing={2} className={classes.header}>
        {daily.data.map((data, i) => {
          return (
            i < 3 && (
              <Grid item container spacing={1} xs={12} key={`${day[i]}_mb`}>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    <span className={classes.forecastDay}>{day[i]}: </span>{" "}
                    {getIcon(data.icon)}
                    <span className={classes.forecastHiLow}>
                      <em>H: </em>
                      {data.temperatureHigh} <em>L: </em>
                      {data.temperatureLow}
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
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
    </div>
  );
};

export default WeatherMobile;
