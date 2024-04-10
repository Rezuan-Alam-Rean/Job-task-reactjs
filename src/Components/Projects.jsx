import { PiFolderOpen } from "react-icons/pi";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";


const Projects = () => {
    return (
        <div className="bg-slate-100" >
            <div className="flex justify-between pt-10 px-10 " >
                <div className="flex gap-x-2 items-center " >
                    <button className=" font-extrabold text-lg border-2 border-black rounded-full w-10 h-10 bg-orange-200 " >A</button>
                    <p className="font-extrabold text-xl text-black" >Adam Cooper Team</p>
                </div>

                <div>
                    <button className="btn btn-sm bg-black text-white">New Project</button>
                </div>
            </div>


            <div className="mt-6 mx-10 bg-white py-10" >
                <div className="justify-between  px-10  flex  items-center" >
                    <div className="flex gap-x-4 items-center">
                        <div>
                            <PiFolderOpen size={35} />
                        </div>
                        <div>
                            <p className="text-black text-lg font-bold " >Default Project</p>
                            <p className=" mt-1 text-gray-600" > 1 Storyboard</p>
                        </div>
                    </div>

                    <div className="flex gap-x-8" >
                        <div>
                            <IoEllipsisVerticalSharp />

                        </div>

                        <div>
                            <IoChevronDownOutline />

                        </div>
                    </div>
                </div>


                <div className="md:flex gap-x-6 mt-6 px-6" >
                    <div>
                        <div className=" card card-compact w-96 bg-slate-100 h-80 border-black border ">
                            <figure><img src="https://img.freepik.com/premium-photo/black-white-jungle-wallpaper-garden-background_906149-5113.jpg" alt="jungle" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" mt-4 md:mt-0 card card-compact w-96 h-80 bg-slate-100 items-center justify-center  ">
                            <div className="" >
                                <button className=" text-black font-extrabold btn btn-circle btn-outline">
                                <IoAddOutline size={22} />

                                </button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Projects;