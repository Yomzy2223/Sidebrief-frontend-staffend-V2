import { DiligenceTable } from '@/components/features/DiligenceTable'

import React from 'react'
import { dataBody, headers } from './constant'

const Verified = () => {
  return (
    <DiligenceTable
    header={headers}
    body={dataBody}
    lastColumnCursor
  
   />
  )
}

export default Verified
