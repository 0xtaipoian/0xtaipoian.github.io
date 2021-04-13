import { Author } from './author';

export interface Post {
  title: string;
  date: string;
  slug: string;
  author: Author;
  content: string;
  coverImage: string;
  tags?: string[];
  ogImage?: {
    url: string;
  };
  excerpt?: string;
}
