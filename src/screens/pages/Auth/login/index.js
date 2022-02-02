import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Yup from 'yup';
import { Form, Formik,  Field } from 'formik';
import { Link } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to=''>
        Adam Jamiu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login(errors) {
  //   const handleSubmit = () => {};

  //   SignUp Schema
  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .required('Required! Input your user name'),
    password: Yup.string()
      .required('Required!')
      
  });


  return (
    <Formik
      initialValues={{
        userName: '',
        password: ''
      }}
      onSubmit={(values) => {
        // same shape as initial values
        alert(JSON.stringify(values, 3));
      }}
      validationSchema={SignupSchema}
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
              Login
            </Typography>

            <Box mt={3}>
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      autocomplete="on"
                      name="userName"
                      className="border-slate-200 w-full px-10 py-5"
                      placeholder="UserName"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="password"
                      placeholder="Password"
                      type="password"
                      className="w-full border-inherit py-5 px-10"
                    />
                  </Grid>
                </Grid>
                <button type="submit" className='hover:bg-green-800 active:scale-0 bg-green-600 text-white w-full py-4 mt-5'>
                  Login
                </button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/">
                      You don't have an account? Sign up
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
