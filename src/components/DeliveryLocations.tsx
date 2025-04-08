
import { Truck } from "lucide-react";

const DeliveryLocations = () => {
  const locations = [
    "Kanpur",
    "Lucknow",
    "Kanpur Dehat",
    "Unnao",
    "Mahoba",
    "Hamirpur"
  ];

  return (
    <div className="bg-buniyaad-orange/10 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex items-center mr-3 text-buniyaad-dark font-medium">
            <Truck className="h-4 w-4 mr-1 text-buniyaad-orange" />
            <span className="text-sm">We deliver across:</span>
          </div>
          <div className="flex flex-wrap justify-center">
            {locations.map((location, index) => (
              <span key={location} className="text-sm text-buniyaad-dark">
                {location}{index < locations.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLocations;
