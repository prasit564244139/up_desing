import { useEffect } from "react"

const About = () =>{

    useEffect(() => {
      window.scrollTo(0,0);
    },[]);

    const imgs = '/2.jpg'

    const TextDetail = [
    `requirements of each project.
    Thailand 
    International Union of Architects.
    International Union of Architects.
    International Union of Architects.
    International Union of Architects.
    International Union of Architects.
    International Union of Architects.`
    ]
    return(
      <div className="mb-5">
        <div className="mb-5 relative w-full h-[200px] md:h-[300px] lg:h-[300px] overflow-hidden pl-14 pr-14">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full h-full">
              <img
                src={imgs}
                className="w-full h-full object-cover"
              />
            </div> 
          </div>
        </div>
        <div className="pl-14 pr-14 mb-5 flex-col items-center justify-center text-center">
        {TextDetail[0].split("\n").map((line,index) => (
                  <p key={index}>{line}</p>
                ))}
        </div>
        <div className=" flex justify-center items-center">
          <img className="grayscale w-[800px] h-[300px]"  src={imgs} alt="" />
        </div>
      </div>
      
    );
}

export default About