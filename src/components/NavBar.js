//import WldLogo from "../images/worldlogo.png";

import pointer from "../images/pointer.png";
const NavBar = (props) => {
  console.log(props.googleMapsUrl);
  return (
    <div>
      <div className="cards">
        <div className="hero">
          <img className="place-img" src={props.imageUrl} alt="city" />
        </div>
        <div className="card">
          <div className="country">
            <img src={pointer} alt="pointerlogo" className="pointer--logo" />
            <p className="coutry--1">
              {props.location}
              <span id="google-Map">
                <a href={props.googleMapsUrl} target="_">
                  View on Google Maps
                </a>
              </span>
            </p>
          </div>

          <div>
            <h2>{props.title} </h2>
            <p className="date">
              {props.startDate} - {props.endDate}
            </p>
            <p className="paragraph">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;

// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg
//https://images.pexels.com/photos/1571746/pexels-photo-1571746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
//<a href="url">link text</a>
