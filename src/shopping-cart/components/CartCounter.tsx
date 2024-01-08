'use client'

import { useAppDispatch, useAppSelector } from "@/store";
import { decrement, increment, init } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CartCounterProps {
    value?: number;
}

interface CounterResponse {
    count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then(res => res.json())
    return data
}

export const CartCounter = ({ value = 0 }: CartCounterProps) => {
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getApiCounter()
            .then(({ count }) => dispatch(init(count)));
    }, [dispatch])

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <span>Productos en el carrito de compras</span>
                <span className="text-9xl font-bold">{count}</span>
            </div>

            <div className="flex gap-2">
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl"
                    onClick={() => dispatch(decrement())}
                >
                    Eliminar
                </button>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                    onClick={() => dispatch(increment())}
                >
                    Agregar
                </button>
            </div>
        </>
    )
}
