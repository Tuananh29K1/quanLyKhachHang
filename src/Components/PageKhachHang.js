import React, { Component } from "react";
import Header from "./Header/Header";
import MainLeft from "./Main/MainLeft";
import ButtonEF from "./ButtonExportFile/ButtonEF";
import ButtonListTitle from "./ButtonListTitleDetails/ButtonListTitle";
import ButtonSearchTop from "./ButtonSearch/ButtonSearchTop";
import HeadTableDT from "./Table/DoiTac/HeadTableDT";
import TableSumDT from "./Table/DoiTac/TableSumDT";
import GroupItem from "./Table/DoiTac/GroupItem";
import ModalForm from "./ButtonPlusDT/ModalForm";

export default class PageKhachHang extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div className="row">
            <MainLeft />
            <div className="mainRight col-9">
              <div className="mainRight--top flex-between">
                <ButtonSearchTop />
                {/*End Search Top*/}
                <div className="mainRight--top--button flex-between">
                  <aside>
                    <ModalForm />
                  </aside>
                  <ButtonEF />
                  <ButtonListTitle />
                </div>
                {/*End Button Top*/}
              </div>
              {/* End Main Right Top */}
              <div className="mainRight--bottom">
                <div className="mainRight--bottom--table">
                  <div className="wrap">
                    <table className="head">
                      <thead>
                        <HeadTableDT />
                      </thead>
                      <tbody>
                        <TableSumDT />
                        <GroupItem />
                      </tbody>
                    </table>
                  </div>
                </div>
                {/*End Table*/}
              </div>
              {/* End Main Right Bottom */}
            </div>
            {/* End Main Right */}
          </div>
        </main>
        {/* End Main */}
      </>
    );
  }
}
