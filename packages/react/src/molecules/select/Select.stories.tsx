import React from 'react'
import Select from './Select'
import {withA11y} from '@storybook/addon-a11y'

import '@designsystem/scss/lib/Select.css'

const options = [
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

export default {
    title: 'Molecules/Select',
    decorators: [withA11y]
}

export const Common = () => <Select options={options}/>

export const RenderOption = () => <Select options={options} renderOption={({getOptionRecommendedProps, option}) => <span {...getOptionRecommendedProps()}>{option.label}</span>}/>

export const CustomLabel = () => <Select options={options} label={'Select a color'}/>
