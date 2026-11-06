import { useState } from 'react'

function Password() {
  const [showPassword, setShowPassword] = useState(false)

  const TogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password daxil et"
      />

      <button onClick={TogglePassword}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

export default Password
