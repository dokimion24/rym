export interface ApiResponseType<T> {
  code: number;
  message: string;
  data: T;
  totalPage: number;
  totalCount: number;
  path: string;
}

export interface Paging<T> {
  href: string;
  itmes: T[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

type AlbumType = "single" | "album" | "compilation";
type SpotifyType =
  | "user"
  | "episode"
  | "playlist"
  | "show"
  | "track"
  | "album"
  | "artist";

interface Image {
  width: null | number;
  height: null | number;
  url: string;
}

export interface Artist {
  external_urls: { spotify: string };
  followers: {};
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: SpotifyType;
  uri: string;
}

interface Copyright {
  type: string;
  text: string;
}

export interface Album {
  album_type: AlbumType;
  artists: Artist[];
  available_markets?: string[];
  copyrights: Copyright[];
  external_ids: {};
  external_urls: { spotify: string };
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  restrictions?: string[];
  total_tracks: number;
  tracks: {}[] | Paging<{}>;
  type: SpotifyType;
  uri: string;
}
