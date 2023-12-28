import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState({} as { [key: string]: string })
  const [copy, setCopy] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      { ...value, [e.target.id]: e.target.value }
    )
  }

  return (
    <section>
      <h1>Box Shadow Generator</h1>

      <div className='container'>
        <div className='controls'>
          <input type='range' id='x'
            value={value['x'] || 0}
            onChange={handleChange}
          />
          <label htmlFor='x'>Eje X</label>

          <input type='range' id='y'
            value={value['y'] || 0}
            onChange={handleChange}
          />
          <label htmlFor='y'>Eje Y</label>

          <input type='range' id='desenfoque'
            value={value['desenfoque'] || 0}
            onChange={handleChange}
          />
          <label htmlFor='desenfoque'>Desenfoque</label>

          <input type='color' id='color'
            value={value['color'] || 0}
            onChange={handleChange}
          />
          <label htmlFor='color'>Color</label>
        </div>
        <div className='sample' style={{
          boxShadow: `${value['x'] || 0}px ${value['y'] || 0}px ${value['desenfoque'] || 0}px ${value['color'] || '#000'}`
        }}>
        </div>
      </div>

      <div className='code'>
        <code>
          {`box-shadow: ${value['x'] || 0}px ${value['y'] || 0}px ${value['desenfoque'] || 0}px ${value['color'] || '#000'};`}
        </code>
        <button id='copy'
          style={
            copy ? { backgroundColor: 'green', color: 'white' } : {}
          }
          onClick={
            () => {
              navigator.clipboard.writeText(`box-shadow: ${value['x'] || 0}px ${value['y'] || 0}px ${value['desenfoque'] || 0}px ${value['color'] || '#7e7e7e'};`)
              setCopy(true)
              setTimeout(() => setCopy(false), 2000)
            }
          }>{
            copy ? 'COPIED' : 'COPY'
          }</button>
      </div>
    </section>
  )
}

export default App
