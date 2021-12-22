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
      { label: "spot", path: "" },
      { label: "Inverse perpetual", path: "" },
      { label: "USDT perpetual", path: "" },
      { label: "Exchange", path: "" },
      { label: "LaunchPad", path: "" },
      { label: "Binance Pay", path: "" },
    ],
  },
  {
    title: "Support",
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
    title: "about",
    links: [
      { label: "spot", path: "" },
      { label: "Inverse perpetual", path: "" },
      { label: "USDT perpetual", path: "" },
      { label: "Exchange", path: "" },
      { label: "LaunchPad", path: "" },
      { label: "Binance Pay", path: "" },
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
    <div>
      {/* footer */}
      <div className="container">
        <div className="flex md:flex-nowrap flex-wrap mb-[60px]">
          {/* LEFT HAND SIDE */}
          <div className="flex-grow">
            <div className="flex flex-wrap justify-between gap-[30px] p-[15px]">
              {FooterLinks.map((item, idx) => (
                <div key={idx}>
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
          <div className="outlined flex-0 md:min-w-[500px] w-full py-[60px] px-[15px] flex imd:tems-center flex-col">
            <div className="md:max-w-[160px]">
              <Logo />
              <ul className="flex flex-wrap gap-[20px] py-[15px] outlined">
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
        <Stack
          className="footer-wrap"
          flexDirection={{ sm: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box className="footer-wrap">
            <li className="footer-header">PRODUCTS</li>
            <li className="footer-link">Inverse Perpetual</li>
            <li className="footer-link">USDT Perpetual</li>
            <li className="footer-link">Exchange</li>
            <li className="footer-link">Launchpad</li>
            <li className="footer-link">Binance Pay</li>
            <li className="footer-link">Gift Card</li>
          </Box>

          <Box className="footer-wrap">
            <li className="footer-header">SERVICES</li>
            <li className="footer-link">Inverse Perpetual</li>
            <li className="footer-link">USDT Perpetual</li>
            <li className="footer-link">Exchange</li>
            <li className="footer-link">Launchpad</li>
            <li className="footer-link">Binance Pay</li>
            <li className="footer-link">Gift Card</li>
          </Box>

          <Box className="footer-wrap">
            <li className="footer-header">SUPPORT</li>
            <li className="footer-link">Inverse Perpetual</li>
            <li className="footer-link">USDT Perpetual</li>
            <li className="footer-link">Exchange</li>
            <li className="footer-link">Launchpad</li>
            <li className="footer-link">Binance Pay</li>
            <li className="footer-link">Gift Card</li>
          </Box>

          <Box className="footer-wrap">
            <li className="footer-header">ABOUT</li>
            <li className="footer-link">Inverse Perpetual</li>
            <li className="footer-link">USDT Perpetual</li>
            <li className="footer-link">Exchange</li>
            <li className="footer-link">Launchpad</li>
            <li className="footer-link">Binance Pay</li>
            <li className="footer-link">Gift Card</li>
          </Box>

          <Box className="footer-wrap icons">
            <Box sx={{ minWidth: "max-content" }}>
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <TwitterIcon />
            </Box>

            <Box sx={{ minWidth: "max-content" }}>
              <RedditIcon />
              <TelegramIcon />
            </Box>
          </Box>
        </Stack>

        <Divider sx={{ pt: "1em" }} />

        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            pt: "2em",
            pb: "2em",
            color: "var(--secondary)",
          }}
        >
          ©2021 block-star.com. All rights reserved. Terms of Service | Privacy
          Terms
        </Box>
      </div>
    </div>
  );
};

export default Footer;
