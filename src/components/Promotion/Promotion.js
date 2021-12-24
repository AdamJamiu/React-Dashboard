import React from "react";
// import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Pagination } from "swiper";

const PromotionInputs = [
  {
    title: "BTC Cloud Mining",
    bgSrc: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    bgSrc: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    bgSrc: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    bgSrc: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    bgSrc: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },

];

// install Swiper modules
SwiperCore.use([Navigation]);

const Promotion = () => {
  return (
    <>
      <Swiper
        navigation = {true}
        spaceBetween={15}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
        {PromotionInputs.map((item, idx) => {
          return (
            <SwiperSlide key={idx} className="slider-container">
              <div className="promotion-card">
              <h1 class="text-md">{item.title}</h1>
              <p class="text-sm">{item.desc}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Promotion;
