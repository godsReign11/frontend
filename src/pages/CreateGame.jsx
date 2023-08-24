import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHead from "./TopHead";
import { createGameApi } from "../Api/GameApi";
import { Result, Modal } from 'antd';
import { GrFormAdd } from 'react-icons/gr'
import { IconContext } from "react-icons";
import { PlusOutlined } from "@ant-design/icons";

export default function CreateGame() {

  const [selectedFiles, setSelectedFiles] = useState([]);

  const [gameName, setGameName] = useState("");
  const [gameOrder, setGameOrder] = useState("");

  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Function to compress an image with target size and quality
  function compressImage(file, targetSizeInBytes = 1024 * 1024, quality = 0.7) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (event) {
        const img = new Image();

        img.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Calculate the new width and height to maintain the aspect ratio
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 600;
          let width = img.width;
          let height = img.height;

          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }

          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }

          canvas.width = width;
          canvas.height = height;

          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              // Check if the compressed image size is smaller than the target size
              if (blob.size <= targetSizeInBytes) {
                resolve(blob);
              } else {
                // If the compressed image is still larger than the target size, reduce the quality and try again
                const newQuality = quality - 0.1;
                if (newQuality > 0) {
                  compressImage(img, targetSizeInBytes, newQuality)
                    .then(resolve)
                    .catch(reject);
                } else {
                  // If quality reaches 0 and the target size is not met, resolve with the original file
                  resolve(file);
                }
              }
            },
            file.type,
            quality
          );
        };

        img.onerror = function (event) {
          reject(event);
        };

        img.src = event.target.result;
      };

      reader.onerror = function (event) {
        reject(event);
      };

      reader.readAsDataURL(file);
    });
  }



  const handleAllChange = (setterFunction) => (e) => {
    const { value } = e.target;
    setterFunction(value);
  };

  const handleFileChange = async (event) => {
    const files = event.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const originalImage = files[i];
      console.log("Original Image Size:", originalImage.size, "bytes");

      try {
        const compressedImage = await compressImage(originalImage);
        console.log("Compressed Image Size:", compressedImage.size, "bytes");
        newImages.push(compressedImage);

      } catch (error) {
        // Handle any compression errors
        console.error("Image compression error:", error);
      }
    }

    setSelectedFiles(newImages);
  };



  const handleCreateGameData = () => {
    if (
      gameName === "" ||
      gameOrder === ""
    ) {
      setError(true);
    } else {
      setError(false);

      const dataForm = new FormData();
      dataForm.append("name", gameName);
      dataForm.append("order", gameOrder);

      // Append selected files
      for (let i = 0; i < selectedFiles.length; i++) {
        dataForm.append("fileName", selectedFiles[i]);
      }

      createGameApi.CreateGameForApp(dataForm).then((data) => {
        if (data.status) {
          toast.success("Game Created Successfully");
          console.log(data.message);
          resetHandle()
          setIsModalOpen(true)
          setSelectedFiles([])
        } else {
          toast.error("Some Error Occured");
          console.log(data.message);
        }
      });
    }
  };

  const resetHandle = () => {
    setGameName("");
    setGameOrder("");
    setSelectedFiles("");
  };

  return (
    <div className="wrapper">
      <ToastContainer />
      <div className="content-page rtl-page">
        <div className="container mx-auto">
          <TopHead name={"Game"} />
          <div className="bg-white p-6 rounded-md">
            <div>
              <h2 className="text-black text-base font-semibold leading-normal">List new Games</h2>
            </div>
            <div className="flex flex-col mt-3 sm:flex-row sm:space-y-0 sm:space-x-6">

              {/* Label 1 */}
              <div className="">

                <label
                  htmlFor="gameName"
                  className="text-gray-500 font-[16px]"
                >
                  Game Name
                </label>
                <input
                  type="text"
                  id="gameName"
                  value={gameName}
                  required
                  onChange={handleAllChange(setGameName)}
                  className={`input-field w-full px-4 py-2 border ${error && gameName === ""
                    ? "border-red-500"
                    : "border-gray-300"
                    } rounded-md focus:outline-none bg-slate-100 mt-1`}
                  placeholder="Enter the name of the game"
                />
              </div>

              {/* Label 2 */}

              {/* <div className="mb-6">
                <label
                  htmlFor="gameOrder"
                  className="text-lg font-medium text-gray-800 mb-1"
                >
                  Set Game Order
                </label>
                <input
                  type="number"
                  id="gameOrder"
                  value={gameOrder}
                  onChange={handleAllChange(setGameOrder)}
                  className={`input-field w-full px-4 py-2 border ${error && gameOrder === ""
                    ? "border-red-500"
                    : "border-gray-300"
                    } rounded-md focus:outline-none bg-slate-100 mt-4`}
                  placeholder="Enter the game order"
                />
              </div> */}

              {/* Label 3 */}

              <div>
                <div className="mb-1">
                  <label
                    htmlFor="upload"
                    className="text-gray-500 font-[14px]"
                  >
                    Choose Game Image
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      id="file"
                      onChange={handleFileChange}
                      type="file"
                      accept="image/*"
                      multiple
                      name="files[]"
                      className="input-field h-11 w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-1"
                    />
                    <div className="mt-1">
                      <button className="w-[133px] h-11 px-6 py-3 rounded-lg border border-neutral-700 justify-start items-center gap-2.5 inline-flex">Add to draft</button>
                    </div>

                    <div className="mt-1">
                      <button onClick={handleCreateGameData} className="w-[154px] h-11 px-6 py-2.5 bg-neutral-700 rounded-lg  items-center text-white">
                        <div className="flex gap-3">
                          <PlusOutlined color="white" className="mt-1" />
                          Add Game
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-xs">
                  *Only Png filetype is allowed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal open={isModalOpen} footer={null} closable={false} closeIcon={false}>
        <Result
          status="success"
          title="Successfully Created the Game"
          subTitle="Redirect to the All Games"
          extra={[

          ]}>
          <Link to='/all-games' className="button-create-game">Yes, Please</Link>
        </Result>
      </Modal>
    </div>
  );
}
