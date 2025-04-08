
import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "./ui/button";

const CallPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  
  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      if (!isClosed) {
        setIsVisible(true);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [isClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  if (!isVisible) {
    return (
      <div 
        className="fixed bottom-6 right-6 z-50 bg-buniyaad-orange text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-buniyaad-orange/90 transition-all duration-300"
        onClick={() => setIsVisible(true)}
      >
        <Phone className="h-6 w-6" />
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white rounded-lg shadow-xl p-4 w-80 animate-fade-in border-t-4 border-buniyaad-orange">
      <button 
        onClick={handleClose} 
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X className="h-4 w-4" />
      </button>
      
      <div className="flex items-center mb-3">
        <div className="bg-buniyaad-orange/20 p-2 rounded-full mr-3">
          <Phone className="h-6 w-6 text-buniyaad-orange" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Need help?</h3>
          <p className="text-sm text-gray-600">Call us now</p>
        </div>
      </div>
      
      <div className="mb-4">
        <a 
          href="tel:+917651853974" 
          className="text-lg font-semibold text-buniyaad-dark flex items-center justify-center bg-buniyaad-orange/10 py-2 rounded hover:bg-buniyaad-orange/20 transition-colors"
        >
          <Phone className="h-4 w-4 mr-2" /> +91 7651853974
        </a>
      </div>
      
      <div className="text-center">
        <a 
          href="https://wa.me/917651853974" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors w-full"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="h-5 w-5 mr-2"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default CallPopup;
