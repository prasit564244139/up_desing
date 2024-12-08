import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const ProjectsDetail = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-3">
            <img className="p-1" src="/2.jpg" alt="" />
            <img className="p-1" src="/1.jpg" alt="" />
            <img className="p-1" src="/3.jpg" alt="" />
        </div>
        <div className="p-4">
            <div></div>
            <div><span className="text-rose-700 font-bold">Project : </span>K'Kamrai & Family's Residence</div>
            <div><span className="text-blue-900 font-bold">Location : </span>Nawong , Phetchaburi</div>
            <div><span className="text-pink-900 font-bold">พื้นที่ทั้งหมด : </span>400 ตร.ว</div>
            <div><span className="text-green-800 font-bold">พื้นที่ใช้สอย</span> 540 ตร.ม</div>
            <div className="text-indigo-500 font-bold">รายละเอียด</div>
            <div>ที่จอดรถรวม 5 คัน  <br />
                อาคาร A : 5 ห้องนอน 5 ห้องน้ำ <br />
                อาคาร B : 2 ห้องนอน 2 ห้องน้ำ <br />
                งานออกแบบ Project บ้านพักอาศัย 2 อาคารสำหรับครอบครัวใหญ่<br />
                ภายใต้โจทย์ที่ทางเจ้าของอยากได้บ้านในที่ดินเดียวกัน <br />
                และต้องการให้ตัวอาคารมีความ Modern เรียบง่าย<br />
                แต่ยังคงเส้นสายที่มี Design บนตัวอาคารโทรสี Off-White<br />
                รวมถึงการจัดวสง Space ของตัวอาคาร ทั้งภายนอนกแลภายใน<br />
                โดยคำนึงถึงบริบทของพื้นที่ เพื่อให้ได้ Function ที่ตอบโจทย์ทั้งพื้นฐานการอาศัยและการออกแบบ<br />
            </div> 
            <div className="flex justify-start mt-5">
              <a href="https://www.facebook.com/share/p/mSi2gJBrdS3VNE7e/" target="_blank" rel="noopener noreferrer"> {/* เพิ่มลิงก์ที่นี่ */}
                <FontAwesomeIcon icon={faFacebook} size="3x" className="text-blue-600 mb-4" />
              </a>
            </div>
        </div>
      </div>
    );
};

export default ProjectsDetail;
