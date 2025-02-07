"use client";

import Image from "next/image";

const DriverSafety = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Content */}
        <div className="bg-white p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Exclusive Bets,
            <br />
            Elite Wins!
          </h2>
          <p className="uppercase text-red-600 tracking-wider text-sm font-medium mb-4">
            YOUR VIP TICKET TO UNLIMITED SUCCESS
          </p>
          <p className="text-black mb-8 leading-relaxed">
            Experience the ultimate betting adventure with unbeatable odds,
            instant payouts, and a secure platform designed for winners. Whether
            you are a seasoned pro or a first-time player, the thrill of victory
            is just a bet away. Play smart, win big, and cash out fast!
          </p>
          <a href="/signup">
            <button className="group inline-flex items-center text-black border border-red-600 px-6 py-3 hover:bg-red-600 hover:text-white transition-all duration-300 w-fit">
              <span className="mr-2">Start now</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">
                +
              </span>
            </button>
          </a>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] rounded-xl md:h-auto">
          <Image
            src="/p4.jpg"
            alt="Professional driver in mask"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* TOP Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 text-[#FF6B35] uppercase text-sm tracking-wider font-medium hover:text-[#E85A2C] transition-colors"
      >
        TOP
      </button>
    </section>
  );
};

export default DriverSafety;
