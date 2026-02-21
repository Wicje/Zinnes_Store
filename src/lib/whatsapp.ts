export const sendToWhatsApp = (
  productName: string,
  price: string
) => {
  const phone = "234XXXXXXXXXX" // replace with your number

  const message = `Hello, I'm interested in ${productName} (${price}).`

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`

  window.open(url, "_blank")
}
