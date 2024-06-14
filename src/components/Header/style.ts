import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 7rem;
`

export const BaseDiv = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;

  padding: 0.5rem;

  width: 8.938rem;
  height: 2.375rem;

  gap:0.25rem;
  font-weight: 400;
  line-height: 160%;
  font-size: 0.875rem;

  background: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple-dark"]};

  border-radius: 6px;

`


export const ButtonCart = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;

  background: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};

  border-radius: 6px;

`