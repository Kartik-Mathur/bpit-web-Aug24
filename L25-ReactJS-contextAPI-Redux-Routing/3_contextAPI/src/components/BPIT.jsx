import context from "../context/dsa-web.context";

export default function BPIT() {
    console.log("Re-rendering BPIT");
  return (
    <context.Consumer>
      {(value) => {
        return <div>
          {value.dsa} <br />
          {value.web}

          <br />
          <br />
          <br />
          <hr />
        </div>
      }}
    </context.Consumer>
  );
}
