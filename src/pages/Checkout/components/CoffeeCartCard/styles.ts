import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${props => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      height: 4rem;
      width: 4rem;
    }

    .coffee-title {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;
      color: ${props => props.theme['base-subtitle']};
    }
  }

  > p {
    font-weight: 700;
    align-self: flex-start;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  height: 2rem;
`

export const RemoveProductFromCartButton = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 0.25rem;
  font-size: 0.75rem;
  border: none;
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;

  color: ${props => props.theme['base-text']};
  background: ${props => props.theme['base-button']};

  &:hover {
    background: ${props => props.theme['base-hover']};
  }

  svg {
    color: ${props => props.theme['purple']};
  }
`