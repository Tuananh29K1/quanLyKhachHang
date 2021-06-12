import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PageKhachHang from "../PageKhachHang";
import SignIn from "../PageLogin/Login/SignIn";
import SignUp from "../PageLogin/SignUp/SignUp";
export default class DieuHuong extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/khach-hang" component={PageKhachHang} />
      </Switch>
    );
  }
}
