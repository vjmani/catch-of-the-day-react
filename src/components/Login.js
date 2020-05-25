import React from "react";
import PropType from "prop-types";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Log in to manage your sites's inventory</p>

    <button className="github" onClick={() => props.authenticate("Github")}>
      Log in with Github
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Log in with Facebook
    </button>
  </nav>
);

Login.propTypes = {
    authenticate: PropType.func.isRequired
}

export default Login;
