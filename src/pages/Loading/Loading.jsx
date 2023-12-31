import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen  absolute top-[-2.2%] left-0  bg-gray-200 flex justify-center items-center">
      <svg className="animate-bounce w-16 h-16 "></svg>
    </div>
  );
};

export default Loading;
