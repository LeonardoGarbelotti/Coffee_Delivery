import styled from "styled-components"

export const CoffeeComponentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px 36px;
  margin-bottom: 2.5rem;

  width: 16rem;
  height: 19rem;
  background: ${props => props.theme['base-card']};

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: calc(0px - 1.25rem);
  }
`

export const CoffeeComponentHeader = styled.header`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  gap: 0.25rem;
`

export const CoffeeComponentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
  padding: 0 1.25rem;

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    line-height: 1.3rem;
    color: ${props => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    color: ${props => props.theme['base-label']};
  }
`
export const CoffeeComponentFooter = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1.25rem;

  p {
    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;
    padding-right: 1.5rem;

    span {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
    }
  }
`

export const CoffeeComponentAddToCartButton = styled.button`
  display: flex;
  color: ${props => props.theme['base-card']};
  background: ${props => props.theme['purple-dark']};
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  margin-left: 0.5rem;
  transition: 0.4s;

  &:hover{
    background: ${props => props.theme['purple']};
  }
`