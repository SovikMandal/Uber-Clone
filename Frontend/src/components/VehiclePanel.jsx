import React from "react";
import UberCar from "../assets/Uber_Car.png";
import UberAuto from "../assets/Uber_Auto.png";
import UberMoto from "../assets/Uber_Moto.png";
import UberUser from "../assets/Uber-User.png";
import arrowDown from "../assets/arrow-down.svg";

const VehiclePanel = (props) => {
  const handelSelect = (vehicle) => {
    props.setSelectVehicle(vehicle);
    props.setVehicleDetailsPanel(true);
    props.setVehiclePanel(false);
  }

  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-3 flex justify-center w-[93%] absolute top-0"
      >
        <img src={arrowDown} alt="" />
      </h5>
      <h3 className="text-2xl font-semibold mb-5 pt-2">Choose a Vehicle</h3>
      <div
        onClick={() => {
          handelSelect({
            name: "UberGo",
            image: UberCar,
            price: "₹195.25",
          })
        }}
        className="flex w-full border-2 active:border-black bg-gray-100 rounded-xl mb-2 items-center justify-between p-3"
      >
        <img className="h-11 mr-3" src={UberCar} alt="" />

        <div className="w-1/2 leading-tight">
          <div className="flex gap-0.5 items-center">
            <h4 className="text-base mr-2 font-medium">UberGo</h4>
            <img className="h-3" src={UberUser} alt="" />
            <span className="font-medium">4</span>
          </div>

          <h5 className="text-sm font-semibold">2 mins away</h5>
          <p className="text-xs font-medium text-gray-700">
            Afforadable, compact rides
          </p>
        </div>

        <div className="text-lg font-bold">₹193.25</div>
      </div>

      <div
        onClick={() => {
          handelSelect({
            name: "UberMoto",
            image: UberMoto,
            price: "₹65.21",
          })
        }}
        className="flex w-full border-2 active:border-black bg-gray-100 rounded-xl mb-2 items-center justify-between p-3"
      >
        <img className="h-11" src={UberMoto} alt="" />

        <div className="w-1/2 leading-tight">
          <div className="flex gap-0.5 items-center">
            <h4 className="text-base mr-2 font-medium">UberMoto</h4>
            <img className="h-3" src={UberUser} alt="" />
            <span className="font-medium">1</span>
          </div>

          <h5 className="text-sm font-semibold">5 mins away</h5>
          <p className="text-xs font-medium text-gray-700">
            Afforadable, motorcycle rides
          </p>
        </div>

        <div className="text-lg font-bold">₹65.21</div>
      </div>

      <div
        onClick={() => {
          handelSelect({
            name: "UberAuto",
            image: UberAuto,
            price: "₹118.84",
          })
        }}
        className="flex w-full border-2 active:border-black bg-gray-100 rounded-xl mb-2 items-center justify-between p-3"
      >
        <img className="h-11" src={UberAuto} alt="" />

        <div className="w-1/2 leading-tight">
          <div className="flex gap-0.5 items-center">
            <h4 className="text-base mr-2 font-medium">UberAuto</h4>
            <img className="h-3" src={UberUser} alt="" />
            <span className="font-medium">3</span>
          </div>

          <h5 className="text-sm font-semibold">2 mins away</h5>
          <p className="text-xs font-medium text-gray-700">
            Afforadable, Auto rides
          </p>
        </div>

        <div className="text-lg font-bold">₹118.84</div>
      </div>
    </div>
  );
};

export default VehiclePanel;
