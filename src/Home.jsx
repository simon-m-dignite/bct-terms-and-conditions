import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "BCT - Not found";
  });
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Not Found</h1>
    </div>
  );
};

export default Home;
