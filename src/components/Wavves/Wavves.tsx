import gsap from 'gsap';
import React, { useCallback, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import animationTypes from '../../utils/animationTypes';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  perspective: 2000;
`

const CharWrapper = styled.span<{ type: string }>`
  position: relative;
  display: inline-block;
  
  ${({type}) => type === 'normal' && `
    transform:  translate(0,100%);
  `}

  ${({type}) => type === 'fold' && `
    transform:  translate(0,50%) rotateX(-90deg);
    transform-origin: 50% 100%;
  `}
`

interface WavvesProps {

  trigger?: boolean;
  inAnim?: 'normal' | 'fold';
  outAnim?: 'normal' | 'fold';
  /**
   * Is this the principal call to action on the page?
   */
  children: string;


}

const Wavves = ({
  inAnim = 'normal',
  outAnim = 'normal',
  children, 
  trigger, 
  ...props}: WavvesProps) => {
  const firstLoad = useRef(false);
  const charCache = useRef<HTMLDivElement[]>([]);
  const [loaded, setIsLoaded ] = useState(false);
  const characterTotal = children ? children.split('').filter((val)=> val !== ' ').length : 0;

  useEffect(() => {

    if(loaded && firstLoad.current) {
      if(trigger) {
        inAnimation();
      } else if(!trigger) {
        outAnimation();
      }
    } else if(loaded) {
      firstLoad.current = true;
      animationTypes(`${inAnim}State`, charCache.current)();
    }
    
  }, [trigger, loaded]);

  const inAnimation = () => {
    animationTypes(`${inAnim}In`, charCache.current)();
  }

  const outAnimation = () => {
    animationTypes(`${outAnim}Out`, charCache.current, animationTypes(`${inAnim}State`, charCache.current))();
  }

  const useChar = (index:number) => {
    const setRefs = useCallback(
      (node:HTMLDivElement) => {
        if(node !== null) {
          charCache.current[index] = node;
          if(charCache.current.length === characterTotal) {
            setIsLoaded(true);
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
      return !isSpace ? (<CharWrapper ref={reference} type={inAnim}>{char}</CharWrapper>) : (<> </>);
    }) : false;
  }

  return (
    <Wrapper {...props}>
      { splitChars(children) }
    </Wrapper>
  )
}

export default Wavves;