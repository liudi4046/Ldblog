export interface BlogCardInfo {
  id: string;
  title: string;
  description: string;
}

export interface MarkdownFileOverview {
  created_at: string;
  description: string | null;
  id: number;
  title: string | null;
}
