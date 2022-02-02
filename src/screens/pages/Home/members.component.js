import { NewMembers } from "../../../database/Home/newMember";
import TransactionUsers from "./TransactionUsers";

const NewMembersInput = () => {
  return (
    <>
      <div className="flex flex-row mt-8 xs:flex-nowrap flex-wrap gap-7 items-stretch">
        <div className="flex-col flex-1 w-fit h-fit rounded-xl p-5 shadow-md">
          <h1 className="text-md mb-3 font-bold">New Join Members</h1>
          {NewMembers.map((item, idx) => (
            <div
              className=" mb-5 justify-between flex flex-row"
              key={idx}
            >
              <img src={item.image} className="rounded-full avatar-img" height='24px' width="24px" />
              <div>
                <h1 className="text-sm font-bold">{item.name}</h1>
                <p className="grey text-xs w-max">{item.work}</p>
              </div>
              <div> {item.button} </div>
            </div>
          ))}
        </div>
        <div>
          <TransactionUsers />
        </div>
      </div>
    </>
  );
};

export default NewMembersInput;
