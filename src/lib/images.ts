
import imagesData from "./images.json";

export interface HomeImage {
  id: string;
  imageUrl: string | undefined | null | any;
  imageAlt: string | undefined | null | any;
} 

export const HomeImages: HomeImage[] = imagesData.homeImages;