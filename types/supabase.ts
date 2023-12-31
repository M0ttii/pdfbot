import { MergeDeep } from 'type-fest'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      conversations: {
        Row: {
          created_at: string
          id: number
          pdf_path: string
          user_id: string
          title: string
        }
        Insert: {
          created_at?: string
          id?: number
          pdf_path?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          pdf_path?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversations_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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

export type RealDatabase = MergeDeep<Database, {
  public: {
    Views: {
      conversations: {
        Row: {
          created_at: string
          id: number
          pdf_path: string
          user_id: string
          title: string
        }
      }
    }
  }
}
>

export type Conversation = RealDatabase['public']['Tables']['conversations']['Row']

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
