"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Flexhoc = (props) => React.createElement("div", { className: props.className }, props.children);
const Flex = styled_components_1.default(Flexhoc) `
    display: flex;
    flex-flow: row wrap;
    align-items: ${props => props.alignItems ? props.alignItems : `stretch`};
    justify-content: ${props => props.justifyContent ? props.justifyContent : `flex-start`};
    min-height: ${props => props.vh ? `100vh` : `auto`};
`;
exports.Flex = Flex;
