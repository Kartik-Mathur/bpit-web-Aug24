import { useContext } from "react";
import context from "../context/dsa-web.context";
import cbContext from "../context/cb.context";

export default function MAIT() {
  console.log("Re-rendering MAIT");
  const data = useContext(context);
  const cbdata = useContext(cbContext);
  return (
    <div>
      <hr />
      MAIT
      <br />
      {data.dsa} <br />
      {data.web}
      {cbdata}
      <br />
    </div>
  );
}
