
import { CiStar } from "react-icons/ci";


const ProductTwo = ({ product }) => {
    const { image, title, tk, } = product;


    return (
        <>
            <div className="product mt-6">
                <div className="flex gap-5">
                    <div className="product-image">
                        <img
                            src={image ? image : 'image1'}
                            alt="product image"
                            className="w-72"
                        />
                    </div>
                    <div className=''>
                        <div className="flex gap-1">
                            <p><CiStar /></p>
                            <p><CiStar /></p>
                            <p><CiStar /></p>
                            <p><CiStar /></p>
                        </div>
                        <h2 className="text-2xl font-semibold">{title}</h2>
                        <div className="flex gap-2 text-xl">
                            <p className="text font-bold">${tk}</p>
                            <div className="flex">
                                <p className="relative four">444</p>
                                <p className="absolute mb-1 border-class"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */}
        </>

    )
};

export default ProductTwo;