'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ActiveNav } from '@/components/features/activeNav';
import { Search } from '@/components/features/Search';
import CMSelect from '@/components/cmSelect';


const DiligenceLayout = ({children}:{ children: React.ReactNode }) => {
    const pathname=usePathname();
   const path = pathname.includes('all-request');
   const options =['all', 'pendings', 'verified']
  return (
    <div>
      <div className="flex w-full items-center py-11 pl-10 pr-6 border-b border-[#EDF1F6] justify-between">
        <p className="text-2xl not-italic font-normal leading-[130%] text-gray-900">

        Diligence Registration(s)
        </p>
        <div className='max-w-[150px] w-full'>
        <Button >Add New Bank</Button>
      </div>
      </div>
      <div className="flex w-full pl-10 pr-6 h-16 border-b border-[#EDF1F6] items-center justify-between">
        <div className="flex items-center gap-8">
            <ActiveNav
            title='Banks'
            path='/diligence/banks'
            length= {5}/>
            <ActiveNav
            title='All requests'
            path='/diligence/all-requests/pending' 
            length= {1290}/>
        </div>
        {!path?(
            <div className="max-w-[373px] w-full">
                <Search/>
            </div>
        ):(
<div className="flex w-fit items-center gap-2">
    <p className="text-sm w-full font-normal text-[#4E5152] leading-[21px]"> Filter by:</p>
    <CMSelect
    defaultValue='all'
    options={options}/>
</div>
        )
        }

      </div>
{children}
    </div>
  )
}

export default DiligenceLayout
