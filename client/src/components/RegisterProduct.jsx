import{ useState } from 'react';
import{ Scroll }  from "./Index.js";
import{ AiOutlinePlusSquare } from "react-icons/ai";


const RegisterProduct = () => {


  const [productName, setProductName] = useState('');
  const [size, setSize] = useState('');
  const [year, setYear] = useState('');
  const [productDescription, setProductDescription] = useState('');
  //const [images, setImages] = useState([]);


  const images = [];

  const setImages = (i) =>{
    console.log(2);
    images.push(i)
    console.log(3);

  }


  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSizeNameChange = (e) => {
    setSize(e.target.value);
  };

  const handleYearNameChange = (e) => {
    setYear(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleImageUpload = (e) => {
    
    const uploadedImages = Array.from(e.target.files);
    console.log(1);

    setImages(uploadedImages);
    console.log(4);
  };

  const handleImages = () => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform product registration logic here
    // You can access the product name, description, and images from the state
    // and send them to the server or perform any other necessary actions
    console.log('Product Name:', productName);
    console.log('Product Description:', productDescription);
    console.log('Images:', images);
  };


  return (
    <div className="container mx-auto py-10">
        <Scroll/>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Authenticate with NeuraFort</h1>
        <form onSubmit={handleSubmit}>
            <div className="blue-glassmorphism slide-in">
                <div className="mb-6">
                    <label htmlFor="productName" className="block text-lg font-bold text-gradient mb-2">Manufacturer & Model</label>
                    <input
                    type="text"
                    id="productName"
                    value={productName}
                    onChange={handleProductNameChange}
                    className="w-full rounded-3xl border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter the manufacturer and model of the item"
                    required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="serialNumber" className="block text-lg font-bold text-gradient mb-2">Serial Number</label>
                    <input
                    type="text"
                    id="serialNumber"
                    value={productName}
                    onChange={handleProductNameChange}
                    className="w-full rounded-3xl border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter the serial number of the item"
                    required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="size" className="block text-lg font-bold text-gradient mb-2">Size</label>
                    <input
                    type="text"
                    id="size"
                    value={size}
                    onChange={handleSizeNameChange}
                    className="w-full rounded-3xl border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter the size of the item"
                    required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="year" className="block text-lg font-bold text-gradient mb-2">Year</label>
                    <input
                    type="text"
                    id="year"
                    value={year}
                    onChange={handleYearNameChange}
                    className="w-full rounded-3xl border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter the year the item was produced/released"
                    required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="productDescription" className="block text-lg font-bold text-gradient mb-2">Additional information (e.g., Color, Condition, item history)</label>
                    <textarea
                    id="productDescription"
                    value={productDescription}
                    onChange={handleProductDescriptionChange}
                    className="w-full rounded-3xl border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
                    required
                    ></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="imageUpload" className="block text-lg font-bold text-gradient mb-2 ">Upload</label>
                        <input
                                id="imageUpload"
                                type="file"
                                name="imageUpload"
                                onChange={handleImageUpload}
                                style={{display: "none"}}
                                multiple
                                accept=".png,.jpg,.jpeg,.gif,.pdf"
                                required
                    />
                    <label>Upload</label>

                    <div className="mt-10 flex flex-row">
                        <AiOutlinePlusSquare className="w-20 h-20 nav-link nav-link:hover"/>
                        <div>
                            <h1>works</h1>
                            {console.log("Images length:"+images.length)}
                            {images.length > 0  && (
                                <div className="flex flex-row">
                                    {images.map((image, index) => (
                                    <div key={index}>
                                        <img src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} className="w-20 h-20 object-cover mr-2" />
                                    </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    
                
                </div>
        
            </div>  
          
          <div className="mt-10">
            <button type="submit" className=" bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">Register Product</button>
          </div>
          
          
        </form>
      </div>
    </div>
  );
};

export default RegisterProduct;
