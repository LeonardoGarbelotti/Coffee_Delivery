import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveProductFromCartButton
} from "./styles";
import { ProductAmountInput } from "../../../../components/ProductAmountInput";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../context/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface coffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: coffeeCartCardProps) {
  const { changeCartItemAmount, removeItemFromCart } = useCart()
  const coffeeTotalPriceAmount = coffee.price * coffee.coffeeAmount
  const formatedPrice = formatMoney(coffeeTotalPriceAmount)

  function handleIncreaseAmount() {
    changeCartItemAmount(coffee.id, 'increase')
  }

  function handleDecreaseAmount() {
    changeCartItemAmount(coffee.id, 'decrease')
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.image} alt={coffee.name} />
        <div>
          <h2 className="coffee-title">{coffee.name}</h2>
          <ActionsContainer>
            <ProductAmountInput
              size="small"
              onIncreaseCoffeeAmount={handleIncreaseAmount}
              onIDecreaseCoffeeAmount={handleDecreaseAmount}
              coffeeAmount={coffee.coffeeAmount}
            />
            <RemoveProductFromCartButton type="button" onClick={handleRemoveItemFromCart}>
              <Trash size={16} />
              REMOVER
            </RemoveProductFromCartButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formatedPrice}</p>
    </CoffeeCartCardContainer>
  )
}