import React from 'react'; 
import { useNavigate, useParams } from 'react-router-dom';

const products = [
    {
      image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Ring.jpg',
      title: 'Rings',
      description: 'Engagement Rings | Solitaire Rings | Dailywear Rings',
    },
    {
      image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Nosepin.jpg',
      title: 'Nose Pin',
      description: 'Nose Ring | Gold Nose Pin | Diamond Nose Pin | Everyday Nose Pin',
    },
    {
      image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Earring.jpg',
      title: 'Earrings',
      description: 'Studs | Hoops & Huggies | Drops & Danglers',
    },
    {
        image: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/Others/Aptest/05/App+317x216_Earring.jpg',
        title: 'Earrings',
        description: 'Studs | Hoops & Huggies | Drops & Danglers',
      },
  ];

  
const AllCategoryProducts = () => {

const navigation = useNavigate()

const {type} = useParams();
console.log('category from params',type)

  return (
    <div className="container mx-auto p-4 m-32">
      <h1 className="text-2xl font-bold text-center mb-6">All Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            // className="border rounded-lg shadow-md p-4 flex flex-col items-center"
            data-aos="zoom-in"
            className="  cursor-pointer p-4 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"

          >
            <img
              src={product.image}
              alt={product.title}
            //   className="w-20 h-20 object-contain mb-4"
              className="rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-sm text-purple-500">{product.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <h2 className="text-lg font-semibold cursor-pointer hover:underline">View All</h2>
      </div>
    </div>
  );
};

export default AllCategoryProducts;
