export const WHATSAPP_PHONE = '2349135536900'

export const sendToWhatsApp = (message: string) => {
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

export const createProductInquiryMessage = (name: string, price: number) =>
  `Hi, I'm interested in \"${name}\" ($${price}). Is it available?`
