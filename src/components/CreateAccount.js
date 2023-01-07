import classes from "../pages/Login.module.css";

function CreateAccount(props) {
  return (
    <div className={`${classes.create} ${classes.form}`}>
      <form>
        <div className="f-left">
          <p className={classes.close} onClick={props.onClick}>
            x
          </p>
          <h1 style={{ fontWeight: "600" }}>Sign Up</h1>
          <small>It's quick and easy.</small>
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr className={classes.mt} />
        <input
          type="text"
          className={`${classes.inp2} ${classes.inp}`}
          placeholder="First name"
          style={{ width: "45%" }}
        />
        &nbsp;&nbsp;&nbsp;
        <input
          type="text"
          className={`${classes.inp2} ${classes.inp}`}
          placeholder="Surname"
          style={{ width: "45%" }}
        />
        <br />
        <input
          type="text"
          className={`${classes.inp2} ${classes.inp}`}
          placeholder="Mobile number or email address"
        />
        <br />
        <input
          type="password"
          name=""
          className={`${classes.inp2} ${classes.inp}`}
          placeholder="New Password"
        />
        <br />
        <br />
        <label for="DOB" className="lb f-left">
          Date of birth
        </label>
        <br />
        <div className="flex">
          <select className="w-b">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
            <option value="1">9</option>
            <option value="1">10</option>
            <option value="1">11</option>
            <option value="1">12</option>
            <option value="1">13</option>
            <option value="1">14</option>
            <option value="1">15</option>
            <option value="1">16</option>
            <option value="1">17</option>
            <option value="1">18</option>
            <option value="1">19</option>
            <option value="1">20</option>
            <option value="1">21</option>
            <option value="1">22</option>
            <option value="1">23</option>
            <option value="1">24</option>
            <option value="1">25</option>
            <option value="1">26</option>
            <option value="1">27</option>
            <option value="1">28</option>
            <option value="1">29</option>
            <option value="1">30</option>
            <option value="1">31</option>
          </select>
          <select className="w-b">
            <option value="1">Jan</option>
            <option value="1">Feb</option>
            <option value="1">Mar</option>
            <option value="1">Apr</option>
            <option value="1">May</option>
            <option value="1">Jun</option>
            <option value="1">Jul</option>
            <option value="1">Aug</option>
            <option value="1">Sep</option>
            <option value="1">Oct</option>
            <option value="1">Nov</option>
            <option value="1">Dec</option>
          </select>
          <select className="w-b">
            <option value="1">2023</option>
            <option value="1">2022</option>
            <option value="1">2021</option>
            <option value="1">2020</option>
            <option value="1">2019</option>
            <option value="1">2018</option>
            <option value="1">2017</option>
            <option value="1">2016</option>
            <option value="1">2015</option>
            <option value="1">2014</option>
            <option value="1">2013</option>
            <option value="1">2012</option>
            <option value="1">2011</option>
            <option value="1">2010</option>
            <option value="1">2009</option>
            <option value="1">2008</option>
            <option value="1">2007</option>
            <option value="1">2006</option>
            <option value="1">2005</option>
            <option value="1">2004</option>
            <option value="1">2003</option>
            <option value="1">2002</option>
            <option value="1">2001</option>
            <option value="1">2000</option>
            <option value="1">1999</option>
            <option value="1">1998</option>
            <option value="1">1997</option>
            <option value="1">1996</option>
            <option value="1">1995</option>
            <option value="1">1994</option>
            <option value="1">1993</option>
            <option value="1">1992</option>
            <option value="1">1991</option>
            <option value="1">1990</option>
            <option value="1">1989</option>
            <option value="1">1988</option>
            <option value="1">1987</option>
          </select>
        </div>
        <br />
        <label for="DOB" className="f-left lb">
          Gender
        </label>
        <br />
        <div className="flex">
          <div className="flex w-b">
            <section>Female</section>
            <section>
              <input type="radio" name="" value="Female" />
            </section>
          </div>
          <div className="flex w-b">
            <section> Male&nbsp;&nbsp;&nbsp;&nbsp;</section>
            <section>
              <input type="radio" name="" value="Male" />
            </section>
          </div>
          <div className="flex w-b">
            <section>Custom</section>
            <section>
              <input type="radio" name="" value="Custom" />
            </section>
          </div>
        </div>
        <br />
        <p className="f-left fs-1">
          People who use our service may have uploaded your contact information
          to Facebook.<span className="col1"> Learn more</span>
        </p>
        <br />
        <br />
        <p className="f-left fs-1">
          By clicking Sign Up, you agree to our
          <span className="col1"> Terms</span>,
          <span className="col1"> Privacy Policy</span>,
          <span className="col1"> Cookies Policy</span>.
          <br />
          You may receive SMS notifications from us and can opt out at any time.
        </p>
        <br />
        <br />
        <button className={`${classes.btn_create} ${classes.btn}`}>
          <b>Sign Up</b>
        </button>
      </form>
    </div>
  );
}
export default CreateAccount;
