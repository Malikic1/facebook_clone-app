import { useState } from "react";
import Backdrop from "../components/Backdrop";
import CreateAccount from "../components/CreateAccount";
import classes from "./Login.module.css";

function LoginPage() {
  const [showSignUp, setshowSignUp] = useState(false);

  function createAccountHandler() {
    setshowSignUp(true);
  }
  function closeAccountHandler() {
    setshowSignUp(false);
  }
  return (
    <div>
      {showSignUp && <Backdrop />}
      {showSignUp && <CreateAccount onClick={closeAccountHandler} />}

      <div className="flex mt">
        <section className={classes.section1}>
          <p className={`${classes.logo} ${classes.col1}`}>facebook</p>
          <p className={classes.logo_text}>
            Facebook helps you connect and share <br /> with the people in your
            life.
          </p>
        </section>
        <section className={classes.section2}>
          <form className={`${classes.login} ${classes.form}`}>
            <input
              type="text"
              className={`${classes.inp} ${classes.inp1}`}
              placeholder="Email address or phone number"
            />
            <br />
            <input
              type="password"
              name=""
              className={`${classes.inp} ${classes.inp1}`}
              placeholder="Password"
            />
            <br />
            <input
              type="submit"
              name=""
              value="Log in"
              className={classes.submit}
            />
            <br />
            <br />
            <a className={classes.forgot}>Forgotten password?</a>
            <br />
            <br />
            <hr className={classes.hr} />
            <br />
            <button
              type="button"
              className={classes.btn_create}
              style={{ marginTop: "0.5rem" }}
              onClick={createAccountHandler}
            >
              <b>Create New Account</b>
            </button>
          </form>
          <br />
          <p style={{ "margin-left": "60px", fontFamily: "Arial" }}>
            <small>
              <b>Create a Page</b> for a celebrity, brand, business
            </small>
          </p>
        </section>
      </div>
    </div>
  );
}
export default LoginPage;
