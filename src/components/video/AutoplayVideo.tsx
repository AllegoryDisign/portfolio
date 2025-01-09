import React from "react";

const AutoplayVideo = ({
  path,
  className,
}: {
  path: string;
  className: string;
}) => {
  return (
    <video
      className={className}
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
