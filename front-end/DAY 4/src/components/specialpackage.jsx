import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../assets/css/spp.css";

// Import package images
import packageImage1 from '../assets/img8.jpg';
import packageImage2 from '../assets/img9.jpg';
import packageImage3 from '../assets/img10.jpg';
import Navigation from './navbar';

const SpecialPackagesPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availablePackages, setAvailablePackages] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetchAvailablePackages(date);
  };

  const fetchAvailablePackages = (date) => {
    const packages = [
      { name: 'Udupi-Summer', price: 7000, image: packageImage1 },
      { name: 'Alappuzha', price: 5000, image: packageImage2 },
      { name: 'Alleppy', price: 13000, image: packageImage3 }
    ];
    setAvailablePackages(packages);
  };

  return (
    <div>
        <Navigation/>
    <div className="special-packages">
      <h1>Seasonal Packages</h1>
      <div className="date-container">
        <h2>Choose Date:</h2>
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
      </div>
      <div className="packages-container">
        <h2>Available Packages</h2>
        <div className="packages-list">
          {availablePackages.map((pkg, index) => ( 
            <div key={index} className="package">
              <img src={pkg.image} alt={pkg.name} />
              <div className="package-details">
                <h3>{pkg.name}</h3>
                <p>Price: Rs.{pkg.price}</p>
                <button>Select Package</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default SpecialPackagesPage;
