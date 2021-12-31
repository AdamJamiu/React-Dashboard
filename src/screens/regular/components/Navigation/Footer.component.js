import React from "react";
import { Stack, Box, Divider } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import { routeMapper } from "../../routes";
import { Link } from "react-router-dom";
import Logo from "../../../../components/Logo";
import { colors } from "../../../../configurations/colors.config";

const FooterLinks = [
  {
    title: "products",
    links: [
      { label: "spot", path: "" },
      { label: "Inverse perpetual", path: "" },
      { label: "USDT perpetual", path: "" },
      { label: "Exchange", path: "" },
      { label: "LaunchPad", path: "" },
      { label: "Binance Pay", path: "" },
    ],
  },
  {
    title: "services",
    links: [
      { label: "buy crypto", path: "" },
      { label: "markets", path: "" },
      { label: "trading fee", path: "" },
      { label: "Affiliate Program", path: "" },
      { label: "Referral Program", path: "" },
      { label: "API", path: "" },
      { label: "Listing Application", path: "" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Bybit Learn", path: "" },
      { label: "Help Center", path: "" },
      { label: "User Feedback", path: "" },
      { label: "Submit a request", path: "" },
      { label: "API Documentation", path: "" },
      { label: "Trading Rules", path: "" },
      { label: "Binance Verify", path: "" },
    ],
  },
  {
    title: "about",
    links: [
      { label: "About Bybit", path: "" },
      { label: "Authenticity Check", path: "" },
      { label: "Careers", path: "" },
      { label: "Business Contacts", path: "" },
      { label: "Blog", path: "" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", icon: <FacebookOutlinedIcon />, path: "" },
  { label: "", icon: <RedditIcon />, path: "" },
  { label: "", icon: <YouTubeIcon />, path: "" },
  { label: "", icon: <TelegramIcon />, path: "" },
  { label: "", icon: <TwitterIcon />, path: "" },
];
const Footer = () => {
  return (
    <div className="bg-white ">
      {/* footer */}
      <div className="container">
        <div className="flex md:flex-nowrap flex-wrap py-[30px] md:py-[60px]">
          {/* LEFT HAND SIDE */}
          <div className="flex-grow ">
            <div className="flex flex-wrap justify-between gap-[30px] p-[15px]">
              {FooterLinks.map((item, idx) => (
                <div key={idx} className="md:flex-1 w-full">
                  <header className="uppercase mb-[20px] text-secondary-main leading-[20px] tracking-[.1em] font-[500]">
                    {item.title}
                  </header>
                  <ul>
                    {item.links.map((link, _idx) => (
                      <li
                        className="mb-[8px] capitalize text-onSurface-main text-[15px] leading-[26px]"
                        key={_idx}
                      >
                        <Link to={link.path}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className=" flex-0 lg:w-[500px] w-full  px-[15px] flex md:tems-center  flex-col">
            <div className="md:max-w-[160px] mx-auto m-[10px] text-center">
              <Logo color={colors.primary.main} />
              <ul className="flex flex-wrap gap-[20px] py-[15px] ">
                {socialLinks.map(({ icon, label, path }, idx) => {
                  return (
                    <li key={idx} className="md:min-w-[12%] text-center">
                      <Link to={path}>{icon ? icon : label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Divider sx={{ pt: "1em" }} />

      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          pt: "1em",
          pb: "1em",
          fontSize: '15px',
          color: colors.secondary.main,
        }}
      >
        ©2021 block-star.com. All rights reserved. Terms of Service | Privacy
        Terms
      </Box>
    </div>
  );
};

export default Footer;
