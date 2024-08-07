import Button from "../components/Button";
import { BUTTON_BG, HEADING_SIZE } from "../constants/color";
import { Link } from "react-router-dom";

function GetStart() {
  return (
    <div className="h-screen w-full flex justify-around">
      <div className="getStarted hidden justify-center items-center sm:flex sm:w-1/2">
        <h1 className="text-4xl font-bold text-center">
          Todo: Complete your tasks before Deadline
        </h1>
      </div>
      <div className=" w-full flex justify-center items-center sm:w-1/2">
        <div className="w-2/3 flex flex-col gap-3">
          <h1 style={{ fontSize: HEADING_SIZE }} className="font-bold">
            Productive Mind
          </h1>
          <p className="">
            with only the features you need Organic Mind is customized for
            individuals seeking a stress-free way to stay focused on their
            goals. projects and tasks.
          </p>
          <Link to="/signup" className="flex my-2">
            <Button title={"Get Started"} color={BUTTON_BG} />
          </Link>
          <p className="text-center">
            Already have an account? <Link to={"/login"} className='hover:text-blue-800'>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default GetStart;
