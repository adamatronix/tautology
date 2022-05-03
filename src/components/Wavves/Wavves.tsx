import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

interface WavvesProps {
  /**
   * Is this the principal call to action on the page?
   */
  children: string;
}

const Wavves = ({children, ...props}: WavvesProps) => {

  return (
    <Wrapper {...props}>
      { children }
    </Wrapper>
  )
}

export default Wavves;