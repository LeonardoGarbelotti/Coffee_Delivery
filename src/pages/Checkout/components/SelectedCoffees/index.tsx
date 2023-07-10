import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmOrder } from "./ConfirmOrder";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <h1>Cafés Selecionados</h1>
      <DetailsContainer>
        {cartItems.map(cartItem => (
          <CoffeeCartCard
            key={cartItem.id}
            coffee={cartItem}
          />
        ))}


        <ConfirmOrder />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}