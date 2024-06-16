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
