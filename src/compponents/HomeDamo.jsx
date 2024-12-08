const HomeDamo = () =>{

    const Product = [
        '/2.jpg',
        '/2.jpg',
        '/2.jpg',
        '/2.jpg'
    ]

    return(
        <div className="bg-slate-200 text-black ">
            <div className="grid text-center p-3">
                <h2 className="text-4xl font-bold m-3">ตัวอย่างผลงาน</h2>
                <div className="grid lg:grid-cols-4 sm:grid-cols-4 gap-4">
                  <img src={Product[0]} alt="" className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" /> 
                  <img src={Product[1]} alt="" className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" /> 
                  <img src={Product[2]} alt="" className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" /> 
                  <img src={Product[3]} alt="" className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hidden sm:block" /> 
                </div> 
                <div className="flex justify-center mt-3">
                <button className="bg-black hover:bg-slate-500 text-white font-bold py-2 px-4 rounded border-none">
                  ดูทั้งหมด
                </button>
                </div>
            </div>

        </div>
    );
}

export default HomeDamo