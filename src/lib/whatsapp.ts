export const sendToWhatsApp = (message: string) => {
  const phone = "2349135536900";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};
