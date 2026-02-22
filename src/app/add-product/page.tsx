const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!imageFile) return

  const imageUrl = await uploadProductImage(imageFile)

  await insertProduct({
    name,
    description,
    price: Number(price),
    image_url: imageUrl,
    category,
    is_new: false
  })

  alert("Product added")
}
