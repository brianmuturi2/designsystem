import React from 'react';
import { FontSize } from '@designsystem/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const classSize = `dse-text dse-text-${size}`;
    return React.createElement("p", { className: classSize }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
