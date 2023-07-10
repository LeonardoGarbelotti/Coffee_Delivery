import styled from "styled-components";

export const PaymentOptionContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${props => props.theme["purple-light"]};
    border-color: ${props => props.theme["purple"]};

    &:hover {
      background: ${props => props.theme["purple-light"]};
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 3rem;
  border-radius: 6px;

  gap: 0.75rem;
  padding: 0 1rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;

  border: 1px solid ${props => props.theme['base-button']};
  background: ${props => props.theme['base-button']};
  color: ${props => props.theme['base-text']};

  svg {
    color: ${props => props.theme['purple']};
  }

  &:hover {
    background: ${props => props.theme['base-hover']};
  }

  user-select: none;
`