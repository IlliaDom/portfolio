import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export const LoaderBoundary = ({ children }) => {
  const { progress } = useProgress();
  return (
    <div>
      {progress !== 100 ? (
        <div className="absolute w-[100%] h-[100%] mx-auto z-10 flex flex-col justify-center items-center bg-black">
          <div className="custom-loader" />
          <p className="text-lg font-bold mt-2">{progress.toFixed(0)}%</p>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Loader;
