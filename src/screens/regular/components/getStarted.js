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
          <h3 class="text-center leading-9 onsurface font-semibold text-xl">
            Get started in a few minutes
          </h3>
          <p class="text-center mysecondary text-sm">
            BybIt supports a variety of the most popular digital currencies.
          </p>
        </div>

        <div class="flex flex-row justify-center items-start mt-10">
          <div class="flex flex-col items-center">
          <div class="pb-t shadow-lg p-5 rounded-full">
              <img
                src={profile}
                alt="profile.svg"
              />
            </div>

            <h1 class="text-lg w-max pt-8 font-medium">
              Create An Account
            </h1>
          </div>

          <div class="pt-5">
            <img src={one} alt="profile.svg" />
          </div>

          <div class="flex flex-col items-center">
            <div class="pb-t shadow-lg p-5 rounded-full">
              <img
                
                src={bank}
                alt="profile.svg"
              />
            </div>

            <h1 class="text-lg pt-8 w-max font-medium">Link Your Bank Account</h1>
          </div>
          <div class="pt-5">
            <img src={two} alt="profile.svg" />
          </div>

          <div class="flex flex-col items-center">
          <div class="pb-t shadow-lg p-5 rounded-full">
              <img
                src={transaction}
                alt="profile.svg"
              />
            </div>

            <h1 class="text-lg pt-8 w-max font-medium">Start Transaction</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
