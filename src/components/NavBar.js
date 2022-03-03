import WldLogo from "../images/worldlogo.png";
import pointer from "../images/pointer.png";
const NavBar = () => {
  return (
    <div>
      <nav>
        <img src={WldLogo} alt="worldlego" className="world--logo" />
        <h1>my travel journal.</h1>
      </nav>
      <div className="cards">
        <div className="hero">
          {
            <img
              className="place-img"
              src="https://source.unsplash.com/WLxQvbMyfas"
              alt="city"
            />
          }
        </div>
        <div className="card">
          <div className="country">
            <img src={pointer} alt="pointerlogo" className="pointer--logo" />
            <p className="coutry--1">
              JAPAN <span id="google-Map">View on Google Maps</span>
            </p>
          </div>

          <div>
            <h2>Mount Fuji</h2>
            <p className="date">12 Jan, 2021 -24 Jan, 2021</p>
            <p className="paragraph">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular
              tourist site in Japan, for both Japanese and foreign tourists.
            </p>
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
