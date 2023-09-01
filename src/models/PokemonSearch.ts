export interface PokemonBaseInfo {
    name: string;
    url: string;
  }
  
export interface SearchResult {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonBaseInfo[];
  }
  
  
  
  
  
  