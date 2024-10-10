// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AddAddress = () => {
//   const [addresses, setAddresses] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentAddress, setCurrentAddress] = useState({ id: "", street: "", city: "", zip: "" });
  
//   // Fetch all addresses
//   const getAddresses = async () => {
//     try {
//       const response = await axios.get('/getaddresses');
//       setAddresses(response.data.addresses);
//     } catch (error) {
//       console.error('Error fetching addresses:', error);
//     }
//   };

//   // Add new address
//   const addAddress = async () => {
//     try {
//       const response = await axios.post('/addaddress', currentAddress);
//       setAddresses([...addresses, response.data.address]);
//       resetForm();
//     } catch (error) {
//       console.error('Error adding address:', error);
//     }
//   };

//   // Update address
//   const updateAddress = async () => {
//     try {
//       const response = await axios.put(`/updateaddress/${currentAddress.id}`, currentAddress);
//       setAddresses(addresses.map(addr => (addr.id === currentAddress.id ? response.data.address : addr)));
//       resetForm();
//     } catch (error) {
//       console.error('Error updating address:', error);
//     }
//   };

//   // Delete address
//   const deleteAddress = async (id) => {
//     try {
//       await axios.delete(`/deleteaddress/${id}`);
//       setAddresses(addresses.filter(addr => addr.id !== id));
//     } catch (error) {
//       console.error('Error deleting address:', error);
//     }
//   };

//   const resetForm = () => {
//     setCurrentAddress({ id: "", street: "", city: "", zip: "" });
//     setIsEditing(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEdit = (address) => {
//     setCurrentAddress(address);
//     setIsEditing(true);
//   };

//   useEffect(() => {
//     getAddresses();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold">Addresses</h3>
//         <div className="mt-4">
//           {addresses.map((address) => (
//             <div key={address.id} className="flex justify-between items-center p-2 border-b">
//               <div>
//                 <p>{address.street}, {address.city}, {address.zip}</p>
//               </div>
//               <div>
//                 <button onClick={() => handleEdit(address)} className="text-blue-500">Edit</button>
//                 <button onClick={() => deleteAddress(address.id)} className="text-red-500 ml-2">Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-6">
//           <h4 className="text-lg font-semibold">{isEditing ? "Edit Address" : "Add Address"}</h4>
//           <input
//             type="text"
//             name="street"
//             placeholder="Street"
//             value={currentAddress.street}
//             onChange={handleInputChange}
//             className="border rounded p-2 w-full mt-2"
//           />
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={currentAddress.city}
//             onChange={handleInputChange}
//             className="border rounded p-2 w-full mt-2"
//           />
//           <input
//             type="text"
//             name="zip"
//             placeholder="Zip Code"
//             value={currentAddress.zip}
//             onChange={handleInputChange}
//             className="border rounded p-2 w-full mt-2"
//           />
//           <button
//             onClick={isEditing ? updateAddress : addAddress}
//             className="bg-blue-500 text-white rounded p-2 mt-4"
//           >
//             {isEditing ? "Update Address" : "Add Address"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddAddress;










import React, { useEffect, useState } from "react";
import axios from "axios";

const AddAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({
    id: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    phone: "",
    isDefault: false,
  });

  // Fetch all addresses
  const getAddresses = async () => {
    try {
      const response = await axios.get('/getaddresses');
      setAddresses(response.data.addresses);
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  // Add new address
  const addAddress = async () => {
    try {
      const response = await axios.post('/addaddress', currentAddress);
      setAddresses([...addresses, response.data.address]);
      resetForm();
    } catch (error) {
      console.error('Error adding address:', error);
    }
  };

  // Update address
  const updateAddress = async () => {
    try {
      const response = await axios.put(`/updateaddress/${currentAddress.id}`, currentAddress);
      setAddresses(addresses.map(addr => (addr.id === currentAddress.id ? response.data.address : addr)));
      resetForm();
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };

  // Delete address
  const deleteAddress = async (id) => {
    try {
      await axios.delete(`/deleteaddress/${id}`);
      setAddresses(addresses.filter(addr => addr.id !== id));
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  const resetForm = () => {
    setCurrentAddress({
      id: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      phone: "",
      isDefault: false,
    });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (address) => {
    setCurrentAddress(address);
    setIsEditing(true);
  };

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Addresses</h3>
        <div className="mt-4">
          {addresses.map((address) => (
            <div key={address.id} className="flex justify-between items-center p-2 border-b">
              <div>
                <p>{address.addressLine1}, {address.addressLine2}, {address.city}, {address.state}, {address.country}, {address.postalCode}</p>
                <p>Phone: {address.phone}</p>
                {address.isDefault && <span className="text-green-500">Default Address</span>}
              </div>
              <div>
                <button onClick={() => handleEdit(address)} className="text-blue-500">Edit</button>
                <button onClick={() => deleteAddress(address.id)} className="text-red-500 ml-2">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-semibold">{isEditing ? "Edit Address" : "Add Address"}</h4>
          <input
            type="text"
            name="addressLine1"
            placeholder="Address Line 1"
            value={currentAddress.addressLine1}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mt-2"
          />
          <input
            type="text"
            name="addressLine2"
            placeholder="Address Line 2"
            value={currentAddress.addressLine2}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mt-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={currentAddress.city}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mt-2"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={currentAddress.state}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mt-2"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={currentAddress.country}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mt-2"
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={currentAddress.postalCode}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mt-2"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={currentAddress.phone}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mt-2"
          />
          <label className="inline-flex items-center mt-2">
            <input
              type="checkbox"
              name="isDefault"
              checked={currentAddress.isDefault}
              onChange={() => setCurrentAddress((prev) => ({ ...prev, isDefault: !prev.isDefault }))}
              className="mr-2"
            />
            Set as default address
          </label>
          <button
            onClick={isEditing ? updateAddress : addAddress}
            className="bg-blue-500 text-white rounded p-2 mt-4"
          >
            {isEditing ? "Update Address" : "Add Address"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
