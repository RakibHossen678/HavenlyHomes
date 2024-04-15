import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../AuthProvider/Authprovider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const {updateUserProfile,setUser,user}=useContext(AuthContext)
  const Navigate=useNavigate()

  const onSubmit = (data) => {
    const {name,image}=data
    updateUserProfile(name,image)
    .then(()=>
    {setUser( {...user, displayName: name, photoURL: image} )         
      toast.success('User profile update successfully')
      Navigate('/profile')
    
    })
  };
  return (
    <div className="min-h-[calc(100vh-304px)] my-10">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <div className="flex flex-col justify-center max-w-lg mx-auto p-6 shadow-md rounded-xl sm:px-12 ">
        <img
          src={
            user?.photoURL || "https://source.unsplash.com/100x100/?portrait?1"
          }
          alt=""
          className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName}
            </h2>
          </div>
          <div className="flex flex-col space-y-4 text-center">
            <div>
              <h2 className="text-2xl font-semibold"></h2>
            </div>
            <div className="space-y-1 text-center ">
              <span className=" items-center space-x-2">
                <div className="font-medium">Email :</div>
                <span className="text-gray-400">
                  {user?.email || "leroy.jenkins@company.com"}
                </span>
              </span>
              <span className="flex items-center space-x-2 ">
                <span className="text-gray-400 max-w-[700px] overflow-hidden ">
                  <span className="font-medium text-black">PhotoURL :</span>
                  <div className="w-full">
                    {user?.photoURL ||
                      "https://source.unsplash.com/100x100/?portrait?1"}
                  </div>
                </span>
              </span>
            </div>
            <button
              className="btn bg-[#00BCD4] py-2 rounded-lg text-white"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Update Profile
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 ">
                  <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">
                      Update your profile
                    </h1>
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-12"
                  >
                    <div className="space-y-4">
                      <div>
                        <label className="block text-start mb-2 text-sm">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your name"
                          className="w-full px-3 py-2 border rounded-md border-gray-700 "
                          {...register("name", { required: true })}
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <label htmlFor="password" className="text-sm">
                            Password
                          </label>
                        </div>
                        <input
                          type="text"
                          name="image"
                          id="image"
                          placeholder="Enter your photoURL"
                          className="w-full px-3 py-2 border rounded-md border-gray-700 "
                          {...register("image", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <button
                          type="submit"
                          className="w-full px-8 py-3 font-semibold rounded-md bg-[#00BCD4] text-white"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
