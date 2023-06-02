export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      MarkdownFiles: {
        Row: {
          content: string | null
          created_at: string
          description: string | null
          id: number
          title: string | null
          user_id: string | null
          views: number
        }
        Insert: {
          content?: string | null
          created_at?: string
          description?: string | null
          id?: number
          title?: string | null
          user_id?: string | null
          views?: number
        }
        Update: {
          content?: string | null
          created_at?: string
          description?: string | null
          id?: number
          title?: string | null
          user_id?: string | null
          views?: number
        }
        Relationships: []
      }
      websites_stats: {
        Row: {
          id: number
          page: string | null
          visited_at: string | null
        }
        Insert: {
          id?: number
          page?: string | null
          visited_at?: string | null
        }
        Update: {
          id?: number
          page?: string | null
          visited_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_blog_view: {
        Args: {
          blog_id: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

