import Location from "../assets/location.svg";
import UserPhoto from "../assets/images-1.jpeg";

const RidePopUp = (props) => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex items-center w-full justify-between bg-stone-300 p-6 rounded-lg">
          <div className="flex gap-3 items-center">
            <img
              className="h-12 w-12 rounded-xl object-cover"
              src={UserPhoto}
            />
            <div>
              <h3 className="text-lg font-bold mb-0.5">Esther Berry</h3>
              <div className="flex gap-1">
                <p className=" bg-yellow-400  rounded-full px-2 text-xs font-bold text-gray-700 ">
                  ApplePay
                </p>
                <p className=" bg-yellow-400  rounded-full px-2 text-xs font-bold text-gray-700 ">
                  Discount
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold">₹195.25</h4>
            <p className="text-end text-gray-800 text-sm ">2.2km</p>
          </div>
        </div>

        <div className="flex flex-col px-3 pb-8">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 px-3 pb-3 border-b-2">
              <img className="h-6 w-6" src={Location} alt="" />
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm text-gray-700">
                  Kaikondrahalli, Bengaluru, Karnataka
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3 mb-3">
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
          </div>

          <div className="flex w-full items-center gap-3 mt-4">
            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(true);
                props.setRidePopupPanel(false);
              }}
              className="w-full p-3 bg-green-600 text-xl rounded-lg text-white font-semibold"
            >
              Accept
            </button>

            <button
              onClick={() => props.setRidePopupPanel(false)}
              className="w-full p-3 bg-gray-300 text-xl rounded-lg text-gray-700 font-semibold"
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
