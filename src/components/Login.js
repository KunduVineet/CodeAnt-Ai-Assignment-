import React, { useState } from "react";

const Login = () => {
  const [activeButton, setActiveButton] = useState(""); // Tracks which button is active

  return (
    <>
      <div className="flex flex-row justify-around border-none bg-gray-100">
        <div className="flex flex-col justify-center w-1/2 min-h-screen bg-gray-50 items-center">
          <div className="container-1 bg-wheat p-4 rounded-lg shadow-lg shadow-[#818181] h-[200px] w-[500px] flex flex-col justify-center items-center bg-white">
            <div className="flex items-center mb-4">
              <img
                src="./image1.svg"
                alt="logo"
                width={30}
                height={30}
                className="mr-2"
              />
              <p className="text-lg font-bold">
                AI to Detect & Autofix Bad Code
              </p>
            </div>
            <div className="flex flex-row justify-around w-full">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">30+</p>
                <p className="text-sm text-gray-700">Language Support</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">10K+</p>
                <p className="text-sm text-gray-700">Developers</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">100K+</p>
                <p className="text-sm text-gray-700">Hours Saved</p>
              </div>
            </div>
          </div>

          <div className="container-2 bg-white mt-5 p-4 rounded-lg shadow-lg shadow-[#818181] h-[200px] w-[300px] flex flex-col justify-center  ml-4">
            <div className="flex flex-row justify-around w-full">
              <img src="./graph.svg" alt="logo" width={30} height={30} />
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold text-blue-600">↑ 14%</p>
                <p className="text-sm text-blue-400">This Week</p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start mt-4 ml-11">
              <p className="text-1/2xl font-bold ">Issues Fixed</p>
              <p className="text-2xl font-bold">500K +</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/2 justify-center p-4 min-h-screen bg-white">
        <div className="border-1 ">
          <div className="flex items-center mb-4 justify-center">
            <img
              src="./image1.svg"
              alt="logo"
              width={30}
              height={30}
              className="mr-2"
            />
            <p className="text-lg font-bold items-center justify-center">CodeAnt AI </p>
          </div>
          <p className="font-bold text-3xl">Welcome to CodeAnt AI</p>
          <div className="flex flex-row mt-4 gap-4 mb-8">
            <button
              className={`p-3  rounded-lg w-full border-2 ${
                activeButton === "SAAS"
                  ? "bg-blue-500 border-blue-700"
                  : "bg-slate-300 border-gray-400"
              }`}
              onClick={() =>
                setActiveButton(activeButton === "SAAS" ? "" : "SAAS")
              }
            >
              SAAS
            </button>

            <button
              className={`p-3 selection:bg-blue-900 rounded-lg w-full border-2 ${
                activeButton === "Self-Hosted"
                  ? "bg-blue-500 border-blue-700"
                  : "bg-slate-300 border-gray-400"
              }`}
              onClick={() =>
                setActiveButton(
                  activeButton === "Self-Hosted" ? "" : "Self-Hosted"
                )
              }
            >
              Self-Hosted
            </button>
          </div>
          <div className="flex flex-col items-center gap-4">
            {activeButton === "SAAS" && (
              <div className="flex flex-col gap-4  w-[400px]">
                <button className="p-3 text-black rounded-lg border-2 border-black flex items-center justify-center gap-2">
                  <img
                    src="./github.svg"
                    alt="GitHub logo"
                    width={30}
                    height={30}
                  />
                  Sign in with GitHub
                </button>
                <button className="p-3 text-black rounded-lg border-2 border-black flex justify-center items-center gap-2">
                  <img
                    src="./bitbucket.svg"
                    alt="BitBucket logo"
                    width={30}
                    height={30}
                  />
                  Sign in with BitBucket
                </button>
                <button className="p-3 text-black rounded-lg border-2 border-black flex justify-center items-center gap-2">
                  <img
                    src="./azure.svg"
                    alt="Azure DevOps logo"
                    width={30}
                    height={30}
                  />
                  Sign in with Azure DevOps
                </button>
                <button className="p-3 text-black rounded-lg border-2 border-black flex justify-center items-center gap-2">
                  <img
                    src="./gitlab.svg"
                    alt="GitLab logo"
                    width={30}
                    height={30}
                  />
                  Sign in with GitLab
                </button>

              </div>
            )}

            {activeButton === "Self-Hosted" && (
              <div className="flex flex-col gap-4 w-[400px]">
                 <button className="p-3 text-black rounded-lg border-2 border-black flex justify-center items-center gap-2">
                  <img
                    src="./gitlab.svg"
                    alt="GitLab logo"
                    width={30}
                    height={30}
                  />
                  Self-Hosted GitLab
                </button>

                <button className="p-3 text-black rounded-lg border-2 border-black flex justify-center items-center gap-2">
                  <img
                    src="./key.svg"
                    alt="GitLab logo"
                    width={30}
                    height={30}
                  />
                  Sign in with SSO
                </button>
              </div>
            )}
          </div>
          <p className="text-sm">
            By signing up, you agree to the
            <strong className="font-bold "> Privacy Policy.</strong>
          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Login;
