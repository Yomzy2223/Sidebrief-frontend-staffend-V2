'use client'
import { Search } from '@/components/features/Search'
import { ActiveNav } from '@/components/features/activeNav'
import React from 'react'

const Requestlayout = ({children}:{ children: React.ReactNode }) => {
  return (
    <div>
    <div className='pl-10 py-4 pr-6 flex items-center  justify-between'>
        <div className="flex items-center  gap-2">
        <ActiveNav
          title='Pending'
          path='/diligence/all-requests/pending'
          status={true}
          length= {5}
        />
            
        <ActiveNav
          title='Verified'
          path='/diligence/all-requests/verified'
          status={true}
          length= {126}
        />
        </div>
      <div className="flex">
        <Search/>
      </div>

    </div>
    {children}
    </div>
  )
}

export default Requestlayout
