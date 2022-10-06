import React from 'react'
import * as ReactDOM from 'react-dom/client'

import {Button, Color, Spacing, Text, Margin} from '@designsystem/react'

import '@designsystem/scss/lib/Button.css'

import '@designsystem/scss/lib/Utilities.css'

import '@designsystem/scss/lib/Margin.css'

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(
    <Margin left space={'none'}>
        <Text size={'xs'}>This is some text</Text>
    </Margin>
);
