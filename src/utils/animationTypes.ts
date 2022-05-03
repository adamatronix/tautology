import gsap from "gsap";

interface Types {
  [name: string]: Function;
}

export default function(name: string, blocks: Array<HTMLDivElement>) {

  const types: Types = {
    normalIn: () => {
      gsap.to(blocks, {
        y: '0%',
        stagger: {
          each: 0.04
        }
      })
    },
    normalOut: () => {
      gsap.to(blocks, {
        y: '100%',
        stagger: {
          each: 0.04
        }
      })
    }
  }

  return types[name];
}