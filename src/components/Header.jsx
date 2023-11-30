import { NavBar } from "./NavBar"

import logo from '../assets/images/Logo.png'

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8">
      <img className="w-[130px]" src={logo} alt="Logo" />
      <NavBar />

    </header>
  )
}

