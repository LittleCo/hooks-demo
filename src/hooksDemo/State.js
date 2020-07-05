import React, { useState } from 'react'

const StateComponent = () => {
  // useState 使函数组件也可以有自己的状态
  const [isGreen, setIsGreen] = useState(true)

  return (
    <h1
      onClick={() => setIsGreen(!isGreen)}
      style={{ color: isGreen ? "limegreen" : "crimson" }}
    >
      useState Example
    </h1>
  )
}

export default StateComponent
