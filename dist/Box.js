"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const constants_1 = require("./constants");
// Box is always 100% wide under 40rem. width & max-width props only apply > 40rem
const Box = styled_components_1.default.div `
    flex-grow: ${(props) => props.fg ? 1 : 0};
    width: 
      ${(props) => props.w ?
    `100%;
        @media screen and (min-width: ${constants_1.mq.small}) {
          width: ${props.w};
        }` :
    `100%;`}
    max-width: 
      ${(props) => props.maxW ?
    `auto;
        @media screen and (min-width: ${constants_1.mq.small}) {
          ${props.maxW}
        }` :
    `auto;`}
`;
exports.Box = Box;
