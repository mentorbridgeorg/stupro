export interface ProductData {
  id: string;
  website: string;
  tags: {
    label: string;
    slug: string;
  }[];
  thumbnail: {
    url: string;
  };
  name: string;
  tagline: string;
  description: string;
  productHuntId: string;
  productHuntUrl: string;
  fetchedDate: string;
  isFavorite?: boolean;
}
