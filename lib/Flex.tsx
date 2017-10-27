import * as React from 'react';
import styled, {StyledComponentClass} from 'styled-components';

interface FlexProps {
    alignItems?: string;
    justifyContent?: string;
    vh?: Boolean;
    children?: any;
    className?: string;
}

const Flexhoc = (props: FlexProps) => <div className={props.className}>{ props.children }</div>

const Flex: StyledComponentClass<any,any,any> = styled(Flexhoc)`
    display: flex;
    flex-flow: row wrap;
    align-items: ${ props => props.alignItems ? props.alignItems : `stretch` };
    justify-content: ${ props => props.justifyContent ? props.justifyContent : `flex-start` };
    min-height: ${ props => props.vh ? `100vh` : `auto` };
`;

export { Flex };
