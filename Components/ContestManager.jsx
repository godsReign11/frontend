import React, { useState } from "react";
import { Radio, Input, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { CONTESTAPI } from "../src/Api/ContestApi";
import "react-toastify/dist/ReactToastify.css";

export default function ContestManager() {
  const [totalPoolPrice, setTotalPoolPrice] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isFlexible, setIsFlexible] = useState(false);
  const [isMultiEntry, setIsMultiEntry] = useState(false);
  const [isBonus, setIsBonus] = useState(false);
  const [bonusAmount, setBonusAmount] = useState('');
  const [multiEntry, setMultiEntry] = useState('');
  const [totalSpots, setTotalSpots] = useState('');
  const [joiningFee, setJoiningFee] = useState('');
  const [firstPrizeAmount, setFirstPrizeAmount] = useState('');
  const [numberOfWinners, setNumberOfWinners] = useState('');
  const [rankAndAmount, setRankAndAmount] = useState([]);

  const handleRankChange = (index) => (e) => {
    const newRankAndAmount = [...rankAndAmount];
    newRankAndAmount[index] = { rank: index + 1, amount: parseInt(e.target.value) };
    setRankAndAmount(newRankAndAmount);
  };

  const handleSubmit = () => {

    // if (!totalPoolPrice || !isConfirmed || !isFlexible || !isMultiEntry || !isBonus || !bonusAmount || !multiEntry || !totalSpots || !joiningFee || !firstPrizeAmount || rankAndAmount.some(rank => !rank.amount)) {
    //   toast.error("All fields are required. Please fill in all inputs.");
    //   return;
    // }

    const data = {
      totalPoolPrice,
      isConfirmed,
      isFlexible,
      isMultiEntry,
      isBonus,
      bonus: isBonus ? bonusAmount : 0,
      multiEntry: isMultiEntry ? multiEntry : 0,
      totalSpots,
      joiningFee,
      firstPrize: firstPrizeAmount,
      rank: rankAndAmount,
    };

    CONTESTAPI.CreateContestPOST(data).then((response) => {
      if (response.status_code) {
        toast.success(response.message);
        resetHandle();
        setSelectedFiles([]);
      } else {
        toast.error(response.message);
      }
    });

  };

  const handleNumberOfWinnersChange = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value < 0) {
      setNumberOfWinners(0);
    } else {
      setNumberOfWinners(value);
    }
  };

  const resetHandle = () => {
    setTotalPoolPrice('');
    setIsConfirmed(false);
    setIsFlexible(false);
    setIsMultiEntry(false);
    setIsBonus(false);
    setBonusAmount('');
    setMultiEntry('');
    setTotalSpots('');
    setJoiningFee('');
    setFirstPrizeAmount('');
    setNumberOfWinners('');
    setRankAndAmount([]);
  }

  return (
    <div className="wrapper">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeButton={false}
        style={{ width: "fit-content" }}
      />
      <div className="">
        <label htmlFor="totalPoolPrice" className="text-gray-900 font-[16px]">
          Total Pool Price
        </label>
        <Input
          type="text"
          id="totalPoolPrice"
          value={totalPoolPrice}
          onChange={(e) => setTotalPoolPrice(e.target.value)}
          className="input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-1 h-11"
          placeholder="Enter the Total Pool Price"
        />
      </div>

      <div className="mt-4">
        <label className="text-gray-900 font-[16px]">Is Confirmed?</label>
        <Radio.Group onChange={(e) => setIsConfirmed(e.target.value)} value={isConfirmed}>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </div>

      <div className="mt-4">
        <label className="text-gray-900 font-[16px]">Is Flexible?</label>
        <Radio.Group onChange={(e) => setIsFlexible(e.target.value)} value={isFlexible}>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </div>

      <div className="mt-4">
        <label className="text-gray-900 font-[16px]">Is Multi-Entry?</label>
        <Radio.Group onChange={(e) => setIsMultiEntry(e.target.value)} value={isMultiEntry}>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </div>

      <div className="mt-4">
        <label className="text-gray-900 font-[16px]">Is Bonus?</label>
        <Radio.Group onChange={(e) => setIsBonus(e.target.value)} value={isBonus}>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </div>

      {isBonus && (
        <div className="mt-4">
          <label htmlFor="bonusAmount" className="text-gray-900 font-[16px]">
            Bonus Amount
          </label>
          <Input
            type="number"
            id="bonusAmount"
            value={bonusAmount}
            onChange={(e) => setBonusAmount(parseInt(e.target.value))}
            className="input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-1 h-11"
            placeholder="Enter Bonus Amount"
          />
        </div>
      )}

      {isMultiEntry && (
        <div className="mt-4">
          <label htmlFor="multiEntry" className="text-gray-900 font-[16px]">
            Multi-Entry Limit
          </label>
          <Input
            type="number"
            id="multiEntry"
            value={multiEntry}
            onChange={(e) => setMultiEntry(parseInt(e.target.value))}
            className="input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-1 h-11"
            placeholder="Enter Multi-Entry Limit"
          />
        </div>
      )}

      <div className="mt-4">
        <label htmlFor="totalSpots" className="text-gray-900 font-[16px]">
          Total Spots
        </label>
        <Input
          type="number"
          id="totalSpots"
          value={totalSpots}
          onChange={(e) => setTotalSpots(parseInt(e.target.value))}
          className="input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-1 h-11"
          placeholder="Enter Total Spots"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="joiningFee" className="text-gray-900 font-[16px]">
          Joining Fee
        </label>
        <Input
          type="number"
          id="joiningFee"
          value={joiningFee}
          onChange={(e) => setJoiningFee(parseInt(e.target.value))}
          className="input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-1 h-11"
          placeholder="Enter Joining Fee"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="firstPrizeAmount" className="text-gray-900 font-[16px]">
          First Prize Amount
        </label>
        <Input
          type="number"
          id="firstPrizeAmount"
          value={firstPrizeAmount}
          onChange={(e) => setFirstPrizeAmount(parseInt(e.target.value))}
          className="input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-1 h-11"
          placeholder="Enter First Prize Amount"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="numberOfWinners" className="text-gray-900 font-[16px]">
          How many winners do you want?
        </label>
        <Input
          type="number"
          id="numberOfWinners"
          value={numberOfWinners}
          onChange={handleNumberOfWinnersChange}
          className="input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-1 h-11"
          placeholder="Enter number of winners"
        />

      </div>

      {numberOfWinners > 0 && [...Array(numberOfWinners)].map((_, index) => (
        <div key={index} className="mt-4">
          <label htmlFor={`rank${index + 1}`} className="text-gray-900 font-[16px]">
            Rank {index + 1} Prize Amount
          </label>
          <Input
            type="number"
            id={`rank${index + 1}`}
            value={rankAndAmount[index] ? rankAndAmount[index].amount : ""}
            onChange={handleRankChange(index)}
            className="input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-1 h-11"
            placeholder={`Enter prize amount for Rank ${index + 1}`}
          />
        </div>
      ))}

      <button onClick={handleSubmit} className="mt-4 w-[154px] h-11 px-6 py-2.5 bg-neutral-900 rounded-lg  items-center text-white">Create Contest</button>

    </div>
  );
}
