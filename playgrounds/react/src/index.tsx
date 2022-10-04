import React from 'react'
import * as ReactDOM from 'react-dom/client'

import {Button, Color, Spacing} from '@designsystem/react'

import '@designsystem/scss/lib/Button.css'

import '@designsystem/scss/lib/Utilities.css'

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(
    <Color
        hexCode={'#000'}
        width={Spacing.sm}
        height={Spacing.sm}/>
);
