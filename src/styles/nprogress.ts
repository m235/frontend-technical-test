import { createGlobalStyle } from 'styled-components'

const NProgressStyle = createGlobalStyle`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 5px;

    background: ${({ theme }) => theme.palette.secondary} !important;
  }

  #nprogress .peg {
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;

    transform: rotate(3deg) translate(0, -4px);
  }
`

export default NProgressStyle
