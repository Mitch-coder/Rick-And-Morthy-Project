import React, { forwardRef } from "react"

export const FavoriteButton = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <>
        {console.log(rest)}
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      )
    }
  )