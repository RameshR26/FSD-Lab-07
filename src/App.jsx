import 'aframe'
import { useState, useEffect } from 'react'

function ARScene({ color }) {
  useEffect(() => {
    const box = document.querySelector('#box')
    if (box) box.setAttribute('color', color)
  }, [color])

  return (
    <a-scene
      xr-mode="ar"
      renderer="colorManagement: true"
      embedded
      style={{ width: '100%', height: '80vh' }}
    >
      <a-box
        id="box"
        position="0 0 -0.8"
        color="#4CC3D9"
        scale="0.3 0.3 0.3"
      ></a-box>

      <a-entity camera look-controls></a-entity>
    </a-scene>
  )
}

export default function App() {
  const [clr, setClr] = useState('#4CC3D9')

  const toggle = () =>
    setClr(c => (c === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9'))

  return (
    <div>
      <h2>A-Frame AR Example</h2>

      <button onClick={toggle}>
        Toggle Color
      </button>

      <ARScene color={clr} />
    </div>
  )
}