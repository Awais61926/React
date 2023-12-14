import React, { useState,button } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaHeart, FaRegHeart, FaEye, FaShoppingCart } from "react-icons/fa";

Modal.setAppElement("#root");

const ProductCard = ({ title, imageUrls, rating, description, price, sliderRef }) => {
  const [isHearted, setIsHearted] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const toggleHeart = () => {
    setIsHearted((prevIsHearted) => !prevIsHearted);
  };

  const toggleQuickView = () => {
    setIsQuickViewOpen(!isQuickViewOpen);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg relative group">
      <div className="relative">
        <Slider {...settings} ref={sliderRef}>
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={imageUrl}
                alt={`Product ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <div className="bg-black h-10 w-10 rounded-full flex items-center justify-center" onClick={() => sliderRef.current.slickPrev()}>
            <FaArrowLeft />
          </div>
        </div>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <div className="bg-black h-10 w-10 rounded-full flex items-center justify-center" onClick={() => sliderRef.current.slickNext()}>
            <FaArrowRight />
          </div>
        </div>
      <div className="relative top-1">
        <div className="absolute right-3 flex gap-4 flex-col">
          {isHearted ? (
            <FaHeart size={22} className="text-gray-500 cursor-pointer" onClick={toggleHeart} />
          ) : (
            <FaRegHeart size={22} className="text-black cursor-pointer" onClick={toggleHeart} />
          )}

          <FaEye size={25} className="cursor-pointer" onClick={toggleQuickView} />
          <FaShoppingCart size={20} className="cursor-pointer" />
        </div>
        </div>
      </div>
      <div className="px-6 ">
        <div className="flex items-center justify-between">
          <h1 className="font-serif font-semibold text-lg">{title}</h1>
        </div>
        <p className="my-1 text-gray-500 font-serif">{description}</p>
        <p className="font-thin font-mono">
          <span className="font-semibold mx-1 font-serif">PKR</span>
          {price}
        </p>
        <div className="flex items-center font-sans">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="text-yellow-500">
              {index + 1 <= rating ? "★" : "☆"}
            </span>
          ))}
          <span className="text-sm ml-1">{rating}</span>
        </div>
      </div>

      {/* Quick View Modal */}
      <Modal
        isOpen={isQuickViewOpen}
        onRequestClose={toggleQuickView}
        contentLabel="Quick View Modal"
        className="modal-content relative top-52"
       
      >
        <Slider {...settings} ref={sliderRef}>
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <img
              
                className="relative right-44 left-0 w-70 h-48 object-cover rounded-t-lg"
                src={imageUrl}
                alt={`Product ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </Modal>
    </div>
  );
};

function App() {
  const productData = [
    {
      title: "GTX Graphics card",
      imageUrls: [
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      rating: 4.5,
      description: "best for gaming",
      price: 40000,
    },
  ];

  const sliderRef = React.createRef();

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {productData.map((product, index) => (
        <ProductCard key={index} {...product} sliderRef={sliderRef} />
      ))}
    </div>
  );
}

export default App;
