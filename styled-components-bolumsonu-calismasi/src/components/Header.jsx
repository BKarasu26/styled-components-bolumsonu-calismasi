import { useContext } from "react"
import { StyledHeader } from "./styled/Header.styled"
import { BsFillSunFill,BsFillMoonFill } from "react-icons/bs"
import { SiteContext } from "../context/SiteContext"


export default function Header(){
  const {themeName,handleClick} = useContext(SiteContext)
  return (
    <>
      <StyledHeader >
      <nav>
        <ul>
          <li><strong>Pico Clone</strong></li>
        </ul>
        <ul>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a onClick={handleClick}>{themeName === "light" ? <BsFillSunFill/> : <BsFillMoonFill/> }</a></li>
        </ul>
      </nav>
      <div className="clear-fix"></div>
      </StyledHeader>
    </>
  )
}

