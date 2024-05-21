export interface NoticiasResponse {
  status: string;
  items: Noticia[];
}

export interface Noticia {
  title: string;
  snippet: string;
  publisher: string;
  timestamp: string;
  newsUrl: string;
  images: Images;
  hasSubnews?: boolean;
  subnews?: Noticia[];
}

export interface Images {
  thumbnail: string;
  thumbnailProxied: string;
}
