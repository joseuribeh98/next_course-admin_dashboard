import Image from 'next/image'
import { SidebarMenuItem } from './SidebarMenuItem'
import { IoCalculator, IoFootball, IoHeartOutline, IoLogoReact } from 'react-icons/io5'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoLogoReact size={28} />,
        title: 'Dashboard',
        subtitle: 'Visualización de datos'
    },
    {
        path:'/dashboard/counter',
        icon: <IoCalculator size={28} />,
        title: 'Contador',
        subtitle: 'Contador del lado del cliente'
    },
    {
        path:'/dashboard/pokemons',
        icon: <IoFootball size={28} />,
        title: 'Pokemons',
        subtitle: 'Generación estática'
    },
    {
        path:'/dashboard/favorites',
        icon: <IoHeartOutline size={28} />,
        title: 'Favoritos',
        subtitle: 'Global State'
    },
]

export const Sidebar = () => {
    return (
        <div id="menu"
            style={{ width: '400px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-auto">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8" alt='User avatar' width='50' height='50' src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Jose Uribe
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {menuItems.map((item) => (
                    <SidebarMenuItem
                        key={item.title}
                        path={item.path}
                        icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                ))}
            </div>
        </div>
    )
}
