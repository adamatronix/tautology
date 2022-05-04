import React, { useState } from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Wavves from './Wavves';

const WavvesStory = styled(Wavves)`
  font-size: 100px;
`

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Wavves',
  component: Wavves
} as ComponentMeta<typeof Wavves>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Wavves> = (args) => { 
  const [trigger,setTrigger] = useState(false);
  return (
    <>
      <WavvesStory trigger={trigger} {...args} />
      <button onClick={()=>setTrigger(true)}>Animation In</button>
      <button onClick={()=>setTrigger(false)}>Animation Out</button>
    </> 
  )
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Get In Touch'
};

export const Fold = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Fold.args = {
  children: 'Get In Touch',
  inAnim: 'fold',
  outAnim: 'normal'
};