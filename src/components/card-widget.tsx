'use client'

import * as Icon from 'lucide-react'
import { useCart } from '@/contexts/cart-context'

export default function CardWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <Icon.ShoppingCart className="h-5 w-5" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  )
}
