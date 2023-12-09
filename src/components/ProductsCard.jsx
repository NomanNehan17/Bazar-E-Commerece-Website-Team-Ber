import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, addToFavorites, removeFromFavorites } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";
import { BsArrowRight } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [heartClicked, setHeartClicked] = useState(false);

  const handleDetails = () => {
    navigate(`/product/${product._id}`, {
      state: {
        item: product,
      },
    });
  };

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);

    if (!heartClicked) {
      dispatch(
        addToFavorites({
          _id: product._id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
          description: product.description,
        })
      );
      toast.success(`${product.title} added to favorites`);
    } else {
      dispatch(removeFromFavorites(product._id));
      toast.success(`${product.title} removed from favorites`);
    }
  };

  const heartColor = heartClicked ? "red" : "black";

  return (
    <div id="Shop" className="group relative">
      <motion.div
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          className="w-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </motion.div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">{product.title.substring(0, 15)}</h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                );
                toast.success(`${product.title} is added`);
              }}
              className={`absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500`}
            >
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="relative">
          <p>{product.category}</p>
          <div className="absolute top-0 right-0">
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={handleHeartClick}
              style={{ fontSize: "20px" }}
            >
              <FaHeart
                className={`cursor-pointer transition-colors duration-300 hover:text-red-500`}
                style={{ color: heartColor }}
              />
            </motion.button>
          </div>
        </div>

        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
              Sale
            </p>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductsCard;
