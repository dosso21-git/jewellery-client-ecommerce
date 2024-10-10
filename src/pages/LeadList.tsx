import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaUserLock, FaUserAlt } from 'react-icons/fa';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/getalluser');
      setUsers(response.data);
    } catch (err) {
      setError('Error fetching users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/delete/${id}`);
      fetchUsers(); // Refresh the user list
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  const handleBlock = async (id) => {
    try {
      await axios.put(`/block/${id}`);
      fetchUsers(); // Refresh the user list
    } catch (err) {
      console.error('Error blocking user:', err);
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <div key={user._id} className="bg-white shadow-md rounded-lg p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <FaUserAlt className="text-blue-500 text-3xl mr-2" />
              <h3 className="text-xl font-semibold">{user.firstname} {user.lastname}</h3>
            </div>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.mobile}</p>
            <p>Role: {user.role}</p>
            <p>Status: {user.isBlocked ? 'Blocked' : 'Active'}</p>
            <div className="flex justify-between mt-4">
              <button 
                onClick={() => handleBlock(user._id)} 
                className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ${user.isBlocked ? 'disabled:opacity-50' : ''}`}
                disabled={user.isBlocked}
              >
                <FaUserLock /> {user.isBlocked ? 'Blocked' : 'Block'}
              </button>
              <button 
                onClick={() => handleDelete(user._id)} 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
