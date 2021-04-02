export class Subdescription {
  label: string;
  description: string;
}

export class FeaturedItem {
  id: string;
  name: string;
  descripton: string;
  prices: {
    net: number,
    gross: number
  };
  imageSrcs: string[];
  colors: string[];
  subdescriptions: Subdescription[];
}
