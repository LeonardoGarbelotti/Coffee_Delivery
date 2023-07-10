import { CompleteOrderSection } from "./components/CompleteOrderSection";
import { SelectedCoffees } from "./components/SelectedCoffees";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import {
  CheckoutContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const completeCheckoutFormValidationSchema = zod.object({
  cep: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/, "Informe um CEP válido"),
  street: zod.string().min(1, "Informe o nome da rua"),
  houseNumber: zod.string().min(1, "Informe o número da residencia"),
  additionalAdressData: zod.string().optional(),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  countryCode: zod.string().length(2, "Informe a sigla do estado").toUpperCase(),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" }
    }
  })
})

export type OrderData = zod.infer<typeof completeCheckoutFormValidationSchema>

type CompleteOrderFormData = OrderData

export function Checkout() {
  const completeCheckoutForm = useForm<CompleteOrderFormData>({
    resolver: zodResolver(completeCheckoutFormValidationSchema)
  })

  const { handleSubmit } = completeCheckoutForm
  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleCompleteOrder(data: CompleteOrderFormData) {
    navigate("/checkout/success", {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...completeCheckoutForm}>
      <CheckoutContainer className="container" onSubmit={handleSubmit(handleCompleteOrder)}>
        <CompleteOrderSection />
        <SelectedCoffees />
      </CheckoutContainer >
    </FormProvider>
  )
}