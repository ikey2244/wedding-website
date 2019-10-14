import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Form() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    console.log(e.target.value)
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <div className="max-w-lg mx-auto">
      <form 
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mx-6"  
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <h1 className="font-body text-lg text-center text-gray-700 mb-2">RSVP</h1>
      <p className="text-center text-gray-600 font-body">We hope to see you there!</p>

        <div className="mb-4">
          <label className="block font-body text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name</label>
          <input style={{fontFamily: 'poppins'}} className="text-body shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" id="fullName" placeholder="John Smith" name="fullName" onChange={handleChange} />
        </div>

        <div className="mb-4">
          <label className="block font-body text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input  style={{fontFamily: 'poppins'}} className="text-body shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="email" id="email" placeholder="example@example.com" name="email" onChange={handleChange}  />
        </div>

        <div className="mb-4">
          <label className="block font-body text-gray-700 text-sm font-bold mb-2" htmlFor="response">
            Response 
          </label>
          <div className="relative">
            <select required name="response" onChange={handleChange} className="text-body shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white" >
              <option value="">Select Response</option>
              <option value="accept">Accept</option>
              <option value="decline">Decline</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div className="mb-2">
          <label className="block font-body text-gray-700 text-sm font-bold mb-2" htmlFor="message">Suggest a Song</label>
          <input style={{fontFamily: 'poppins'}} className="text-body shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Song - Artist" name="songSuggestion" id="message" onChange={handleChange}></input>
        </div>

        <button className="bg-red-400 text-white py-2 px-4 rounded block ml-auto font-body mt-4" type="submit">Send</button>
      </form>
    </div>
  )
}