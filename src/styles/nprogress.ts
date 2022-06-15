import { createGlobalStyle } from 'styled-components'

const NProgressStyle = createGlobalStyle`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${({ theme }) => theme.palette.secondary} !important;
    height: 5px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1031;
  }

  #nprogress .peg {
    height: 100%;
    position: absolute;
    right: 0;
    transform: rotate(3deg) translate(0, -4px);
    width: 100px;
  }
`

export default NProgressStyle
