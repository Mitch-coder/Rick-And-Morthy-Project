export type characterStatus = "Alive" | "Dead" | "unknown";

export type characterGender = "Male" | "Female" | "Genderless" | "unknown"; 

export type characterOriginOrLocation = {
  name: string;
  url: string;
};

export type character = {
  id: number;
  name: string;
  status: characterStatus;
  species: string;
  type: string;
  gender: characterGender;
  origin: characterOriginOrLocation;
  location: characterOriginOrLocation;
  image: string;
  episode: string[ ];
  url: string;
  created: string;
};
