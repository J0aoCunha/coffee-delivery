import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`

export const Information = styled.div`
  display: flex;

  padding: 4rem 0;

  align-items: center;
  justify-content: center;

  gap: 10rem;
`

export const Intro = styled.div`
  display: flex;
  width: 36.75rem;
  flex-direction: column;

  gap: 2rem;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  text-align: left;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bolder;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const IconsInformation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 4.125rem;

  gap: 1.25rem;

  div {
    display: flex;
    width: 18.375rem;
    align-items: center;

    gap: 0.75rem;
    color: ${(props) => props.theme['base-text']};

    span {
      font-size: 1rem;
      line-height: 130%;
      text-align: left;
    }

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

const ICONS_COLOR = {
  YellowDark: 'yellow-dark',
  Yellow: 'yellow',
  Purple: 'purple',
  Base: 'base-text',
} as const

interface IconsProps {
  iconscolor: keyof typeof ICONS_COLOR
}

export const Icons = styled.span<IconsProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  background: ${(props) => props.theme[ICONS_COLOR[props.iconscolor]]};
`

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;

  padding: 2rem 7rem 9.813rem;

  gap: 4rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bolder;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`

export const ListCards = styled.section`
  display: grid;
  grid-template-columns: repeat(5, auto);

  gap: 2rem;

  row-gap: 2.5rem;

  justify-content: flex-start;
`

export const CardCoffee = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 16rem;
  height: 19.375rem;

  gap: 1rem;

  border-radius: 6px 36px;

  background: ${(props) => props.theme['base-card']};

  font-family: 'Baloo 2', sans-serif;

  img {
    width: 120px;
    height: 120px;

    margin-top: -2rem;
  }
`

export const InfoCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;

  p {
    padding: 0 1.25rem;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }

  h2 {
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const TypesCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`

export const Type = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['yellow-light']};
  border-radius: 9999px;

  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  line-height: 130%;
  font-size: 0.625rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};

  /* height: 21px;
  width: 81px; */

  padding: 0.25rem 0.5rem;
`

export const InfoPrices = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1.4rem;

  margin-top: 1.063rem;
`

export const Price = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;

  font-size: 1.5rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};

  gap: 0.25rem;

  p {
    font-weight: 400;
    font-size: 1rem;
  }
`

export const Payment = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  padding: 0.75rem 0.5rem;

  width: 4.5rem;
  height: 2.3rem;

  background: ${(props) => props.theme['base-button']};

  font-size: 1rem;
  color: ${(props) => props.theme['base-title']};
`

export const CountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;

  font-size: 1rem;
  color: ${(props) => props.theme.purple};
`

export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.white};
  }
`
