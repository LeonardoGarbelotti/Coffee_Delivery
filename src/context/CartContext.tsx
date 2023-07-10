import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee } from "../components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
  coffeeAmount: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartItemsAmount: number
  cartItemsTotalPrice: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemAmount: (cartItemId: number, type: 'increase' | 'decrease') => void
  removeItemFromCart: (cartItemId: number) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems"

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }

    return []
  })

  const cartItemsAmount = cartItems.length

  const cartItemsTotalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.coffeeAmount
  }, 0)


  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].coffeeAmount = + coffee.coffeeAmount
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemAmount(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId)

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].coffeeAmount =
          type === 'increase' ? item.coffeeAmount + 1 : item.coffeeAmount - 1
      }
    })

    setCartItems(newCart)
  }

  function removeItemFromCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId)

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{
      cartItems,
      cartItemsAmount,
      cartItemsTotalPrice,
      addCoffeeToCart,
      changeCartItemAmount,
      removeItemFromCart,
      cleanCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}