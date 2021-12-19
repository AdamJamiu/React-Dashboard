import React from "react";
import { Stack, Box, Divider } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <Stack className="footer">
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
            <Box sx={{minWidth:'max-content'}}>
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <TwitterIcon />
            </Box>

            <Box sx={{minWidth:'max-content'}}>
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
      </Stack>
    </>
  );
};

export default Footer;
