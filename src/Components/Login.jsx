import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";
import toast from "react-hot-toast";
const Login = () => {
  const {signIn}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const {email,password} = data;
    console.log(email,password)
    
    signIn(email,password)
    .then(result=>{
      console.log(result.user)
      toast.success('user logged in successfully')
    })
    .catch(error=>{
      toast.error(error.message)
    })
    
  }
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto shadow-xl my-7">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <p className=" text-center">Login to access your account</p>
      <form onSubmit={handleSubmit(onSubmit)}className="space-y-6">
        <div className="space-y-1 text-sm">
          <label  className="block text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md border-gray-300 border-2 focus:border-violet-400"
            {...register("email", { required: true })}
          />
           {errors.email && <span className="text-red-500 py-2">This field is required</span>}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-300 border-2  focus:border-violet-400"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-500 py-2">This field is required</span>}
        </div>
        <button className="block w-full p-3 text-center rounded-sm  bg-[#00BCD4] text-white">
          Login
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button aria-label="Log in with Google" className="p-3 rounded-sm">
        <FaGoogle className="text-2xl"/>
        </button>
        <button aria-label="Log in with facebook" className="p-3 rounded-sm">
        <FaFacebook className="text-2xl"/>
        </button>
        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
        <FaGithub className="text-2xl"/>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 text-gray-400">
        Don not have an account?
        <Link to='/register'
          rel="noopener noreferrer"
          href="#"
          className="underline "
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
