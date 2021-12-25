import mock from "../../../images/svg/decorative/Mock.png";
import gplay from "../../../images/svg/decorative/gplay.svg"
import istore from "../../../images/svg/decorative/istore.svg"


const AppDownload = () => {
  return (
    <>
      <div class="flex surface-bg p-20 justify-between items-start mt-10">
        <div class="col">
          <h1 class="font-bold text-2xl leading-9 text-left w-100">
            Free Your Money And Invest <br /> With Confident
          </h1>
          <p class="text-md mysecondary text-left mb-5 pt-5 leading-6 w-100">
            With Cryptor Trade, you can be sure your trading skills are matched{" "}
            <br /> with excellent service
          </p>
          <div class="mt-5 mb-5">
            <h1 class="text-lg leading-9 font-bold">
              Buy, sell, and trade on the go
            </h1>
            <p class="text-md mysecondary">
              Manage your holdings from your mobile decive
            </p>
          </div>
          <div>
            <h1 class="text-lg leading-9 font-bold">
            Take Control Of Your Wealth
            </h1>
            <p class="text-md mysecondary">
            Rest assured you (and only you) have access to your funds
            </p>
          </div>

          <div class="flex gap-5 mt-8">
              <img src={gplay} class="cursor-pointer" alt="google play button" />
              <img src={istore} class="cursor-pointer" alt="apple storoe button" />
          </div>
        </div>
        <div class="items-start">
          <img src={mock} alt="mock" />
        </div>
      </div>
    </>
  );
};

export default AppDownload;
