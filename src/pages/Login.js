import Backdrop from "../components/Backdrop";
import CreateAccount from "../components/CreateAccount";

import classes from "./Login.module.css";

function LoginPage() {
  return (
    <div>
      <Backdrop />
      <CreateAccount />
      <div className="flex">
        <section className={classes.section1}>
          <p className={classes.logo}>facebook</p>
          <p className={classes.logo_text}>
            Facebook helps you connect and share <br /> with the people in your
            life.
          </p>
        </section>
        <section className={classes.section}>
          <form className={classes.form}>
            <input
              type="text"
              className={classes.inp}
              placeholder="Email address or phone number"
            />
            <br />
            <input
              type="password"
              name=""
              className={classes.inp}
              placeholder="Password"
            />
            <br />
            <input
              type="submit"
              name=""
              value="Log in"
              className={classes.inp1}
            />
            <br />
            <br />
            <a href="#" className={classes.forgot}>
              Forgotten password?
            </a>
            <br />
            <br />
            <hr />
            <br />
            <button className={classes.btn_create}>Create New Account</button>
          </form>
          <br />
          <p style={{ "margin-left": "20px" }}>
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
