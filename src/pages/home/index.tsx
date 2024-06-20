import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react'

import Banner from '../../assets/Banner.svg'
import Coffee1 from '../../assets/Image-1.png'
// import Coffee2 from '../../assets/Image-2.png'
// import Coffee3 from '../../assets/Image-3.png'

import {
  CardCoffee,
  Cart,
  Container,
  ContainerMain,
  Count,
  CountButton,
  Icons,
  IconsInformation,
  InfoCoffee,
  InfoPrices,
  Information,
  Intro,
  ListCards,
  Payment,
  Price,
  Texts,
  Type,
  TypesCoffee,
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

      <ContainerMain>
        <h1>Nossos cafés</h1>

        <ListCards>
          <CardCoffee>
            <img src={Coffee1} alt="" />
            <InfoCoffee>
              <TypesCoffee>
                <Type>Tradicional</Type>
                <Type>Tradicional</Type>
              </TypesCoffee>
              <h2>Expresso Tradicional</h2>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </InfoCoffee>
            <InfoPrices>
              <Price>
                <p>R$</p> 9,90
              </Price>

              <Payment>
                <Count>
                  <CountButton>
                    <Minus size={14} weight="bold" />
                  </CountButton>
                  <span>1</span>
                  <CountButton>
                    <Plus size={14} weight="bold" />
                  </CountButton>
                </Count>

                <Cart>
                  <ShoppingCartSimple size={22} weight="fill" />
                </Cart>
              </Payment>
            </InfoPrices>
          </CardCoffee>

          {/* <div>
            <img src={Coffee2} alt="" />
            <h2>Café da tarde</h2>
            <p>
              Café da tarde é uma refeição importante para o dia a dia, e
              acompanhado de um café fresquinho é melhor ainda
            </p>
          </div>

          <div>
            <img src={Coffee3} alt="" />
            <h2>Café da noite</h2>
            <p>
              Café da noite é uma refeição importante para o dia a dia, e
              acompanhado de um café fresquinho é melhor ainda
            </p>
          </div> */}
        </ListCards>
      </ContainerMain>
    </Container>
  )
}
