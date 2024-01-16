import React from 'react'

const DonutHalf = ({ className }) => {
    return (
        <div className={`${className} absolute overflow-hidden`}>
            <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/3be7/50c8/3c3097249f41bffe3b9fb14f819865dc?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g0ygaefr68XyKp-xH7wVY3FENIzg-TyfPEjCykrgGNJpaSUj1468yJGG4rmtS~vVLa8O-k4W4aE3urFviGK3v1ZNNw8mDyiJZEzD-0~63JnCnWZbXw0AHQ9xX2WddqLBpCW0pTdQWfZQPLsj-oDsGAjuWJBJga9ZHz6V9fLM7nDW3oJPps2A0bVoOLlchBPw-qzQ1lIiV4c2UgcM5D-ij7BvjtiqWaHPIE8tu2zF5WuE6mhoTE~zkC-LaV7HcyLVs2qUAwN72vi59p117LKAXYxZhoSrNpeBE7JqdIj7oH8LnNYsroF3vBkF64gWnh3d9st8AXifOOVxh-pu2SDytA__' alt='HalfDonut' />
        </div>
    )
}

export default DonutHalf