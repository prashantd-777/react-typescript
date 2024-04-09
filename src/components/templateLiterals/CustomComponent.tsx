import React from 'react'
import Greet from './Greet'

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {

// Used all props from Greet component with ComponentProps
  return (
    <div>CustomComponent</div>
  )
}

export default CustomComponent