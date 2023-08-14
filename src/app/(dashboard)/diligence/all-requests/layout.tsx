'use client'
import { Search } from '@/components/features/Search'
import { ActiveNav } from '@/components/features/activeNav'
import { useRequest } from '@/hooks'
import React from 'react'



const Requestlayout = ({children}:{ children: React.ReactNode }) => {
  const { viewAllRequestQuery } = useRequest();
  const allRequest=viewAllRequestQuery();
  const allRequestData = allRequest?.data?.data?.data

  const unVerified = allRequestData?. filter (el=>el?.status==='Unverified')
  const verified = allRequestData?. filter (el=>el?.status==='Verified')
  const inProgress = allRequestData?. filter (el=>el?.status==='In progress')
  const completed = allRequestData?. filter (el=>el?.status==='Completed')

  


 

  return (
    <div>
    <div className='pl-10 py-4 pr-6 flex items-center  justify-between'>
        <div className="flex items-center  gap-2">

        <ActiveNav
          title='Unverified'
          path='/diligence/all-requests/unverified'
          status={true}
          length= {unVerified?.length}
        />
            
        <ActiveNav
          title='Verified'
          path='/diligence/all-requests/verified'
          status={true}
          length= {verified?.length}
        />
         <ActiveNav
          title='In Progress'
          path='/diligence/all-requests/in-progress'
          status={true}
          length= {inProgress?.length}
        />
        <ActiveNav
          title='Completed'
          path='/diligence/all-requests/completed'
          status={true}
          length= {completed?.length}
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
