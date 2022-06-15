import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.s100} ${({ theme }) => theme.spacing.s200};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  min-height: 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    width: 75%;
  }
`

export const UserBox = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.backgrounds.light};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 128px;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.s200};

  &:hover {
    box-shadow: ${({ theme }) => theme.elevation.z1};
    cursor: pointer;
  }
`
