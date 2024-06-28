import Image from 'next/image';
import React from 'react';

interface CardProps {
  src: string;
  alt: string;
  title: string;
  price: number;
  agency: string;
}

const Card: React.FC<CardProps> = ({ src, alt, title, price, agency }) => {
  return (
    <div className="flex w-full sm:w-[400px] h-auto sm:h-[150px] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-full sm:w-[200px] h-[200px] sm:h-full relative">
        <Image
          src={src}
          alt={alt}
          className="object-cover"
          layout="fill"
        />
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h3 className="text-lg text-blue-800  text-shadow-medium font-bold">{title}</h3>
        <p className="text-lg font-semibold text-gray-600 ">Precio: ${price.toLocaleString()}</p>
        <p className="text-sm text-gray-500">Agencia: {agency}</p>
      </div>
    </div>
  );
};

export default Card;
