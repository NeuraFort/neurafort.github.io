const About = () => {
    return (
        <div class="flex w-full justify-center">
            <div className="flex md:flex-row flex-col items-strart justify-between md:p-20 py-12 px-4 ">
                <div className="flex flex-1 justify-start flex-col md:mr-10 "></div>
                    <h1 class="text-3xl sm:text-5xl text-white text-gradient py-1">About Neurafort</h1>
                    <li>
                    <p className ="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        At NeuraFort, we are passionate about ensuring trust and authenticity in the digital age. <br/>
                        Our mission is to provide a secure and reliable platform for product authenticity verification using blockchain technology.<br/>
                        We believe that every consumer deserves to have confidence in the products they purchase, while businesses deserve protection against counterfeits and unauthorized distribution.
                    </p>
                    <p className ="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">    
                        <br/> NeuraFort leverages the power of blockchain to create an immutable and tamper-proof record of product information.<br/>
                        By registering products on our platform, businesses can establish a verifiable digital footprint, complete with unique identifiers, manufacturing details, and other relevant data.<br/>
                        This information is securely stored on the blockchain, ensuring transparency and traceability throughout the supply chain.<br/>
                        We understand the importance of community and collaboration in building a trustworthy ecosystem. NeuraFort brings together a decentralized network of verified users who play a vital role in the verification process.<br/>
                        These users, known as "Verifiers," help ensure the accuracy and authenticity of product information by reviewing and approving applicants who wish to become verified users.<br/>

                        Our platform is designed to be user-friendly, making it easy for individuals and resellers to upload products for verification. <br/>
                        Once a product is verified, a digital certificate of authenticity is generated, providing consumers with peace of mind and assurance that they are purchasing genuine products.<br/>

                        NeuraFort is committed to continually enhancing the security and integrity of our platform. We leverage advanced technologies, such as machine learning and data analytics, to detect and prevent fraudulent activities.<br/>
                        Our goal is to provide a seamless and reliable experience for businesses, consumers, and the community as a whole.

                        <br/>Join us on our journey to build a world where trust and authenticity prevail. Together, we can create a safer marketplace for everyone.
                    </p>
                    </li>
                    
                </div>
            </div>
    );
}

export default About;