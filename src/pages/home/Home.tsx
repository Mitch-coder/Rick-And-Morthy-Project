import { FC } from "react";
import { CharacterList } from "../../containers/CharacterList";

const Home: FC = () => {
  return (
    <CharacterList isFavoritePage={false}/>
  );
};

export { Home };
