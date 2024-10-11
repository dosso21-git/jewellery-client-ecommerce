import React from 'react';
import { useNavigate } from 'react-router-dom'; // For React Router

const ArticleCard = ({ id, imageSrc, title, description }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button onClick={handleReadMore} className="text-blue-500 hover:underline">
          Read more
        </button>
      </div>
    </div>
  );
};

const ArticlesGrid = () => {
  const articles = [
    {
      id: 1,
      imageSrc: '/ai-generated-8659741_640.jpg', // Remove '/public'
      title: 'How to Style Silver Jewellery',
      description: 'Did you know that in Australia the jewellery industry is worth almost $3 billion annually? That\'s a lot of sparkles...'
    },
    {
      id: 2,
      imageSrc: '/gold-necklace-with-necklace-earrings_752325-8523.avif',
      title: '7 Online Jewellery Shopping Mistakes to Avoid',
      description: 'Like so many other products, jewellery sales are increasingly moving online rather than taking place in a traditional brick-and-mortar store...'
    },
    {
      id: 3,
      imageSrc: '/images.jpg',
      title: 'Are Gold Rings Worth the Investment?',
      description: 'Gold rings have been a much sought-after jewellery accessory for millennia, with some of the oldest rings in gold found...'
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            imageSrc={article.imageSrc}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesGrid;
