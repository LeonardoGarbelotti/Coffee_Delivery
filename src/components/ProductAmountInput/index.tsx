import { Minus, Plus } from "phosphor-react";
import { CoffeeComponentAmountInput } from "./styles";

interface ProductAmountInputProps {
  size?: 'medium' | 'small'
  coffeeAmount: number
  onIncreaseCoffeeAmount: () => void
  onIDecreaseCoffeeAmount: () => void
}

export function ProductAmountInput({
  onIncreaseCoffeeAmount,
  onIDecreaseCoffeeAmount,
  coffeeAmount,
  size = 'medium'
}: ProductAmountInputProps) {
  return (
    <CoffeeComponentAmountInput size={size}>
      <button
        disabled={coffeeAmount <= 1}
        type="button"
        title="Remover uma unidade"
        onClick={onIDecreaseCoffeeAmount}
      >
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" readOnly value={coffeeAmount} />
      <button type="button" title="Adicionar uma unidade" onClick={onIncreaseCoffeeAmount}>
        <Plus size={14} weight="bold" />
      </button>
    </CoffeeComponentAmountInput>
  )
}