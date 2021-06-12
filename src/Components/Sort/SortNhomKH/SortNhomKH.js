import React, { useState } from "react";
import FormSortNhomKH from "./FormSortNhomKH";
import "./formSortNhomKH.css";
import ListNhomKH from "./ListNhomKH";

function SortNhomKH() {
  const [plusNhomKH, setPlusNhomKH] = useState(false);
  const [showSearchNhom, setShowSearchNhom] = useState(false);
  const [choiceNhomKH, setChoiceNhomKH] = useState("Tất cả các nhóm");
  // ============================= chọn nhóm khách hàng =======================
  function changeChoiceNhom(tenNhom) {
    setChoiceNhomKH(tenNhom);
  }
  function choiceNhom() {
    if (choiceNhomKH === "Tất cả các nhóm") {
      return "Tất cả các nhóm";
    } else {
      return `Nhóm: ${choiceNhomKH}`;
    }
  }
  // ============================== load lại giữ liệu khi đã chọn nhóm xong =========
  // chưa có hướng giải quyết
  // ============================ hiển thị form plus nhóm ==================
  function changePlusNhomKH() {
    setPlusNhomKH(!plusNhomKH);
  }

  function plusNhom() {
    if (plusNhomKH === true) {
      return <FormSortNhomKH close={() => changePlusNhomKH()} />;
    }
  }
  function changeSerachNhom() {
    setShowSearchNhom(!showSearchNhom);
  }
  function searchNhom() {
    if (showSearchNhom === true) {
      return (
        <>
          <ListNhomKH close={changeSerachNhom} choice={changeChoiceNhom} />
        </>
      );
    }
  }
  // ========================= phần render =======================
  return (
    <>
      <article className="mainLeft--sortNhomKH sort">
        <div className="mainLeft--sortNhomKH--top flex-between">
          <h2>Nhóm Khách Hàng</h2>
          <span>
            <i
              className="fas fa-plus-circle"
              onClick={() => changePlusNhomKH()}
            />
          </span>
        </div>
        <div className="mainLeft--sortNhomKH--inputGroup flex-between mt-3 mb-2 line">
          <span className="mainLeft--sortNhomKH--inputGroup__defaulValue w-100">
            <div className="groupInputSelect">
              <div className="inputSelect">
                <label onClick={() => changeSerachNhom()}>{choiceNhom()}</label>
              </div>
              {searchNhom()}
            </div>
          </span>
          <span>
            <i className="fas fa-sort-down" />
          </span>
        </div>
      </article>
      {/*End nhomKH*/}
      {plusNhom()}
    </>
  );
}

export default SortNhomKH;