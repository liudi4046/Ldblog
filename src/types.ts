export interface BlogCardInfo {
  id: number;
  title: string;
  description: string;
}

export interface MarkdownFileOverview {
  created_at: string;
  description: string | null;
  id: number;
  title: string | null;
}
