import React from 'react'

const Contact = () => {
  return (
    <div>
      <form action='https://formsubmit.co/226fee2a163bc223bdeac6807869eae4' method='POST'>
        <input type='text' name='name' required />
        <input type='textarea' name='message' required />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default Contact;