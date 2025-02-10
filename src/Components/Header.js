import React from 'react'

const Header = () => {
  return (
    <div className="bg-white flex justify-between ml-20 mr-20">
        <div className="flex space-x-3 p-2">
          <img src="./home.png" className="h-8 w-8" alt=""></img>
          <img src="./whatsapp.png" className="h-4 mt-2" alt=""></img>
        </div>

        <div className="flex space-x-3 p-2">
          <select id="city" name="city" className="border border-gray-400 py-1 p-2 rounded-md">
            <option value="delhi">English</option>
            <option value="mumbai">Punjabi</option>
            <option value="bangalore">Hindi</option>
          </select>

          <img src="./menu.png" className="h-8 w-8" alt=""></img>
        </div>
      </div>
  )
}

export default Header