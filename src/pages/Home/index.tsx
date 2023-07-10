import {
  CoffeeIconBox,
  CoffeeProductsContainer,
  ContentContainer,
  HeroContainer,
  HomeContainer,
  PackageIconBox,
  ProductInfo,
  ShoppingCartIconBox,
  TimerIconBox,
  TitleBox
} from "./styles";
import CoffeeHero from '../../assets/CoffeeHero.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { coffees } from "../../constants"
import { CoffeeCard } from "../../components/CoffeeCard";

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <div>
          <TitleBox>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </TitleBox>
          <ProductInfo>
            <ShoppingCartIconBox>
              <ShoppingCart size={16} weight="fill" />
              <span>Compra simples e segura</span>
            </ShoppingCartIconBox>
            <PackageIconBox>
              <Package size={16} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </PackageIconBox>
            <TimerIconBox>
              <Timer size={16} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </TimerIconBox>
            <CoffeeIconBox>
              <Coffee size={16} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </CoffeeIconBox>
          </ProductInfo>
        </div>
        <img src={CoffeeHero} alt="Imagem de café e grãos" />
      </HeroContainer>
      <ContentContainer className="container">
        <h1>Nossos Cafés</h1>
        <CoffeeProductsContainer>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
            />
          ))}
        </CoffeeProductsContainer>
      </ContentContainer>
    </HomeContainer>
  )
}