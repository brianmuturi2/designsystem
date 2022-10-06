import React from 'react'
import * as ReactDOM from 'react-dom/client'

import {Button, Color, Spacing, Text} from '@designsystem/react'

import '@designsystem/scss/lib/Button.css'

import '@designsystem/scss/lib/Utilities.css'

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(
    <Text size={'xs'}>This is some text</Text>
);
