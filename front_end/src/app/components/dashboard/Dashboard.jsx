import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ProductCard from '../shared/components/container/ProductCard';

export default function ListView() {
    const [items, setItem] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get('https://localhost:8000/api/product/');
            setItem(res.data);
        };
        fetchProducts();
    }, []);
    // ----- Function to get promo products into array. ------
    // var promoItems = [];
    // {
    //     items
    //         .filter((item) => item.tag.search('promo'))
    //         .map((filteredItem) => {
    //             promoItems.push(filteredItem);
    //         });
    // }

    // Shuffle random 6 prods
    var shuffle = items;
    const shuffled = shuffle.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 6);

    return (
        <section>
            {/* Carousel */}
            <div
                id="default-carousel"
                className="relative w-full bg-black"
                data-carousel="static"
            >
                <div className="overflow-hidden relative h-[600px] rounded-lg sm:h-[400px] xl:h-[600px] 2xl:h-[800px]">
                    <div
                        className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                        data-carousel-item=""
                    >
                        <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                            First Slide
                        </span>
                        <img
                            src="/src/app/assets/images/Carousel/Photos_carousel1.png"
                            className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2"
                            alt="..."
                        />
                    </div>

                    <div
                        className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
                        data-carousel-item=""
                    >
                        <img
                            src="/src/app/assets/images/Carousel/photo3_carousel.png"
                            className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2"
                            alt="..."
                        />
                    </div>

                    <div
                        className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
                        data-carousel-item=""
                    >
                        <img
                            src="/src/app/assets/images/Carousel/photo2_carousel.png"
                            className="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2"
                            alt="..."
                        />
                    </div>
                </div>

                <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-carousel-slide-to="0"
                    ></button>
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                        aria-current="false"
                        aria-label="Slide 2"
                        data-carousel-slide-to="1"
                    ></button>
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                        aria-current="false"
                        aria-label="Slide 3"
                        data-carousel-slide-to="2"
                    ></button>
                </div>

                <button
                    type="button"
                    className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev=""
                >
                    <img src="/src/app/assets/images/Carousel/Prev.png" alt="..." />
                </button>
                <button
                    type="button"
                    className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next=""
                >
                    <img src="/src/app/assets/images/Carousel/Next.png" alt="..." />
                </button>
            </div>

            {/* Items list */}
            <div className="bg-gradient-to-r from-teal-400 text-white block h-[60px] via-transparent my-4 outline outline-2 outline-offset-2 ring-white">
                <h1 className="nor-font ml-10">OUR PRODUCTS INCLUDE</h1>
            </div>
            <div className="p-10 grid grid-cols-4 md:gap-6 sm:gap-5 lg:gap-10 xl:gap-12 content-center">
                {selected.map(
                    (item) =>
                        item.quantity > 0 && (
                            <div key={item.id} className="place-self-center">
                                <ProductCard
                                    name={item.name}
                                    description={item.description}
                                    id={item.id}
                                    imglink={item.imglink}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            </div>
                        ),
                )}
            </div>
            <div className="bg-gradient-to-r from-teal-400 text-white block h-[60px] via-transparent my-4 outline outline-2 outline-offset-2 ring-white">
                <h1 className="nor-font ml-10">BY CATEGORY</h1>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/1 md:basis-1/2 p-10 float-left ">
                    <h3 className="pl-2 mb-10 nor-font bg-gradient-to-r from-teal-400 via-transparent">
                        Men Plain T-shirt
                    </h3>
                    <img
                        src="/src/app/assets/images/mockup_nude_t-shirt.png"
                        alt="..."
                        className="w-[800px] h-[440px] drop-shadow-[5px_5px_1px_rgba(0,0,0,0.65)] ease-in duration-200 hover:drop-shadow-[20px_20px_10px_rgba(0,0,0,0.55)]"
                    />
                </div>
                <div className="basis-1/1 md:basis-1/2 p-10 float-right">
                    <h3 className="pl-2 mb-10 nor-font bg-gradient-to-r from-teal-400 via-transparent">
                        Men Printed T-shirt
                    </h3>
                    <img
                        src="/src/app/assets/images/mockup_print_t-shirt.png"
                        alt="..."
                        className="w-[800px] h-[440px] drop-shadow-[5px_5px_1px_rgba(0,0,0,0.65)] ease-in duration-200 hover:drop-shadow-[20px_20px_10px_rgba(0,0,0,0.55)]"
                    />
                </div>
            </div>

            <div className="bg-white flex flex-row nor-font">
                <div className="basis-1/4 md:basis-1/3 p-10">
                    <h3 className="pl-2 mb-10 nor-font bg-gradient-to-r from-teal-400 via-transparent">
                        Women Vest
                    </h3>
                    <img
                        src="/src/app/assets/images/mockup_women_jacket.png"
                        alt="..."
                        className="drop-shadow-[5px_5px_1px_rgba(0,0,0,0.65)] ease-in duration-200 hover:drop-shadow-[20px_20px_10px_rgba(0,0,0,0.55)]"
                    />
                </div>
                <div className="basis-1/4 md:basis-1/3 p-10">
                    <h3 className="pl-2 mb-10 nor-font bg-gradient-to-r from-teal-400 via-transparent">
                        Women Accessories
                    </h3>
                    <img
                        src="/src/app/assets/images/braka_women-jacket.png"
                        alt="..."
                        className="drop-shadow-[5px_5px_1px_rgba(0,0,0,0.65)] ease-in duration-200 hover:drop-shadow-[20px_20px_10px_rgba(0,0,0,0.55)]"
                    />
                </div>
                <div className="basis-1/4 md:basis-1/3 p-10 ">
                    <h3 className="pl-2 mb-10 nor-font bg-gradient-to-r from-teal-400 via-transparent">
                        Women Plain T-shirt
                    </h3>
                    <img
                        src="/src/app/assets/images/mockup_gothic.png"
                        alt="..."
                        className="drop-shadow-[5px_5px_1px_rgba(0,0,0,0.65)] ease-in duration-200 hover:drop-shadow-[20px_20px_10px_rgba(0,0,0,0.55)]"
                    />
                </div>
            </div>
        </section>
    );
}
