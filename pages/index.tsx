import { useState } from 'react'
import { titleCase } from 'title-case'

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <div className='h-screen w-screen flex justify-center flex-col items-center gap-6 scrollbar-thin p-7'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold underline'>Titlecase-izer</h1>
      <textarea placeholder='Type Text here...' value={input} className='px-2 py-3 w-9/12 duration-75 bg-black text-white border-b-[1px] scrollbar-thin' onChange={event => {
        setInput(titleCase(event.target.value.toLowerCase()))
      }} />
      <div className='rounded p-2 border-2 block w-9/12 bg-white break-words text-justify  text-black'>
        <p>{input.trim() ? input : 'Type Text here...'}</p>
      </div>
    </div>
  )
}
