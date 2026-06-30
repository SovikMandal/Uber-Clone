import React from "react";
import arrowDown from "../assets/arrow-down.svg";
import UberCar from "../assets/Uber_Car.png";
import Location from "../assets/location.svg";

const LookingForDriver = (props) => {
  const vehicle = props.selectVehicle || {
    name: "UberGo",
    image: UberCar,
    price: "₹195.25",
  }

  return (
    <div>
      <h5
        onClick={() => {
          props.setVehicleFound(false);
        }}
        className="p-3 flex justify-center w-[93%] absolute top-0"
      >
        <img src={arrowDown} alt="" />
      </h5>
      <div className="flex flex-col gap-5 w-full items-center justify-center">
        <h3 className="text-2xl font-bold pt-2">Looking for {vehicle.name} Driver</h3>
        <img className="h-20" src={vehicle.image} alt="" />
        <div className="w-full mt-5">
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
                17th Cross Rd, PWD Quarters, 1st Sector, HRS Layout, Bengaluru,
                Karnataka
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
    </div>
  );
};

export default LookingForDriver;
