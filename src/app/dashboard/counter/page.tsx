import { CartCounter } from "@/shopping-cart/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Shopping Cart',
    description: 'Un simple contador de productos para un carrito de compras.',
}

export default function CounterPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-6">
            <CartCounter value={30}/>
        </div >
    );
}