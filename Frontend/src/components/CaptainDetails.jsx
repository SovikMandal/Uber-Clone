import React from "react";
import DriverPhoto from "../assets/images.jpeg";
import TimeLogo from "../assets/time.svg"
import SpeedLogo from "../assets/speed.svg"
import NoteBookLogo from "../assets/notebook.svg"

const CaptainDetails = (props) => {
  return (
    <div className="flex flex-col h-full justify-between mb-4">
      <div className="flex w-full mt-3 items-center justify-between">
        <div className="flex gap-3 items-center justify-between">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={DriverPhoto}
          />
          <div>
            <h4 className="text-lg font-bold">Jeremiah Curtis</h4>
            <p className="text-sm text-gray-500">Basic Level</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold">₹350.40</h4>
          <p className="text-end  text-sm text-gray-500">Earned</p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between p-6 bg-yellow-400 rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          <img className="h-8" src={TimeLogo} />
          <h3 className="text-lg font-bold">10.2</h3>
          <p className="text-sm text-gray-500">Hours Online</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img className="h-9" src={SpeedLogo} />
          <h3 className="text-lg font-bold">300KM</h3>
          <p className="text-sm text-gray-500">Total Distance</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img className="h-8" src={NoteBookLogo} />
          <h3 className="text-lg font-bold">20</h3>
          <p className="text-sm text-gray-500">Total Jobs</p>
        </div>
      </div>

        <button 
            onClick={() => props.setRidePopupPanel(true)} 
            className="w-full p-3 mb-3 bg-green-600 text-xl rounded-lg text-white font-semibold">
            Continue
        </button>
    </div>
  );
};

export default CaptainDetails;
