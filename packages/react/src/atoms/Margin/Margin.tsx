import React from 'react'
import {Spacing} from '@designsystem/foundation';

interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children: any;
}

const Margin: React.FC<MarginProps> = ({space = 'xxxs', left = false, right = false, top = false, bottom = false,children}) => {
    let spaceClass = ``;

    if (!left && !right && !top && !bottom) {
        spaceClass = `dse-margin-${space}`;
    }

    if (left) {
        spaceClass = `${spaceClass} dse-margin-left-${space}`
    }

    if (right) {
        spaceClass = `${spaceClass} dse-margin-right-${space}`
    }

    if (top) {
        spaceClass = `${spaceClass} dse-margin-top-${space}`
    }

    if (bottom) {
        spaceClass = `${spaceClass} dse-margin-bottom-${space}`
    }

    return (
        <div className={spaceClass}>
            {children}
        </div>
    )
}

export default Margin;
