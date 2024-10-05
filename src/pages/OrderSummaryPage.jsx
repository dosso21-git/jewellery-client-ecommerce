import React from "react";

const OrderSummary = () => {

    const orders = [
        {
          id: "334902461",
          orderDate: "Feb 16, 2022",
          estimatedDelivery: "May 14, 2022",
          paymentMethod: "Visa **56",
          deliveryAddress: {
            address: "847 Jewess Bridge Apt. 174",
            city: "London",
            country: "UK",
            phone: "474-769-3919",
          },
          products: [
            {
              name: "MacBook Pro 14”",
              details: "Space Gray | 32GB | 1TB",
              price: 2599.0,
              image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02111-1YP9SS_11_listfront.jpg", // Replace with actual image path
            },
            {
              name: "iPad Pro 12.9”",
              details: "Space Gray | 2TB | Cellular",
              price: 2399.0,
              image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02111-1YP9SS_11_listfront.jpg", // Replace with actual image path
            },
            {
              name: "AirPods Max",
              details: "Space Gray",
              price: 549.0,
              image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02111-1YP9SS_11_listfront.jpg", // Replace with actual image path
            },
          ],
          subtotal: 5547.0,
          discountPercentage: 20,
          discountAmount: 1109.4,
          tax: 221.88,
          total: 4659.48,
        },
        {
          id: "334902462",
          orderDate: "Mar 16, 2022",
          estimatedDelivery: "Jun 14, 2022",
          paymentMethod: "MasterCard **45",
          deliveryAddress: {
            address: "123 Baker Street Apt. 89",
            city: "Manchester",
            country: "UK",
            phone: "123-456-7890",
          },
          products: [
            {
              name: "MacBook Air",
              details: "Space Gray | 16GB | 512GB",
              price: 1999.0,
              image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02111-1YP9SS_11_listfront.jpg",
            },
            {
              name: "Apple Watch Series 7",
              details: "Silver | GPS",
              price: 399.0,
              image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02111-1YP9SS_11_listfront.jpg",
            },
          ],
          subtotal: 2398.0,
          discountPercentage: 10,
          discountAmount: 239.8,
          tax: 95.92,
          total: 2254.12,
        },
      ];
      
    

      
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto   ">
      {orders.map((order) => (
        <div key={order.id} className="mb-10  bg-white shadow-lg rounded-lg p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Order ID: {order.id}</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Track order</button>
          </div>

          {/* Order Date and Delivery Estimate */}
          <div className="flex justify-between mb-4">
            <p className="text-gray-600">Order date: {order.orderDate}</p>
            <p className="text-green-600">Estimated delivery: {order.estimatedDelivery}</p>
          </div>

          {/* Product List */}
          <div className="bg-white  rounded-lg p-4">
            {order.products.map((product) => (
              <div key={product.name} className="flex justify-between items-center border-b pb-4 mb-4">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>
                <p className="font-medium">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Payment and Delivery Info */}
          <div className="flex flex-col md:flex-row justify-between items-start mt-6">
            <div className="mb-4 md:mb-0">
              <h2 className="font-medium">Payment</h2>
              <p>{order.paymentMethod}</p>
            </div>

            <div>
              <h2 className="font-medium">Delivery</h2>
              <p>{order.deliveryAddress.address}</p>
              <p>{order.deliveryAddress.city}, {order.deliveryAddress.country}</p>
              <p>{order.deliveryAddress.phone}</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white  rounded-lg p-4 mt-6">
            <div className="flex justify-between border-b pb-2 mb-2">
              <p className="text-gray-600">Subtotal</p>
              <p>${order.subtotal.toFixed(2)}</p>
            </div>

            <div className="flex justify-between border-b pb-2 mb-2">
              <p className="text-gray-600">Discount ({order.discountPercentage}%)</p>
              <p>-${order.discountAmount.toFixed(2)}</p>
            </div>

            <div className="flex justify-between border-b pb-2 mb-2">
              <p className="text-gray-600">Tax</p>
              <p>+${order.tax.toFixed(2)}</p>
            </div>

            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>${order.total.toFixed(2)}</p>
            </div>
          </div>

          {/* Need Help */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <a href="#" className="text-blue-500 mb-2 md:mb-0">Order Issues</a>
            <a href="#" className="text-blue-500 mb-2 md:mb-0">Delivery Info</a>
            <a href="#" className="text-blue-500">Returns</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderSummary;
