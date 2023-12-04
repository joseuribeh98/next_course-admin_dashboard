import { CartCounter } from "@/app/shoppin-cart/components";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Counter',
    description: 'Counter page',
}

export default function CounterPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-6">
            <CartCounter value={10}/>
        </div >
    );
}