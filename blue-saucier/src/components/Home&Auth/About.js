import React from 'react';

const About = () => {
  return(
    <div className='ui container'>
      <h2 className='aboutTitle'>Blue Sauicer App</h2>
      <div className='appDescription'>
        <p>Blue Saucier is a dynamic and user friendly application. It's primary goal is to help manage some of the tasks involved in managing the kitchen of a restaurant. </p>
        <p>You will be able to create multiple ordering lists in order to keep track of your kitchen needs, as well as editing those lists for corrections, or deleting them when no longer needed.</p>
        <p>Menu planning is a feature that will allow you to create a menu from scratch. Multiple menus can be created and stored.</p>
        <p>Having access to a virtual canlendar is very important  to keep track of important dates or events, so we added Google Calendar and it's features to aid you in this regard.</p>
        <p>You will also have the option to change your password and email that are being used to log in by using the edit profile feature.</p>
      </div>
    </div>
  )
}

export default About;