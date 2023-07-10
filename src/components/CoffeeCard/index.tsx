import { ShoppingCart } from "phosphor-react";
import {
  CoffeeComponentBox,
  CoffeeComponentHeader,
  CoffeeComponentBody,
  CoffeeComponentFooter,
  CoffeeComponentAddToCartButton
} from "./styles";
import { CoffeeTags } from "./CoffeeTags";
import { ProductAmountInput } from "../ProductAmountInput";
import { formatMoney } from "../../utils/formatMoney";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  image: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  function handleIncreaseCoffeeAmount() {
    return setCoffeeAmount(state => state + 1)
  }

  function handleDecreaseCoffeeAmount() {
    return setCoffeeAmount(state => state - 1)
  }

  const { addCoffeeToCart } = useCart()

  function handleAddCoffeeToCart() {
    const coffeeToAdd = {
      ...coffee,
      coffeeAmount
    }

    addCoffeeToCart(coffeeToAdd)
  }

  const formatedPrice = formatMoney(coffee.price)

  return (
    <CoffeeComponentBox>
      <img src={coffee.image} alt="Foto do Café Expresso Tradicional" />
      <CoffeeComponentHeader>
        {coffee.tags.map(tag => (
          <CoffeeTags
            key={`${coffee.id}${tag}`}
            tag={tag}
          />
        ))}
      </CoffeeComponentHeader>
      <CoffeeComponentBody>
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </CoffeeComponentBody>
      <CoffeeComponentFooter>
        <div>
          <p>R$ <span>{formatedPrice}</span></p>
        </div>
        <ProductAmountInput
          onIncreaseCoffeeAmount={handleIncreaseCoffeeAmount}
          onIDecreaseCoffeeAmount={handleDecreaseCoffeeAmount}
          coffeeAmount={coffeeAmount}
        />
        <CoffeeComponentAddToCartButton
          type="button"
          title="Adicionar produto ao carrinho"
          onClick={handleAddCoffeeToCart}
        >
          <ShoppingCart size={22} weight="fill" />
        </CoffeeComponentAddToCartButton>
      </CoffeeComponentFooter>
    </CoffeeComponentBox>
  )
}