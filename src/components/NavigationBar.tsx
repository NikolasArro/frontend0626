import { Link, useLocation } from "react-router-dom"

function NavigationBar() {
  useLocation();
  const isLoggedIn = localStorage.getItem("token") !== null;

  return (
    <div>
        <Link to="/">
            <button>Avalehele</button>
        </Link>
        
        {isLoggedIn && 
          <Link to="/cart">
              <button>Ostukorv</button>
          </Link>}
        
        {isLoggedIn && 
          <Link to="/admin">
              <button>Admin</button>
          </Link>}
        
        <Link to="/login">
            <button>Logi sisse</button>
        </Link>
        
        <Link to="/signup">
            <button>Registreeru</button>
        </Link>
        
        {isLoggedIn && 
          <Link to="/my-orders">
              <button>Minu tellimused</button>
          </Link>}
        
        {isLoggedIn && 
          <Link to="/profile">
              <button>Profiil</button>
          </Link>}
    </div>
  )
}

export default NavigationBar
