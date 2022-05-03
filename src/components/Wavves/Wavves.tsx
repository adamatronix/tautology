import gsap from 'gsap';
import React, { useCallback, useRef, useState, useEffect } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const CharWrapper = styled.span`
  position: relative;
  display: inline-block;
  transform:  translate(0,100%);

`

interface WavvesProps {
  /**
   * Is this the principal call to action on the page?
   */
  children: string;
}

const Wavves = ({children, ...props}: WavvesProps) => {
  const charCache = useRef<(HTMLDivElement | null)[]>([]);
  const characterTotal = children ? children.split('').filter((val)=> val !== ' ').length : 0;


  const setupStagger = () => {
    gsap.to(charCache.current, {
      y: '0%',
      stagger: {
        each: 0.04
      }
    })
  }

  const useChar = (index:number) => {
    const setRefs = useCallback(
      (node:HTMLDivElement) => {
        if(node !== null) {
          charCache.current[index] = node;

          if(charCache.current.length === characterTotal) {
            setupStagger();
          }
        }
      },
      [charCache.current],
    );
    return [setRefs];
  }

  const splitChars = (text: string) => {
    const chars = text ? text.split('') : null;
    let countIndex = 0;
    return chars && chars.length > 0 ? chars.map((char,i) => {
      const isSpace = char === ' ';
      const [ reference ] = useChar(countIndex);
      countIndex = !isSpace ? countIndex + 1 : countIndex;
      return !isSpace ? (<CharWrapper ref={reference}>{char}</CharWrapper>) : (<> </>);
    }) : false;
  }

  return (
    <Wrapper {...props}>
      { splitChars(children) }
    </Wrapper>
  )
}

export default Wavves;