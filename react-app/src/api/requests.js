import axios from "axios";
import { transformRentalsForUI } from "./transformer";

// TODO: Build the actual URL
const GET_RENTASL_URL =
  "https://odc-search-staging.herokuapp.com/rentals?filter%5Btype%5D=camper-van&address=san%20francisco";

export const getRentals = () => {
  const rentals = axios
    .get(GET_RENTASL_URL)
    .then(({ data: { data } }) => transformRentalsForUI(data));

  return rentals;
};
