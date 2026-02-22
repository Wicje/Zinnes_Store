import { supabase } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getNewArrivals() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_new", true);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function insertProduct(product: {
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_new?: boolean;
}) {
  const { data, error } = await supabase
    .from("products")
    .insert([product]);

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}
