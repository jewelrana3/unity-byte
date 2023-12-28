
import { GiEternalLove } from "react-icons/gi";
import { TbLoader } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Home = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-32">
                <SwiperSlide>
                    <div className='grid grid-cols-1 lg:grid-cols-2 px-10 gap-6 lg:ml-6'>
                        <div className='flex gap-6 header'>
                            <div>
                              
                                <div className="relative image">
                                    <img src="https://i.ibb.co/dQskGfv/product-cat-6.webp" alt="" />
                                </div>
                                <div className="flex z-10 absolute -mt-24 gap-9 ml-14 icon " >
                                    <p><GiEternalLove className="home-icon" /></p>
                                    <p><TbLoader className="home-icon" /></p>
                                    <p><IoSearchSharp className="home-icon" /></p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><CiStar /></p>
                                </div>
                                <p className="text-xl font-semibold">Parasonic in_Ear Stearo Earp</p>
                                <div className="flex gap-2 text-xl">
                                    <p className="text font-bold">$ 333</p>
                                    <div className="flex">
                                        <p className="relative four">444</p>
                                        <p className="absolute mb-1 border-class"></p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo!</p>
                                <button className="btn-add text-xl p-2 rounded-xl icon mt-9">Add to cart</button>
                            </div>
                        </div>
                        <div className='flex gap-6 header'>
                            <div>
                                <div className="absolute z-10 mt-3 ml-5 bg-amber-500 text-white p-2 rounded-full">
                                    <p>4%</p>
                                </div>
                                <div className="relative image">
                                    <img src="https://i.ibb.co/dQskGfv/product-cat-6.webp" alt="" />
                                </div>
                                <div className="flex z-10 absolute -mt-24 gap-9 ml-14 icon " >
                                    <p><GiEternalLove className="home-icon" /></p>
                                    <p><TbLoader className="home-icon" /></p>
                                    <p><IoSearchSharp className="home-icon" /></p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><CiStar /></p>
                                </div>
                                <p className="text-xl font-semibold">Parasonic in_Ear Stearo Earp</p>
                                <div className="flex gap-2 text-xl">
                                    <p className="text font-bold">$ 333</p>
                                    <div className="flex">
                                        <p className="relative four">444</p>
                                        <p className="absolute mb-1 border-class"></p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo!</p>
                                <button className="btn-add text-xl p-2 rounded-xl icon mt-9">Add to cart</button>
                            </div>
                        </div>
                        <div className='flex gap-6 header'>
                            <div>
                                <div className="absolute z-10 mt-3 ml-5 bg-amber-500 text-white p-2 rounded-full">
                                    <p>4%</p>
                                </div>
                                <div className="relative image">
                                    <img src="https://i.ibb.co/dQskGfv/product-cat-6.webp" alt="" />
                                </div>
                                <div className="flex z-10 absolute -mt-24 gap-9 ml-14 icon " >
                                    <p><GiEternalLove className="home-icon" /></p>
                                    <p><TbLoader className="home-icon" /></p>
                                    <p><IoSearchSharp className="home-icon" /></p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><CiStar /></p>
                                </div>
                                <p className="text-xl font-semibold">Parasonic in_Ear Stearo Earp</p>
                                <div className="flex gap-2 text-xl">
                                    <p className="text font-bold">$ 333</p>
                                    <div className="flex">
                                        <p className="relative four">444</p>
                                        <p className="absolute mb-1 border-class"></p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo!</p>
                                <button className="btn-add text-xl p-2 rounded-xl icon mt-9">Add to cart</button>
                            </div>
                        </div>
                        <div className='flex gap-6 header'>
                            <div>
                                
                                <div className="relative image">
                                    <img src="https://i.ibb.co/dQskGfv/product-cat-6.webp" alt="" />
                                </div>
                                <div className="flex z-10 absolute -mt-24 gap-9 ml-14 icon " >
                                    <p><GiEternalLove className="home-icon" /></p>
                                    <p><TbLoader className="home-icon" /></p>
                                    <p><IoSearchSharp className="home-icon" /></p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><CiStar /></p>
                                </div>
                                <p className="text-xl font-semibold">Parasonic in_Ear Stearo Earp</p>
                                <div className="flex gap-2 text-xl">
                                    <p className="text font-bold">$ 333</p>
                                    <div className="flex">
                                        <p className="relative four">444</p>
                                        <p className="absolute mb-1 border-class"></p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo!</p>
                                <button className="btn-add text-xl p-2 rounded-xl icon mt-9">Add to cart</button>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-1 lg:grid-cols-2 px-10 gap-4 lg:ml-6'>
                        <div className='flex gap-6 header'>
                            <div>
                                <div className="absolute z-10 mt-3 ml-5 bg-amber-500 text-white p-2 rounded-full">
                                    <p>4%</p>
                                </div>
                                <div className="relative image">
                                    <img src="https://i.ibb.co/dQskGfv/product-cat-6.webp" alt="" />
                                </div>
                                <div className="flex z-10 absolute -mt-24 gap-9 ml-14 icon " >
                                    <p><GiEternalLove className="home-icon" /></p>
                                    <p><TbLoader className="home-icon" /></p>
                                    <p><IoSearchSharp className="home-icon" /></p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><CiStar /></p>
                                </div>
                                <p className="text-xl font-semibold">Parasonic in_Ear Stearo Earp</p>
                                <div className="flex gap-2 text-xl">
                                    <p className="text font-bold">$ 333</p>
                                    <div className="flex">
                                        <p className="relative four">444</p>
                                        <p className="absolute mb-1 border-class"></p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo!</p>
                                <button className="btn-add text-xl p-2 rounded-xl icon mt-9">Add to cart</button>
                            </div>
                        </div>
                        <div className='flex gap-6 header'>
                            <div>
                               
                                <div className="relative image">
                                    <img src="https://i.ibb.co/dQskGfv/product-cat-6.webp" alt="" />
                                </div>
                                <div className="flex z-10 absolute -mt-24 gap-9 ml-14 icon " >
                                    <p><GiEternalLove className="home-icon" /></p>
                                    <p><TbLoader className="home-icon" /></p>
                                    <p><IoSearchSharp className="home-icon" /></p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><CiStar /></p>
                                </div>
                                <p className="text-xl font-semibold">Parasonic in_Ear Stearo Earp</p>
                                <div className="flex gap-2 text-xl">
                                    <p className="text font-bold">$ 333</p>
                                    <div className="flex">
                                        <p className="relative four">444</p>
                                        <p className="absolute mb-1 border-class"></p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo!</p>
                                <button className="btn-add text-xl p-2 rounded-xl icon mt-9">Add to cart</button>
                            </div>
                        </div>
                        <div className='flex gap-6 header'>
                            <div>
                              
                                <div className="relative image">
                                    <img src="https://i.ibb.co/dQskGfv/product-cat-6.webp" alt="" />
                                </div>
                                <div className="flex z-10 absolute -mt-24 gap-9 ml-14 icon " >
                                    <p><GiEternalLove className="home-icon" /></p>
                                    <p><TbLoader className="home-icon" /></p>
                                    <p><IoSearchSharp className="home-icon" /></p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><CiStar /></p>
                                </div>
                                <p className="text-xl font-semibold">Parasonic in_Ear Stearo Earp</p>
                                <div className="flex gap-2 text-xl">
                                    <p className="text font-bold">$ 333</p>
                                    <div className="flex">
                                        <p className="relative four">444</p>
                                        <p className="absolute mb-1 border-class"></p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo!</p>
                                <button className="btn-add text-xl p-2 rounded-xl icon mt-9">Add to cart</button>
                            </div>
                        </div>
                        <div className='flex gap-6 header'>
                            <div>
                                <div className="absolute z-10 mt-3 ml-5 bg-amber-500 text-white p-2 rounded-full">
                                    <p>4%</p>
                                </div>
                                <div className="relative image">
                                    <img src="https://i.ibb.co/dQskGfv/product-cat-6.webp" alt="" />
                                </div>
                                <div className="flex z-10 absolute -mt-24 gap-9 ml-14 icon " >
                                    <p><GiEternalLove className="home-icon" /></p>
                                    <p><TbLoader className="home-icon" /></p>
                                    <p><IoSearchSharp className="home-icon" /></p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><IoIosStar className="ci-star" /></p>
                                    <p><CiStar /></p>
                                </div>
                                <p className="text-xl font-semibold">Parasonic in_Ear Stearo Earp</p>
                                <div className="flex gap-2 text-xl">
                                    <p className="text font-bold">$ 333</p>
                                    <div className="flex">
                                        <p className="relative four">444</p>
                                        <p className="absolute mb-1 border-class"></p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo!</p>
                                <button className="btn-add text-xl p-2 rounded-xl icon mt-9">Add to cart</button>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Home;