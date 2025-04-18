import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, ShoppingCartIcon, StarIcon } from 'lucide-react';
const ProductDetail = () => {
  const {
    id
  } = useParams();
  const [quantity, setQuantity] = useState(1);
  // This would normally come from an API or database
  // For demo purposes, we're using a static object
  const productData = {
    original: {
      name: 'Original Blend',
      description: 'Our signature Mexican drink made with our secret recipe. A perfect balance of flavors that has delighted customers worldwide.',
      longDescription: 'The Original Blend is where it all began - our flagship product that put Lightspeed on the map. Crafted using our closely guarded secret recipe that has been passed down through generations, this premium Mexican drink offers a perfect balance of sweet, tangy, and spicy notes that dance on your palate.\n\nEach bottle is carefully produced using traditional methods combined with modern quality control to ensure consistency and excellence in every sip. The Original Blend can be enjoyed chilled on its own, used as a mixer in cocktails, or even incorporated into cooking recipes for a unique flavor twist.',
      price: '$12.99',
      images: ['https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', 'https://images.unsplash.com/photo-1551887373-2d888cbc9b37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80', 'https://images.unsplash.com/photo-1551887196-9b7a5c4bcd1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'],
      sizes: ['250ml', '500ml', '1L'],
      rating: 4.9,
      reviews: 1245,
      inStock: true
    },
    spicy: {
      name: 'Spicy Edition',
      description: 'A bold twist on our classic recipe with an added kick of spice. For those who like their drinks with a bit more heat.',
      longDescription: "For those who crave a bit more excitement in their beverages, our Spicy Edition delivers. Building on the foundation of our Original Blend, we've added a carefully selected blend of chilis and spices that provide a pleasant warmth and lingering heat that builds with each sip.\n\nThe Spicy Edition has developed a devoted following among heat-seekers and those looking to add some excitement to their drinking experience. It pairs exceptionally well with Mexican cuisine and makes an outstanding base for spicy cocktails like Micheladas and Bloody Marias.",
      price: '$14.99',
      images: ['https://images.unsplash.com/photo-1622543925917-763c34c31d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', 'https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'],
      sizes: ['250ml', '500ml', '1L'],
      rating: 4.7,
      reviews: 856,
      inStock: true
    },
    citrus: {
      name: 'Citrus Infusion',
      description: 'A refreshing blend with zesty citrus notes. Perfect for hot summer days or as a mixer for your favorite cocktails.',
      longDescription: "Our Citrus Infusion takes the beloved Original Blend and elevates it with bright, zesty notes of lime, lemon, and a hint of orange. The result is a refreshing beverage that's perfect for hot summer days or anytime you need a burst of citrusy goodness.\n\nThe careful balance of our secret recipe with premium citrus flavors creates a harmonious blend that's neither too sweet nor too tart. It's exceptionally versatile - enjoy it chilled over ice, use it as a mixer for tequila or vodka cocktails, or even freeze it into popsicles for a refreshing treat.",
      price: '$13.99',
      images: ['https://images.unsplash.com/photo-1596803244618-8dea39d066a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80', 'https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'],
      sizes: ['250ml', '500ml', '1L'],
      rating: 4.8,
      reviews: 932,
      inStock: true
    }
  };
  // Default to original if ID not found
  const product = productData[id] || productData.original;
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const handleQuantityChange = e => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-black mb-8">
          <ArrowLeftIcon size={20} className="mr-2" /> Back to Products
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden">
              <img src={selectedImage} alt={product.name} className="w-full h-auto object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => <button key={index} onClick={() => setSelectedImage(image)} className={`rounded-lg overflow-hidden border-2 ${selectedImage === image ? 'border-black' : 'border-transparent'}`}>
                  <img src={image} alt={`${product.name} - view ${index + 1}`} className="w-full h-24 object-cover" />
                </button>)}
            </div>
          </div>
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />)}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-2xl font-bold mb-6">{product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <div className="flex space-x-4">
                {product.sizes.map(size => <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 border ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 text-gray-600'} rounded-md`}>
                    {size}
                  </button>)}
              </div>
            </div>
            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button onClick={decreaseQuantity} className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center text-gray-600 hover:bg-gray-100">
                  -
                </button>
                <input type="number" min="1" value={quantity} onChange={handleQuantityChange} className="w-16 h-10 border-t border-b border-gray-300 text-center focus:outline-none" />
                <button onClick={increaseQuantity} className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center text-gray-600 hover:bg-gray-100">
                  +
                </button>
              </div>
            </div>
            {/* Add to Cart */}
            <div className="flex space-x-4 mb-8">
              <button className="flex-1 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition duration-200 flex items-center justify-center">
                <ShoppingCartIcon size={20} className="mr-2" /> Add to Cart
              </button>
              <button className="bg-yellow-400 text-black py-3 px-6 rounded-md hover:bg-yellow-300 transition duration-200">
                Buy Now
              </button>
            </div>
            {/* Product Status */}
            <div className="mb-8">
              <p className="text-gray-600">
                <span className="font-medium">Availability:</span>{' '}
                {product.inStock ? <span className="text-green-600">In Stock</span> : <span className="text-red-600">Out of Stock</span>}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">SKU:</span> LS-{id.toUpperCase()}-
                {selectedSize}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Category:</span> Premium Mexican
                Drinks
              </p>
            </div>
            {/* Product Description */}
            <div>
              <h3 className="text-xl font-bold mb-4">Product Details</h3>
              <div className="text-gray-600 space-y-4">
                {product.longDescription.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </div>
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(productData).filter(([key]) => key !== id).map(([key, relatedProduct]) => <div key={key} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                  <div className="h-64 overflow-hidden">
                    <img src={relatedProduct.images[0]} alt={relatedProduct.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">
                        {relatedProduct.price}
                      </span>
                      <Link to={`/products/${key}`} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default ProductDetail;