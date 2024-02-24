import { Link } from 'react-router-dom';
import "../assets/css/home.css";
import kerala from '../assets/kerala.jpg';
import udupi from '../assets/udupi.webp';
import goa from '../assets/goa.jpg';
import Navigation from './navbar';
import Footer from './footer';


function Homepage() {
    return (
        <div className='home-body'>
            <div>
                <Navigation/>
                <div className='content'>
                    <h>Welcome to SailStay !!</h>
                </div>
                <div className='content1'>
                    <p>Seas the day with us!</p>
                </div> 
                <div className="sidebar">
                    
                        <p className='ele1'><Link to="/userprofile">Profile</Link></p>
                        <br/>
                        <br/>
                        <p className='ele1'><Link to="/availableboats">Available Stays</Link></p>
                        <br/>
                        <br/>
                        <p className='ele1'><Link to="/specialpackages">Seasonal Packages</Link></p>
                        <br/>
                        <br/>
                        <p className='ele1'><Link to="/sidebar-Link-3">Bookings and Payments</Link></p>
                        <br/>
                        <br/>
                        <p className='ele1'><Link to="/feedback">Feedback</Link></p>
                    
                </div>  
                <div className="top-deals">
                    <h2>Top Deals</h2>
                    <div className="deal-grid">
                        <div className="deal">
                            <a href="/kerala-deal"> {/* Replace "/kerala-deal" with the actual URL of the deal */}
                                <img src={kerala} alt="Deal 1" />
                            </a>
                            <div className="deal-info">
                                <h3>Kerala Package</h3>
                                <p>20% off</p>
                            </div>
                        </div>
                        <div className="deal">
                            <a href="/udupi-deal"> {/* Replace "/udupi-deal" with the actual URL of the deal */}
                                <img src={udupi} alt="Deal 2" />
                            </a>
                            <div className="deal-info">
                                <h3>Udupi Package</h3>
                                <p>Couples deal</p>
                              
                            </div>
                        </div>
                        <div className="deal">
                            <a href="/goa-deal"> {/* Replace "/goa-deal" with the actual URL of the deal */}
                                <img src={goa} alt="Deal 3" />
                            </a>
                            <div className="deal-info">
                                <h3>Goa Package</h3>
                                <p>Friends night offer</p>
                            </div>
                        </div>
                    </div>
                </div>   
                <br></br>
                <br></br>
                <Footer/>  
            </div>
        </div>
    );
}

export default Homepage;
