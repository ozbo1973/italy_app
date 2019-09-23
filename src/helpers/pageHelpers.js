import moment from "moment";

export const getPageTitle = pathname => pathname.split("/")[1];

export const getPageTitleProper = pathname =>
  getPageTitle(pathname)
    .split("")
    .map((t, i) => (i === 0 ? t.toUpperCase() : t))
    .join("");

export const formatDate = date =>
  moment(date).format("ddd, MMM Do YYYY, h:mm a");
