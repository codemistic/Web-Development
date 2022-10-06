import React from 'react'
import "./Landing.css"

function Landing() {
  return (
    <div id="landingg">
      <div id="heading_how_div">
        <h1 id="heading_how">How to use</h1>
      </div>
      <div className='how_to_use' >
        <p className='text_how_to_uses'>
          <b className='number_color'>1.</b> Go to the Navbar "<i><b>Click on Get User</b></i>".
          <br />
          <b className='number_color'>2.</b> A loader will be shown till data is fetched
          <br />
          <b className='number_color'>3.</b> Card grid setup has been used to display"<i><b>Users</b></i>" .
          <br />
          <b className='number_color'>4.</b> Email button on each card is fully functional and can send emails to that email.

        </p>
      </div>
    </div>
  )
}

export default Landing
