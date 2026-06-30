import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/map.gif";
import UberCar from "../assets/Uber_Car.png";
import Location from "../assets/location.svg";
import HomeLogo from "../assets/home.svg";

const TrackRiding = (props) => {
  const vehicle = props.selectVehicle || {
    name: "UberGo",
    image: UberCar,
    price: "₹195.25",
  };

  return (
    <div className="h-screen overflow-hidden">
        <Link to='/home' className="fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full"><img className="h-7" src={HomeLogo} alt="" /></Link>
      <div className="w-full h-1/2">
        <img
          className="h-full w-full object-cover"
          src={background}
          alt="Map"
        />
      </div>

      <div className="h-1/2 mx-5 mt-4 mb-2">
        <div className="flex flex-col gap-5 w-full items-center justify-center">
          <div className="flex items-center justify-between w-full">
            <img className="h-12" src={vehicle.image} alt="" />
            <div className="text-right">
              <h2 className="text-lg font-medium">Souvik Mandal</h2>
              <h4 className="text-xl font-semibold -mt-1 -mb-1">
                WB04 AB 1234
              </h4>
              <p className="text-sm text-gray-700">Maruti Suzuki Alto</p>
            </div>
          </div>
          <div className="w-full -mt-1">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <img className="h-6 w-6" src={Location} alt="" />
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm text-gray-700">
                  Kaikondrahalli, Bengaluru, Karnataka
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3 border-b-2">
              <div>
                <div className="h-3 w-3 bg-black"></div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Third Wave Coffee</h3>
                <p className="text-sm text-gray-700">
                  17th Cross Rd, PWD Quarters, 1st Sector, HRS Layout,
                  Bengaluru, Karnataka
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3">
              <div>
                <div className="h-1 mb-0.5 w-5 bg-black"></div>
                <div className="h-2 w-5 bg-black"></div>
              </div>
              <div>
                <h3 className="text-lg font-medium">{vehicle.price}</h3>
                <p className="text-sm text-gray-700">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-2 p-3 bg-green-600 text-xl rounded-lg text-white font-semibold">Make a Payment</button>
      </div>
    </div>
  );
};

export default TrackRiding;
