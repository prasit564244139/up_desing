const SerivecHome = () =>{
    
    const Icon = [
        '/2.jpg',
        '/icon_idea.png',
        '/icon_tools.png'
    ]

    const TextDetail = [
      `รับออกแบบงานสถาปัตยกรรมและงานตกแต่งภายใน
      (เช่น บ้านพักอาศัย,ออฟฟิศ,โรงงาน)`,
      `ให้คำปรึกษา-ตรวจสอบแก้ไข-ควบคุม
      ตั้งแต่งานออกแบบไปจนถึงงานก่อสร้าง`
    ]

    return(
        <div className="text-black ">
          <div className="grid text-center p-3">
            <div className="text-[48px]  m-3">
              UP-Desing&Consult <span className="text-rose-800">SERVICES</span>
            </div>
            
            {/* ปรับรูปแบบ Grid ให้ responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
              <div className="order-2 md:order-1 flex flex-col items-center justify-center text-center">
                <div className="text-[36px]">Design</div>
                <div className="text-[24px]">{TextDetail[0].split("\n").map((line,index) => (
                  <p key={index}>{line}</p>
                ))}</div>
              </div>
              <div className="order-1 md:order-2 flex items-center justify-center md:justify-start">
                <img className="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] object-fill" src={Icon[0]} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
              <div className=" flex items-center justify-center md:justify-end">
                <img className="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] object-fill" src={Icon[0]} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-[30px]">Project Consultant</div>
                <div className="text-[24px]">{TextDetail[1].split("\n").map((line,index) => (
                  <p key={index}>{line}</p>
                ))}</div>
              </div>
            </div>

          </div>
        </div>

    );
}

export default SerivecHome