import { DiligenceTable } from '@/components/features/DiligenceTable'

import React from 'react'
import { dataBody, headers } from './constant'

const Banks = () => {
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

export default Banks
