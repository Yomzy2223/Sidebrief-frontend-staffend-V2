export const headers = [
    'S/N',
   'Business name',
    'Business reg number',
    'Requested by',
    'Date',
    'Time',
    'Action',
  ]
  export const bodyFullData = [
    {
      
      businessName: 'Tomiwa Oil & Gas',
      businessNumber: '56874ght765',
      requestedBy: 'asumo@gtb.com',
      date: '02/06/23',
      time:'7pm',
      action: 'see result',
    },
    {
      
        businessName: 'Omolara Oil & Gas',
        businessNumber: '56874ght765',
        requestedBy: 'asumo@gtb.com',
        date: '02/06/23',
        time:'7pm',
        action: 'see result',
      },{
      
        businessName: 'Tomiwa Oil & Gas',
        businessNumber: '56874ght765',
        requestedBy: 'asumo@gtb.com',
        date: '02/06/23',
        time:'7pm',
        action: 'see result',
      },{
      
        businessName: 'Ketu Oil & Gas',
        businessNumber: '56874ght765',
        requestedBy: 'asumo@gtb.com',
        date: '02/06/23',
        time:'7pm',
        action: 'see result',
      },{
      
        businessName: 'Tomiwa Oil & Gas',
        businessNumber: '56874ght765',
        requestedBy: 'asumo@gtb.com',
        date: '02/06/23',
        time:'7pm',
        action: 'see result',
      },
  ]

  export const dataBody = bodyFullData?.map((el, index) => [
    index + 1,
    el?.businessName,
    el?.businessNumber,
    el?.requestedBy,
    el?.date,
    el?.time,
    el?.action
  ])