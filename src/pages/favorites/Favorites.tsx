import React, { FC } from 'react'
import { CharacterList } from '../../containers/CharacterList'

 const Favorites:FC = () => {
  return (
        //Pero le tengo que agregar un filter
       <>
       <CharacterList isFavoritePage={true}></CharacterList>
       </>
  )
}

export default Favorites
