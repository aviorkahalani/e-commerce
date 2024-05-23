import StyleNestLogo from "../assets/stylenest.svg"
import { RiMenuLine, RiShoppingBag3Line } from "@remixicon/react"

interface NavbarDesktopProps {
  setOpen: (state: boolean) => void
}

export default function NavbarDesktop({ setOpen }: NavbarDesktopProps) {
  return (
    <div className="hidden w-full items-center justify-between text-neutral-600 md:flex">
      <div className="flex items-center">
        <StyleNestLogo />

        <nav className="ml-24 flex items-center gap-8 font-medium">
          <a href="#" className="px-3 py-2">
            Shop all
          </a>
          <a href="#" className="px-3 py-2">
            Latest arrivals
          </a>
        </nav>
      </div>

      <RiShoppingBag3Line cursor="pointer" />
    </div>
  )
}
