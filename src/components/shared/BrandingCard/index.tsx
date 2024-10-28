import React from "react";
import { BrandingPackage } from "../constants";

interface BrandingCardProps {
   brandingPackage: BrandingPackage;
}

const BrandingCard: React.FC<BrandingCardProps> = ({ brandingPackage }) => {
   return (
      <div className="border border-gray-300 rounded-lg p-6 max-w-md w-full shadow-lg bg-white font-sans transition-transform duration-200 hover:scale-105 hover:shadow-xl">
         <h2 className="text-xl font-bold mb-2 text-gray-800">{brandingPackage.name}</h2>
         <p className="text-green-700 font-bold text-lg mb-1">{brandingPackage.cost}</p>
         <p className="text-gray-600 text-sm font-medium mb-4">
            Delivery: <span className="font-normal">{brandingPackage.delivery}</span>
         </p>
         <div>
            <h4 className="text-base font-semibold text-gray-700 mb-3">Included Services:</h4>
            <ul className="list-disc pl-5 space-y-2">
               {brandingPackage.services.map((service, index) => (
                  <li
                     key={index}
                     className="text-sm text-gray-700"
                  >
                     {service}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default BrandingCard;
