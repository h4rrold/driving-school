import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";

import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";

import { loginUserRequestThunk } from "redux/thunks";
import { Redirect } from "react-router";
import { getUserTokenSelector, getAuthRedirectUrl } from "redux/selectors/auth";

const useFormStyles = makeStyles((theme) => ({
  gridContainer: {
    "& > .MuiGrid-item ": {
      marginBottom: theme.spacing(2),
    },
  },
}));

const LoginForm = ({ loginUserRequestThunk, redirectUrl }) => {
  const classes = useFormStyles();
  if (redirectUrl) {
    return <Redirect to={redirectUrl} />;
  }
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        const { password, email } = values;
        loginUserRequestThunk({ email, password });
      }}
    >
      <Form>
        <Grid container direction="column" className={classes.gridContainer}>
          <Grid item xs={12}>
            <Field
              fullWidth
              label="Email"
              component={TextField}
              variant="outlined"
              type="text"
              name="email"
              InputProps={{
                margin: "dense",
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              fullWidth
              variant="outlined"
              component={TextField}
              label="Пароль"
              name="password"
              type="password"
              InputProps={{
                margin: "dense",
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Button type="submit" color="primary" variant="contained">
            Войти
          </Button>
        </Grid>
      </Form>
    </Formik>
  );
};

const mapStateProps = (state) => ({
  userToken: getUserTokenSelector(state),
  redirectUrl: getAuthRedirectUrl(state),
});

const mapDispatchToProps = (dispatch) => ({
  loginUserRequestThunk: ({ email, password }) =>
    dispatch(loginUserRequestThunk({ email, password })),
});

export default connect(mapStateProps, mapDispatchToProps)(LoginForm);
