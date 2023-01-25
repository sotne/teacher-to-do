import React from 'react'
import Nav from './component/Nav'
import Todo from './component/Todo'

export default function App() {
  return (
    <>
      <Nav />

        <div className='contianer'>
          < Todo />
        </div>
    </>
  )
}
