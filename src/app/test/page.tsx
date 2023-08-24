import React from 'react'

const HomeLoader = () => {
  return (
    <div className="flex flex-col h-screen">
      
      {/* Header  */}
        <div className="border-b sticky top-0 bg-white animate-pulse">
            <div className="flex items-center px-6 py-2">
                <div className="flex flex-col justify-center p-23">
                    <div className="relative rounded-lg bg-gray-300 w-[100px] h-[24px]" />
                </div>

                  <div className="flex items-center ml-auto space-x-4">
                    <div className="relative rounded-lg bg-gray-300 w-8 h-[32px]" />
                    <div className="relative rounded-lg bg-gray-300 w-8 h-[32px]" />
                    <div className="flex flex-row items-center space-x-1">
                        <div className="relative rounded-[100%] bg-gray-300 w-8 h-[32px]" />
                        <div className="relative rounded-lg px-3 bg-gray-300 w-2 h-[14px]" />
                    </div>
                    
                  </div>
            </div>
        </div>

      {/* Sidebar */}
        <div className="absolute top-[56px] left-[-1px] box-border w-[237px] h-[100vh] overflow-hidden border-r-[1px] border-solid border-border-color animate-pulse">   
            <div className="absolute top-[38px] left-[24px] flex flex-col items-start justify-start gap-[8px] ">
                <div className="relative rounded-lg py-3 bottom-28  bg-gray-300 w-16 h-[12px]" />
                <div className="relative rounded-lg bg-gray-300 w-48 h-[49px]" />
                <div className="relative rounded-lg bg-gray-300 w-48 h-[49px]" />
                <div className="relative rounded-lg bg-gray-300 w-48 h-[49px]" />
                <div className="relative rounded-lg bg-gray-300 w-48 h-[49px]" />
            </div>

            <div className="absolute top-[808px] left-[24px] rounded-lg w-[188px] overflow-hidden">
                <div className="absolute top-[18px] left-[16px] rounded bg-gray-300 w-[84px] h-5" />
            </div>
            <div className="absolute top-[16px] left-[24px] rounded bg-gray-300 w-6 h-6" />
        </div>
    
        <div className="absolute top-[70px] left-[275px]">
          <div className="flex items-center space-x-4">
            <div className="relative rounded-lg bg-gray-300 w-6 h-[24px]" />
            <div className="relative rounded-sm bg-gray-300 w-[41px] h-[15px]" />       
          </div>
       </div>


       <div className="absolute top-[110px] left-[275px] animate-pulse">
        <div className="flex">
          <div className="relative w-[274px] bg-gray-300 h-[17px]" />
          <div className="relative ml-[415px] w-[274px] bg-gray-300 h-[17px]" />
        </div>
      </div>


      <div className="absolute top-[190px] left-[275px] bg-gray-300 w-[965px] h-[300px] animate-pulse"/>

    </div>

  )
}

export default HomeLoader