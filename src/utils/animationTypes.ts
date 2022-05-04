import gsap from "gsap";

interface Types {
  [name: string]: Function;
}

export default function(name: string, blocks: Array<HTMLDivElement>, initState?: Function) {

  const executeInitState = () => {
    if(initState) {
      initState();
    }
  }

  const types: Types = {
    normalState: () => {
      gsap.set(blocks, {
        y: '100%',
        rotateX: 0,
        transformOrigin: '50% 100%'
      })
    },
    normalIn: () => {
      gsap.to(blocks, {
        y: '0%',
        stagger: {
          each: 0.04
        },
        onComplete: executeInitState
      })
    },
    normalOut: () => {
      gsap.to(blocks, {
        y: '-100%',
        stagger: {
          each: 0.04
        },
        onComplete: executeInitState
      })
    },
    foldState: () => {
      gsap.set(blocks, {
        y: '100%',
        rotateX: -90,
        transformOrigin: '50% 100%'
      })
    },
    foldIn: () => {
      gsap.to(blocks, {
        y: '0%',
        rotateX: 0,
        duration: 0.5,
        stagger: {
          each: 0.02
        },
        onComplete: executeInitState
      })
    },
    foldOut: () => {
      gsap.to(blocks, {
        y: '100%',
        rotateX: -90,
        duration: 0.5,
        stagger: {
          each: 0.02
        },
        onComplete: executeInitState
      })
    }
  }

  return types[name];
}