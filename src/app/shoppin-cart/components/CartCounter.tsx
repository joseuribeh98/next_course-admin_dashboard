'use client'

import { useState } from "react";

interface CartCounterProps {
    value?: number;
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {

    const [counter, setCounter] = useState(value);

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <span>Productos en el carrito de compras</span>
                <span className="text-9xl font-bold">{counter}</span>
            </div>

            <div className="flex gap-2">
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl"
                    onClick={() => setCounter(counter - 1)}
                >
                    Eliminar
                </button>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                    onClick={() => setCounter(counter + 1)}
                >
                    Agregar
                </button>
            </div>
        </>
    )
}
