interface Ability {
    name: string;
    url: string;
  }
  
  interface Version {
    name: string;
    url: string;
  }
  
  interface GameIndex {
    game_index: number;
    version: Version;
  }
  
  interface VersionDetails {
    rarity: number;
    version: Version;
  }
  
  interface HeldItem {
    item: {
      name: string;
      url: string;
    };
    version_details: VersionDetails[];
  }
  
  interface Move {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: Version;
    }[];
  }
  
  interface SpriteImages {
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
  }
  
  interface OtherSprites {
    dream_world: SpriteImages;
    home: SpriteImages;
    "official-artwork": SpriteImages;
  }
  
  interface GenerationSprites {
    [key: string]: {
      [key: string]: string;
    };
  }
  
  interface PokemonSprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: OtherSprites;
    versions: GenerationSprites;
  }
  
  interface Stat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  
  interface Type {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  
export interface Pokemon {
    abilities: {
      ability: Ability;
      is_hidden: boolean;
      slot: number;
    }[];
    base_experience: number;
    forms: {
      name: string;
      url: string;
    }[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: {
      name: string;
      url: string;
    };
    sprites: PokemonSprites;
    stats: Stat[];
    types: Type[];
    weight: number;
  }