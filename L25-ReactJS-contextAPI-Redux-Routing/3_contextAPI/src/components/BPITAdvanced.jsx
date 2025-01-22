import cbContext from "../context/cb.context";
import context from "../context/dsa-web.context";

export default function BPITAdvanced() {
  return (
    <context.Consumer>
      {(dsaweb) => {
        return <cbContext.Consumer>
            {(cbvalue)=>{
                return <div>
                    {dsaweb.dsa} <br /> <br />
                    {dsaweb.web} <br /> <br />
                    {cbvalue} <br /> <br />
                </div>
            }}
        </cbContext.Consumer>;
      }}
    </context.Consumer>
  );
}
