import React from 'react';

const Margin = ({ space = 'xxxs', left = false, right = false, top = false, bottom = false, children }) => {
    let spaceClass = ``;
    if (!left && !right && !top && !bottom) {
        spaceClass = `dse-margin-${space}`;
    }
    if (left) {
        spaceClass = `${spaceClass} dse-margin-left-${space}`;
    }
    if (right) {
        spaceClass = `${spaceClass} dse-margin-right-${space}`;
    }
    if (top) {
        spaceClass = `${spaceClass} dse-margin-top-${space}`;
    }
    if (bottom) {
        spaceClass = `${spaceClass} dse-margin-bottom-${space}`;
    }
    return (React.createElement("div", { className: spaceClass }, children));
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
