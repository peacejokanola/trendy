import React from 'react';
import { Link } from 'react-router-dom';
interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}
const ProductCard = ({
  id,
  name,
  description,
  price,
  image
}: ProductCardProps) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <div className="h-64 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">{price}</span>
          <Link to={`/products/${id}`} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200">
            View Details
          </Link>
        </div>
      </div>
    </div>;
};
export default ProductCard;