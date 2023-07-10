import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  background: ${props => props.theme['background']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    a {
      display: flex;
      padding: 0.5rem;
      border-radius: 6px;
      position: relative;
      background: ${props => props.theme['yellow-light']};
      color: ${props => props.theme['yellow-dark']};

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;

        font-size: 0.75rem;
        font-weight: 700;

        top: calc(0px - 1rem / 2);
        right: calc(0px - 1rem / 2);

        color: ${props => props.theme['white']};
        background: ${props => props.theme['yellow-dark']};
      }

      &:hover {
        background: ${props => props.theme['yellow-dark']};
        color: ${props => props.theme['yellow-light']};
      }
    }
  }
`

export const CityContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 0.875rem;
  gap: 0.25rem;

  background: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};
  border-radius: 8px;

  svg {
    color: ${props => props.theme['purple']};
  }
`