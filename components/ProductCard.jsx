import Link from 'next/link'
import React from 'react'
import slug from 'slug'

export default function ProductCard({ product }) {
    const {title,category,brand,id,thumbnail } = product
    return (
        <Link href={`/product/${slug(title)}/${id}`} className='h-full w-56 rounded-sm bg-gray-800 text-white flex flex-col justify-center  p-3'>
            <img src={thumbnail} className='object-cover rounded-md object-center h-full w-full' alt="Image" />
            <div className="pl-1">
                <h2 className='pt-1 pb-1 font-bold'>{title}</h2>
                <p>Category: {category} </p>
                <p>Company: {brand}</p>
            </div>
        </Link>
    )
}
