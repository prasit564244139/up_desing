import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const Img_Demo = [
        { Type: 1, Img: '/1.jpg' ,NameProject : 'Project1'},
        { Type: 2, Img: '/2.jpg' ,NameProject : 'Project2'},
        { Type: 2, Img: '/3.jpg' ,NameProject : 'Project3'},
        { Type: 2, Img: '/3.jpg' ,NameProject : 'Project4'},
        { Type: 1, Img: '/1.jpg' ,NameProject : 'Project5'},
        { Type: 2, Img: '/2.jpg' ,NameProject : 'Project6'},
        { Type: 2, Img: '/2.jpg' ,NameProject : 'Project7'},
        { Type: 2, Img: '/2.jpg' ,NameProject : 'Project8'},
        { Type: 2, Img: '/2.jpg' ,NameProject : 'Project9'},
        { Type: 2, Img: '/2.jpg' ,NameProject : 'Project10'},
    ];

    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures this runs only once when the component mounts

      
    const [selectedType, setSelectedType] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleFilter = (type) => {
        if (type === selectedType) {
            // ทำสิ่งนี้ถ้าเงื่อนไขเป็นจริง
        } else {
            setIsTransitioning(true); // เริ่มการ Zoom Out
            setTimeout(() => {
                setSelectedType(type);
                setIsTransitioning(false); // กลับมาแสดงภาพ
            }, 280); // ช้าลงที่ 600 มิลลิวินาที
        }
        
    };

    const filteredImages = selectedType === null
        ? Img_Demo
        : Img_Demo.filter(image => image.Type === selectedType);

    return (
        <div>
            <div className="relative w-full h-[150px] overflow-hidden">
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="inset-0 flex items-center justify-center m-1">
                        <div className="text-[36px]">Projects</div>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => handleFilter(null)}
                            className={`${selectedType === null ? 'font-bold ' : ''}`}
                        >
                            Show All
                        </button>
                        <button
                            onClick={() => handleFilter(1)}
                            className={`${selectedType === 1 ? 'font-bold ' : ''}`}
                        >
                            Interior
                        </button>
                        <button
                            onClick={() => handleFilter(2)}
                            className={`${selectedType === 2 ? 'font-bold ' : ''}`}
                        >
                            Exterior
                        </button>
                    </div>
                </div>
            </div>
            <div className="m-6">
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center items-center mb-3 transition-transform duration-600 ${isTransitioning ? 'scale-75' : 'scale-100'}`}>
                {filteredImages.map((img, index) => (
                  <Link to="/ProjectsDetail" key={index} className="relative group"> {/* เพิ่ม class group */}
                    <img src={img.Img} className="w-[400px] md:w-[600px] transition-transform duration-600 object-cover group-hover:opacity-50 transition duration-300 ease-in-out" alt="" />

                    {/* พื้นหลังสีดำเมื่อ hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out"></div>

                    {/* ตัวอักษรที่จะโชว์ตอน hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      <span className="text-white text-[32px]">{img.NameProject}</span>
                    </div>
                  </Link>
                ))}
              </div>              
            </div>


        </div>
    );
};

export default Projects;
