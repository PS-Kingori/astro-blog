// src/lottie-player.d.ts
declare namespace JSX {
    interface IntrinsicElements {
        'lottie-player': {
            autoplay?: boolean;
            loop?: boolean;
            mode?: string;
            src: string;
            style?: string;
            [key: string]: any; // Allow other properties
        };
    }
}