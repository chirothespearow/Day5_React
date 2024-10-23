import React from 'react'
import CustomButton from '../Components/CustomButton'
import { useForm } from 'react-hook-form'
const Contact = () => {
  const {register, handleSubmit} = useForm();
  const outPut = (data) => console.log(data);
  return (
    <div>
        <h1>Welcome to the Contact Page</h1>
        <form onSubmit={handleSubmit(outPut)}>
          <label>Enter your name</label>
          <input {...register('fullName')} type='text'/>
          <label>Enter your email</label>
          <input {...register('email')} type='email'/>
          <label>Enter your message</label>
          <input {...register('msg')} type='text'/>
          <input type='submit'/>
        </form>
    </div>
    
  )
}

export default Contact