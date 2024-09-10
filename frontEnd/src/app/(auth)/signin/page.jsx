"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { useState } from "react";
import toast from "react-hot-toast";
const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const logIn = async () => {
    const { email, password } = userInfo;
    try {
      const response = await axios.post(`${apiUrl}/auth/signin`, {
        email,
        password,
      });
      if (response.status === 200) {
        setIsLoading(true);
        toast.success("амжилттай нэвтэрлээ");
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/dashboard");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("нууц үг эсвэл цахим шуудангийн хаяг буруу байна.", error);
      // setIsLoading(true);
      toast.error(
        "нууц үг эсвэл цахим шуудангийн хаяг буруу байна, дахин оролдоно уу?"
      );
    }
  };
  return (
    <div className="w-full h-screen bg-blue-600">
      <div className="w-1/2 h-screen bg-white flex flex-row justify-center items-center">
        <div className="w-1/2">
          <div className="flex flex-row justify-center items-center">
            <img src="Vector.png" className="2xl:h-10" />

            <p className="text-3xl font-extrabold">Geld</p>
          </div>
          <div>
            <h1>
              <strong>Welcome back</strong>
            </h1>
            <h2>Welcome back, Please enter your details</h2>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow "
                placeholder="Password"
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
            </label>
          </div>

          <button
            className="btn bg-blue-600 text-white font-medium py-2.5 rounded-3xl w-full text-center"
            onClick={logIn}
          >
            {isLoading ? (
              "Sign in"
            ) : (
              <span className="loading loading-spinner"></span>
            )}
          </button>
          <div>
            <p>Don't have account?</p>
            <Link href="/signup">
              <button>Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
