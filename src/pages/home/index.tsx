import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import Banner from '../../assets/Banner.svg'
import {
  Container,
  Icons,
  IconsInformation,
  Information,
  Intro,
  Texts,
} from './styles'

export default function Home() {
  return (
    <Container>
      <Information>
        <Intro>
          <Texts>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer horas
            </p>
          </Texts>

          <IconsInformation>
            <div>
              <Icons iconscolor="YellowDark">
                <ShoppingCart size={16} weight="fill" />
              </Icons>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Icons iconscolor="Base">
                <Package size={16} weight="fill" />
              </Icons>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Icons iconscolor="Yellow">
                <Timer size={16} weight="fill" />
              </Icons>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Icons iconscolor="Purple">
                <Coffee size={16} weight="fill" />
              </Icons>
              <span>O café chega fresquinho até você</span>
            </div>
          </IconsInformation>
        </Intro>

        <div>
          <img src={Banner} alt="" />
        </div>
      </Information>

      <main>
        <h1>Coffee</h1>
      </main>
    </Container>
  )
}
