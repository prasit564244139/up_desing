import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN'); // ตั้งค่าเริ่มต้นเป็นภาษาอังกฤษ

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle state
  };

  

  const  toggleLanguage   = () => {
    setLanguage(prevLanguage => (prevLanguage === 'EN' ? 'TH' : 'EN'));
  };

  const Logo = '/Logo.jpg';

  // ฟังก์ชันเลื่อนขึ้นไปที่ด้านบนสุด
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className='p-2 pl-10 top-0 left-0 w-full z-10 sm:pl-5'>
      <div className="flex items-center justify-between"> {/* ใช้ justify-between */}
        {/* โลโก้ */}
        <img src={Logo} alt="Logo" className="rounded-full h-10 w-10 md:ml-12 md:h-16 md:w-16 object-cover" />

        {/* เมนูนำทาง */}
        <ul className="hidden md:flex space-x-10 flex-grow justify-center"> {/* จัดตำแหน่งให้ตรงกลาง */}
          <Link to="/" onClick={scrollToTop}>
            <li><a href="#" className="">{language === 'EN' ? 'HOME' : 'หน้าแรก'}</a></li>
          </Link>
          <Link to="/About" onClick={scrollToTop}>
            <li ><a href="#" className="">{language === 'EN' ? 'ABOUT' : 'เกี่ยวกับ'}</a></li> 
          </Link> 
          <Link to="/Projects" onClick={scrollToTop}>
            <li><a href="#" className="">{language === 'EN' ? 'PROJECT' : 'โครงการ'}</a></li>
          </Link>
          <li onClick={scrollToTop}><a href="#" className="">{language === 'EN' ? 'CONTACT US' : 'ติดต่อเรา'}</a></li> 
        </ul>

        {/* ปุ่มเปลี่ยนภาษา */}
        <button 
          onClick={toggleLanguage}
          className="pr-12  ml-4"
        >
          {language}
        </button>

        {/* ปุ่ม Toggle Menu สำหรับมือถือ */}
        <div className="md:hidden">
          <button id="menu-toggle" className="" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* เมนู Dropdown สำหรับหน้าจอเล็ก */}
        {isMenuOpen && (
          <ul className="flex-col md:hidden absolute left-0 top-12  bg-white w-full py-3 z-10">
            <Link to="/" onClick={scrollToTop}>
              <li><a href="#" className="block text-center">HOME</a></li>
            </Link> 
            <li onClick={scrollToTop}><a href="#" className="block text-center">ABOUT</a></li>
            <Link to="/Projects" onClick={scrollToTop}>
              <li><a href="#" className="block text-center">PROJECT</a></li>
            </Link> 
            <li onClick={scrollToTop}><a href="#" className="block text-center">CONTACT US</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
