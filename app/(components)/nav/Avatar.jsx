import Image from "next/image";
import React from "react";

const avatar = () => {
  return (
    <div>
      <Image
        src="/images/steve.jpg"
        alt="avatar"
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
  );
};

export default avatar;
