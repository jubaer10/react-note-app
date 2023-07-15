/* eslint-disable react/prop-types */

const Header = (props) => {
    const title = props?.title || null;
  
    return (
      <nav
        className="navbar bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <span className="navbar-brand text-center container-fluid justify-content-center py-3">
          <h3>{title}</h3>
        </span>
      </nav>
    );
  };
  
  export default Header;