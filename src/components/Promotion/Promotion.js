import React from "react";
// import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import btcOne from "../../images/svg/decorative/btc-bg1.svg";
import btcTwo from "../../images/svg/decorative/btc-bg2.svg";
import btcThree from "../../images/svg/decorative/btc-bg3.svg";
import btcFour from "../../images/svg/decorative/btc-bg4.svg";

const PromotionInputs = [
  {
    title: "BTC Cloud Mining",
    bgSrc: btcOne,
    link: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    bgSrc: btcTwo,
    link: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    link: "",
    bgSrc: btcThree,
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    bgSrc: btcFour,
    link: "",
    desc: "Earn up to 40USDT Bonus & 10KLAY Airdrop",
  },
  {
    title: "BTC Cloud Mining",
    bgSrc: btcFour,
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
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          spaceBetween={15}
          slidesPerView={4}
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
            },
          }}
        >
          {PromotionInputs.map((item, idx) => {
            return (
              <SwiperSlide key={idx} className="sr">
                <Link to={item.link}>
                  <div class="flex items-center text-white rounded-lg p-5 heroImg">
                    <div class="flex flex-col">
                      <h1 class="text-md">{item.title}</h1>
                      <p class="text-sm">{item.desc}</p>
                    </div>

                    <div>
                      <img src={item.bgSrc} alt={item.bgSrc}/>
                    </div>
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
