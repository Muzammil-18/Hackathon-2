import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[#FBEBB5] font-Poppins font-medium">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1340px] mx-auto p-6 md:p-12">
        <div className="text-center md:text-left w-full md:max-w-[440px] md:ml-[105px]">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-wide">
            Rocket Single Seater
          </h1>
          <button className="mt-6 text-xl border-b-2 border-transparent hover:border-black transition">
            Shop Now
          </button>
        </div>

        <div className="w-full max-w-[600px] flex items-center mt-8 md:mt-0">
          <Image
            src="/assets/homepage/hero/Rocket single seater 1.svg"
            alt="Rocket single-seater sofa in a modern style"
            width={600}
            height={440}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
