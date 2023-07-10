import styled from "styled-components";
import { FormContainerBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
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

export const DetailsContainer = styled(FormContainerBaseStyle)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
`

export const ConfirmOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme['base-subtitle']};
  }

  .text {
      font-size: 0.875rem;
      color: ${props => props.theme['base-text']};
    }
`