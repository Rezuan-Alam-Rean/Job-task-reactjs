import { IoIosTime } from "react-icons/io";
import { IoFlashOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <header className="bg-orange-100 w-full px-2 sm:px-6 p-2 md:flex sm:flex  ">
                <div className="flex px-2 bg-orange-300 p-1 justify-center rounded-full items-center md:mr-4 ">
                    <div>
                        <IoIosTime />
                    </div>
                    <p className="px-2 font-bold text-sm text-slate-700">One-Time Offer</p>
                </div>
                <div className="  flex  sm:flex-row items-center gap-2 sm:gap-x-4">

                    <div className="text-center sm:text-left"> Your Ai StoryBoarding Bundle Discount expires in <span className="text-red-400 px-1 ml-2 bg-white">5:01</span> </div>
                    <div className="mt-2 sm:mt-0"> <button className="btn px-4 bg-red-200 md:btn-sm">Claim Discount</button> </div>
                </div>
            </header>

            <div className="navbar bg-white py-2 sm:py-5 shadow-md justify-between">
                <div className="flex ml-2 sm:ml-4">
                    <button className="rounded-full w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-4 bg-black text-white font-extrabold text-xl sm:text-2xl">
                        B
                    </button>
                    <h3 className="text-black text-2xl sm:text-3xl font-bold">Project Dashboard</h3>
                </div>

                <div className={`gap-x-2 sm:gap-x-4 mt-2 sm:mt-0`}>
                    <div className=" hidden md:flex gap-2 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-2 sm:ml-3 mt-3 sm:mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <div className="form-control">
                            <input type="text" placeholder="Search My Storyboards" className="input border-slate-950 w-20 sm:w-24 px-1 sm:px-2 md:w-72 md:px-10" />
                        </div>
                    </div>

                    <div className=" hidden  md:flex items-center bg-sky-50 gap-x-2 sm:gap-x-3 px-2 sm:px-3 py-1 border-2 border-sky-200">
                        <button className="border-sky-300 font-bold text-xs border-4 rounded-full w-6 h-6 sm:w-8 sm:h-8">
                            4
                        </button>
                        <p className="font-bold text-black">Quick Start</p>
                    </div>
                    <div className="items-center justify-center flex gap-x-3">
                        <div className="">
                            <button className="font-extrabold text-lg border-2 border-black rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-orange-200">A</button>
                        </div>

                        <div className=" ">
                            <button className="h-8 w-8 sm:h-10 sm:w-10 bg-black rounded-s-full px-2 sm:px-3 text-white"><IoFlashOutline size={18} sm:size={22} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
