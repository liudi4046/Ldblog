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
          created_at: string | null
          description: string | null
          id: number
          title: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          title?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

