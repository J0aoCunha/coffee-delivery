import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;


  width: 100%;
  height: 100vh;
  background: ${props => props.theme["background"]};
  color: ${props => props.theme["text"]};
`