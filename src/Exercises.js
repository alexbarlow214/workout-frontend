import React from 'react'
import Exercise from './Exercise'

export default function Exercises( {exercises}) {
  return (
    exercises.map(exercise => {
        //return <div>hi</div>
       return <Exercise key = {exercise.id} exercise = {exercise}/>
    })
  )
}
