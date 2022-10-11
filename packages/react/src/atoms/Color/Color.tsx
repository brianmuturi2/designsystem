import React from 'react'
import {Spacing} from '@designsystem/foundation';

interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({hexCode, width = Spacing.sm, height = Spacing.sm}) => {
    const dimensions = `dse-width-${width} dse-height-${height}`;
    return (
        <div className={dimensions} style={{
            backgroundColor: hexCode,
            width,
            height
        }}>

        </div>
    )
}

export default Color;
