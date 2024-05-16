export interface NoticiasResponse {
  status: string;
  request_id: string;
  data: Noticia[];
}

export interface Noticia {
  title?: string;
  link?: string;
  photo_url?: string;
  published_datetime_utc?: Date;
  source_url?: string;
  source_logo_url?: null | string;
  source_favicon_url?: string;
  sub_articles?: Noticia[];
}
