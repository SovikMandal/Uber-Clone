import BackgroundImage from "../assets/Bg1.jpg"
import { Link } from "react-router-dom"

const Start = () => {
  return (
    <div>
        <div className='h-screen relative  w-full flex justify-between flex-col'>
            <img className='bg-cover bg-center h-screen w-full flex justify-between flex-col' src={BackgroundImage} alt="" />
            <img className='w-20 ml-8 absolute top-12 left-4' src="https://companieslogo.com/img/orig/UBER.D-f23d4b1c.png?t=1720244494" alt="" />
            <div className='bg-white pb-8 py-4 px-5'>
                <h2 className='text-3xl font-bold ml-3'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-xl text-white font-semibold py-4 px-2 rounded-lg mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start;
