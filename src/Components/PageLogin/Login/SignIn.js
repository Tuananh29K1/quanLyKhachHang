import React, { useState } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
// ====================== import material component ===================
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// ====================== style cho material component ==============
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#4bac4d",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#4bac4d",
    color: "#fff",
  },
}));

// ======================================================

export default function SignIn() {
  // =========================== phần chuyển sang SignUp ============================
  const [signUp, setSignUp] = useState(false);
  const goSignUp = () => {
    if (signUp === true) {
      return <Redirect to="/sign-up" />;
    }
  };
  // ======================= phần login ======================
  const [login, setLogin] = useState(false);
  function getLogin(event) {
    event.preventDefault();
    setLogin(!login);
  }

  const getSignIn = () => {
    if (login === true) {
      return <Redirect to="/khach-hang" />;
    }
  };
  // ======================== khai báo cho style material component ============
  const classes = useStyles();
  // ========================================= phần render ==========================
  return (
    <>
      {/* ================== hàm signUp ================ */}
      {goSignUp()}
      {/* =============== hàm login ==============*/}
      {getSignIn()}
      {/* ========================= render component =========== */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Xin Chào !
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={getLogin}
            >
              Đăng Nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {"Quên Mật Khẩu ?"}
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => setSignUp(!signUp)}
                >
                  {"Bạn muốn đăng ký mới không ?"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
