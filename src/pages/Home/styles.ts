import { styled } from "styled-components";
import BackgroundBlur from "../../assets/BackgroundBlur.svg"

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 6rem 0;
`

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: url(${BackgroundBlur});
  background-size: contain;
  padding: 0 23rem;
`

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36rem;
  gap: 1rem;

  h1 {
  font-family: 'Baloo 2';
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${props => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const ProductInfo = styled.div`
  margin-top: 4rem;
  max-width: 35rem;
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme['base-text']};
  font-size: 1rem;
  gap: 2.5rem;
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

export const ShoppingCartIconBox = styled(BaseIconBox)`
  svg {
    background: ${props => props.theme['yellow-dark']};

  }
`

export const TimerIconBox = styled(BaseIconBox)`
  svg {
    background: ${props => props.theme['yellow']};
  }
`

export const PackageIconBox = styled(BaseIconBox)`
  svg {
    background: ${props => props.theme['base-text']};
  }
`

export const CoffeeIconBox = styled(BaseIconBox)`
  svg {
    background: ${props => props.theme['purple']};
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem 0;


  > h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    line-height: 1.3rem;
    font-weight: 800;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const CoffeeProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3.75rem 0;
  gap: 2rem;
`