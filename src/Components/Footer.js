import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#28214B] mt-10 py-8 px-6 flex justify-around items-start">
    <div className="flex space-x-4">
      <img src="./home.png" alt="Home" className="w-10 h-10" />
      <img src="./whatsapp.png" alt="WhatsApp" className="" />
    </div>
    <div className="flex flex-col text-white text-start space-y-2">
      <h1 className="font-bold text-lg pb-2">Pages</h1>
      <p className="text-base cursor-pointer">Home</p>
      <p className="text-base cursor-pointer">Reviews</p>
      <p className="text-base cursor-pointer">Pricing</p>
      <p className="text-base cursor-pointer">Privacy & Terms of Use</p>
      <p className="text-base cursor-pointer">Blog</p>
      <p className="text-base cursor-pointer">How it works and FAQs</p>
    </div>

    <div className="flex flex-col text-white text-start space-y-2">
      <h1 className="font-bold text-lg pb-2">Contact Us</h1>
      <p className="text-base">support@whatapartment.com</p>
      <p className="text-base">+61 73384 1822</p>
    </div>
  </div>
  )
}

export default Footer