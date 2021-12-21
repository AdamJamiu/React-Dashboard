import { routeMapper } from "../../routes";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <section className="container mt-[80px] max-w-[731px]">
      <header>
        <h2
          className="text-onSurface-main"
          style={{
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "36px",
            lineHeight: "44px",
            textTransform: "capitalize",
          }}
        >
          Welcome to Bybit
        </h2>
        <p
          className="text-secondary-main"
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 16,
            lineHeight: "28px",
          }}
        >
          Welcome back! Log In now to start trading
        </p>
      </header>

      <div className="mt-[16px] flex rounded-[27px] bg-opacity-[0.1] bg-success-main">
        {/* PADLOCK ICON */}
        <span></span>
        <span>https://www.bybit.com</span>
      </div>

      <div>
        <ul>
          <li>Email</li>
          <li>Mobile</li>
        </ul>

        <section>
          <form action="">
            <label htmlFor="">
              <span>Username or email address*</span>
            </label>
          </form>
        </section>

        <section>
          <form action="">
            <section>
              <label htmlFor="">
                <span>Password*</span>
              </label>
            </section>

            <section className="flex justify-between">
              <label htmlFor="">
                <input type="checkbox" name="remmeber" id="remember" />
              </label>

              <Link to={routeMapper.forgot}>Forgot Your Password?</Link>
            </section>
          </form>
        </section>
      </div>
    </section>
  );
}
