import {
  FormControl,
  InputLabel,
  InputAdornment,
  Button,
  OutlinedInput,
} from "@mui/material";
import "./index.scss";
import Promotion from "../../../../components/Promotion/Promotion";


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

      <Promotion />
    </div>
  );
}

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
          <FormControl mb={6} sx={{ background: "#fff" }} varaint="outlined">
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
