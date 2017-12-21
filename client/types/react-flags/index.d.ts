import * as React from 'react';
export = Flag;

declare namespace Flag {
    type FlagProps = React.HTMLProps<Flag> | {
        // Alternative text of the flag <img> HTML tag.
        alt?: string,

        // Base path to the content of /vendor
        basePath?: string,

        // Country or region for this flag. (Legacy)
        country?: string,

        // File format of the flag.
        format?: "png" | "icns" | "ico",

        // Height of the flag <img> HTML tag.
        height?: number,

        // Name of country or region for this flag. (Legacy)
        name?: string,

        // Size of the PNG country flag
        pngSize?: 16 | 24 | 32 | 48 | 64,

        // Shiny or Flat
        shiny?: boolean,

        // Width of the flag <img> HTML tag.
        width?: number
    };
}

declare class Flag extends React.Component<Flag.FlagProps> {}