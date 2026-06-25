import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">NETFLIX</h1>

        <ul className="nav-links">
          <li>House</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="navbar-right">
        <span>🔍</span>
        <span>🔔</span>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="profile"
        />
      </div>
    </nav>
  );
}

export default Navbar;
