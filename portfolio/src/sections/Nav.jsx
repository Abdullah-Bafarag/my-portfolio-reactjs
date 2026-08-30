import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FloatingNav } from '../components/FloatingNav';


const navItems = [
  { id: '#', icon: IoHomeOutline, href: '#', label: 'Home' },
  { id: '#about', icon: LuUserRound, href: '#about', label: 'About' },
  { id: '#skills', icon: BiBook, href: '#skills', label: 'Skills' },
  { id: '#services', icon: RiServiceLine, href: '#services', label: 'Services' },
  { id: '#contact', icon: BiMessageSquareDetail, href: '#contact', label: 'Contact' },
];


const Nav = () => {
  return (
    <section>
      <FloatingNav items={navItems} initialActiveId="#" />
    </section>
  )
}

export default Nav