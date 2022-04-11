//@ts-ignore
import { isWebpSupported } from 'react-image-webp/dist/utils';

export const webpPath = (imageName: string, hasPng: false): string =>  {
  let imagePath = '/webp-not-sup.png';
  if (isWebpSupported()) {
    imagePath = `/${imageName}.webp`;
  } else {
    if (hasPng) {
      imagePath = `/${imageName}.png`;
    } else {
      imagePath = '/webp-not-sup.png';
    }
  }
  return window.location.origin + imagePath;
};

export const svgPath = (imageName: string): string =>  window.location.origin + `/${imageName}.svg`;