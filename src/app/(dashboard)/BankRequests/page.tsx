'use client'
import React from 'react'

import { Search } from '@/components/features/Search'
import { ActiveNav } from '@/components/features/activeNav'
import { DiligenceTable } from '@/components/features/DiligenceTable'
import { dataBody, headers } from './constants'
import { Branch } from './branch'
import BankHeader from '../diligence/header'
import { Back } from '../invoice/back'
const BankRequests = () => {
  return (
    <div>
        {/* <div className="flex items-center py-6 pl-10 pr-6">
            <Back/>
        </div> */}
       
        <BankHeader/>

        <div className="flex items-center gap-8 pl-10 pr-6">
            <ActiveNav
                title='Banks'
                path='/diligence/banks'
                length= {5}
            />
            <ActiveNav
                title='All requests'
                path='/BankRequests/all-requests/pending'
                length= {1290}
            />
        </div>

        <div className='pl-10 py-4 pr-6 flex items-center  justify-between'>
            <div className="flex items-center  gap-2">
                <ActiveNav
                    title='Pending'
                    path='/BankRequests/all-requests/pending'
                    status={true}
                    length= {5}
                />
                <ActiveNav
                    title='Verified'
                    path='/BankRequests/all-requests/verified'
                    status={true}
                    length= {126}
                />
            </div>
            
            <div className="flex">
                <Search/>
            </div>

        </div>

        <div className='pl-10 py-3 pr-6'>
            <Branch 
                length={12}
                branchName='Ketu'
            />
        </div>
        
        <div>
            <DiligenceTable
                header={headers}
                body={dataBody}
                lastColumnCursor
                link={true}
            />
         </div>
    </div>
  )
}

export default BankRequests;