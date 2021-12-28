import mock from "../../../images/svg/decorative/Mock.png";
import gplay from "../../../images/svg/decorative/gplay.svg";
import istore from "../../../images/svg/decorative/istore.svg";
import tick from "../../../images/svg/decorative/tick-accept.svg";

const AppDownload = () => {
  return (
    <>
      <div class="flex flex-wrap gap-10 surface-bg pl-20 pb-10 pt-10 pr-5 justify-between items-start mt-10">
        <div class="col">
          <h1 class="font-bold onsurface text-2xl leading-8 text-left w-100">
            Free Your Money And Invest <br /> With Confident
          </h1>
          <p class="text-md mysecondary text-left mb-7 pt-5 leading-6 w-100">
            With Cryptor Trade, you can be sure your trading skills are matched{" "}
            <br /> with excellent service
          </p>
          <div class="flex gap-5 items-center mt-5 mb-5">
            <div>
              <img src={tick} alt="tick accept" />
            </div>
            <div>
              <h1 class="text-md onsurface leading-8 font-medium">
                Buy, sell, and trade on the go
              </h1>
              <p class="text-sm mysecondary">
                Manage your holdings from your mobile decive
              </p>
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div>
              <img src={tick} alt="tick accept" />
            </div>

            <div>
              <h1 class="text-md leading-8 onsurface font-medium">
                Take Control Of Your Wealth
              </h1>
              <p class="text-sm mysecondary">
                Rest assured you (and only you) have access to your funds
              </p>
            </div>
          </div>

          <div class="flex gap-5 flex-wrap mt-8">
            <img
              src={gplay}
              class="cursor-pointer img-hover"
              alt="google play button"
            />
            <img
              src={istore}
              class="cursor-pointer img-hover"
              alt="apple storoe button"
            />
          </div>
        </div>
        <div class="items-start hidden sm:block">
          <img src={mock} alt="mock" />
        </div>
      </div>
    </>
  );
};

export default AppDownload;
