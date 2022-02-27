//@ts-ignore
import { isWebpSupported } from 'react-image-webp/dist/utils';

export const webpPath = (imageName: string): string =>  window.location.origin + (isWebpSupported() ? `/${imageName}.webp` : '/webp-not-sup.png');

export const svgPath = (imageName: string): string =>  window.location.origin + `/${imageName}.svg`;