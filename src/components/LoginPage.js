import React from "react";
import { Form, Button, Input, Space, Checkbox, message, Carousel } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { login, register } from "../utils";
import homepage from "../images/homepage.jpg";
import homepage1 from "../images/homepage1.jpg";
import homepage2 from "../images/homepage2.jpg";
import homepage3 from "../images/homepage3.jpg";
import homepage4 from "../images/homepage4.jpg";

// import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
class LoginPage extends React.Component {
  formRef = React.createRef();
  state = {
    asHost: false,
    loading: false,
  };

  onFinish = () => {
    console.log("finish form");
  };

  handleLogin = async () => {
    const formInstance = this.formRef.current;

    try {
      await formInstance.validateFields();
    } catch (error) {
      return;
    }

    this.setState({
      loading: true,
    });

    try {
      const { asHost } = this.state;
      const resp = await login(formInstance.getFieldsValue(true), asHost);
      this.props.handleLoginSuccess(resp.token, asHost);
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  handleRegister = async () => {
    const formInstance = this.formRef.current;

    try {
      await formInstance.validateFields();
    } catch (error) {
      return;
    }

    this.setState({
      loading: true,
    });

    try {
      await register(formInstance.getFieldsValue(true), this.state.asHost);
      message.success("Register Successfully");
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  //event handled props
  handleCheckboxOnChange = (e) => {
    this.setState({
      asHost: e.target.checked,
    });
  };

  //onFinish: props onFinish = {() => {}}
  render() {
    return (
      <>
        <div
          style={{
            top: "100px",
            left: "50px",
            position: "fixed",
            zIndex: "2",
            width: 300,
            margin: "20px auto",
          }}
        >
          <Form ref={this.formRef} onFinish={this.onFinish}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                disabled={this.state.loading}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                disabled={this.state.loading}
                placeholder="Password"
              />
            </Form.Item>
          </Form>
          <Space>
            <Checkbox
              style={{ color: "white" }}
              disabled={this.state.loading}
              checked={this.state.asHost}
              onChange={this.handleCheckboxOnChange}
            >
              As Host
            </Checkbox>
            <Button
              style={{ border: "2px #FF6347", backgroundColor: "#FF6347" }}
              onClick={this.handleLogin}
              disabled={this.state.loading}
              shape="round"
              type="primary"
            >
              Log in
            </Button>
            <Button
              style={{ border: "2px #FF6347", backgroundColor: "#FF6347" }}
              onClick={this.handleRegister}
              disabled={this.state.loading}
              shape="round"
              type="primary"
            >
              Register
            </Button>
          </Space>
        </div>
        {/* <img
          src={homepage}
          alt="CosmosCabin"
          style={{
            position: "relative",
            width: "100%",
            zIndex: "1",
            // height: "100%",
            // opacity: "80%",
          }}
        /> */}
        {
          <Carousel
            autoplay
            autoplaySpeed={3000}
            // dots={false}
            // arrows={true}
            // prevArrow={<LeftCircleFilled />}
            // nextArrow={<RightCircleFilled />}
          >
            <img
              src={homepage}
              alt="CosmosCabin"
              style={{ height: "100%", zIndex: "1" }}
            />

            <img
              src={homepage1}
              style={{ height: "100%", zIndex: "1" }}
              alt="CosmosCabin"
            />

            <img
              src={homepage2}
              style={{ height: "100%", zIndex: "1" }}
              alt="CosmosCabin"
            />

            <img
              src={homepage3}
              style={{ height: "100%", zIndex: "1" }}
              alt="CosmosCabin"
            />

            <img
              src={homepage4}
              style={{ height: "100%", zIndex: "1" }}
              alt="CosmosCabin"
            />

            {/* <div>
             <h3 style={contentStyle}>3</h3>
           </div>
           <div>
             <h3 style={contentStyle}>4</h3>
           </div> */}
          </Carousel>
        }

        <div
          style={{
            color: "white",
            bottom: "50px",
            textAlign: "center",
            zIndex: 1,
            position: "relative",
          }}
        >
          ©2022 CosmosCabin Cabin Vacation Rental Web Application. All Rights
          Reserved. Website Made by XD
        </div>
      </>
    );
  }
}

export default LoginPage;
