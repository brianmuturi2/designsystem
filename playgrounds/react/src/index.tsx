import React from 'react'
import * as ReactDOM from 'react-dom/client'

import {Button, Color, Spacing, Text, Margin, Select} from '@designsystem/react'

import '@designsystem/scss/lib/Button.css'

import '@designsystem/scss/lib/Utilities.css'

import '@designsystem/scss/lib/Margin.css'

import '@designsystem/scss/lib/Select.css'

const selectOptions = [
    {
        label: 'Strict black',
        value: 'strict-black'
    },
    {
        label: 'Heavenly Green',
        value: 'heavenly-green'
    },
    {
        label: 'Sweet Pink',
        value: 'sweet-pink'
    }
]

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(
    <div style={{padding: '40px'}}>
        <Select options={selectOptions}/>
    </div>
);
