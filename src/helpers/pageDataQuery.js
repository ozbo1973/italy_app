import { docsData } from "../../tempData";

export const pageDNLData = pathname => {
  const page = pathname.split("/")[1];
  return docsData.filter(d => d.place === page);
};
