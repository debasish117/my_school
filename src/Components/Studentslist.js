import React from 'react'
import Table from './Table'

export default function Studentslist(props) {
  return (
    <>
      <Table items={props.list} />
    </>
  )
}
