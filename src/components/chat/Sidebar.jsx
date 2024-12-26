"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";

const freqData = [
  {
    id: 1,
    prompt: "Can you describe your mood over the past two weeks?",
  },
  {
    id: 2,
    prompt: "Do you have any unexplained aches or pains?",
  },
  {
    id: 7,
    prompt:
      "Do you feel tired or have low energy, even after resting?",
  },
];

function SideBar({ handleFrqClick }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth <= 991 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 991;
      setSidebarOpen(!isSmallScreen);
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef, setSidebarOpen]);

  return (
    <div className="w-[8%] lg:min-w-[20%] lg:max-w-[20%] bg-gray-600 h-full">
      <div className="lg:hidden flex flex-col items-center p-4 bg-gray-600 h-full">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars className="text-white text-2xl" />
        </button>
      </div>
      <div
        ref={sidebarRef}
        className={`fixed lg:relative top-0 left-0 h-full bg-gray-600 px-[5px] py-[5px] flex flex-col justify-start transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0  z-50`}
      >
        <div className="px-[30px] md:px-[50px] my-3 flex items-center justify-center my-6 ">
          <Image
            src="/assets/images/updated-logo.png"
            width={150}
            height={150}
            alt="logo"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        
        </div>
        <hr />
        <div className="text-white px-4 py-2 mt-5">
          <h3 className="text-xl font-bold mb-4 text-indigo-200 text-center">
            Frequently Asked Me
          </h3>
          <div className="space-y-2 overflow-y-auto max-h-[70vh] py-1">
            {freqData?.map((item) => {
              return (
                <div
                  className={`bg-gray-700 p-2 rounded-md cursor-pointer hover:text-indigo-200 hover:font-[500]`}
                  key={item.id}
                  onClick={() => {
                    setSidebarOpen(false);
                    handleFrqClick(item.prompt);
                  }}
                >
                  {item.prompt}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
