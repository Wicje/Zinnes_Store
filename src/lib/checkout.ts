import { supabase } from "./supabase";
import { sendToWhatsApp } from "./whatsapp";

export async function checkout(cart, customerName, customerPhone) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const { data: order, error } = await supabase
    .from("orders")
    .insert([
      {
        customer_name: customerName,
        customer_phone: customerPhone,
        total_amount: total,
      },
    ])
    .select()
    .single();

  if (error) throw error;

  for (const item of cart) {
    await supabase.from("order_items").insert([
      {
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price_at_purchase: item.price,
      },
    ]);

    const { data: product } = await supabase
      .from("products")
      .select("stock")
      .eq("id", item.id)
      .single();

    await supabase
      .from("products")
      .update({ stock: product.stock - item.quantity })
      .eq("id", item.id);
  }

  const message = `
Order ID: ${order.id}

${cart
  .map(
    (item) =>
      `${item.quantity}x ${item.name} - ₦${item.price}`
  )
  .join("\n")}

Total: ₦${total}
`;

  sendToWhatsApp(message);
}
