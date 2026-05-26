"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart/cart-context";

export function AddToCartButton({
  id,
  name,
  price,
  subtitle,
  label = "Add to Cart",
}: {
  id: string;
  name: string;
  price: number;
  subtitle?: string;
  label?: string;
}) {
  const { add } = useCart();
  return (
    <Button onClick={() => add({ id, name, price, subtitle })}>{label}</Button>
  );
}

