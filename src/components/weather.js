import { useState, useEffect } from "react";
import { otherAPI } from "../helpers/pageDataQuery";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Card,
  CardContent,
  Divider,
  CircularProgress
} from "@material-ui/core";
import Rain from "@material-ui/icons/BeachAccess";
import ClearDay from "@material-ui/icons/WbSunny";
import Cloudy from "@material-ui/icons/WbCloudy";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2)
  },
  progress: {
    margin: theme.spacing(2)
  }
}));

const weatherIcons = {
  rain: <Rain />,
  clearday: <ClearDay />,
  clearnight: <ClearDay />,
  cloudy: <Cloudy />,
  partlycloudynight: <Cloudy />,
  partlycloudyday: <Cloudy />
};

const Weather = ({ page }) => {
  const [isLoading, setIsloading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const { currently = {}, daily = [] } = weatherData;
  const classes = useStyles();
  const getIcon = icon => weatherIcons[icon.split("-").join("")];
  const baseURL = "weather";

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await otherAPI(baseURL).get(`/${page.pageTitle}`);
        console.log(data);
        setWeatherData({ currently: data.currently, daily: data.daily });
        setIsloading(false);
      } catch (error) {
        setIsloading(true);
        console.log(error);
      }
    };

    if (isLoading) {
      getData();
    }
  }, [isLoading]);

  return isLoading ? (
    <Paper className={classes.root}>
      <CircularProgress className={classes.progress} />
    </Paper>
  ) : (
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
          <Typography variant="body2">
            <span>Today:</span> {getIcon(daily.data[1].icon)}
            <span>
              H:{daily.data[0].temperatureHigh} L:{daily.data[0].temperatureLow}
            </span>
            <div>{daily.data[1].summary}</div>
          </Typography>
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
