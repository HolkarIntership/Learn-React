import React, { useEffect, useState } from 'react';
import { Await, Link, useParams } from 'react-router-dom';

const ProductDetails = () => {

    const [product, setProduct] = useState()
    const { id } = useParams();

    


    useEffect(() => {

        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((res) => setProduct(res))
            .catch((err) => console.log(err));

    }, [id]);

    // console.log("product", product.images[0]);



    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <Link to="/product" >Back</Link>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    {product?.images.map((img, index) => {
                        return (<img
                            src={img}
                            alt={product?.title}
                            className="rounded-lg w-full object-cover"
                        />
                        )
                    })}



                </div>
                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">{product?.title}</h2>
                    <p className="text-gray-600">{product?.description}</p>
                    <p className="text-xl text-green-600 font-semibold">₹{product?.price}</p>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
