import type { CartItem } from './useCartStore'
import { sendToWhatsApp } from './whatsapp'

export function checkoutOnWhatsApp(cart: CartItem[], customerName: string, customerPhone: string) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const message = [
    '🧾 New ZINNE Order',
    `Customer: ${customerName}`,
    `Phone: ${customerPhone}`,
    '',
    ...cart.map((item) => `• ${item.quantity}x ${item.name} - $${item.price}`),
    '',
    `Total: $${total}`,
  ].join('\n')

  sendToWhatsApp(message)
}
