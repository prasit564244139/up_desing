import { Link } from 'react-router-dom';
import Card from "./Card";

const Blueprint = () => {
  const cardData = [
    {
      title: "แบบที่ 1", 
      image: "/2.jpg" // เส้นทางไปยังรูปภาพในโฟลเดอร์ public
    },
    {
      title: "แบบที่ 2", 
      image: "/2.jpg" // หรือสามารถเปลี่ยนเป็นรูปอื่น
    },
    {
      title: "แบบที่ 3", 
      image: "/2.jpg" // หรือสามารถเปลี่ยนเป็นรูปอื่น
    },
    {
      title: "แบบที่ 4", 
      image: "/2.jpg" // หรือสามารถเปลี่ยนเป็นรูปอื่น
    },
    {
      title: "แบบที่ 5", 
      image: "/2.jpg" // หรือสามารถเปลี่ยนเป็นรูปอื่น
    },
    {
      title: "แบบที่ 6", 
      image: "/2.jpg" // หรือสามารถเปลี่ยนเป็นรูปอื่น
    },
    {
      title: "แบบที่ 7", 
      image: "/2.jpg" // หรือสามารถเปลี่ยนเป็นรูปอื่น
    },
    {
      title: "แบบที่ 8", 
      image: "/2.jpg" // หรือสามารถเปลี่ยนเป็นรูปอื่น
    }
  ];

  return (
    <div className="justify-items-center items-center m-5">
        <h2 className="text-4xl font-bold m-3  text-center">
              PROJECT
            </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center"> 
            {cardData.map((card, index) => (
              <Card 
                key={index} 
                title={card.title} 
                image={card.image} 
              />
            ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link to="/Projects">
            <button className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 rounded border-none">
              ดูทั้งหมด
            </button>
          </Link>
          
        </div>
    </div>
    
  );
};

export default Blueprint;
