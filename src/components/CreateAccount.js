import classes from "../pages/Login.module.css";

function CreateAccount() {
  return (
    <div className={classes.create}>
      <form className={classes.form2}>
        <>
          <h1>Sign Up</h1>
          <small>It's quick and easy.</small>
        </>
        <br />
        <input type="text" className={classes.inp2} placeholder="First name" />
        &nbsp;&nbsp;
        <input type="text" className={classes.inp2} placeholder="Last name" />
        <br />
        <input
          type="text"
          className={classes.inp}
          placeholder="Mobile number or email address"
        />
        <br />
        <input
          type="password"
          name=""
          className={classes.inp}
          placeholder="New Password"
        />
        <br />
        <label for="DOB">Date of birth</label>
        <select>
          <option value="1">1</option>
        </select>
        <select>
          <option value="1">1</option>
        </select>
        <select>
          <option value="1">1</option>
        </select>
        <br />
        <label for="DOB">Gender</label>
        <>
          <input type="radio" name="" value="Female" />
        </>
        <>
          <input type="radio" name="" value="Female" />
        </>
        <>
          <input type="radio" name="" value="Female" />
        </>
        <br />
        <small>
          People who use our service may have uploaded your contact information
          to Facebook. Learn more
        </small>
        <br />
        <small>By clicking Sign Up, you agree to our Terms, Privacy Polivy, Cookies Policy.
          <br/> 
          You may receive SMS notifications from us and can opt out at any time. </small>
      <br />
      <br />
        <button className={classes.btn_create}>Create New Account</button>
      </form>
    </div>
  );
}
export default CreateAccount;
