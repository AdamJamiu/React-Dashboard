import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Yup from 'yup';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to="https://github.com/AdamJamiu">
        Adam Jamiu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp(errors, touched) {
  //   const handleSubmit = () => {};

  let navigate = useNavigate();
  
  //   SignUp Schema

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!, Name must be at least three letters long')
      .max(16, 'Too Long!, Name must not exceed sixteen letters long')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!', 'Name must be at least three letters long')
      .max(50, 'Too Long!', ' Name must be at least three letters long')
      .required('Last Name Required'),
    email: Yup.string().email('Invalid email!, enter a valid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Invalid email!, enter a valid email address')
      .required('Required')
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        var user = JSON.stringify(values, 3);
        alert(JSON.stringify(values, 3));
        navigate(`/dashboard`);
        window.localStorage.setItem('user',  user);
      }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'green' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <Box mt={3}>
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autocomplete="on"
                      name="firstName"
                      className="border-slate-200 w-full px-10 py-5"
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      className={errors ? 'text-red-600' : ''}
                      name="firstName"
                      component="div"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      placeholder="Last Name"
                      className="w-full py-5 px-10 "
                      label="Last Name"
                      name="lastName"
                      type="text"
                      autocomplete="on"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className={errors ? 'text-red-600' : 'text-green-400'}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      autocomplete="on"
                      className="w-full border-slate-600 py-5 px-10 "
                      placeholder="Email Address"
                      name="email"
                      type="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={errors ? 'text-red-600' : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="password"
                      placeholder="Password"
                      type="password"
                      className="w-full border-inherit py-5 px-10"
                    />
                    <ErrorMessage
                      className={errors ? 'text-red-600' : ''}
                      name="password"
                      component="div"
                    />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth bgcolor="green" variant="contained" sx={{ mt: 2, mb: 2,bgcolor:'green' }}>
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            </Box>
          </Box>
          <Copyright sx={{ mt: 3 }} />
        </Container>
      </ThemeProvider>
    </Formik>
  );
}
