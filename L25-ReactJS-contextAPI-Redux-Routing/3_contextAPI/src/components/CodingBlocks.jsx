import BPIT from "./BPIT";
import BPITAdvanced from "./BPITAdvanced";
import MAIT from "./MAIT";

export default function CodingBlocks() {
    console.log("Re-rendering CB");
  return (
    <>
      <BPIT />
      {/* <BPITAdvanced /> */}
      <MAIT />
    </>
  );
}
