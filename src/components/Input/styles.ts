import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    font-size: 0.875rem;
    color: ${props => props.theme['base-error']};
  }
`

export const InputStyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.625rem;
  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 4px;
  background: ${props => props.theme['base-input']};
  transition: 0.4s;
  overflow: hidden;

  &:focus-within {
    border-color: ${props => props.theme['yellow-dark']};
  }
`

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  height: 100%;
  font-size: 0.875rem;
  padding: 0 0.75rem;
  color: ${props => props.theme['base-text']};

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${props => props.theme['base-label']};
`