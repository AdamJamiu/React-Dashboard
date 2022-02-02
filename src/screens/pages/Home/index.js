import HomeData from "../../../database/Home";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NewMembersInput from "./members.component";
// import ActiveUserChart from './ActiveUsers';

const HomeScreen = () => {
  return (
    <>
    
        <h1 className="text-lg font-bold mb-9">Welcome back Adam</h1>
      <div className="flex flex-row gap-5 sm:flex-nowrap flex-wrap gap-10 items-stretch" >
        {HomeData.map((item, idx) => (
          <div className="flex-1 w-60 flex items-center flex-col shadow-md rounded-lg py-10 px-5" key={idx}>
            <h3 className="font-medium text-lg text-left w-max text-sm">{item.title}</h3>
            <h1 className="text-lg flex flex-row items-center font-medium py-1">
              ${item.amount} 
              <span className="text-xs  font-normal ml-5 flex flex-row items-center" >
                {item.number}{item.number <= 0 ? <ArrowDownwardIcon fontSize="xsmall" sx={{color:'red'}}/> : < ArrowUpwardIcon fontSize="xsmall" sx={{color:'green'}} />  }
                </span>
            </h1>
            <p className="text-xs font-normal grey">Compared to last month</p>
          </div>
        ))}

      </div>
      {/* <ActiveUserChart/> */}
        <NewMembersInput/>
    </>
  );
};

export default HomeScreen;
