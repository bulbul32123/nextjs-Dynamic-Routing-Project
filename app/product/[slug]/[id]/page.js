import { fetchFromApi } from '@/api/getApidata';
import React from 'react'

export default async function SingleProduct({ params }) {
    const { slug, id } = params
    const data = await fetchFromApi(`/products/${id}`)
    const { title, category, brand, thumbnail, description, images, stock, rating, discountPercentage, price } = data
    return (
        <div>
            <div className="bg-black text-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* <!-- images - start --> */}
                        <div className="space-y-4">
                            <div className="relative overflow-hidden rounded-lg bg-gray-100">
                                <img src={thumbnail} loading="lazy" alt={title} className="h-full w-full object-cover object-center" />

                                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {images?.map((img) => (
                                    <div className="overflow-hidden rounded-lg bg-gray-100">
                                        <img src={img} loading="lazy" alt={title} className="h-full w-full object-cover object-center" />
                                    </div>

                                ))
                                }
                            </div>
                        </div>
                        {/* <!-- images - end --> */}

                        {/* <!-- content - start --> */}
                        <div className="md:py-8">
                            {/* <!-- name - start --> */}
                            <div className="mb-2 md:mb-3">
                                <span className="mb-0.5 inline-block text-gray-200 uppercase">{category}</span>
                                <h2 className="text-2xl capitalize font-bold text-white lg:text-3xl">{title}</h2>
                            </div>
                            {/* <!-- name - end --> */}

                            {/* <!-- rating - start --> */}
                            <div className="mb-6 flex items-center">
                                <div className="-ml-1 flex gap-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                                <span className="ml-2 text-sm text-gray-500">{rating}</span>

                                <a href="#" className="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">base on reviews</a>
                            </div>
                            {/* <!-- rating - end --> */}
                            <p className='text-white font-bold text-xl mb-2'>Brand: {brand}</p>
                            {stock > 0 ? 
                            <span className="ml-2 text-sm text-gray-500">{stock} stocks is available</span> : <span className="ml-2 text-sm text-gray-500">stocks are not available</span>
                            }
                            {/* <!-- price - start --> */}
                            <div className="mb-4">
                                <div className="flex items-end gap-2">
                                    <span className="text-xl font-bold text-white md:text-2xl">${price}</span>
                                    <span className="mb-0.5 text-green-500 ">{discountPercentage} %</span>
                                </div>

                                <span className="text-sm text-gray-300">incl. VAT plus shipping</span>
                            </div>
                            {/* <!-- price - end --> */}

                            {/* <!-- shipping notice - start --> */}
                            <div className="mb-6 flex items-center gap-2 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>

                                <span className="text-sm">2-4 day shipping</span>
                            </div>
                            {/* <!-- shipping notice - end --> */}

                            {/* <!-- buttons - start --> */}
                            <div className="flex gap-2.5">
                                <a href="#" className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">Add to cart</a>

                                <a href="#" className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </a>
                            </div>
                            {/* <!-- buttons - end --> */}

                            {/* <!-- description - start --> */}
                            <div className="mt-10 md:mt-16 lg:mt-20">
                                <div className="mb-3 text-lg font-semibold text-white">Description</div>

                                <p className="text-gray-200">
                                    {description}
                                </p>
                            </div>
                            {/* <!-- description - end --> */}
                        </div>
                        {/* <!-- content - end --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
