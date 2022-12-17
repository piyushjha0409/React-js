import React from 'react'

const Fragments = () => {
  return (
    <d1>
        {props.items.map(item=> (
            //without the `key` React will fire a key warning 
            <React.Fragment key={item.id}>
                <dt>{item.term}</dt>
                <dt>{item.description}</dt>
            </React.Fragment>
        ))}
    </d1>
  )
}

export default Fragments