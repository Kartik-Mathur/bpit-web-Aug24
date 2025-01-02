import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const Short = () => {
  const shortsStyle = {
    color: "black",
    borderRadius: "10px",
    width: "336px",
  };

  return (
    <div style={shortsStyle}>
      <Image src="https://i0.wp.com/picjumbo.com/wp-content/uploads/gorgeous-sunset-over-the-sea-free-image.jpeg?h=800&quality=80" />
      <ShortInfo />
    </div>
  );
};

function Image({ src }) {
  const imgStyle = {
    borderRadius: "10px",
  };

  return <img className="shorts-image" src={src} style={imgStyle} />;
}

function ShortInfo() {
  const shortInfo = {
    color: "black",
    borderRadius: "10px",
    width: "336px",
    paddingInline: "8px",
  };

  const titleStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  };

  const spanStyle = {
    height: "100%",
  };

  const titleTextStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "calc(100% - 30px)",
    margin: 0,
  };

  const pstyle = {
    margin: "0px",
  };

  return (
    <div style={shortInfo}>
      <div style={titleStyle}>
        <p style={titleTextStyle}>Most Expensive Cinema Hall Hall Hall</p>
        <span style={spanStyle}>
          <CiMenuKebab />
        </span>
      </div>
      <p style={pstyle}>13M Views</p>
    </div>
  );
}

export default Short;