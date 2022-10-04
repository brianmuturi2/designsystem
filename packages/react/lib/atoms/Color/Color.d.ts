import React from 'react';
import { Spacing } from '../../index';
interface ColorProps {
    hexCode: string;
    width: keyof typeof Spacing;
    height: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
