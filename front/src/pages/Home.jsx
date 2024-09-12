import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/bg.png';

const Home = () => {
  return (
    
    <div className="mt-2 p-8 mx-10 items-center">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      <div>
        <header className="relative text-center mb-16 w-6">
          <br/>
          <h1 className="text-8xl font-extrabold text-white mt-6">SPLASH SMART</h1>
        </header>
        <section className="px-10 py-100 grid lg:grid-cols-3 gap-6 p-18 mt-16">

          
        
        <div className="bg-white hover:bg-blue-500 p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Report Water Abuse</h2>
            <p className="text-black leading-relaxed">
            Submit reports and upload evidence of mis-management of water directly from your phone. Your actions can make a significant impact.
            </p>
          </div>
          <Link 
            to="/drive" 
            className="mt-6 inline-block bg-white text-black py-3 px-6 rounded-lg shadow-md hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105">
            Learn More
          </Link>
        </div>
          
          
          <div className="bg-white hover:bg-blue-500 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col justify-between p-8 mt-16">
            <div>
              <h2 className="text-xl font-semibold text-black mb-4">Play Mini Game</h2>
              <p className="text-black leading-relaxed">
                Explore our educational game to learn about good water practices and ways to prevent water wastage. Knowledge is power.
              </p>
            </div>
            <Link 
              to="/game" 
              className="mt-6 inline-block bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105">
              Learn More
            </Link>
          </div>

          <div className="bg-white hover:bg-blue-500 p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">Tensorflow-Powered Detection</h2>
            <p className="text-gray-800 leading-relaxed">
              Our Machine Learning algorithm analyzes images to identify potential signs of water wastage. Advanced technology working for water management.
            </p>
          </div>
          <Link 
            to="/detect" 
            className="mt-6 inline-block bg-white text-black py-3 px-6 rounded-lg shadow-md hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105">
            Learn More
          </Link>
        </div>

        </section>
      </div>
    </div>
  );
}

export default Home;