import { AxiosError } from "axios";
import getInfo from "./requests";

export const fetchData = async (
  sido,
  station,
  setData,
  setPmgrade,
  setLoadStatus,
  setError,
) => {
  try {
    setLoadStatus(true);
    const res = await getInfo(sido);
    setTimeout(() => {
      const result = res.response.body.items.find((data) => {
        return data.stationName === station;
      });
      setData(result);
      setPmgrade(result.pm10Grade);
      setLoadStatus(false);
    }, 1000);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      setError(error.message);
    } else {
      throw error;
    }
  }
};
