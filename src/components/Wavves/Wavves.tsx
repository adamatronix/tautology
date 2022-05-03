import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const CharWrapper = styled.span`
  position: relative;
  display: inline-block;

`

interface WavvesProps {
  /**
   * Is this the principal call to action on the page?
   */
  children: string;
}

const Wavves = ({children, ...props}: WavvesProps) => {

  const splitChars = (text: string) => {
    const chars = text ? text.split('') : null;
    return chars && chars.length > 0 ? chars.map((char) => {
      const isSpace = char === ' ';
      return !isSpace ? (<CharWrapper>{char}</CharWrapper>) : (<> </>);
    }) : false;
  }

  return (
    <Wrapper {...props}>
      { splitChars(children) }
    </Wrapper>
  )
}

export default Wavves;