import React, { memo, useState } from "react";

const RenderFix2 = () => {
  const [cnt, setCnt] = useState(0);

  function updateCnt() {
    setCnt(cnt + 1);
  }

  return (
    <>
      <button onClick={updateCnt}>Click</button>
      <Text data={cnt} />
      <Text data="Hello" />
      <Text data="World" />
    </>
  );
};

const Text = memo(function Text({ data }) {
  console.log(data);
  return <div>{data}</div>;
});

export default RenderFix2;
