const Card = ({ title, image }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
      </div>
    );
  };
  
  export default Card;
  