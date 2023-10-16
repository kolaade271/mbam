import "../css/Header.css";

const Header = () => {
  return (
    <div className="macbook-pro-16-2">
      <div className="screenshot-2023-08-19-at-548-parent">
        <img
          className="screenshot-2023-08-19-at-548"
          alt=""
          src="/screenshot-20230819-at-548-1@2x.png"
        />
        <div className="dev-mbam-market">DEV MBAM MARKET</div>
      </div>
      <div className="frame-parent">
        <div className="user-add-alt-parent">
          <img className="user-add-alt-icon1" alt="" src="/user-add-alt1.svg" />
          <div className="dev-mbam-market">Register</div>
        </div>
        <div className="user-add-alt-parent">
          <img
            className="sign-out-circle-icon1"
            alt=""
            src="/sign-out-circle1.svg"
          />
          <div className="dev-mbam-market">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
