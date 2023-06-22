import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
import mobilislogo from './img/mobilislogo.png';
import { useSelector, useDispatch } from "react-redux";
import {setLogout} from "../../src/state/authSlice";
import {useNavigate} from "react-router-dom";
import {FcSimCard} from 'react-icons/fc';
import {AiOutlineStock} from 'react-icons/ai';
import {AiOutlineLogout} from 'react-icons/ai';
import {CiCreditCard2} from 'react-icons/ci'
import {RiSdCardLine } from 'react-icons/ri'
import {AiOutlineHome} from 'react-icons/ai';
export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pdvv = useSelector((state) => state.pdv);
  const Agree = pdvv.DetailDealerId;
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const HandleClose=()=>{
        dispatch(setLogout());
        navigate("/form");
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav">
       <div className="logo logo-container"><img src={mobilislogo} alt="Mobilis Logo" className="logo" /> </div>
     
      <div className={`menu-container ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="menu">
          <li>
            <NavLink exact to="/home" activeClassName="active" onClick={toggleMobileMenu}>
              Accueil <AiOutlineHome/>
            </NavLink>
          </li>

          {Agree === 2 && (
            <>
              <li>
                <NavLink to="/sim" activeClassName="active" onClick={toggleMobileMenu}>
                  Carte SIM <RiSdCardLine/>
                </NavLink>
              </li>
              <li>
                <NavLink to="/carte" activeClassName="active" onClick={toggleMobileMenu}>
                  Carte Recharge <CiCreditCard2/>
                </NavLink>
              </li>
            </>
          )}

          {Agree !== 2 && (
            <li>
              <NavLink to="/carte" activeClassName="active" onClick={toggleMobileMenu}>
                Carte Recharge <CiCreditCard2/>
              </NavLink>
            </li>
          )}

          <li>
            <NavLink to="/stock" activeClassName="active" onClick={toggleMobileMenu}>
              Mon stock
              <AiOutlineStock/>
            </NavLink>
          </li>

          <li>
            <NavLink to="/form" activeClassName="active" onClick={HandleClose} className= 'logout'>
              Logout 
              <AiOutlineLogout/>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
