import { useTheme } from "styled-components";
import { FormHeaderTitle } from "../FormHeaderTitle";
import { AdressForm } from "./AddressForm";
import { PaymentOptions } from "./PaymentOptions";

import {
  CompleteOrderSectionContainer,
  FormSectionContainer
} from "./styles";

import { MapPinLine, CurrencyDollar } from "phosphor-react";


export function CompleteOrderSection() {
  const colors = useTheme()

  return (
    <CompleteOrderSectionContainer>
      <h1>Complete seu pedido</h1>
      <FormSectionContainer>
        <FormHeaderTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} weight="bold" color={colors["yellow-dark"]} />}
        />
        <AdressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <FormHeaderTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors["purple"]} weight="bold" />}
        />
        <PaymentOptions />
      </FormSectionContainer>
    </CompleteOrderSectionContainer>

  )
}