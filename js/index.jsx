// Header Component

const Header = (props) => {
  const headerStyle = {
    width: "100%",
    height: "35px",
    backgroundColor: "#ff4757",
    textAlign: "center",
    color: "aliceblue",
  };
  return (
    <div style={headerStyle}>
      <h3>{props.passProps}</h3>
    </div>
  );
};

// body component

const Body = () => {
  const bodyStyle = {
    width: "100%",
    height: "500px",
    backgroundColor: "#ff4757",
    textAlign: "center",
    color: "aliceblue",
  };
  return (
    <div style={bodyStyle}>
      <h3>Body Component</h3>
    </div>
  );
};

// footer component

const Footer = (props) => {
  const footerStyle = {
    width: "100%",
    height: "50px",
    backgroundColor: "#ff4757",
    textAlign: "center",
    color: "aliceblue",
  };
  return (
    <div style={footerStyle}>
      <h3>{props.passProps}</h3>
    </div>
  );
};

// Layout function

const Layout = () => {
  return (
    <div>
      <Header passProps="Header Component" />
      <Body />
      <Footer passProps="Footer Component" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Layout />);
