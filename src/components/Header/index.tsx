import logo  from "../../assets/logo.svg"
import {MapPin, ShoppingCart} from "@phosphor-icons/react"
import { BaseDiv, ButtonCart, Container,Location } from "./style"

export function Header() {
  return (
      <Container>
        <img src={logo} />

        <BaseDiv>
          <Location>
          <MapPin size={22} weight="fill"/>
            Porto Alegre, RS
          </Location>

          <ButtonCart>
            <ShoppingCart size={22} weight="fill"/>
          </ButtonCart>
        </BaseDiv>
      </Container>
  )
}