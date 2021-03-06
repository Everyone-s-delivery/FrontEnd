import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { LoginIcon } from 'src/components/@Icons';
import KakaoLogin from 'src/components/SocialLogin/KakaoLogin';
import { LoginData } from 'src/model/model';
import { loginUserAction } from 'src/redux/authentication/authenticationActions';

type State = {
  email: string;
  password: string;
  loading: boolean;
  message: string;
};

const LoginScreen = () => {
  const [state, setState] = useState<State>({
    email: '',
    loading: false,
    password: '',
    message: '',
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validationSchema = () => {
    return Yup.object().shape({
      email: Yup.string()
        .email('유효한 이메일 형식을 입력하세요')
        .required('가입한 이메일 주소를 입력하세요.'),
      password: Yup.string()
        .min(8, '비밀번호는 최소 8글자 이상입니다.')
        .required('비밀번호를 입력하세요.'),
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: LoginData) => {
      alert(JSON.stringify(values, null, 2));
      handleLogin(values);
    },
  });

  const handleLogin = (formValue: LoginData) => {
    const { email, password } = formValue;

    setState((prev) => ({
      ...prev,
      message: '',
      loading: true,
    }));

    // TODO: props를 통해 action과 dispatch를 받아서 처리하려고 connect를 추가한 건데
    // router v6 버전 문제 있음. 일단 임시적으로 useDispatch를 씀
    dispatch(loginUserAction({ email, password }));
  };
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder={'everyone@everyone.com'}
            label="이메일"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="이 기기에서 로그인 유지"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            size="large"
            startIcon={<LoginIcon />}
          >
            로그인
          </Button>
          <KakaoLogin />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                비밀번호 찾기
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                회원 가입
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginScreen;
