import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function DoneItem() {
  const params = useParams();
  const doneLists = useSelector((state) => {
    return state.doneLists; //state도 obj형태기 때문에 .으로 counter로 접근할 수 있다.
  });

  console.log("params", params);
  console.log("doneLists", doneLists);

  const findData = doneLists.doneLists.find(
    (e) => e.id === parseInt(params.doneId)
  );

  return (
    <>
      <h1>상세페이지 입니다</h1>
      {findData.id}
      <br />
      {findData.title}
      <br />
      {findData.text}
      <br />
      {findData.deadline}
      <br />
    </>
  );
}

export default DoneItem;
