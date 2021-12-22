// EXXTERNAL
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import {
  Tabs,
  Tab,
  TabsList,
  TabPanel,
  StyledCard,
} from "../../components/styled.component";
// HELPERS
import { routeMapper } from "../../routes";
import { colors } from "../../../../configurations/colors.config";
// ASSETS
import SVGIcon from "../../../../components/SVGIcon";
import PadlockIcon from "../../../../images/svg/icon-font/padlock.svg";

export default function ForgotPassword() {
  return (
    <section className="container p-[15px] my-[80px] max-w-[500px]">
      <section className="md:flex gap-[60px] items-start flex-wrap">
        {/* LEFT SIDE */}
        <section className="flex flex-col flex-auto ">
          {/* HEADLINE */}
          <header className="">
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
              Forgot Password
            </h2>
            <p
              className="text-secondary-main"
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 16,
                lineHeight: "28px",
                wordBreak: "break-word",
              }}
            >
              Enter your email address to receive a reset link
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
            <form className="flex flex-col gap-[24px]">
              {/* EMAIL TEXT FIELD */}
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
                  Request password reset
                </Button>
              </section>

              <p className="text-center text-[15px] leading-[26px] text-secondary2-main">
                Remember password?
                <Link to={routeMapper?.login} className="text-[#000] ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </section>
      </section>
    </section>
  );
}
