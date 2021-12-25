import profile from "../../../images/svg/decorative/profile.svg";
import one from "../../../images/svg/decorative/one.svg";
import two from "../../../images/svg/decorative/two.svg";
import bank from "../../../images/svg/decorative/bank.svg";
import transaction from "../../../images/svg/decorative/transaction.svg";

const GetStarted = () => {
  return (
    <>
      <div class="flex-column mt-10 pb-10 justify-center items-center">
        <div class="flex-1">
          <h3 class="text-center leading-9 font-semibold text-xl">Get started in a few minutes</h3>
          <p class="text-center text-sm">
            BybIt supports a variety of the most popular digital currencies.
          </p>
        </div>

        <div class="flex flex-row justify-around items-center mt-10">
          <div class="flex flex-column shadow-lg p-3 rounded-full">
            <img src={profile} alt="profile.svg" />
          </div>
          <div class="">
            <img src={one} alt="profile.svg" />
          </div>
          <div class="p-3 shadow-lg rounded-full">
            <img src={bank} alt="profile.svg" />
          </div>
          <div class="">
            <img src={two} alt="profile.svg" />
          </div>

          <div class="flex-column p-3 shadow-lg rounded-full">
            <img src={transaction} alt="profile.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
