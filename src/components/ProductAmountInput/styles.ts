import styled, { css } from "styled-components";

interface CoffeeComponentAmountInputProps {
  size?: 'medium' | 'small'
}

export const CoffeeComponentAmountInput = styled.div<CoffeeComponentAmountInputProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${props => props.theme['base-button']};

  ${({ size }) => size === 'medium' && css`
      padding: 0.5rem;
  `}

  ${({ size }) => size === 'small' && css`
    padding: 0.35rem 0.5rem;
  `}

  input {
    text-align: center;
    background: none;
    width: 1.25rem;
    height: 1.25rem;
    border: 0;
    color: ${props => props.theme['base-title']};

    &:focus {
      outline: none;
    }
  }

  button[type="button"] {
    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${props => props.theme['purple']};

    &:disabled {
      opacity: 0.4;
    }

    &:not(:disabled):hover {
      color: ${props => props.theme['purple-dark']};
    }
  }
`