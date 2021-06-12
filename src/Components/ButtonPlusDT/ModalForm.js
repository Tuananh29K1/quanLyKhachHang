import React, { useState } from "react";
import FormPlusDT from "./FormPlusDT";
import moment from "moment";
export default function ModalForm() {
  const [showModal, setShowModal] = useState(false);
  const [dateBornAcc, setDateBornAcc] = useState("");
  function changeShowModal() {
    setShowModal(!showModal);
  }
  // ============================== lấy giá trị ngày tạo =======================
  const dateBorn = moment().subtract(0, "days").format("YYYY-MM-DD").toString();
  // =================================================================================
  function changeShow() {
    changeShowModal();
    setDateBornAcc(dateBorn);
  }
  function show() {
    if (showModal === true) {
      document.body.classList.add("active-modal");
      return (
        <FormPlusDT show={() => changeShowModal()} getDate={dateBornAcc} />
      );
    } else {
      document.body.classList.remove("active-modal");
    }
  }

  return (
    <>
      <button onClick={() => changeShow()}>
        <span>
          <i className="fas fa-plus mr-2" />
        </span>
        Khách Hàng
      </button>
      <div>{show()}</div>
    </>
  );
}
