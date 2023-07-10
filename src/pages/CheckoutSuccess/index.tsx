import { CheckoutSuccessContainer, CheckoutSuccessDetailBox, CurrencyDollarIconBox, MapPinIconBox, TimerIconBox } from "./styles";
import DeliveryBike from "../../assets/OrderDeliveryBike.svg"
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { PaymentMethodOptions } from "../Checkout/components/CompleteOrderSection/PaymentOptions";
import { useEffect } from "react";

interface LocationType {
  state: OrderData
}

export function CheckoutSuccess() {
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate("/")
    }
  }, [])

  if (!state) return <></>

  return (
    <CheckoutSuccessContainer className="container">
      <div>
        <h1 className="title">Uhu! Pedido confirmado</h1>
        <p className="subtitle">Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <section>
        <CheckoutSuccessDetailBox>
          <MapPinIconBox>
            <MapPin weight="fill" />
            <div>
              <p>Entrega em <strong>{state.street}, {state.houseNumber}</strong></p>
              <p>{state.neighborhood} - {state.city}, {state.countryCode}</p>
            </div>
          </MapPinIconBox>
          <TimerIconBox>
            <Clock weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </TimerIconBox>
          <CurrencyDollarIconBox>
            <CurrencyDollar weight="bold" />
            <div>
              <p>Pagamento na entrega</p>
              <strong>{PaymentMethodOptions[state.paymentMethod].label}</strong>
            </div>
          </CurrencyDollarIconBox>
        </CheckoutSuccessDetailBox>
        <img src={DeliveryBike} alt="Imagem com um entregador montado em uma motocicleta" />
      </section>
    </CheckoutSuccessContainer>
  )
}