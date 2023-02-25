import { component$} from '@builder.io/qwik';
import { TypographyPresets } from './presets';
import type {TypographKeys} from './presets';

type Typography = {
    text: string;
    preset: TypographKeys;
    class: string;
    variant: string;
}

export const Typography = component$((props:Typography) => {
    
    const fields = props.preset === 'custom' ? { variant: props.variant, class: props.class } : TypographyPresets[props.preset];
    // const Tag = fields?.variant;
    console.log(fields);
    return (<h1 class={fields?.class}>{props.text}</h1>);
  });

