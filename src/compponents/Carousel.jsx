import { useState,useEffect } from 'react';


function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/2.jpg',
    '/1.jpg',
    '/2.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // เปลี่ยนทุก 3 วินาที

    return () => clearInterval(interval); // ล้าง interval เมื่อคอมโพเนนต์ถูกยกเลิก
  }, [images.length]);
  {/* 
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  */}

  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[550px] overflow-hidden pl-14 pr-14">
      {/* Carousel Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-full h-full">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Navigation Buttons 
        <button onClick={goToPrevious} className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-r">
          {'<'}
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-l">
          {'>'}
        </button>
        */}
      </div>
      {/* Pagination Dots */}
      <div className="absolute bottom-4 w-full flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
