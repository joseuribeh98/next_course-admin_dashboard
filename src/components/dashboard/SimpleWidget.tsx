interface Props {
  title: string,
  subtitle?: string,
  label?: string,
  icon?: React.ReactNode,
  href?: string
}

export const SimpleWidget = ({ title, subtitle, label, icon, href }: Props) => {
  return (
    <div className="bg-white shadow-xl flex flex-col p-3 sm:min-w-[25%] min-w-full rounded-2xl border-1 border-gray-50 my-2 mx-2">
      <div className="flex gap-4 items-center justify-center">
        {icon && <div id="icon"> {icon} </div>}
        <div className="flex flex-col items-center">
          {label && <h2 className="font-bold text-gray-600">{label}</h2>}
          <h4 className="text-4xl">{title}</h4>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </div>
      {href &&
        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          <a href={href} className="text-indigo-600 text-xs font-medium">Más</a>
        </div>
      }
    </div>
  )
}