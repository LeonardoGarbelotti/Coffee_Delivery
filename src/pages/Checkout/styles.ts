import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  margin-top: 2.5rem;
  justify-content: space-between;
  gap: 2rem;
`

export const FormContainerBaseStyle = styled.div`
  background: ${props => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`