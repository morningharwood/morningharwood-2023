import {Typography} from './typography'
import type { RegisteredComponent } from '@builder.io/sdk-qwik';

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
    {
        component: Typography,
        name: 'Typography',
        inputs: [
            { name: 'text', type: 'string'},
            { name: 'preset', type: 'text', enum: ['heading1', 'heading2', 'heading3', 'heading4', 'mono', 'eyebrow', 'paragraph', 'custom'] },
            { name: 'class', type: 'string'},
            { name: 'variant', type: 'string', enum: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'] },
        ]
    }
];