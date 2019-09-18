import { docsData } from "../../tempData";

export const pageDNLData = async pathname => {
  const page = pathname.split("/")[1];
  return await docsData.filter(d => d.place === page);
};
