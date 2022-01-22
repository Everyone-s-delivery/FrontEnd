import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Col, Container, Navbar, Row, Spinner } from "react-bootstrap";
import * as Yup from "yup";

type State = {
  username: string;
  password: string;
  loading: boolean;
  message: string;
};

const LoginScreen: React.FC = () => {
  const [state, setState] = useState<State>({
    username: "",
    loading: false,
    password: "",
    message: "",
  });

  const validationSchema = () => {
    return Yup.object().shape({
      username: Yup.string().required("아이디를 입력하세요."),
      password: Yup.string().required("비밀번호를 입력하세요."),
    });
  };

  const handleLogin = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;

    setState((prev) => ({
      ...prev,
      message: "",
      loading: true,
    }));

    //    AuthService.login(username, password).then(
    //      () => {
    //        this.props.history.push("/profile");
    //        window.location.reload();
    //      },
    //      (error) => {
    //        const resMessage =
    //          (error.response &&
    //            error.response.data &&
    //            error.response.data.message) ||
    //          error.message ||
    //          error.toString();

    //        this.setState({
    //          loading: false,
    //          message: resMessage,
    //        });
    //      }
    //   );
  };
  return (
    <Container>
      {/* <Row className="h-10" xs={1} md={1}>
        <Navbar>
          <Container>
            <Navbar.Brand href="#">
              <img
                src="/logo_transparent.png"
                width="250"
                height="250"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Row> */}
      <Row></Row>
      <Row>
        <Col md={12}>
          <div className="card card-container">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
            />

            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="username">아이디</label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">비밀번호</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={state.loading}
                  >
                    {state.loading && <Spinner animation="border" size="sm" />}
                    <span>로그인</span>
                  </button>
                </div>

                {state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {state.message}
                    </div>
                  </div>
                )}
              </Form>
            </Formik>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default LoginScreen;
