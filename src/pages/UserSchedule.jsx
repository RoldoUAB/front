import React, { useState, useEffect } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import RequestMaker  from '../Utils/RequestMaker';

function UserSchedule() {
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await RequestMaker.get("banker", null);
        const data2 = await RequestMaker.get("driver", null);
        setUsers(data);
        setUsers2(data2);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const openModal = (user) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentUser(null);
  };

  if (loading) {
    return (
      <DefaultLayout child={
        <div className="bg-gray-100 min-h-screen p-8">
          <h1 className="text-2xl font-semibold mb-8">Loading...</h1>
        </div>
      }></DefaultLayout>
    );
  }

  return (
    <DefaultLayout child={
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-2xl font-semibold mb-8">Bankers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
              <p className="text-gray-600 mb-4">{user.type}</p>
              <button
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-md py-2 px-4"
                onClick={() => openModal(user)}
              >
                Add Schedule
              </button>
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-semibold mb-8">Drivers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users2.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
              <p className="text-gray-600 mb-4">{user.type}</p>
              <button
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-md py-2 px-4"
                onClick={() => openModal(user)}
              >
                Add Schedule
              </button>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">Add Schedule for {currentUser.name}</h2>
              <div className="mb-4">
                <label htmlFor="schedule-date" className="block text-gray-600">Date</label>
                <input
                  type="date"
                  id="schedule-date"
                  name="schedule-date"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="schedule-time" className="block text-gray-600">Time</label>
                <input
                  type="time"
                  id="schedule-time"
                  name="schedule-time"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="schedule-description" className="block text-gray-600">Description</label>
                <textarea
                  id="schedule-description"
                  name="schedule-description"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary-500"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-md py-2 px-4">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    }></DefaultLayout>
  );
}

export default UserSchedule;