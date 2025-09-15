export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  headerImage?: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  slug: string;
  tags: string[];
}

export interface BlogMetadata {
  title: string;
  excerpt: string;
  headerImage?: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  tags: string[];
}