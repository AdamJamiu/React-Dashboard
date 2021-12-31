import { FormControl, InputLabel, InputAdornment, Button, OutlinedInput } from "@mui/material";
import "./index.scss";

/**
 * @function HomePage
 * @returns
 */
export default function HomePage() {
  return (
    <div id="home" className="pb-10">
      <header>
        <HeroBox />
      </header>
    </div>
  );
}

<<<<<<< Updated upstream
=======
// Support Section

const SupportSection = () => {
  return (
    <>
      <div class="flex-column justify-center items-center flex-wrap p-10 pb-20">
        <div class="pb-5 pt-10">
          <h1 class="text-3xl font-medium leading-9 onsurface leading-10 text-center">
            Get In Touch. Stay In Touch.
          </h1>
          <p class="text-md leading-9 secondary text-center">
            BybIt supports a variety of the most popular digital currencies.
          </p>
        </div>

        <div class="flex flex-wrap  gap-5 justify-center  mt-10">
          <div class="flex flex-col justify-center items-center p-5 shadow-lg border">
            <img src={headphone} width="60px" class="pb-5" alt="headphone" />
            <h1 class="text-lg font-medium text-center onsurface leading-10">
              24/7 Support
            </h1>
            <p class="text-sm leading-6 text-center mysecondary">
              Got a problem? Just get in touch, <br />
              Our support team is available 24/7
            </p>
          </div>
          <div class="flex flex-col justify-center items-center p-5 border shadow-lg">
            <img src={book} class="pb-5" width="60px" alt="headphone" />
            <h1 class="text-lg font-medium leading-10 onsurface text-center">
              BYBIT Blog
            </h1>
            <p class="text-sm leading-6 text-center mysecondary">
              News and updates from the world’s <br />
              leading cryptocurrency exchange.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center p-5 shadow-lg border">
            <img src={chat} width="60px" class="pb-5" alt="headphone" />
            <h1 class="text-lg text-center onsurface leading-10 font-medium">
              Community
            </h1>
            <p class="text-sm leading-6 text-center mysecondary">
              ByBit is global. Join the discussion in <br /> our worldwide
              communities.
            </p>
          </div>
          <div class="flex flex-col w-100 justify-center items-center p-5 shadow-lg border">
            <img src={group} width="60px" alt="headphone" class="pb-5" />
            <h1 class="text-lg font-medium onsurface leading-10 text-center">
              Careers
            </h1>
            <p class="text-sm leading-6 text-center mysecondary">
              Help build the future of technology. Start
              <br /> your new career at Binance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Hero box component
>>>>>>> Stashed changes

const HeroBox = () => {
  return (
    <>
      <div class="heroImg">
        <div class="hero-wrapper py-10 xl container mx-auto ">
          <h1 className="font-semibold text-5xl pb-4 hero-header">
            Next Level Trading
          </h1>
          <p className="w-80 mb-6 text-center hero-txt">
            We've made it easier to buy, sell, trade, and earn with
            cryptocurrencies.
          </p>
          <FormControl mb={6} sx={{background:'#fff'}} varaint="outlined">
            <InputLabel>Email address</InputLabel>
            <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <Button variant="contained">Sign Up Now</Button>
              </InputAdornment>
            }
            label="Password"
          />
          </FormControl>

          <h1 class="text-2xl pt-5 pb-2">$ 11,303,891,894</h1>
          <p class="text-sm font-thin">24H Trading Volume</p>
        </div>
      </div>
    </>
  );
};
