import React from 'react'

export const Footer = () => {

    const year=new Date().getFullYear()
  return (
   <div className=" w-full h-[12vh] flex items-center justify-center mt-[3%] text-center ">
            <p className="text-[1.1rem] mx-[2%]">{`Copyright © ${year} Francisco Mackinnon. All Rights Reserved`} </p>
            

        </div>
  )
}
