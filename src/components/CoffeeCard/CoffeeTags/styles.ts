import styled from "styled-components";

export const TagContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;

  span {
    font-size: 0.625rem;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    color: ${props => props.theme['yellow-dark']};
    background: ${props => props.theme['yellow-light']};
    text-transform: uppercase;
  }
`

