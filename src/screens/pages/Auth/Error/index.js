import { Container } from '@mui/material';
import ErrorImg from '../../../../images/illustration_404.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Error = () => {
  const varBounceIn = {
    animate: {
      scale: [0.9, 1.1, 0.3],
      opacity: [1, 1, 0]
    }
  };
  return (
    <>
      <Container>
        <div className="w-full text-3xl text-green-500 mt-6 font-black">Crypto</div>
        <div className=" mb-10 flex flex-col justify-between mt-7 items-center w-full">
          <motion.div animate={{ scale: 0.8 }}>
            <h1 className="font-bold text-4xl">Sorry, page not found!</h1>
          </motion.div>
          <p className="text-sm align-center text-gray-500 pt-4">
            Sorry, we couldn’t find the page you’re looking for. Perhaps
            <br /> you’ve mistyped the URL? Be sure to check your spelling.
          </p>
          <motion.div animate={{ delay: 4, scale: 0.9 }}>
            <img className="mt-3" height="60px" width="350px" src={ErrorImg} alt="Error.svg" />
          </motion.div>

          <button className="font-bold shadow-xl hover:shadow-none hover:bg-green-700 bg-green-500 rounded-md mt-5 py-2 px-5 text-white text-sm">
            <Link to="/dashboard/:home">Go Home</Link>
          </button>
        </div>
      </Container>
    </>
  );
};

export default Error;
