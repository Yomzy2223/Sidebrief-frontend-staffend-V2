import React from 'react'
import { dataBody, headers } from './constant'
import { DiligenceTable } from '@/components/features/DiligenceTable'



const Pending = () => {
  return (
    <div>
     <DiligenceTable
   header={headers}
   body={dataBody}
   lastColumnCursor
   link={true}
  />
    </div>
  )
}

export default Pending
