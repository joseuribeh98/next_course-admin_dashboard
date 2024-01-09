'use client'

import { useAppSelector } from "@/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5"


export const WidgetsGrid = () => {
    const count = useAppSelector(state => state.counter.count)

    return (
        <div className="flex flex-row flex-wrap justify-center items-center gap-2 my-2">
            <SimpleWidget
                label="Carrito"
                title={count.toString()}
                subtitle="Productos agregados"
                icon={<IoCartOutline size={50} className="text-blue-500" />}
                href="/dashboard/counter"
            />
        </div>
    )
}
