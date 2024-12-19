"use client";

import { useState, useEffect } from 'react';

export default function Home() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [data, setData] = useState({name: "", age: 0})
  const [doubleCount, setDoubleCount] = useState(0)

  useEffect(()=>{
     setDoubleCount(count * 2)
  }, [count])

  function onClick(){
    setCount(count + 1)
    setData({name, age})
  }
  return (
    <>
      <span className="bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-slice px-2 text-white lg:from-green-600 lg:text-red-500">
        {count}
      </span>
      <span className="bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-slice px-2 text-white lg:from-green-600 lg:text-red-500">
        {doubleCount}
      </span>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-full px-4 py-2"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        className="rounded-full px-4 py-2"  
      />
      <p>{data.name} {data.age}</p>
      <button
        className="rounded-full bg-white px-4 py-2 text-black"
        onClick={onClick}
      >
        Save Changes
      </button>
    </>
  );
}
