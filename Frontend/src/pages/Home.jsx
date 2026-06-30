import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel.jsx";
import VehiclePanel from "../components/VehiclePanel.jsx";
import background from "../assets/map.gif";
import arrowDown from "../assets/arrow-down.svg";
import VehicleDetails from "../components/VehicleDetails.jsx";
import LookingForDriver from "../components/LookingForDriver.jsx";
import WaitForDriver from "../components/WaitForDriver.jsx";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [vehicleDetailsPanel, setVehicleDetailsPanel] = useState(false);
  const [selectVehicle, setSelectVehicle] = useState(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const vehicleDetailsPanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehicleDetailsPanel) {
      gsap.to(vehicleDetailsPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleDetailsPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleDetailsPanel]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="h-[70%] w-full">
        <img className="h-full w-full object-cover" src={background} alt="Map" />
        <img
          className="w-20 absolute top-7 left-7"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="Uber Logo"
        />
      </div>

      <div className="h-screen flex flex-col justify-end absolute bottom-0 w-full">
        <div className="h-[30%] px-8 pt-4 bg-white relative z-10">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 top-5 right-6"
          >
            <img src={arrowDown} alt="" />
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>

          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-[3px] rounded-full top-24 left-12 bg-gray-800"></div>

            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              type="text"
              placeholder="Add pick-up location"
              className="bg-[#eeeeee] w-full py-3 px-10 rounded-md text-lg mt-5"
            />

            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              placeholder="Enter your destination"
              className="bg-[#eeeeee] w-full py-3 px-10 rounded-md text-lg mt-3"
            />
          </form>
        </div>

        <div ref={panelRef} className="h-0 bg-white px-6">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-8 px-3 pt-10"
      >
        <VehiclePanel
          setVehicleDetailsPanel={setVehicleDetailsPanel}
          setVehiclePanel={setVehiclePanel}
          setSelectVehicle={setSelectVehicle}
        />
      </div>

      <div
        ref={vehicleDetailsPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-10"
      >
        <VehicleDetails
          setVehicleDetailsPanel={setVehicleDetailsPanel}
          selectVehicle={selectVehicle}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-10"
      >
        <LookingForDriver
          selectVehicle={selectVehicle}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
      ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 px-3 pt-10"
      >
        <WaitForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
