// import { Layout, Dropdown, Menu, Button } from "antd";

// import { UserOutlined } from "@ant-design/icons";
// import React from "react";
// import LoginPage from "./components/LoginPage";
// import HostHomePage from "./components/HostHomePage";
// import GuestHomePage from "./components/GuestHomePage";
// import homepage from "./images/homepage.jpeg";
// const { Header, Content } = Layout; //deconstruct
// //const Header = Layout.Header;

// class App extends React.Component {
//   state = {
//     //
//     authed: false,
//     asHost: false,
//   };

//   componentDidMount() {
//     const authToken = localStorage.getItem("authToken");
//     const asHost = localStorage.getItem("asHost") === "true";
//     this.setState({
//       authed: authToken !== null,
//       asHost,
//     });
//   }

//   //after user has interacted with the browser
//   //cb function  -> log in component
//   handleLoginSuccess = (token, asHost) => {
//     localStorage.setItem("authToken", token);
//     localStorage.setItem("asHost", asHost);
//     this.setState({
//       authed: true,
//       asHost,
//     });
//   };

//   handleLogOut = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("asHost");
//     this.setState({
//       authed: false,
//     });
//   };

//   renderContent = () => {
//     if (!this.state.authed) {
//       return <LoginPage handleLoginSuccess={this.handleLoginSuccess} />;
//     }

//     if (this.state.asHost) {
//       return <HostHomePage />;
//     }

//     return <GuestHomePage />;
//   };

//   userMenu = (
//     <Menu>
//       <Menu.Item key="logout" onClick={this.handleLogOut}>
//         Log Out
//       </Menu.Item>
//     </Menu>
//   );

//   render() {
//     return (
//       <Layout style={{ position: "relative", height: "100vh" }}>
//         <Header
//           style={{
//             position: "fixed",
//             width: "100%",
//             background: "#FF6347",
//             opacity: "80%",
//             display: "flex",
//             justifyContent: "space-between",
//             height: 50,

//             zIndex: 2,
//           }}
//         >
//           <div
//             style={{
//               fontSize: 30,
//               // fontWeight: "bold",
//               color: "white",
//               fontFamily: "Courier New",
//             }}
//           >
//             GetAway+
//           </div>
//           {this.state.authed && (
//             <div>
//               <Dropdown trigger="click" overlay={this.userMenu}>
//                 <Button icon={<UserOutlined />} shape="circle" />
//               </Dropdown>
//             </div>
//           )}
//         </Header>
//         <img
//           src={homepage}
//           alt="GetAway"
//           style={{
//             position: "relative",
//             width: "100%",
//             // height: "100%",
//             // opacity: "80%",
//             zIndex: 1,
//           }}
//         />
//         <Content
//           style={{
//             top: "65px",
//             left: "50px",
//             position: "fixed",
//             height: "calc(100% - 64px)",
//             // fontcolor: "white",
//             margin: 20,
//             overflow: "auto",
//             zIndex: 2,
//           }}
//         >
//           {this.renderContent()}
//         </Content>
//         <div
//           style={{
//             color: "white",
//             bottom: "50px",
//             textAlign: "center",
//             zIndex: 1,
//             position: "relative",
//           }}
//         >
//           ©2022 GetAway+ House Booking System. All Rights Reserved. Website Made
//           by XD
//         </div>
//       </Layout>
//     );
//   }
// }

// export default App;
import { Layout, Dropdown, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import LoginPage from "./components/LoginPage";
import HostHomePage from "./components/HostHomePage";
import GuestHomePage from "./components/GuestHomePage";

const { Header, Content } = Layout; //deconstruct
//const Header = Layout.Header;

class App extends React.Component {
  state = {
    //
    authed: false,
    asHost: false,
  };

  componentDidMount() {
    const authToken = localStorage.getItem("authToken");
    const asHost = localStorage.getItem("asHost") === "true";
    this.setState({
      authed: authToken !== null,
      asHost,
    });
  }

  //after user has interacted with the browser
  //cb function  -> log in component
  handleLoginSuccess = (token, asHost) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("asHost", asHost);
    this.setState({
      authed: true,
      asHost,
    });
  };

  handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("asHost");
    this.setState({
      authed: false,
    });
  };

  renderContent = () => {
    if (!this.state.authed) {
      return <LoginPage handleLoginSuccess={this.handleLoginSuccess} />;
    }

    if (this.state.asHost) {
      return <HostHomePage />;
    }

    return <GuestHomePage />;
  };

  userMenu = (
    <Menu>
      <Menu.Item key="logout" onClick={this.handleLogOut}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{
            width: "100%",
            background: "#FF6347",
            opacity: "90%",
            display: "flex",

            justifyContent: "flex-start",

            gap: "20px",
            height: 50,
          }}
        >
          <div
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "white",
              fontFamily: "Korolev",
            }}
          >
            CosmosCabin
          </div>
          <div
            style={{
              fontSize: 15,
              paddingTop: "5px",
              // alignContent: "baseline",
              // fontWeight: "bold",
              color: "white",
              fontFamily: "Korolev ",
            }}
          >
            Cabin Vacation Rental System
          </div>
          {this.state.authed && (
            <div>
              <Dropdown trigger="click" overlay={this.userMenu}>
                <Button icon={<UserOutlined />} shape="circle" />
              </Dropdown>
            </div>
          )}
        </Header>

        <Content
          style={{
            height: "calc(100% - 64px)",

            overflow: "auto",
          }}
        >
          {this.renderContent()}
        </Content>
      </Layout>
    );
  }
}

export default App;
