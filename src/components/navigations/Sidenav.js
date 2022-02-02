// // Material Ui Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import { Link } from 'react-router-dom';
import Image from '../../images/image.jpg'

// SideNav Stylesheet
import '../../stylesheets/sidenav.css';
import { Avatar } from '@mui/material';

const SideNavLinks = [
  {
    title: 'Dashboard',
    links: [
      { label: 'Home', path: '/dashboard/home', icon: <HomeOutlinedIcon fontSize="small" /> },
      {
        label: 'Analytics',
        path: 'analytics',
        icon: <AutoGraphIcon fontSize="small" />
      },
      { label: 'Sales', path: 'sales', icon: <PointOfSaleIcon fontSize="small" /> }
    ]
  },
  {
    title: 'Quick Menu',
    links: [
      {
        label: 'Users',
        path: '/dashboard/users',
        icon: <PeopleAltOutlinedIcon fontSize="small" />
      },
      {
        label: 'Products',
        path: 'products',
        icon: <ProductionQuantityLimitsOutlinedIcon fontSize="small" />
      },
      {
        label: 'Transactions',
        path: 'transactions',
        icon: <PaidOutlinedIcon fontSize="small" />
      },
      {
        label: 'Reports',
        path: 'reports',
        icon: <ReportGmailerrorredOutlinedIcon fontSize="small" />
      }
    ]
  },
  {
    title: 'Notifications',
    links: [
      {
        label: 'Mail',
        path: '/quickmneu/notifications',
        icon: <MailOutlineIcon fontSize="small" />
      },
      {
        label: 'Feedback',
        path: 'feedback',
        icon: <FeedbackOutlinedIcon fontSize="small" />
      },
      {
        label: 'Messages',
        path: 'messages',
        icon: <MessageOutlinedIcon fontSize="small" />
      }
    ]
  },
  {
    title: 'Staff',
    links: [
      {
        label: 'Manage',
        path: 'manage',
        icon: <ManageAccountsOutlinedIcon fontSize="small" />
      },
      {
        label: 'Analytics',
        path: 'analytics',
        icon: <AutoGraphIcon fontSize="small" />
      },
      {
        label: 'Reports',
        path: 'reports',
        icon: <ReportGmailerrorredOutlinedIcon fontSize="small" />
      }
    ]
  }
];

export default function SideNav() {
  return (
    <>
      <div className="sidenav pt-3 pl-5">
        <div className="brand text-xl pb-5 font-bold text-green-600">Crypto</div>
        <div className="w-max rounded-lg bg-gray-50 items-center p-5 my-5 flex flex-row gap-5">
          <Avatar src={Image} sx={{width:'25px',height:'25px'}}>A</Avatar>
          <p className="text-sm nav-links font-medium">Adam Jamiu</p>
        </div>

        {SideNavLinks.map((item, idx) => (
          <div key={idx} className="side-wrap">
            <header className="mt-3 text-sm mb-2 nav-header font-bold">{item.title}</header>
            <ul>
              {item.links.map((link, _idx) => (
                <Link key={_idx} to={link.path}>
                  <li className="text-sm gap-3 cursor-pointer px-3 py-3 hover:text-green-600 hover:bg-green-50 font-medium items-center flex-row flex nav-links">
                    {link.icon}
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
