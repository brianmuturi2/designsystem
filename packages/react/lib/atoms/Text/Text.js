import React from 'react';
import FontSize from '@designsystem/foundation/lib/FontSize';

const Text = ({ size = FontSize.base, children }) => {
    const classSize = `dse-text-${size}`;
    return React.createElement("p", { className: classSize }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
