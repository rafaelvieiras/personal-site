export interface BlogImage {
  dimensions: BlogImageDimensions;
  alt: any;
  copyright: any;
  url: string;
  medium: {
    dimensions: BlogImageDimensions;
    alt: any;
    copyright: any;
    url: string;
  };
  small: {
    dimensions: BlogImageDimensions;
    alt: any;
    copyright: any;
    url: string;
  };
  tiny: {
    dimensions: BlogImageDimensions;
    alt: any;
    copyright: any;
    url: string;
  };
}

export interface BlogImageDimensions {
  width: number;
  height: number;
}
