import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-dark-blue text-light-gray h-[201px] flex items-center justify-between px-[120px] flex-wrap">
        <ul className="flex gap-x-[60px]">
          <li className="cursor-pointer">Privacy Policy</li>
          <li className="cursor-pointer">Personal data processing policy</li>
          <li className="cursor-pointer">Public offer</li>
        </ul>
        <ul className="flex gap-x-[22px]">
          <li className="cursor-pointer transition-all duration-300 hover:brightness-110"><img src="./src/assets/icons/inst.svg" alt="" /></li>
          <li className="cursor-pointer transition-all duration-300 hover:brightness-110"><img src="./src/assets/icons/behance.svg" alt="" /></li>
          <li className="cursor-pointer transition-all duration-300 hover:brightness-110"><img src="./src/assets/icons/dribble.svg" alt="" /></li>
        </ul>
      </footer>
  )
}
