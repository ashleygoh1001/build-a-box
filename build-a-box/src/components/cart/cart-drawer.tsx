"use client";

import * as React from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";

import { useCart } from "@/lib/cart/cart-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function CartDrawer() {
  const { items, isOpen, close, setQuantity, remove, subtotal, clear } = useCart();
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => (open ? undefined : close())}>
      <SheetContent className="flex flex-col gap-6">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-mutedForeground" />
            Cart
          </SheetTitle>
        </SheetHeader>

        <Separator />

        {items.length === 0 ? (
          <div className="rounded-3xl bg-muted p-6 text-sm text-mutedForeground">
            Your cart is empty. Add a kit or a box size to keep exploring.
          </div>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-auto pr-1">
            {items.map((item) => (
              <div key={item.id} className="rounded-3xl bg-muted p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    {item.subtitle ? (
                      <p className="mt-1 text-sm text-mutedForeground">{item.subtitle}</p>
                    ) : null}
                    <p className="mt-2 text-sm">{formatMoney(item.price)}</p>
                  </div>
                  <button
                    className="rounded-full px-3 py-1 text-sm text-mutedForeground transition hover:bg-background hover:text-foreground"
                    onClick={() => remove(item.id)}
                    type="button"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-mutedForeground">
                    {formatMoney(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}

            <button
              onClick={clear}
              type="button"
              className="self-start text-xs uppercase tracking-[0.18em] text-mutedForeground transition hover:text-foreground"
            >
              Clear cart
            </button>
          </div>
        )}

        <div className={cn("mt-auto space-y-4", items.length === 0 && "opacity-60")}>
          <Separator />
          <div className="flex items-center justify-between text-sm">
            <span className="text-mutedForeground">Subtotal</span>
            <span className="font-medium">{formatMoney(subtotal)}</span>
          </div>

          <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
            <DialogTrigger asChild>
              <Button className="w-full" disabled={items.length === 0}>
                Checkout
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>This is a demo site</DialogTitle>
                <DialogDescription>
                  Checkout isn’t enabled. This project is designed to showcase Build‑A‑Box as a
                  design-led brand—not to process real orders.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setCheckoutOpen(false)}>
                  Continue browsing
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <p className="text-xs leading-relaxed text-mutedForeground">
            Pricing is presented for realism. Orders aren’t processed.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

