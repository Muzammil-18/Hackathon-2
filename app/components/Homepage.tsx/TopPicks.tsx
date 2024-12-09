import ProductCard from "../ProductCard";

const TopPicks = () => {
  const productDetail = [
    {
      imagePath: "/assets/products/1.svg",
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
    },
    {
      imagePath: "/assets/products/2.svg",
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
    },
    {
      imagePath: "/assets/products/3.svg",
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
    },
    {
      imagePath: "/assets/products/4.svg",
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
    },
  ];

  const highlights = [
    {
      imagePath: "/assets/homepage/top-picks/1.svg",
      title: "Side Table",
    },
    {
      imagePath: "/assets/homepage/top-picks/2.svg",
      title: "Modern Table",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto font-Poppins font-medium">

      <div className="bg-[#FAF4F4] py-12 flex flex-wrap justify-center gap-8 px-4">
        {highlights.map((item, index) => (
          <HighlightCard key={index} imagePath={item.imagePath} title={item.title} />
        ))}
      </div>


      <div className="mt-14 max-w-[1240px] mx-auto px-4">

        <div className="text-center">
          <h2 className="text-4xl font-semibold">Top Picks For You</h2>
          <p className="text-[#9F9F9F] mt-4">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>


        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {productDetail.map((item, i) => (
            <ProductCard
              key={i}
              name={item.name}
              price={item.price}
              imagePath={item.imagePath}
            />
          ))}
        </div>


        <div className="flex justify-center mt-16">
          <button className="text-lg border-b-2 border-transparent hover:border-black transition">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};


const HighlightCard = ({ imagePath, title }: { imagePath: string; title: string }) => {
  return (
    <div className="max-w-[550px] w-full h-[400px] md:h-[500px] flex items-end justify-start p-6 relative border">
      <img
        src={imagePath}
        alt={`${title} - Highlight`}
        className="absolute right-4 top-2"
      />
      <div>
        <h4 className="text-4xl">{title}</h4>
        <button className="mt-4 text-2xl font-medium hover:border-b hover:border-black">
          View More
        </button>
      </div>
    </div>
  );
};

export default TopPicks;
