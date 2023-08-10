import React from 'react'
import { Button } from '@/components/ui/button';

const BankHeader = () => {
  return (
    <div className="flex w-full items-center py-11 pl-10 pr-6 border-b border-[#EDF1F6] justify-between">
        <p className="text-2xl not-italic font-normal leading-[130%] text-gray-900">
          Diligence Registration(s)
        </p>
        <div className='max-w-[150px] w-full'>
          <Button >Add New Bank</Button>
        </div>
    </div>
  )
}

export default BankHeader