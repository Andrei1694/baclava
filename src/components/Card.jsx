const Card = ({ imageUrl, title, price, description }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">dasdsadas</div>
          <p className="text-gray-700 text-base">adsasddas</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
         asdasdads
          </span>
        </div>
      </div>
    );
  };
  
  export default Card;