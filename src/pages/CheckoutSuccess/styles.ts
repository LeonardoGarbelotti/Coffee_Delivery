import styled from "styled-components";

export const CheckoutSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    color: ${props => props.theme['yellow-dark']};
  }

  .subtitle {
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const CheckoutSuccessDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${props => props.theme['background']};
  min-width: 32rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

const BaseIconBox = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  svg {
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${props => props.theme['background']};
  }
`

export const TimerIconBox = styled(BaseIconBox)`
  svg {
    background: ${props => props.theme['yellow']};
  }
`

export const MapPinIconBox = styled(BaseIconBox)`
  svg {
    background: ${props => props.theme['purple']};
  }
`

export const CurrencyDollarIconBox = styled(BaseIconBox)`
  svg {
    background: ${props => props.theme['yellow-dark']};
  }
`