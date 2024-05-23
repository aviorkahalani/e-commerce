import { RiCloseLine } from "@remixicon/react"
import StyleNestLogo from "../assets/stylenest.svg"
import Container from "./Container"

interface NavbarMobileProps {
  setOpen: (state: boolean) => void
}

export default function NavbarMobile({ setOpen }: NavbarMobileProps) {
  return (
    <Container className="absolute inset-0 block space-y-6 bg-white py-8 text-sm md:hidden">
      <div className="flex items-center justify-between ">
        <StyleNestLogo />
        <RiCloseLine cursor="pointer" onClick={() => setOpen(false)} />
      </div>
      <nav className="flex flex-col gap-2">
        <a href="#" className="px-3 py-2">
          Shop all
        </a>
        <a href="#" className="px-3 py-2">
          Latest arrivals
        </a>
      </nav>
    </Container>
  )
}
