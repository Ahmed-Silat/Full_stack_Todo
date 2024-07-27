import { FaFacebookF } from "react-icons/fa";
import Button from "../button/Button";
import GoogleIcon from "../GoogleIcon";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white-800 p-8 rounded-lg shadow-lg text-black flex  text-lg">
        <form action="">
          <div>
            <h3 className="font-extrabold my-10 text-4xl">Signup</h3>
            <p className="text-zinc-500">
              Already have an account ?{" "}
              <a
                href=""
                className="text-blue-500 underline decoration-1 hover:no-underline transition-all duration-300 hover:text-blue-700"
              >
                Login
              </a>{" "}
            </p>
            <div className="my-3">
              <label htmlFor="email" className="block">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                className="text-black rounded-md border-2 border-gray-300 rounded-md w-full p-1.5 focus:border-blue-500"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="my-3">
              <label htmlFor="passsword" className="block">
                Password
              </label>
              <input
                type="password"
                id="passsword"
                className="text-black rounded-md border-2 border-gray-300 rounded-md w-full p-1.5 focus:border-blue-500"
                placeholder="Enter Your Password"
              />
            </div>

            <div className="my-3">
              <label htmlFor="passsword" className="block">
                Re-Enter Password
              </label>
              <input
                type="password"
                id="passsword"
                className="text-black rounded-md border-2 border-gray-300 rounded-md w-full p-1.5 focus:border-blue-500"
                placeholder="Re-Enter Your Password"
              />
            </div>

            <Button
              name="LOGIN"
              className="bg-blue-400 py-2 px-36 flex justify-center transition duration-500 ease-in-out hover:bg-blue-500"
            />

            <div className="flex items-center my-6">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">or login with</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="flex ">
              <Button
                name="Google"
                image={<GoogleIcon className="w-5 h-5 mr-2" />}
                className="flex items-center mr-2 my-2 py-2 px-8 border-2 border-red-500 rounded-lg w-1/2 text-red-500 font-semibold"
                imageClass="w-5 h-5"
              />
              <Button
                name="Facebook"
                image={<FaFacebookF />}
                className="flex items-center my-2 py-2 px-8 border-2 border-blue-700 rounded-lg w-1/2 text-blue-700 font-semibold"
                imageClass=""
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
