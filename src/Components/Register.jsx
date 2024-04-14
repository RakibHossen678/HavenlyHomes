import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto shadow-xl my-7">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <p className=" text-center">Register to create new account</p>
        <form  className="space-y-6">
          <div className="space-y-1 text-sm">
            <label  className="block text-gray-400">
              UserName
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md border-gray-300 border-2 focus:border-violet-400"
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
            />
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
            />
            
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