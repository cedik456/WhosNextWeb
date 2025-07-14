import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <p className="text-8xl font-light text-gray-400">Unauthorized</p>
      <Link
        to="/"
        className="flex flex-row items-center font-semibold text-2xl text-gray-400 gap-5"
      >
        <FaArrowLeft size={50} color="gray" />
        GO HOME
      </Link>
    </div>
  );
};

export default Unauthorized;
