// EXXTERNAL
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import {
  Tabs,
  Tab,
  TabsList,
  TabPanel,
  // StyledCard,
} from "../../components/styled.component";
// HELPERS
import { routeMapper } from "../../routes";
import { colors } from "../../../../configurations/colors.config";
// ASSETS
import SVGIcon from "../../../../components/SVGIcon";
import PadlockIcon from "../../../../images/svg/icon-font/padlock.svg";
import QRCodeIcon from "../../../../images/png/qrcode.png";

export default function LoginPage() {
  return (
    <section className="container p-[15px] my-[80px] max-w-[786px]">
      <section className="md:flex gap-[60px] items-center flex-wrap">
        {/* LEFT SIDE */}
        <section className="flex flex-col flex-auto ">
          {/* HEADLINE */}
          <header className="max-w-[320px]">
            <h2
              className="text-onSurface-main mb-[8px]"
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
          {/* URL CONFIRMATION ALERT */}
          <div className="my-[16px] text-[13px] flex items-center rounded-[27px] bg-opacity-[0.1] bg-success-main">
            {/* PADLOCK ICON */}
            <SVGIcon
              src={PadlockIcon}
              sx={{
                width: 40,
                height: 24,
                background: colors?.success?.main,
                borderRadius: "inherit",
                marginRight: 20,
                padding: 4,
              }}
              alt="padlock"
            />
            <p>
              <span className="text-success-main">https:</span>
              <span className="">//www.bybit.com</span>
            </p>
          </div>
          {/* TAB */}
          <div className="flex flex-col flex-auto gap-y-[30px]">
            <Tabs defaultValue={0}>
              <TabsList>
                <Tab>Email</Tab>
                <Tab>Mobile</Tab>
              </TabsList>
              <TabPanel value={0}>
                <LoginWithEmail />
              </TabPanel>
              <TabPanel value={1}>
                <LoginWithMobile />
              </TabPanel>
            </Tabs>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="max-w-[300px] mx-auto mt-[30px] text-center  flex flex-col gap-[20px]">
          <figure className="qrcode-scan m-auto">
            <img src={QRCodeIcon} className="w-full object-cover h-full" alt="" />
          </figure>
          <div>
            <h3 className="text-[#000] leading-[32px]">Login with QR code</h3>
            <p
              style={{}}
              className="text-[14px] text-secondary-main leading-[22px]"
            >
              Scan this code with the <a href="#">ByBIt mobile app</a> to log in
              instantly.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

function LoginWithEmail() {
  return (
    <form
      data-wow-delay="0.5s"
      className="flex flex-col wow bounceInDown center gap-[24px] wow fadeInDown"
    >
      <section>
        <label className="block bitcost-label mb-[6px]">
          <span>Username or email address</span>
        </label>
        <input
          type="email"
          name="email"
          required
          className="block form-input p-2 w-full "
        />
      </section>
      <section>
        <label className="block bitcost-label mb-[6px]">
          <span>Password</span>
        </label>
        <input
          type="password"
          name="password"
          id=""
          className="block p-2 form-input w-full "
        />
      </section>
      <section className="flex flex-wrap items-center gap-[10px] -mt-[8px] justify-between">
        <label
          htmlFor="remember"
          className="inline-flex items-center leading-[20px]  gap-[8px]"
        >
          <input type="checkbox" name="remember" id="remember" />
          <span className="text-onSurface-main text-[12px]">Remember me</span>
        </label>

        <p className="text-[12px]">
          <Link to={routeMapper.forgot}>Forgot Your Password?</Link>
        </p>
      </section>
      <section>
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: colors?.primary?.main,
            borderRadius: "2px",
            width: "100%",
            padding: "12px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Login
        </Button>
      </section>

      <p className="text-center text-[15px] leading-[26px] text-secondary2-main">
        Not a member?
        <Link to={routeMapper?.register} className="text-[#000] ml-1">
          Register
        </Link>
      </p>
    </form>
  );
}

function LoginWithMobile() {
  return (
    <form className="flex flex-col gap-[24px]">
      <section>
        <label className="block bitcost-label mb-[6px]">
          <span>Phone number</span>
        </label>
        <input
          type="tel"
          name="phone_number"
          required
          className="block p-2 w-full form-input "
        />
      </section>
      <section>
        <label className="block bitcost-label mb-[6px]">
          <span>Password</span>
        </label>
        <input
          type="password"
          name="password"
          id=""
          className="block p-2 w-full form-input "
        />
      </section>
      <section className="flex flex-wrap items-center gap-[10px] -mt-[8px] justify-between">
        <label
          htmlFor="remember"
          className="inline-flex items-center leading-[20px]  gap-[8px]"
        >
          <input type="checkbox" name="remember" id="remember" />
          <span className="text-onSurface-main text-[12px]">Remember me</span>
        </label>

        <p className="text-[12px]">
          <Link to={routeMapper.forgot}>Forgot Your Password?</Link>
        </p>
      </section>

      <section>
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: colors?.primary?.main,
            borderRadius: "2px",
            width: "100%",
            padding: "12px",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          Login
        </Button>
      </section>
      <p className="text-center text-[15px] leading-[26px] text-secondary2-main">
        Not a member?
        <Link to={routeMapper?.register} className="text-[#000] ml-1">
          Register
        </Link>
      </p>
    </form>
  );
}
