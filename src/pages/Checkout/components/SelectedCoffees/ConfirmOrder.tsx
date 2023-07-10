import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmOrderContainer } from "./styles";

const DELIVERY_PRICE = 2.5

export function ConfirmOrder() {
  const { cartItemsTotalPrice, cartItemsAmount } = useCart()
  const cartTotalPriceWithDelivery = cartItemsTotalPrice + DELIVERY_PRICE

  const formatedItemsTotalPrice = formatMoney(cartItemsTotalPrice)
  const formatedItemsTotalPriceWithDelivery = formatMoney(cartTotalPriceWithDelivery)
  const formatedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmOrderContainer>
      <div>
        <p className="text">Total de itens</p>
        <p>R$ {formatedItemsTotalPrice}</p>
      </div>
      <div>
        <p className="text">Taxa de entrega</p>
        <p>R$ {formatedDeliveryPrice}</p>
      </div>
      <div>
        <h2>Total</h2>
        <h2>R$ {formatedItemsTotalPriceWithDelivery}</h2>
      </div>
      <Button
        disabled={cartItemsAmount <= 0}
        text="Confirmar Pedido"
        type="submit"
      />
    </ConfirmOrderContainer>
  )
}