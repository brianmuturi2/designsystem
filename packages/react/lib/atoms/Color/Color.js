import React from 'react';
import { Spacing } from '@designsystem/foundation';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    const dimensions = `dse-width-${width} dse-height-${height}`;
    return (React.createElement("div", { className: dimensions, style: {
            backgroundColor: hexCode,
            width,
            height
        } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
