import React from 'react';
import { useParams } from 'react-router-dom'; // Use React Router's useParams

const ArticleDetails = () => {
  const { id } = useParams(); // Get the article ID from the route

  const articles = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/400x400',
      title: 'How to Style Silver Jewellery',
      description: 'Detailed description about styling silver jewellery...',
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/400x400',
      title: '7 Online Jewellery Shopping Mistakes to Avoid',
      description: 'Detailed description about online jewellery shopping mistakes...',
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/400x400',
      title: 'Are Gold Rings Worth the Investment?',
      description: 'Detailed description about gold rings investment...',
    }
  ];

  // Find the article based on the ID
  const article = articles.find((article) => article.id === Number(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <img src={article.imageSrc} alt={article.title} className="w-full h-96 object-cover mb-6" />
      <p className="text-gray-700">{article.description}</p>
    </div>
  );
};

export default ArticleDetails;
