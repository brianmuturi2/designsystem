import React from 'react'
import {FontSize} from '@designsystem/foundation';

interface TextProps {
    size?: keyof typeof FontSize,
    children: any
}

const Text: React.FC<TextProps> = ({size = FontSize.base, children}) => {
    const classSize =  `dse-text dse-text-${size}`;

    return <p className={classSize}>{children}</p>
}

export default Text;
