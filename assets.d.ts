declare module '*.png' {
    const src: string
    export default src
}

declare module '*.png?resize' {
    export const src: string
    export const srcset: string
}

declare module '*.png?webp' {
    const src: string
    export default src
}
