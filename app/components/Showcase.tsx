"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const CarSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cars = [
    {
      name: "VIP",
      price: "200",
      description: " Place Your Bets & Cash Out Big.",
      image: "/slide2.jpg",
    },
    {
      name: "VIP",
      price: "150",
      description: "High-Stakes Predictions, Huge Rewards!.",
      image: "/slide3.jpg",
    },
    {
      name: "VIP",
      price: "120",
      description: " Bet on Your Favorite Players.",
      image: "/g3.jpg",
    },
    {
      name: "VIP",
      price: "80",
      description: " Win Up to $1,000 Instantly!.",
      image: "/g2.jpg",
    },
    {
      name: "VIP",
      price: "500",
      description: "Live Odds, Real-Time Payouts.",
      image: "/g4.jpg",
    },
    {
      name: "VIP",
      price: "300",
      description: "Start Winning Now!.",
      image: "/g1.jpg",
    },
  ];

  useEffect(() => {
    // ⏳ Slide interval set to 5 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % cars.length);
    }, 5000); // <-- this to change when it scrolls 5000 (5 sec)

    return () => clearInterval(timer);
  }, [cars.length]);

  const visibleCars = [...cars, ...cars].slice(currentIndex, currentIndex + 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleCars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
  );
};

interface CarCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
}

const CarCard: React.FC<CarCardProps> = ({
  name,
  price,
  description,
  image,
}) => (
  <div className="bg-[#FAF9F6] p-8 flex flex-col items-center">
    <Image
      src={image} // 👈 Now each car has its own image
      alt={name}
      width={200}
      height={200}
      className="w-full h-48 object-contain mb-6"
    />
    <h3 className="text-2xl font-medium text-gray-900 mb-2">{name}</h3>
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <Star key={index} className="w-5 h-5 fill-red-600" />
      ))}
    </div>
    <p className="text-gray-600 text-center mb-4">{description}</p>
    <div className="flex items-baseline mb-6">
      <span className="text-4xl font-light">$</span>
      <span className="text-5xl font-light">{price}</span>
      <span className="text-gray-600 ml-2">/ Per bet</span>
    </div>
    <button className="border border-red-600 rounded-2xl font-normal text-black py-3 px-6 w-full hover:bg-red-600 hover:text-black transition-colors">
      + MORE DETAILS
    </button>
  </div>
);

export default CarSlider;
