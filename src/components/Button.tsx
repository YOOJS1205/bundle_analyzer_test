import React from "react";
import { getHi } from "@utils/get-hi";
import { getBye } from "@utils/get-bye";

export default function Button() {
  return (
    <>
      <button onClick={getHi}>hi</button>
      <button onClick={getBye}>bye</button>
    </>
  );
}
