import { TagContainer } from "./styles"

export interface CoffeeTagsProps {
  tag: string
}

export function CoffeeTags(props: CoffeeTagsProps) {
  return (
    <TagContainer>
      <span>{props.tag}</span>
    </TagContainer>
  )
}