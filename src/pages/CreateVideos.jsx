import React, { useState } from "react";
import '../pages/All.css'
import { Radio } from 'antd';
import { ToastContainer } from "react-toastify";
import TopHead from "./TopHead";
import { FcVideoFile, FcAddImage } from 'react-icons/fc'

export default function CreateVideos() {

  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState(false);
  const handleAllChange = (setterFunction) => (e) => {
    const { value } = e.target;
    setterFunction(value);
  };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const [secondValue, setSecondValue] = useState(1);
  const onChangeValue = (e) => {
    console.log('radio checked', e.target.value);
    setSecondValue(e.target.value);
  };

  return (
    <div className="wrapper">
      <ToastContainer />
      <TopHead name={'Videos'} />

      <div className="bg-white p-6 rounded-md">
        <div>
          <h2 className="text-black text-base font-semibold leading-normal">
            Video Details
          </h2>
        </div>

        {/* Maun Div */}
        <div>
          <div className="flex gap-6 items-center ">
            <div className="mt-1 sm:flex-row sm:space-y-0">

              <div className="">
                <label
                  htmlFor="gameName"
                  className="text-gray-900 font-[12px] font-bold"
                >
                  Select Category
                </label>
                <input
                  type="text"
                  required
                  onChange={handleAllChange(setPlayerName)}
                  className={`input-field w-full px-4 py-2 border ${error && playerName === ""
                    ? "border-red-500"
                    : "border-gray-300"
                    } rounded-md focus:outline-none bg-gray-50 mt-1 h-11`}
                  placeholder="Enter the name of the player"
                />
              </div>

              <div className="mt-2">
                <label
                  htmlFor="gameName"
                  className="text-gray-900 font-[12px] font-bold "
                >
                  Title
                </label>
                <input
                  type="text"
                  required
                  onChange={handleAllChange(setPlayerName)}
                  className={`input-field w-full px-4 py-2 border ${error && playerName === ""
                    ? "border-red-500"
                    : "border-gray-300"
                    } rounded-md focus:outline-none bg-gray-50 mt-1 h-11`}
                  placeholder="Enter title"
                />
              </div>

              <div className="">
                <label
                  htmlFor="gameName"
                  className="text-gray-900 font-[12px] font-bold"
                >
                  Subtitle
                </label>
                <input
                  type="text"
                  required
                  onChange={handleAllChange(setPlayerName)}
                  className={`input-field w-full px-4 py-2 border ${error && playerName === ""
                    ? "border-red-500"
                    : "border-gray-300"
                    } rounded-md focus:outline-none bg-gray-50 mt-1 h-11`}
                  placeholder="Enter subtitle"
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="gameName"
                className="text-gray-900 font-[12px] font-bold"
                placeholder="Enter Description"
              >
                Description
              </label>
              <textarea className="input-field w-[600px] h-[200px]  px-4 py-2 border rounded-md focus:outline-none bg-gray-50 mt-1" />
            </div>
          </div>

          {/* Second Div */}

          <div className="flex gap-6">
            <div className="">
              <div className="mt-3 flex flex-col">
                <label
                  htmlFor="gameName"
                  className="text-gray-900 font-[12px] font-bold"
                  placeholder="Enter Description"
                >
                  Upload Video
                </label>
                <div>
                  <input type="file" className="input-field w-[250px] h-[200px]  px-4 py-2 border rounded-md focus:outline-none bg-gray-50 mt-1" />

                </div>
              </div>
            </div>

            <div className="">
              <div className="mt-3 flex flex-col">
                <label
                  htmlFor="gameName"
                  className="text-gray-900 font-[12px] font-bold"
                  placeholder="Enter Description"
                >
                  Upload Thumbnail
                </label>
                <div className="flex gap-8">
                  <input type="file" className="input-field w-[250px] h-[200px]  px-4 py-2 border rounded-md focus:outline-none bg-gray-50 mt-1" />

                  {/* Kids Relevance */}

                  <div className="">
                    <div className="mt-3 flex flex-col">
                      <label
                        htmlFor="gameName"
                        className="text-gray-900 font-[12px] font-bold"
                      >
                        This Video Made for Kids
                      </label>

                      {/* Radio Buttons */}
                      <div>
                        {/* first */}
                        <div>
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Yes</Radio>
                            <Radio value={2}>No</Radio>
                          </Radio.Group>
                        </div>
                        {/* Seconds */}
                        <div className="mt-7">
                          <label
                            htmlFor="gameName"
                            className="text-gray-700 font-[8px] font-semibold"
                          >
                            Do you want to restrict your video to an adult audience?
                          </label>

                          <div className="flex flex-row">
                            <Radio.Group onChange={onChangeValue} value={secondValue} className="mt-3">
                              <Radio className="font-[8px]" secondValue={1}>Yes, restrict my video to viewers over 18</Radio>
                              <Radio className="font-[8px] mt-2" secondValue={2}>No, don't restrict my video to viewers over 18 only</Radio>
                            </Radio.Group>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="flex gap-3 justify-end mt-6">
        <div className="w-[148px] h-11 px-6 py-3 rounded-lg border border-neutral-700 justify-start items-center gap-2.5 inline-flex">
          <button>
            Add to Draft
          </button>
        </div>

        <div className="w-[175px] h-11 px-[34px] py-3 bg-gray-900 rounded-lg justify-start items-center gap-2.5 inline-flex text-white">
          <button>
            Create Videos
          </button>
        </div>
      </div>

      <div className="mb-6"></div>
    </div>


  );
}
