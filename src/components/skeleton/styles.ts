import styled, { css, keyframes } from 'styled-components'

export const glow = keyframes`
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
`

export const skeletonAnimation = css`
  animation: ${glow} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`

export const TextSkeleton = styled.span`
  background-color: #ddd;
  border-radius: 2px;
  display: inline-flex;
  height: 16px;
  ${skeletonAnimation};
  width: 100%;
`
