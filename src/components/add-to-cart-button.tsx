'use client'

import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonProps {
  productId: number
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 w-full items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-800 duration-300 font-semibold text-white"
      onClick={handleAddProductToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
