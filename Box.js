import * as React from 'react';
import styled from 'styled-components';
import { mq } from './constants';

// interface BoxProps {
//   // flex-grow
//   fg?: Boolean;
//   // width
//   w?: string;
//   // max-width
//   maxW?: string;

//   className?: string;
//   onClick?: (e: React.SyntheticEvent<any>) => void;
// }

// Box is always 100% wide under 40rem. width & max-width props only apply > 40rem
const Box = styled.div`
    flex-grow: ${ props => props.fg ? 1 : 0 };
    width: 
      ${ props => props.w ? 
        `100%;
        @media screen and (min-width: ${mq.small}) {
          width: ${props.w};
        }` :
        `100%;`
      }
    max-width: 
      ${ props => props.maxW ?
        `auto;
        @media screen and (min-width: ${mq.small}) {
          ${props.maxW}
        }` : 
        `auto;`
      }
`;

export { Box };
