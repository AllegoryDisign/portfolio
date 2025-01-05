import React from "react";

const AutoplayVideo = ({ path }: { path: string }) => {
  return (
    <video
      className="flex w-full h-full absolute top-0 left-0"
      autoPlay
      loop
      muted
      style={{
        objectFit: "cover",
      }}
    >
      <source src={`${process.env.NEXT_PUBLIC_BASE_URL}${path}`} />
      Your browser does not support the video tag...
    </video>
  );
};

export default AutoplayVideo;
