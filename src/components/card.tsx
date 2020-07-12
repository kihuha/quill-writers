import styled from "styled-components"
import { secondary, light } from "../design/colors"

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 50% 50%;
    gap: 0.5rem;
  }

  @media (min-width: 950px) {
    gap: 1.5rem;
  }
`

const Card = styled.div`
  position: relative;
  height: 20rem;
`

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardFilter = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${secondary[75]};
`

const CardTitle = styled.h2`
  color: ${light[100]};
  font-size: 2rem;
`

export { CardWrapper, Card, CardImg, CardFilter, CardTitle }
