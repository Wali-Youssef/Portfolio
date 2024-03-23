export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Agent: {
        Row: {
          id: number
          "id-users": string | null
          nom_agent: string | null
        }
        Insert: {
          id?: number
          "id-users"?: string | null
          nom_agent?: string | null
        }
        Update: {
          id?: number
          "id-users"?: string | null
          nom_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Agent_id-users_fkey"
            columns: ["id-users"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      basket: {
        Row: {
          bande: string | null
          empeigne: string | null
          id: number
          lacet: string | null
          languette: string | null
          oeillet: string | null
          pointe: string | null
          semelle: string | null
          trimestre: string | null
        }
        Insert: {
          bande?: string | null
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          pointe?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Update: {
          bande?: string | null
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          pointe?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Relationships: []
      }
      Celebrite: {
        Row: {
          date_de_naissance: string | null
          date_deces: string | null
          description_celebrite: string | null
          id: number
          nationalite_celebrite: string | null
          nom_celebrite: string | null
          photo_celebrite: string | null
          prenom_celebrite: string | null
        }
        Insert: {
          date_de_naissance?: string | null
          date_deces?: string | null
          description_celebrite?: string | null
          id?: number
          nationalite_celebrite?: string | null
          nom_celebrite?: string | null
          photo_celebrite?: string | null
          prenom_celebrite?: string | null
        }
        Update: {
          date_de_naissance?: string | null
          date_deces?: string | null
          description_celebrite?: string | null
          id?: number
          nationalite_celebrite?: string | null
          nom_celebrite?: string | null
          photo_celebrite?: string | null
          prenom_celebrite?: string | null
        }
        Relationships: []
      }
      celebrite_film: {
        Row: {
          celebrite: number
          film: number
        }
        Insert: {
          celebrite: number
          film: number
        }
        Update: {
          celebrite?: number
          film?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_celebrite_film_celebrite_fkey"
            columns: ["celebrite"]
            isOneToOne: false
            referencedRelation: "Celebrite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_celebrite_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
        ]
      }
      Commune: {
        Row: {
          id: number
          nom_commune: string | null
        }
        Insert: {
          id?: number
          nom_commune?: string | null
        }
        Update: {
          id?: number
          nom_commune?: string | null
        }
        Relationships: []
      }
      Films: {
        Row: {
          annee_film: number | null
          description_film: string | null
          description2_film: string | null
          id: number
          image_film: string | null
          nom_film: string | null
          note_film: number | null
        }
        Insert: {
          annee_film?: number | null
          description_film?: string | null
          description2_film?: string | null
          id?: number
          image_film?: string | null
          nom_film?: string | null
          note_film?: number | null
        }
        Update: {
          annee_film?: number | null
          description_film?: string | null
          description2_film?: string | null
          id?: number
          image_film?: string | null
          nom_film?: string | null
          note_film?: number | null
        }
        Relationships: []
      }
      Genre: {
        Row: {
          genre_film: string | null
          id: number
        }
        Insert: {
          genre_film?: string | null
          id?: number
        }
        Update: {
          genre_film?: string | null
          id?: number
        }
        Relationships: []
      }
      genre_film: {
        Row: {
          film: number
          genre: number
        }
        Insert: {
          film: number
          genre: number
        }
        Update: {
          film?: number
          genre?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_genre_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_genre_film_genre_fkey"
            columns: ["genre"]
            isOneToOne: false
            referencedRelation: "Genre"
            referencedColumns: ["id"]
          },
        ]
      }
      Maison: {
        Row: {
          adresse: string | null
          agent: number | null
          favori: boolean | null
          id: number
          image: string | null
          nbrChambres: number | null
          nbrSDB: number | null
          nomMaison: string
          prix: number | null
          rue: string | null
          surface: string | null
        }
        Insert: {
          adresse?: string | null
          agent?: number | null
          favori?: boolean | null
          id?: number
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison: string
          prix?: number | null
          rue?: string | null
          surface?: string | null
        }
        Update: {
          adresse?: string | null
          agent?: number | null
          favori?: boolean | null
          id?: number
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string
          prix?: number | null
          rue?: string | null
          surface?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Maison_agent_fkey"
            columns: ["agent"]
            isOneToOne: false
            referencedRelation: "Agent"
            referencedColumns: ["id"]
          },
        ]
      }
      Plateforme: {
        Row: {
          id: number
          logo: string | null
          plateforme_streaming: string | null
          platerforme_prix: number | null
        }
        Insert: {
          id?: number
          logo?: string | null
          plateforme_streaming?: string | null
          platerforme_prix?: number | null
        }
        Update: {
          id?: number
          logo?: string | null
          plateforme_streaming?: string | null
          platerforme_prix?: number | null
        }
        Relationships: []
      }
      plateforme_film: {
        Row: {
          film: number
          plateforme: number
        }
        Insert: {
          film: number
          plateforme: number
        }
        Update: {
          film?: number
          plateforme?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_plateforme_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_plateforme_film_plateforme_fkey"
            columns: ["plateforme"]
            isOneToOne: false
            referencedRelation: "Plateforme"
            referencedColumns: ["id"]
          },
        ]
      }
      projet: {
        Row: {
          description: number | null
          id: number
          titre: number | null
        }
        Insert: {
          description?: number | null
          id?: number
          titre?: number | null
        }
        Update: {
          description?: number | null
          id?: number
          titre?: number | null
        }
        Relationships: []
      }
      Quartier: {
        Row: {
          fk_commune: number | null
          id: number
          nom_quartier: string | null
        }
        Insert: {
          fk_commune?: number | null
          id?: number
          nom_quartier?: string | null
        }
        Update: {
          fk_commune?: number | null
          id?: number
          nom_quartier?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Quartier_fk_fkey"
            columns: ["fk_commune"]
            isOneToOne: false
            referencedRelation: "Commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Quartier_fk_fkey"
            columns: ["fk_commune"]
            isOneToOne: false
            referencedRelation: "quartiercommune"
            referencedColumns: ["id"]
          },
        ]
      }
      Saga: {
        Row: {
          id: number
          libelle: string | null
        }
        Insert: {
          id?: number
          libelle?: string | null
        }
        Update: {
          id?: number
          libelle?: string | null
        }
        Relationships: []
      }
      saga_film: {
        Row: {
          film: number
          saga: number
        }
        Insert: {
          film: number
          saga: number
        }
        Update: {
          film?: number
          saga?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_saga_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_saga_film_saga_fkey"
            columns: ["saga"]
            isOneToOne: false
            referencedRelation: "Saga"
            referencedColumns: ["id"]
          },
        ]
      }
      Support: {
        Row: {
          id: number
          photo_support: string | null
          prix_support: number | null
          titre_support: string | null
        }
        Insert: {
          id?: number
          photo_support?: string | null
          prix_support?: number | null
          titre_support?: string | null
        }
        Update: {
          id?: number
          photo_support?: string | null
          prix_support?: number | null
          titre_support?: string | null
        }
        Relationships: []
      }
      support_film: {
        Row: {
          fillm: number
          support: number
        }
        Insert: {
          fillm: number
          support: number
        }
        Update: {
          fillm?: number
          support?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_support_film_fillm_fkey"
            columns: ["fillm"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_support_film_support_fkey"
            columns: ["support"]
            isOneToOne: false
            referencedRelation: "Support"
            referencedColumns: ["id"]
          },
        ]
      }
      variant_film: {
        Row: {
          film: number
          variant: number
        }
        Insert: {
          film: number
          variant: number
        }
        Update: {
          film?: number
          variant?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_variant_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_variant_film_variant_fkey"
            columns: ["variant"]
            isOneToOne: false
            referencedRelation: "Variante"
            referencedColumns: ["id"]
          },
        ]
      }
      Variante: {
        Row: {
          id: number
          type: string | null
        }
        Insert: {
          id?: number
          type?: string | null
        }
        Update: {
          id?: number
          type?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      quartiercommune: {
        Row: {
          id: number | null
          nom_commune: string | null
          nom_quartier: string | null
          quartier_id: number | null
        }
        Relationships: []
      }
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never