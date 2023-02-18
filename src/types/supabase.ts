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
      answers: {
        Row: {
          alt: string
          created_at: string | null
          description: string
          id: number
          is_correct: boolean
          question_id: number
          src: string
        }
        Insert: {
          alt: string
          created_at?: string | null
          description: string
          id?: number
          is_correct: boolean
          question_id: number
          src: string
        }
        Update: {
          alt?: string
          created_at?: string | null
          description?: string
          id?: number
          is_correct?: boolean
          question_id?: number
          src?: string
        }
      }
      games: {
        Row: {
          created_at: string | null
          description: string
          id: number
          level: number
          name: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: number
          level: number
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
          level?: number
          name?: string
        }
      }
      questions: {
        Row: {
          created_at: string | null
          description: string
          game_id: number
          id: number
        }
        Insert: {
          created_at?: string | null
          description: string
          game_id: number
          id?: number
        }
        Update: {
          created_at?: string | null
          description?: string
          game_id?: number
          id?: number
        }
      }
      users_answers: {
        Row: {
          answer_id: number
          created_at: string | null
          id: number
          question_id: number
          user_id: string
        }
        Insert: {
          answer_id: number
          created_at?: string | null
          id?: number
          question_id: number
          user_id: string
        }
        Update: {
          answer_id?: number
          created_at?: string | null
          id?: number
          question_id?: number
          user_id?: string
        }
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
