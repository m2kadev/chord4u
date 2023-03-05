import React from 'react'

const ButtonGroup = ({categories}) => {
  return (
    <div className='button-group'>
        {
            categories?.map(category => (
                <div className='category-btn' key={category?.id}>
                    <span>{category?.name}</span>
                </div>
            ))
        }
    </div>
  )
}

export default ButtonGroup