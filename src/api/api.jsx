import { AxiosError } from "axios";
import getInfo from "./requests";

export const fetchData = async (
  sido,
  station,
  setData,
  setPmgrade,
  setError,
) => {
  try {
    const res = await getInfo(sido);
    if (res.status === 200) {
      const result = res.response.body.items.find((data) => {
        return data.stationName === station;
      });
      setData(result);
      setPmgrade(result.pm10Grade);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      setError(error.message);
    } else {
      throw error;
    }
  }
};
