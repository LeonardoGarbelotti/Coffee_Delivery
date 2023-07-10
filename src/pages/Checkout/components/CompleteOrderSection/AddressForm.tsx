import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AdressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AdressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as ErrorsType

  return (
    <AdressFormContainer>
      <Input
        placeholder="CEP"
        type="string"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        type="string"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register("houseNumber")}
        error={errors.houseNumber?.message}
      />
      <Input
        placeholder="Complemento"
        type="string"
        className="additionalAdressData"
        {...register("additionalAdressData")}
        error={errors.additionalAdressData?.message}
        rightText="opcional"
      />
      <Input
        placeholder="Bairro"
        type="string"
        {...register("neighborhood")}
        error={errors.neighborhood?.message}
      />
      <Input
        placeholder="Cidade"
        type="string"
        {...register("city")}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        type="string"
        {...register("countryCode")}
        error={errors.countryCode?.message}
      />
    </AdressFormContainer>
  )
}