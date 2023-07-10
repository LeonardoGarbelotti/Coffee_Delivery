import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentOptionButton } from "../../../../components/PaymentOptionButton";
import { PaymentOptionsContainer } from "./styles";
import { useFormContext } from "react-hook-form";

export const PaymentMethodOptions = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  }
}

export function PaymentOptions() {
  const { register, formState: { errors } } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentOptionsContainer>
      {Object.entries(PaymentMethodOptions).map(([key, { label, icon }]) => (
        <PaymentOptionButton
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}
      {paymentMethodError && <p>{paymentMethodError}</p>}
    </PaymentOptionsContainer>
  )
}