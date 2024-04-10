import { useState } from 'react';
import { PiFolderOpen } from "react-icons/pi";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-slate-100 pb-10">
            <div className="flex flex-col sm:flex-row justify-between pt-4  sm:pt-10 px-4 sm:px-10">
                <div className="flex gap-x-2 items-center">
                    <button className="font-extrabold text-lg border-2 border-black rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-orange-200">A</button>
                    <p className="font-extrabold text-xl text-black">Adam Cooper Team</p>
                </div>

                <div className="mt-2 sm:mt-0">



                    <div className="">
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-sm bg-black text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>New Project</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle rounded-full bg-slate-200 btn-ghost absolute right-2 top-4">✕</button>
                                </form>
                                <h3 className="font-bold text-xl">New Storyboard</h3>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Storyboard Name</span>
                                    </div>
                                    <input type="text" placeholder="e.g. Default project Storyboard" className="input input-bordered w-full" />
                                    <div className="label">
                                        <span className="label-text">Frame Size</span>
                                    </div>
                                    <select className="select select-bordered join-item w-full">
                                        <option disabled selected>Landscape (16:9)</option>
                                        <option>Sci-fi</option>
                                        <option>Drama</option>
                                        <option>Action</option>
                                    </select>
                                </label>
                                <hr className="mt-6" />

                                <div className="flex justify-between mt-6">
                                    <div className="flex items-center gap-x-2">
                                        <input type="checkbox" className="toggle toggle-xs" />
                                        <p className="text-black">Ai Assistant</p>
                                    </div>

                                    <button className="btn btn-sm">Create Storyboard</button>
                                </div>
                            </div>
                        </dialog>
                    </div>






                </div>
            </div>

            <div className="mt-4 sm:mt-6 mx-4 sm:mx-10 bg-white py-4 sm:py-10">
                <div className="justify-between px-4 sm:px-10 flex flex-col sm:flex-row items-center">
                    <div className="flex gap-x-4 items-center mt-2 sm:mt-0">
                        <div>
                            <PiFolderOpen size={35} />
                        </div>
                        <div>
                            <p className="text-black text-lg font-bold">Default Project</p>
                            <p className="mt-1 text-gray-600">1 Storyboard</p>
                        </div>
                    </div>

                    <div className="flex gap-x-4 mt-2 sm:mt-0">
                        <div>
                            <IoEllipsisVerticalSharp />
                        </div>

                        <div>
                            <IoChevronDownOutline />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-6 mt-4 sm:mt-6 px-4 sm:px-6">
                    <div>
                        <div className="card card-compact w-full sm:w-96 bg-slate-100 h-80 border-black border">
                            <figure><img src="https://img.freepik.com/premium-photo/black-white-jungle-wallpaper-garden-background_906149-5113.jpg" alt="jungle" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-4 md:mt-0 card card-compact w-full sm:w-96 h-80 bg-slate-100 items-center justify-center">
                            <div className="">
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="text-black font-extrabold btn btn-circle btn-outline" onClick={() => document.getElementById('my_modal_3').showModal()}><IoAddOutline size={22} /></button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle rounded-full bg-slate-200 btn-ghost absolute right-2 top-4">✕</button>
                                        </form>
                                        <h3 className="font-bold text-xl">New Storyboard</h3>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">Storyboard Name</span>
                                            </div>
                                            <input type="text" placeholder="e.g. Default project Storyboard" className="input input-bordered w-full" />
                                            <div className="label">
                                                <span className="label-text">Frame Size</span>
                                            </div>
                                            <select className="select select-bordered join-item w-full">
                                                <option disabled selected>Landscape (16:9)</option>
                                                <option>Sci-fi</option>
                                                <option>Drama</option>
                                                <option>Action</option>
                                            </select>
                                        </label>
                                        <hr className="mt-6" />

                                        <div className="flex justify-between mt-6">
                                            <div className="flex items-center gap-x-2">
                                                <input type="checkbox" className="toggle toggle-xs" />
                                                <p className="text-black">Ai Assistant</p>
                                            </div>

                                            <button className="btn btn-sm">Create Storyboard</button>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
