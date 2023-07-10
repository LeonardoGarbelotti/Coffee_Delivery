/* eslint-disable react/display-name */
import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyleContainer, InputStyled, InputWrapper, RightText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && (
          <p>{error}</p>
        )}
      </InputWrapper>
    )
  })