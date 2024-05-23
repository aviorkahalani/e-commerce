import { useState } from "react"
import { RiShoppingBag3Line, RiMenuLine } from "@remixicon/react"
import StyleNestLogo from "../assets/stylenest.svg"
import Container from "./Container"
import NavbarMobile from "./NavbarMobile"
import NavbarDesktop from "./NavbarDesktop"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleMenu = (state: boolean) => {
    setOpen(state)
  }

  return (
    <header className="py-8">
      <Container className="flex items-center justify-between">
        <div className="block md:hidden">
          <StyleNestLogo />
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <RiShoppingBag3Line cursor="pointer" />
          <RiMenuLine cursor="pointer" onClick={() => setOpen(true)} />
        </div>

        {open ? (
          <NavbarMobile setOpen={handleMenu} />
        ) : (
          <NavbarDesktop setOpen={handleMenu} />
        )}
      </Container>
    </header>
  )
}
