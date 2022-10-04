import React from 'react';
import Spacing from '../../foundation/Spacing.js';

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
