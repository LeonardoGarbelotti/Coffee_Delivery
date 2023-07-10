import { CityContainer, HeaderContainer } from "./styles";
import Logo from '../../assets/CoffeeDeliveryLogo.svg'
import { NavLink } from "react-router-dom";
import { House, MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartItemsAmount } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <img src={Logo} />
        <nav>
          <CityContainer>
            <MapPin size={22} weight="fill" />
            <span>Cândido Mota, SP</span>
          </CityContainer>
          <NavLink to="/" title="Home" >
            <House size={22} weight="fill" />
          </NavLink>
          <NavLink to="/checkout" title="Meu Carrinho">
            {cartItemsAmount >= 1 && <span>{cartItemsAmount}</span>}
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}