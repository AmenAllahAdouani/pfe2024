import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hosts = () => {
  const [destinationName, setDestinationName] = useState<string>('');
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const key = localStorage.getItem('tripID');

  useEffect(() => {
    const fetchTrips = async () => {
      if (destinationName === '') {
        try {
          const response = await axios.get(`http://localhost:3001/api/trips/trips/${key}`);
          setDestinationName(response.data.Destination.name);
        } catch (error) {
          console.error('Error fetching trips:', error);
        }
      }
    };

    fetchTrips();
  }, [destinationName, key]);

  const handleConnectClick = () => {
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  return (
    <div className="pt-0 px-0">
      <h1 className="font-bold text-black px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        {'Explore this trip further with a local of your choice in ' + destinationName}
      </h1>
      <h6 className="text-xs px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        {'Learn about their personal stories, and find out how you can explore ' + destinationName + ' together'}
      </h6>
      <div className="w-full overflow-x-auto flex snap-x snap-mandatory scroll-smooth">
        <div className="flex gap-4 pl-6 pt-4 min-w-max">
          {/* Card 1 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-1 rounded-xl shadow-lg">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-md font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Adil</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
              <button
                className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-800"
                onClick={handleConnectClick}
              >
                Connect
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-2 rounded-xl shadow-lg">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-md font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Fatima</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">The Tajine Expert</span>
              <button
                className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-800"
                onClick={handleConnectClick}
              >
                Connect
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-3 rounded-xl shadow-lg">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-md font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Amine</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">Culture & History</span>
              <button
                className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-800"
                onClick={handleConnectClick}
              >
                Connect
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-4 rounded-xl shadow-lg">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-md font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Adel Majid</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
              <button
                className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-800"
                onClick={handleConnectClick}
              >
                Connect
              </button>
            </div>
          </div>
          {/* Card 5 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-5 rounded-xl shadow-lg">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-xl font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Dallel</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
              <button
                className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-800"
                onClick={handleConnectClick}
              >
                Connect
              </button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="snap-center shrink-0 inline-block h-64 w-40 bg-host-6 rounded-xl shadow-lg">
            <div className="flex flex-col items-center justify-center p-6 space-y-2">
              <span className="text-xl font-semibold text-gray-200">Hello I am</span>
              <h1 className="text-xxl text-gray-200">Amen</h1>
              <span className="font-pacifico font-bold text-xs text-gray-200">The Architect</span>
              <button
                className="bg-transparent border-2 rounded-3xl border-gray-200 text-gray-200 py-1 px-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-800"
                onClick={handleConnectClick}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg animate-bounce-in">
            <div className="flex flex-col items-center space-y-4">
              <span className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 animate-checkmark"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM10.293 16.293L6.293 12.293C5.90237 11.9024 5.90237 11.2676 6.293 10.877C6.68354 10.4865 7.31836 10.4865 7.70899 10.877L11 14.168L16.292 8.87704C16.6825 8.4865 17.3174 8.4865 17.708 8.87704C18.0985 9.26758 18.0985 9.9024 17.708 10.293L11.707 16.293C11.3165 16.6835 10.6825 16.6835 10.292 16.293H10.293Z" />
                </svg>
              </span>
              <span className="text-lg font-medium">Request sent successfully</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hosts;
