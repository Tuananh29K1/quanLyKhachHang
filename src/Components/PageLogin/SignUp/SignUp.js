import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dataNewAdmin } from "../../../Store/Reducer/ReducerAdmin";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { nanoid } from "nanoid";
// ============================ import các material component ==============
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// ==================== khai báo style cho material component==============
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
// =============================phần export signUp function component============================================
export default function SignUp() {
  // ========================== gắn state cho các input ================================
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassWord, setNewPassWord] = useState("");
  const [newAcc, setNewAcc] = useState("");
  const [newCompleted, setNewCompleted] = useState(false);
  // ================================ nhận value từ input cho tài khoản mới =================
  function getFirstName(event) {
    setNewFirstName(event.target.value);
  }
  function getLastName(event) {
    setNewLastName(event.target.value);
  }
  function getEmail(event) {
    setNewEmail(event.target.value);
  }
  function getPassWord(event) {
    setNewPassWord(event.target.value);
  }
  function getAcc(event){
    setNewAcc(event.target.value);
  }
  // ======================= khai báo tài khoản mới  để gửi lên redux ================================
  const dispatch = useDispatch();
  const sendNewAdmin = () => {
    const newAdmin = {
      id: nanoid(),
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      passWord: newPassWord,
      completed: newCompleted,
      accLogin: newAcc,
    };
    dispatch(dataNewAdmin(newAdmin));
  };
  // ================================= đăng ký thành công chuyển đến page khách hàng ===================
  const [createDone, setCreateDone] = useState(false);
  const getCreateDone = (event) => {
    event.preventDefault();
    sendNewAdmin();
    setCreateDone(!createDone);
  };
  const goToLogin = () => {
    if (createDone === true) {
      return <Redirect to="/" />;
    }
  };
  // =============================== chuyển lại về login =============================================
  const [backLogin, setBackLogin] = useState(false);
  const getBackLogin = () => {
    if (backLogin === true) {
      return <Redirect to="/" />;
    }
  };
  // ============================= khai báo style cho material ui ==================================
  const classes = useStyles();
  // ============================== phần render ===========================
  return (
    <>
      {/* ====================================== hàm signUp thành công =======================
       */}
      {goToLogin()}
      {/* ================================= hàm backLogin ============================== */}
      {getBackLogin()}
      {/* ============================== phần render component ================== */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {"Đăng Ký Mới Tài Khoản"}
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={newFirstName}
                  onChange={getFirstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={newLastName}
                  onChange={getLastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nameAcc"
                  label="Tên Đăng Nhập"
                  name="nameAcc"
                  autoComplete="nameAcc"
                  value={newAcc}
                  onChange={getAcc}
                  placeholder="Tên đăng nhập"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={newEmail}
                  onChange={getEmail}
                  placeholder="abc.@dingtea.com"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Mật Khẩu"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={newPassWord}
                  onChange={getPassWord}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="accepted"
                      color="primary"
                      onChange={() => setNewCompleted(!newCompleted)}
                    />
                  }
                  label="Tôi đã kỹ các điều khoản, tôi đồng ý với những yêu cầu đó !"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(event) => getCreateDone(event)}
            >
              {"Đăng Ký Ngay"}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => setBackLogin(!backLogin)}
                >
                  {"Tôi có tài khoản rồi !"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
