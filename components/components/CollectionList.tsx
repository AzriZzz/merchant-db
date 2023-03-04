import { COLLECTIONDATE, collectionStatement } from '@/constants/data'
import { formatDate, formatterDouble } from '@/constants/serviceUtils';
import { IColList } from '@/models/interface';
import Image from 'next/image'
import React from 'react'

const CollectionList = (props: any) => {
  const { expectedDate, collection } = props.dataset;

  const dashedLines = {
    marginTop: '20px',
    marginBottom: '30px',
    color: 'rgba(233, 233, 233, 1)',
    padding: '1px',
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='ghostwhite' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
  }

  return (
    <div className='mt-2.5 text-xs'>
      <p>{collectionStatement(expectedDate)}</p>
      <div style={dashedLines}></div>
      <div className='collection-list'>
        <h6 className='text-xs font-bold uppercase text-neutral-silver'>{COLLECTIONDATE}</h6>
        <ul className='text-sm'>
          {collection.map((item: IColList, index: number) => (
            <li key={index} className='flex flex-row justify-between py-1.5'>
              <div>{formatDate(item.collectionDate, 'long')}</div>
              <div className='font-bold'>{formatterDouble.format(Number(item.collection))}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CollectionList