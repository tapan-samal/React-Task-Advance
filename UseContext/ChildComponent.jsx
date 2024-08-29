import React, { useContext } from 'react'
import { Context } from './ParentComponent'

const ChildComponent = () => {
    const candidate = useContext(Context);

  return (
    <>
    <h2>Child Component</h2>
    <h3>Candidate Deatails:</h3>
    <p>Name: {candidate.name}</p>
    <p>Position: {candidate.post}</p>

        
        </>
  )
}

export default ChildComponent