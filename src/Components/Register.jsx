import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";


const Register = () => {
  const {createUser}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  

  const onSubmit = (data) => {
    const {email,password}=data
    if(!passwordRegex.test(passwordRegex)){
      toast.error('Password should be more than 6 character , must have an uppercase and lowercase letter')
      return

    }
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      toast.success('user created successfully')
    })
    .catch(error=>{
      console.log(error)
    })
    
  }

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto shadow-xl my-7">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <p className=" text-center">Register to create new account</p>
        <form onSubmit={handleSubmit(onSubmit)}  className="space-y-6">
          <div className="space-y-1 text-sm">
            <label  className="block text-gray-400">
              UserName
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md border-gray-300 border-2 focus:border-violet-400 "{...register("name", { required: true })}
            />
          </div>
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
            <label  className="block text-gray-400">
              PhotoURL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Enter your PhotoURL"
              className="w-full px-4 py-3 rounded-md border-gray-300 border-2 focus:border-violet-400"
              {...register("image", { required: true })}
            />
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
            Register
          </button>
        </form>
        
        
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have an account?
          <Link to='/login'
           
            className="underline "
          >
            Login
          </Link>
        </p>
      </div>
    );
};

export default Register;