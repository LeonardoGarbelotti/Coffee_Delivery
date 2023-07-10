import { ReactNode } from "react"
import { FormHeaderTitleContainer } from "./styles"

interface FormHeaderTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function FormHeaderTitle({ title, subtitle, icon }: FormHeaderTitleProps) {
  return (
    <FormHeaderTitleContainer>
      {icon}
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </FormHeaderTitleContainer>
  )
}