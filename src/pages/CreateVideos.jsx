import React, { useState } from "react";
import '../pages/All.css'
import { Radio } from 'antd';
import { ToastContainer, toast } from "react-toastify";
import TopHead from "./TopHead";
import { FcVideoFile, FcAddImage } from 'react-icons/fc'
import { VideosAPI } from "../Api/VideosAPI";

export default function CreateVideos() {
  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState(false);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [madeForKids, setMadeForKids] = useState(false);
  const [adultConfirm, setAdultConfirm] = useState(false);
  const [videoUpload, setVideoUpload] = useState(null); // State for video input
  const [thumbnailUpload, setThumbnailUpload] = useState(null); // State for thumbnail input

  const handleAllChange = (setterFunction) => (e) => {
    const { value } = e.target;
    setterFunction(value);
  };

  const handleVideoInputChange = (e) => {
    const file = e.target.files[0];
    setVideoUpload(file);
  };

  const handleThumbnailInputChange = (e) => {
    const file = e.target.files[0];
    setThumbnailUpload(file);
  };

  const onChange = (e) => {
    setMadeForKids(e.target.value);
  };

  const onChangeValue = (e) => {
    setAdultConfirm(e.target.value);
  };

  const getValue = () => {
    console.log(videoUpload);
  }

  const handleVideoPOSTAPI = () => {
    if (
      category === "" ||
      title === "" ||
      description === ""
    ) {
      setError(true);
    } else {
      setError(false);

      const dataForm = new FormData();
      dataForm.append("category", category);
      dataForm.append("description", description);
      dataForm.append("subtitle", subtitle);

      if (videoUpload) {
        dataForm.append('files', videoUpload, 'video.mp4'); // Append video with a specific name
      }

      if (thumbnailUpload) {
        dataForm.append('files', thumbnailUpload, 'thumbnail.jpg'); // Append thumbnail with a specific name
      }

      dataForm.append("isDraft", false);
      dataForm.append("isKid", madeForKids);
      dataForm.append("isAgeRestrict", adultConfirm);

      VideosAPI.CreateVideos(dataForm).then((data) => {
        if (data.status) {
          toast.success("Video Generated Successfully");
          console.log(data.message);
        } else {
          toast.error("Some Error Occurred");
          console.log(data.message);
        }
      });
    }
  }





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

        {/* Main Div */}
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
                <select
                  value={category}
                  required
                  onChange={handleAllChange(setCategory)}
                  className={`input-field w-full px-4 py-2 border ${error && playerName === ""
                    ? "border-red-500"
                    : "border-gray-300"
                    } rounded-md focus:outline-none bg-gray-50 mt-1 h-11`}
                  placeholder="Enter the name of the player"
                >
                  <option value=''>Select</option>
                  <option value='video'>Video</option>
                  <option value='vlogs'>Vlogs</option>
                </select>
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
                  value={title}
                  onChange={handleAllChange(setTitle)}
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
                  value={subtitle}
                  type="text"
                  required
                  onChange={handleAllChange(setSubtitle)}
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

                value={description}
                className="text-gray-900 font-[12px] font-bold"
                placeholder="Enter Description"
              >
                Description
              </label>
              <textarea onChange={handleAllChange(setDescription)} className="input-field w-[600px] h-[200px]  px-4 py-2 border rounded-md focus:outline-none bg-gray-50 mt-1" />
            </div>
          </div>

          {/* Second Div */}

          <div className="flex gap-6">
            <div className="">
              <div className="mt-3 flex flex-col">
                <label
                  htmlFor="videoUpload"
                  className="text-gray-900 font-[12px] font-bold"
                >
                  Upload Video
                </label>
                <div>
                  <input
                    type="file"
                    id="videoUpload"
                    accept="video/*"
                    onChange={handleVideoInputChange}
                    className="input-field w-[250px] h-[200px]  px-4 py-2 border rounded-md focus:outline-none bg-gray-50 mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <div className="mt-3 flex flex-col">
                <label
                  htmlFor="thumbnailUpload"
                  className="text-gray-900 font-[12px] font-bold"
                >
                  Upload Thumbnail
                </label>
                <div className="flex gap-8">
                  <input
                    type="file"
                    id="thumbnailUpload"
                    accept="image/*"
                    onChange={handleThumbnailInputChange}
                    className="input-field w-[250px] h-[200px]  px-4 py-2 border rounded-md focus:outline-none bg-gray-50 mt-1"
                  />
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
                          <Radio.Group onChange={onChange} value={madeForKids}>
                            <Radio value={true}>Yes</Radio>
                            <Radio value={false}>No</Radio>
                          </Radio.Group>
                        </div>
                        {/* Seconds */}
                        <div className="mt-7">
                          <label
                            className="text-gray-700 font-[8px] font-semibold"
                          >
                            Do you want to restrict your video to an adult audience?
                          </label>

                          <div className="flex flex-row">
                            <Radio.Group onChange={onChangeValue} value={adultConfirm} className="mt-3">
                              <Radio className="font-[8px]" value={true}>Yes, restrict my video to viewers over 18</Radio>
                              <Radio className="font-[8px] mt-2" value={false}>No, don't restrict my video to viewers over 18 only</Radio>
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

        <div onClick={handleVideoPOSTAPI} className="w-[175px] h-11 px-[34px] py-3 bg-gray-900 rounded-lg justify-start items-center gap-2.5 inline-flex text-white">
          <button>
            Create Videos
          </button>
        </div>
      </div>

      <div className="mb-6"></div>
    </div>


  );
}
