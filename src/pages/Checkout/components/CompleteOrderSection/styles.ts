import styled from "styled-components"
import { FormContainerBaseStyle } from "../../styles"

export const CompleteOrderSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;

    color: ${props => props.theme['base-subtitle']};
  }
`

export const FormSectionContainer = styled(FormContainerBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AdressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    // Faz com que o CEP ocupe a linha inteira mas não ultrapasse o tamanho do layout
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    // Faz com que a RUA ocupe a linha inteira
    grid-column: span 3;
  }

  .additionalAdressData {
    // Faz com que o COMPLEMENTO ocupe 2 colunas da linha
    grid-column: span 2;
  }
`

export const PaymentOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    color: ${props => props.theme['base-error']};
    grid-column: span 3;
  }
`