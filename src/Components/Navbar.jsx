import { IoIosTime } from "react-icons/io";
import { IoFlashOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>


            <header className="bg-orange-100 w-full  px-6 p-2">
                <div className="flex items-center gap-x-4" >
                    <div className="flex px-2  bg-orange-300 p-1  rounded-full items-center  ">
                        <div>
                            <IoIosTime />
                        </div>
                        <p className="px-2 font-bold text-sm text-slate-700">One-Time Offer</p>
                    </div>
                    <div> Your Ai StoryBoarding Bundle Discount expires in <span className="text-red-400 px-1 ml-2 bg-white">5:01</span> </div>
                    <div> <button className="btn px-4  bg-red-200 md:btn-sm">Claim Discount</button> </div>


                </div>

            </header>


            <div className="navbar bg-white py-5 shadow-md justify-between  ">
                <div className="flex ml-4  ">
                    <button className=" rounded-full w-10 h-10 mr-4  bg-black text-white font-extrabold text-2xl">
                        B
                    </button>
                    <h3 className="text-black text-3xl font-bold ">Project Dashboard</h3>

                </div>

                <div className="gap-x-4  " >
                    <div className="  flex gap-2 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-3 mt-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <div className="form-control  ">

                            <input type="text" placeholder="Search My Storyboards" className="input  border-slate-950 w-24 px-2 md:w-72 md:px-10 " />

                        </div>

                    </div>


                    <div className="flex items-center bg-sky-50 gap-x-3 px-3 p-1 border-2 border-sky-200">
                        <button className=" border-sky-300 font-bold text-xs border-4 rounded-full w-8 h-8 ">

                            4

                        </button>
                        <p className="font-bold text-black">Quick Start</p>
                    </div>

                    <div>
                        <button className=" font-extrabold text-lg border-2 border-black rounded-full w-10 h-10 bg-orange-200 " >A</button>
                    </div>

                    <div>
                        <button className="h-10 w-10 bg-black rounded-s-full px-3 text-white" ><IoFlashOutline size={22} />
                        </button>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navbar;



