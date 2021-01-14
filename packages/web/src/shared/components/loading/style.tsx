import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  0 {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 0.6rem);
  }
  100% {
    transform: translate(0, 0);
  }
`

const bolAnimation = keyframes`
 0 {
     width: 15rem;
     height: 10rem;
  }
  50% {
      width: 15rem;
      height: 10rem;
  }
  100% {
      width: 15rem;
      height: 10rem;
  }
`

export const Container = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: -100vw;
  left: -100vh;
  width: 0vw;
  height: 0vh;
  z-index: 0;
  opacity: 0;
  background: ${props => props.theme.bg.body};

  &.active {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    opacity: 1;
  }
`

export const Box = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 15rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.2, 01, 0.22, 1);

  .active & {
    opacity: 1;
  }
`

export const Tittle = styled.span`
  font-size: 1.6rem;
`

export const Animation = styled.div`
  padding-top: 0.6rem;
  span:nth-last-child(1) {
    animation: ${loadingAnimation} 0.5s 0.1s linear infinite;
  }
  span:nth-last-child(2) {
    animation: ${loadingAnimation} 0.5s 0.2s linear infinite;
  }
  span:nth-last-child(3) {
    animation: ${loadingAnimation} 0.5s 0.3s linear infinite;
  }
`

export const Line = styled.span`
  display: inline-block;
  margin-left: 0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.fg.body};
`
