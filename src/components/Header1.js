import WldLogo from "../images/worldlogo.png";
const Header1 = () => {
  return (
    <div>
      <nav>
        <img src={WldLogo} alt="worldlego" className="world--logo" />
        <h1>my travel journal.</h1>
      </nav>
    </div>
  );
};
export default Header1;
