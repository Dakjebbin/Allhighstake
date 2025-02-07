// components/Footer.tsx
"use client";
// import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0A1012] text-white py-16 mt-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            {/* <h2 className="text-red-600 text-xl mb-4">
              <Image
                src="/logo1.png"
                alt="Logo"
                width={150}
                height={20}
                className="h-14 w-14"
              />
            </h2> */}
            <div className="text-slate-400 text-2xl font-semibold mb-4">
              ALL<span className="text-red-600">HIGH</span>STAKE
            </div>

            <p className="text-gray-400 mb-4 max-w-md">
              Experience thrill, excitement, and big wins with the most trusted
              betting platform. Bet on sports, live games, and casino action
              with unbeatable odds. Play smart, win big!
            </p>
            <p className="text-gray-400 uppercase text-sm tracking-wider">
              CALL CENTER: +234 901 645 832
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-red-600 text-xl mb-6">Quick links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white uppercase text-sm tracking-wider"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white uppercase text-sm tracking-wider"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white uppercase text-sm tracking-wider"
                >
                  PACKAGES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white uppercase text-sm tracking-wider"
                ></a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-red-600 text-xl mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white uppercase text-sm tracking-wider"
                >
                  Sure Odds
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white uppercase text-sm tracking-wider"
                >
                  Live Betting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white uppercase text-sm tracking-wider"
                >
                  Fast Payouts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white uppercase text-sm tracking-wider"
                >
                  24/7 Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2023 Allhighstake, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
