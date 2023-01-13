import axios from "axios";

const API_KEY =
  "gAOumWPhcv1%2BiAh0lcnMkvtyBP%2F%2F9JfrwJVD3yjM%2FEjH%2FykPdLtFIArXDK99QKBVDs9zj9iqFvnTLZKX89xmPg%3D%3D";

export default async function getInfo(sido) {
  try {
    const response = await axios.get(
      `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${API_KEY}&returnType=json&numOfRows=100&pageNo=1&sidoName=${sido}&ver=1.0`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
