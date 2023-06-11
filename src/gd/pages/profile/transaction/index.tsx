import React from 'react'
import { DataTable } from './Datatable'
import { columns, Payment } from './Columns'
import Layout from '../Layout'

const Order = () => {
    const data: Payment[] = [
        {
          id: "728ed52f",
          date: "2-30-2023",
          status: "pending",
        },
        // ...
      ]

  return (
    <Layout>
        <DataTable data={data} columns={columns} />
    </Layout>
  )
}

export default Order