import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";

const useFormStyles = makeStyles((theme) => ({
  gridContainer: {
    "& > .MuiGrid-item ": {
      marginBottom: theme.spacing(2),
    },
  },
}));

const LoginForm = () => {
  const classes = useFormStyles();
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", passwordCheck: "" }}
    >
      <Form>
        <Grid container direction="column" className={classes.gridContainer}>
          <Grid item xs={12}>
            <Field
              fullWidth
              variant="outlined"
              component={TextField}
              label="Ваше имя"
              name="name"
              type="text"
              InputProps={{
                margin: "dense",
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
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
          <Grid item xs={12}>
            <Field
              fullWidth
              variant="outlined"
              component={TextField}
              label="Подтверждение пароля"
              name="passwordCheck"
              type="password"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                margin: "dense",
              }}
            />
          </Grid>
          <Button type="submit" color="primary" variant="contained">
            Подтвердить
          </Button>
        </Grid>
      </Form>
    </Formik>
  );
};
export default LoginForm;
