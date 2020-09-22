import React from "react";

export default function ({
  match: {
    params: { rentalId },
  },
}) {
  return <div>TestingDetail: {rentalId}</div>;
}
