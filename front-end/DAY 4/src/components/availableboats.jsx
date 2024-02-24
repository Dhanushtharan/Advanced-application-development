import "../assets/css/boats.css";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.png';
import Navigation from "./navbar";

const AvailableBoats = () => {
  return (
    <div className="head">
        <h1>Available Stays</h1>
        <div>
            <Navigation/>
        </div>
    <div className="boat-list">
      <div className="boat">
        <img src={img1} alt="Boat 1" />
        <div className="boat-details">
          <div className="boat-info">
            <h3>Stay 1</h3>
            <p>Location: udupi</p>
            <p>Price: Rs.3,500/day</p>
            <button>See Availability</button>
          </div>
        </div>
      </div>
      <div className="boat">
        <img src={img2} alt="Boat 2" />
        <div className="boat-details">
          <div className="boat-info">
            <h3>Stay 2</h3>
            <p>Location: Kerala</p>
            <p>Price: Rs.4,199/day</p>
            <button>See Availability</button>
          </div>
        </div>
      </div>
      <div className="boat">
        <img src={img3} alt="Boat 3" />
        <div className="boat-details">
          <div className="boat-info">
            <h3>Stay 3</h3>
            <p>Location: Kochin</p>
            <p>Price: Rs.7000/day</p>
            <button>See Availability</button>
          </div>
        </div>
      </div>
      <div className="boat">
        <img src={img4} alt="Boat 4" />
        <div className="boat-details">
          <div className="boat-info">
            <h3>Stay 4</h3>
            <p>Location: Alleppy</p>
            <p>Price: Rs.9,400/day</p>
            <button>See Availability</button>
          </div>
        </div>
      </div>
      <div className="boat">
        <img src={img5} alt="Boat 5" />
        <div className="boat-details">
          <div className="boat-info">
            <h3>Stay 5</h3>
            <p>Location: Goa</p>
            <p>Price: 7,500/night</p>
            <button>See Availability</button>
          </div>
        </div>
      </div>
      <div className="boat">
        <img src={img6} alt="Boat 6" />
        <div className="boat-details">
          <div className="boat-info">
            <h3>Stay 6</h3>
            <p>Location: seasonals</p>
            <p>Price: Rs.varies/day</p>
            <button>See Availability</button>
          </div>
        </div>
      </div>
      <div className="boat">
        <img src={img7} alt="Boat 7" />
        <div className="boat-details">
          <div className="boat-info">
            <h3>Stay 7</h3>
            <p>Location: sesonals</p>
            <p>Price: Rs.varies/day</p>
            <button>See Availability</button> 
          </div>
        </div>
      </div>
    </div>
</div>
);
}

export default AvailableBoats;
