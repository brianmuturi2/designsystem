import React from 'react';
import FontSize from '@designsystem/foundation/lib/FontSize';
interface TextProps {
    size?: keyof typeof FontSize;
    children: any;
}
declare const Text: React.FC<TextProps>;
export default Text;
