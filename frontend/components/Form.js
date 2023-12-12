import React, { useEffect, useState } from 'react'

// 👇 Here are the validation errors you will use with Yup.
const validationErrors = {
  fullNameTooShort: 'full name must be at least 3 characters',
  fullNameTooLong: 'full name must be at most 20 characters',
  sizeIncorrect: 'size must be S or M or L'
}

// 👇 Here you will create your schema.

// 👇 This array could help you construct your checkboxes using .map in the JSX.
const toppings = [
  { topping_id: '1', text: 'Pepperoni' },
  { topping_id: '2', text: 'Green Peppers' },
  { topping_id: '3', text: 'Pineapple' },
  { topping_id: '4', text: 'Mushrooms' },
  { topping_id: '5', text: 'Ham' },
]

export default function Form() {
  const initialFormValues = { fullName: '', size: '', toppings: [], }
  const [formValues, setFormValues] = useState(initialFormValues)

  // Sample payload: delete this comment later
  // { "fullName": "Jane Doe", "size": "L", "toppings": ["1","2","3","4","5"] }

  const onChange = (e) => {
    const { name, value } = e.target
    const getUpdatedToppingsArray = () => formValues.toppings.includes(value)
      ? formValues.toppings.filter(topping => topping !== value)
      : formValues.toppings.concat(value)
    const newValue = name === 'toppings' ? getUpdatedToppingsArray() : value;
    setFormValues({ ...formValues, [name]: newValue})
  }

  return (
    <form>
      <h2>Order Your Pizza</h2>
      {true && <div className='success'>Thank you for your order!</div>}
      {true && <div className='failure'>Something went wrong</div>}

      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label><br />
          <input 
            name="fullName" 
            type="text"
            placeholder="Type full name" 
            id="fullName" 
            onChange={onChange} value={formValues.fullName}
          />
        </div>
        {true && <div className='error'>Bad value</div>}
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label><br />
          <select 
            id="size" 
            name="size" 
            value={formValues.size}
            onChange={onChange}>
            <option value="">----Choose Size----</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        {true && <div className='error'>Bad value</div>}
      </div>
      <div className="input-group">
      {toppings.map(({topping_id, text}) => (
        <label key={topping_id}>
          <input
            type="checkbox"
            name='toppings'
            value={topping_id}
            onChange={onChange}
            checked={formValues.toppings.includes(topping_id)}
          />
          {text}<br />
        </label>
      ))}
      </div>
      {/* 👇 Make sure the submit stays disabled until the form validates! */}
      <input type="submit" />
    </form>
  )
}
