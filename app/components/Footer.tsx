import Link from "next/link"

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto text-black bg-white px-4 font-Poppins font-medium">
      <div className="max-w-[1240px] mx-auto">

        <div className="mt-[98px] flex flex-col md:flex-row justify-center gap-8 lg:gap-[136px]">

          <div className="text-[#9F9F9F] font-normal w-[285px] flex flex-col justify-center">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p></p>
          </div>

          <div className="max-w-[68px] flex flex-col gap-[46px]">
            <p className="text-[#9F9F9F] mb-[9px]">Links</p>
            <Link href={"/"} className="hover:underline cursor-pointer">Home</Link>
            <Link href={"/"} className="hover:underline cursor-pointer">Shop</Link>
            <Link href={"/"} className="hover:underline cursor-pointer">About</Link>
            <Link href={"/"} className="hover:underline cursor-pointer">Contact</Link>
          </div>


          <div className="max-w-[140px] flex flex-col gap-[46px]">
            <p className="text-[#9F9F9F] mb-[9px]">Help</p>
            <Link href={"/ "} className="hover:underline cursor-pointe">Payment Options</Link>
            <Link href={"/"} className="hover:underline cursor-pointer">Returns</Link>
            <Link href={"/"} className="hover:underline cursor-pointer">Privacy Policies</Link>
          </div>


          <div className="max-w-[300px]">
            <p className="text-[#9F9F9F] ">Links</p>
            <div className="flex flex-wrap xl:flex-nowrap gap-[11px]">
              <input type="text" className="text-[#9F9F9F] py-1 border-b border-black focus:outline-none" />

            </div>
          </div>
        </div>


        <div className="mt-[48px] w-full h-[1px] bg-[#D9D9D9]"></div>



      </div>
    </footer>
  )
}

export default Footer