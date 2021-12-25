import React from "react";
// import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

const PromotionInputs = [
  {
    title: "BTC Cloud Mining",
    bgSrc: "",
    link: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    bgSrc: "",
    link: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    link: "",
    bgSrc: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    bgSrc: "",
    link: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    bgSrc: "",
    link: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
];

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination]);

const Promotion = () => {
  return (
    <>
      <div class="promotion-container">

      <Swiper
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false}}
        navigation={true}
        spaceBetween={15}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
        {PromotionInputs.map((item, idx) => {
          return (
            <SwiperSlide key={idx} className="sr">
              <Link to={item.link}>
                <div className="promotion-card">
                  <h1 class="text-md">{item.title}</h1>
                  <p class="text-sm">{item.desc}</p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>

    </>
  );
};

export default Promotion;
