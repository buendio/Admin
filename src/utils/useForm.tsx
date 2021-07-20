// Кастомный хук для работы с формой

// Хук React
import { useState } from 'react'

export const useForm = (cb: any, state = {}) => {
  const [formData, setFormData] = useState(state)

  const handleChange = ({ target: { name, value } }: any) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    cb()
  }

  return {
    handleChange,
    handleSubmit,
    formData
  }
}