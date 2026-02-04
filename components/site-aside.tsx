"use client";

import Image from "next/image";

export default function SiteAside() {
  return (
    <aside className="hidden sm:flex fixed top-0 right-0 h-screen w-20 lg:w-24 bg-gradient-to-b from-black to-white z-[50] flex-col items-center py-6 shadow-lg">
      {/* SDA Icon at Top */}
      <div className="mt-4">
        <Image
          src="/sda-icon.png"
          alt="SDA Logo"
          width={36}
          height={36}
          className="object-contain sm:w-8 sm:h-8 lg:w-10 lg:h-10"
        />
      </div>
    </aside>
  );
}
