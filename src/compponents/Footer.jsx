import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () =>{
    
    const Logo = '/Logo.jpg';

    return(
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     
                    <div className="flex  items-center">
                      <img src={Logo} alt="" className="rounded-full h-24 w-24 object-cover" />
                      <h3 className="text-xl font-bold mb-4 p-5">UP - Desing&Consult</h3>
                    </div>

                    {/* ส่วน ที่อยู่*/}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold mb-4">Location</h3>
                        <p>55 หมู่ 5 ตำบลXXXX <br />อำเภอ YYYYY จังหวัด ZZZZZ <br />00000</p>
                    </div>

                    {/* ติดต่อ */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p>091-XXXXXXX(คุณแมน) <br />XXXXXXXXXXXXX@GMAIL.COM</p>
                        <div className="flex justify-start">
                          <a href="https://www.facebook.com/up.uniqueproject" target="_blank" rel="noopener noreferrer"> {/* เพิ่มลิงก์ที่นี่ */}
                            <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white mb-4" />
                          </a>
                        </div>
                    </div>

                </div>

                <div className="mt-8 border-t border-gray-600 pt-4 text-center">
                  <p>&copy; 2024 My Website. All rights reserved.</p>
                </div> 
            </div>  {/* container mx-auto px-4 */}
        </footer>
    );
}

export default Footer