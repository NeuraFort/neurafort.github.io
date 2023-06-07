
import { IoMdOpen } from "react-icons/io";


const About = () => {
  

  return (
    <div className="container mx-auto py-10 mb-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About NeuraFort</h1>
        <p className="text-gradient mb-8">
          NeuraFort is a leading blockchain-based platform revolutionizing trust
          and authenticity verification in various industries. Our mission is to
          provide a secure and transparent solution that combats counterfeits
          and establishes trust between businesses and consumers.
        </p>
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="text-gradient mb-8">
          NeuraFort leverages blockchain technology and advanced cryptographic
          techniques to ensure the integrity and immutability of product data.
          Here's how our platform works:
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex-1 text-center">
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Product Registration & Authentication</h3>
            <p className="text-gradient">
              Businesses register their products within the NeuraFort ecosystem,
              securely storing product information on the blockchain.<br/> Individuals and resellers can upload items for verification. Our
              verified experts assess the authenticity of the products and
              generate certificates of authenticity.
            </p>
          </div>
          <div className="flex-1 text-center">
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Community Consensus and User Approval</h3>
            <p className="text-gradient">
              Verified users play a crucial role as verifiers of product authenticity in the NeuraFort ecosystem. 
              These verified users possess extensive knowledge and expertise in product authentication. 
              When an item is submitted for verification, verified users have the opportunity to cast their votes based on their assessment of the item's authenticity. 
              The voting process allows the community to collectively establish consensus on the legitimacy of the product.<br/>
            </p>
          </div>
          <div className="flex-1 text-center">
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Community Consensus</h3>
            <p className="text-gradient">
              The NeuraFort community collectively validates the credibility and
              expertise of verified users through a decentralized consensus
              mechanism, ensuring trust and accountability.
            </p>
          </div>
        </div>
        <div className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] mt-8">
            <a href='../../../README.pdf' target='_blank'>Learn More</a> 
        </div>
        
      </div>
    </div>
  );
};

export default About;
