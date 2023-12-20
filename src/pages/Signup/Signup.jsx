import { useNavigate } from "react-router-dom";
import Button from "../../components/html/Button";
import Input from "../../components/html/Input";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-login h-screen min-h-[500px]  mx-auto flex justify-center  items-center text-white">
      <div className="w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%] mx-auto my-[2.5%]  flex flex-col justify-center items-center h-auto  backdrop-blur-md p-4 rounded-lg">
        <h1 className="text-2xl font-clashBold md:text-3xl">Welcome back!</h1>
        <form className="flex flex-col gap-2 mt-6 w-full">
          <Input
            name="name"
            placeholder="User Name"
            className="py-2 bg-transparent border border-white rounded-sm text-sm md:text-base"
          />
          <Input
            name="email"
            placeholder="Email"
            className="py-2 bg-transparent border border-white rounded-sm text-sm md:text-base"
          />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            className="py-2 bg-transparent border border-white rounded-sm text-sm md:text-base"
          />
          <button className="bg-black text-white py-2 mt-10">Connect</button>
          <div className="flex justify-between gap-4">
            <Button
              type="button"
              className="flex-1 bg-green-500 py-2 mt-3 text-sm text-white md:text-base"
            >
              Demo User
            </Button>
            <Button
              type="button"
              className="flex-1 bg-red-500 py-2 mt-3 text-sm text-white md:text-base"
            >
              Demo Admin
            </Button>
          </div>
        </form>
        <div className="mt-4 divider">or</div>
        <p className="text-[12px] md:text-sm mb-8">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="ml-2 font-bold underline duration-300 cursor-pointer active:scale-90"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
