import React from "react";
import Location from "../assets/location.svg";

const LocationSearchPanel = (props) => {
  const location = [
    "24B, Near Adityapur Railway Station, NIT Jamshedpur, Jharkhand",
    "22A, Near NescCafe Durga Mandir, XYZ School, West Bengal",
    "21D, Near Adityapur Railway Station, NIT Jamshedpur, Jharkhand",
    "18C, Near Tea Stall Kali Mata Mandir, ABC School, West Bengal",
  ];

  return (
    <div>
      {location.map((elem, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-3 border-2 border-gray-100 active:border-black rounded-xl items-center justify-center p-3 mb-3"
          >
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[#eeeeee]">
                <img className="h-6 w-6" src={Location} alt="" />
              </div>
            </div>
            <h4 className="leading-tight font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
