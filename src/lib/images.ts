import sizes from "../data/image-sizes.json";

/** Natural width/height for an image under /public, so the browser reserves space (no layout shift). */
export const sizeOf = (src: string): { width?: number; height?: number } => {
    const s = (sizes as Record<string, [number, number]>)[src];
    return s ? { width: s[0], height: s[1] } : {};
};
