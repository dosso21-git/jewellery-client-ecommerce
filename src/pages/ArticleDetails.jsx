import React from 'react';
import { useParams } from 'react-router-dom';
const ArticleDetails = () => {
  const { id } = useParams();
  const articles = [
    {
      id: 1,
      imageSrc: '/ai-generated-8659741_640.jpg',
      title: 'How to Style Silver Jewellery',
      preDescription: 'Silver jewellery has long been an elegant choice for both casual and formal occasions. Understanding how to match silver with your outfits can elevate your fashion game significantly.',
      description: 'Silver jewellery offers a timeless charm that can be paired with almost any outfit. Whether it\'s a simple silver necklace or an intricate bracelet, the right styling is essential for making a statement. Layering multiple silver necklaces or pairing them with contrasting metals like gold can create a modern, chic look. Additionally, silver pieces with gemstones or intricate designs add a unique flair to your overall attire. Don\'t be afraid to mix and match textures and designs to create a personalized look. Consider the occasion, your outfit, and your mood when selecting your pieces. Silver jewellery works for both casual and formal occasions, making it a versatile addition to your collection.',
      subDescription: 'Styling tip: Silver jewellery works great with cool-toned outfits such as blue, green, or purple. You can also pair silver with neutral tones like white, black, or even pastel shades for a classy, minimalistic appearance. Combining silver jewellery with other metallics such as gold or rose gold creates a modern, bold statement. To add more depth to your look, consider layering different silver pieces or adding small accents like rings and bracelets. Silver jewellery can be both understated and eye-catching depending on how you style it, so experiment to find your unique style combination.'
    },
    {
      id: 2,
      imageSrc: '/gold-necklace-with-necklace-earrings_752325-8523.avif',
      title: '7 Online Jewellery Shopping Mistakes to Avoid',
      preDescription: 'Shopping for jewellery online can be convenient, but it also comes with certain risks. Knowing how to navigate these challenges can save you from costly mistakes.',
      description: 'Online jewellery shopping has grown in popularity, but it also brings specific challenges that buyers must be aware of. One common mistake is not verifying the authenticity of the seller. Always read customer reviews and check for seller ratings before making a purchase. Another mistake is overlooking important details like the size, material, and weight of the item. Ensure that the product descriptions are thorough and accurate. Many buyers forget to check the return policy, which can lead to frustration if the product doesn\'t meet expectations. Lastly, price comparisons are vital. By reviewing multiple websites, you can find the best deal without compromising on quality or safety.',
      subDescription: 'Avoid these common mistakes: Make sure to always check for warranties and certifications, particularly when purchasing precious metals or gemstones. Checking for authenticity certificates is essential when buying expensive jewellery. Another tip is to be cautious of "too good to be true" deals, which are often a sign of scams or counterfeit products. Pay attention to the terms and conditions, as hidden fees or limited return windows can cause issues. Always verify the website\'s security to ensure that your personal information is protected during the transaction. Taking these precautions can ensure a smooth and satisfactory shopping experience.'
    },
    {
      id: 3,
      imageSrc: '/images.jpg',
      title: 'Are Gold Rings Worth the Investment?',
      preDescription: 'Gold rings have been treasured for centuries, not only as adornments but also as investments. Understanding the factors that affect the value of gold rings can help you make smarter buying decisions.',
      description: 'Gold rings remain a popular choice for both their timeless appeal and as an investment opportunity. Over time, the value of gold tends to appreciate, which makes gold jewellery a relatively stable asset to own. However, the investment potential of a gold ring varies depending on several factors, such as the ring\'s design, karat weight, and purity of the gold. While 24-karat gold is the purest form, it is also softer and less durable for daily wear. On the other hand, 18-karat and 14-karat gold rings are more durable due to the addition of other metals, but this also affects their intrinsic value. Always pay attention to market trends and historical gold prices before purchasing.',
      subDescription: 'Pro tip: When buying gold rings for investment purposes, always check for hallmarks that indicate gold purity. Additionally, request a certificate of authenticity from the seller to confirm that you are purchasing a genuine gold item. Another key consideration is the craftsmanship and design, which can influence the ring\'s resale value. Some pieces may also carry additional value due to historical significance or sentimental worth. Gold rings often hold both financial and emotional value, making them a versatile investment for future generations. Keep track of gold market fluctuations to ensure you are buying at the right time.'
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
      <p className="text-lg text-gray-600 mb-4">{article.preDescription}</p>
      <p className="text-gray-700 mb-4">{article.description}</p>
      <p className="text-sm text-gray-500 italic">{article.subDescription}</p>
    </div>
  );
};

export default ArticleDetails;
