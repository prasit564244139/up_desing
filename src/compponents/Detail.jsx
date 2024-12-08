const Detail = () => {
    const DetailAbout = `เรา UP-Design&Consult เป็นบริษัทรับสร้างบ้าน ที่ให้บริการออกแบบและก่อสร้างบ้านครบวงจร 
    สำหรับทุกท่านที่ต้องการมีบ้านที่สวย อยู่สบาย ราคาถูกใจ พร้อมดูแลท่านด้วยทีมงานคุณภาพทั้งสถาปนิก วิศวกร และทีมช่างที่มีประสบการณ์การรับสร้างบ้าน เพื่อจะทำให้ท่านได้บ้านสวย ถูกใจทุกคนในครอบครัว`;
    
    const Logo = '/Logo.jpg';

    return (
      <div className="bg-white text-black h-auto">
        <div className="grid p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center items-center">
                <img src={Logo}  alt="" className="max-w-48 md:max-w-96" />
              
            </div>
            <div className="md:mr-20">
              <div className="font-custom text-xl md:text-2xl text-rose-800 font-bold">เกี่ยวกับเรา</div>
              <div className="text-3xl md:text-5xl lg:text-6xl text-black font-bold">
                รับสร้างบ้าน<br />ออกแบบบ้าน<br />ด้วยความใส่ใจ
              </div>
              <div className="text-base md:text-lg lg:text-xl text-black mt-5 mr-5">
                {DetailAbout}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Detail;
  