import React from "react";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <section
      className={`fixed left-0 top-0 h-full w-full transform bg-white text-black transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between p-8">
        <div>AJARK</div>

        <div className="text-5xl text-red-600 hover:text-red-900">
          <IoClose onClick={() => setIsSidebarOpen(false)} />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Sidebar;
