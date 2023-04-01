import { Fragment, useContext } from "react";
import { userContext } from "../../contexts/user.contexts";
import { Link, Outlet } from "react-router-dom";
import { userSignOut } from "../../utils/firebase.utils";
import { ReactComponent as CrownLogo } from "../../assets/87 - crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavContainer,NavLinks,LogoContainer, NavLink } from "./navigation.styles";
import CartIcon from "../../components/cart-icon/cart-icon.component";

const Navigation = () => {
  const { currentUser } = useContext(userContext);

  const signOutHandler = () => {
    userSignOut();
  };

  return (
    <Fragment>
      <NavContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink onClick={signOutHandler}  to="/auth">
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
      </NavContainer>
      <CartDropdown />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
