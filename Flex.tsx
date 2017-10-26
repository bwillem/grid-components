import * as React from 'react';
import styled from 'styled-components';

interface FlexProps {
    alignItems?: string;
    justifyContent?: string;
    vh?: Boolean;
    children?: any;
    className?: string;
}

const Flexhoc = (props: FlexProps) => <div className={props.className}>{ props.children }</div>

const Flex = styled(Flexhoc)`
    display: flex;
    flex-flow: row wrap;
    align-items: ${(props: FlexProps) => props.alignItems ? props.alignItems : `stretch`};
    justify-content: ${(props: FlexProps) => props.justifyContent ? props.justifyContent : `flex-start`};
    min-height: ${(props: FlexProps) => props.vh ? `100vh` : `auto`};
`;

export { Flex };
