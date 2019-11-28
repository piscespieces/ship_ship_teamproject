import React from 'react';
import Typist from 'react-typist';

const TypeWritter = () => {
   return (
      <Typist>
         <Typist.Delay ms={200} />
         Let us find you < br /> the BEST < br /> shipping options...<br />
         <Typist.Delay ms={500} />for any
               < Typist.Delay ms={500} /> and ALL NEEDS.< Typist.Backspace count={1} delay={400} /><Typist.Delay ms={500} />!!!<br />
      </Typist >
   );
}

export default TypeWritter