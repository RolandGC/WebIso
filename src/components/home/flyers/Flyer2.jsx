import React from 'react'

function Flyer2() {
    const post = [
        {
            id: 1,
            title: 'Búsqueda de una propiedad',
            descript: '¿Quieres comprar/alquilar una propiedad?',
            button: 'Solicita Búsqueda',
            imageSrc: '/public/img/dep3.jpeg',
            imageAlt: '',
        },
        {
            id: 2,
            title: 'Inteligencia Artificial',
            descript: '¿Cómo usar la IA en este rubro?',
            button: 'Con Chat-GPT',
            imageSrc: '/public/img/dep4.jpeg',
            imageAlt: '',
        },
    ]
    return (
        <div className='flex flex-col justify-between gap-4 md:flex-row'>
            {post.map((post) => (
                <div className="lg:w-1/2 sm:w-full w-full max-w-full bg-cover bg-center overflow-hidden lg:h-80 inset-0 transform scale-100 hover:scale-105 transition-transform duration-500 ease-in-out bg-black bg-opacity-35" style={{ backgroundImage: `url(${post.imageSrc})` }}>
                    <div className='bg-black bg-opacity-35 w-full h-80 sm:h-80 flex-1 text-center'>
                        <h2 className='text-white text-[35px] font-ubuntu  pt-10'>{post.title}</h2>
                        <p className='text-white font-urbanist mb-8'>{post.descript}</p>
                        <button className='bg-green-500 hover:bg-white p-3 text-white hover:text-green-500 font-urbanist transition-colors duration-300'>
                            {post.button}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Flyer2