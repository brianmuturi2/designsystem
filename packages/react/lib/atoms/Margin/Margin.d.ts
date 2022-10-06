import React from 'react';
import { Spacing } from '@designsystem/foundation';
interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children: any;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
