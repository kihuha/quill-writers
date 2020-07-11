import styled from "styled-components"

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;
`

const Card = styled.div`
  outline: solid 2px red;
  height: 20rem;
`

export { Card, CardWrapper }
