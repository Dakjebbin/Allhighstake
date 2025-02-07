import React from "react";

const ServiceGrid = () => {
  const services = [
    {
      title: "Flexible Betting Options",
      description:
        "Bet big or small—there’s something for everyone! Enjoy flexible betting options that match your budget, ensuring you never miss out on the action.",
    },
    {
      title: "Seamless User Experience",
      description:
        "We offer a sleek and intuitive betting platform, making it easy for you to place bets anytime, anywhere with total convenience.",
    },
    {
      title: "Highest Odds Guaranteed",
      description:
        "Get the most competitive odds in the market! We ensure you get the best value for your bets, maximizing your potential winnings.",
    },
    {
      title: "24/7 Betting Access",
      description:
        "The game never stops, and neither do we! Bet on your favorite sports, casino games, and more—24/7 access to non-stop action.",
    },
    {
      title: "Expert Betting Insights",
      description:
        "Our professional tipsters and analysts provide top-tier predictions and insights to help you make smarter bets and increase your chances of winning.",
    },
    {
      title: "Instant Payouts",
      description:
        "Quick deposits and lightning-fast withdrawals ensure you get your winnings instantly. No delays, just seamless transactions.",
    },
  ];

  // First row of services
  const topRow = services.slice(0, 3);
  // Second row of services
  const bottomRow = services.slice(3, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 mb">
        {topRow.map((service, index) => (
          <div
            key={index}
            className={`
              p-6
              ${index !== 2 ? "md:border-r" : ""} 
              border-b
              border-gray-200
            `}
          >
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-medium text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
              {/* <button className="flex items-center text-red-600 hover:underline font-semibold decoration-red-600  mt-4 uppercase text-sm tracking-wider ">
                + VIEW MORE
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {bottomRow.map((service, index) => (
          <div
            key={index}
            className={`
              p-6
              ${index !== 2 ? "md:border-r" : ""} 
              border-gray-200
              ${index < bottomRow.length - 1 ? "border-b md:border-b-0" : ""}
            `}
          >
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-medium text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
              {/* <button className="flex items-center text-red-600 hover:underline font-semibold decoration-red-600  mt-4 uppercase text-sm tracking-wider">
                + VIEW MORE
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
