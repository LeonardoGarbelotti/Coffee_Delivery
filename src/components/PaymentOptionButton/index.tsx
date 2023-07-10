/* eslint-disable react/display-name */
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { PaymentOptionContainer, ContentContainer } from "./styles";

type PaymentOptionButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentOptionButton = forwardRef<
  HTMLInputElement,
  PaymentOptionButtonProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentOptionContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentOptionContainer>
  )
})