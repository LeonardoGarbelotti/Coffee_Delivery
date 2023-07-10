import styled from "styled-components";

export const FormHeaderTitleContainer = styled.header`
  display: flex;
  gap: 0.5rem;

  h2 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${props => props.theme['base-text']};
  }
`