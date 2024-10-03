import React from 'react'

const Sell = () => {
  return (
    <div className='sell'>
        
      <div className='S-contents'>
        <form>
            <label>Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>password</label>
            <input type='password'></input>
            <label>What are you selling?</label>
            <input type='text'></input>
            <label>Product Image</label>
            <input type='file'></input>
            <label>Cost</label>
            <input min={0} type='number'></input>
            <label>Product Description</label>
            <textarea></textarea>
            <button  type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Sell
