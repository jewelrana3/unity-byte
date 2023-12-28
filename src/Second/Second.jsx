import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductTwo from "../Two/ProductTwo";



const Second = () => {
    const [products] = useProducts();
    console.log(products)
    const [activeTab, setActiveTab] = useState('top');

    const [activeDropdown, setActiveDropdown] = useState(null);


    const toggleDropdown = () => {
        setActiveDropdown('top');
    };

    const toggleDropdown2 = () => {
        setActiveDropdown('best');
    };

    const toggleDropdown3 = () => {
        setActiveDropdown('latest');
    };
    // Filter products based on the active tab
    const filteredProducts = () => {
        switch (activeTab) {
            case 'top':
                return products.filter(product => product.top);
            case 'best':
                return products.filter(product => product.best);
            case 'latest':
                return products.filter(product => product.latest);
            default:
                return products;
        }
    };
    return (
        <div>
            <div>
                <div className="second lg:flex justify-between gap-12 mt-20 md:px-6 px-2">
                    <div className="">
                        <h2 className="md:ml-2 text-2xl font-bold mb-2">Best Sellar</h2>
                    </div>
                    <div className="">
                        <div className="flex gap-5 mt-3">
                            <div onClick={toggleDropdown} className={`second-div ${activeDropdown === 'top' ? 'bg-red active' : ''}`}>
                                <p onClick={() => setActiveTab('top')} className="border-right"></p>
                            </div>
                            <div onClick={toggleDropdown2} className={`second-div ${activeDropdown === 'best' ? 'bg-red' : ''}`}>
                                <p onClick={() => setActiveTab('best')} className="border-right"></p>
                            </div>
                            <div onClick={toggleDropdown3} className={`second-div  ${activeDropdown === 'latest' ? 'bg-red' : ''}`}>
                                <p onClick={() => setActiveTab('latest')} className="border-right"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap border-header mt-2">
                    <p className="border-down"></p>
                    <p className="border-down2"></p>
                </div>
            </div>

            <div className="lg:flex justify-around gap-5 mt-20 mb-28 second2">
                <div className="image-second left-side-shop">
                    <img src="https://i.ibb.co/Vgf7wjL/download-5.jpg" alt="pic" />
                </div>
                <div className="right-side-shop">
                    {filteredProducts().map(product => (
                        <ProductTwo
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Second;