import React from 'react';
import {Link} from 'react-router-dom';
import aboutOne from '../../images/about1.jpg';
import aboutTwo from '../../images/about2.jpg';
import aboutThree from '../../images/about3.jpg';
import aboutList from '../../images/aboutList.jpg';
import menuPlanning from '../../images/aboutMenu.jpg';
import googleCalendar from '../../images/aboutCalendar.jpg';
import aboutProfile from '../../images/aboutProfile.jpg';


const About = () => {
  return(
    <div className='about'>
      <div className='ui inverted menu' style={{margin: '0', borderRadius: '0'}}>
        <Link to ='/' className='active item'>Home</Link>
        <Link to ='/log-in' className='item'>Log In</Link>
      </div>
     <div className='ui container aboutContent'>
      <h2 className='aboutTitle'>Blue Saucier App</h2>
      <div className='ui segment'>
        <div className='ui floated header' style={{fontSize: '1.5rem', paddingLeft: '33%'}}>Usefull features to improve your productivity!</div>
        <div className='ui clearing divider'></div>
          <p style={{fontSize: '1.3rem'}}>Blue Saucier is a dynamic and user friendly application. It's primary goal is to assist in basic, yet imporant kitchen management tasks and menu planning. </p>
          <div className='aboutPhotoContainer'>
          <img className='aboutPhotos' src={aboutOne} alt='two cooks in a kitchen'/>
          <img className='aboutPhotos'src={aboutTwo} alt='two brown pages'/>
          <img className='aboutPhotos'src={aboutThree} alt='woman writting on paper'/>
          </div>
        </div>
      <div className='appDescription'>
        <div className='ui card' style={{textAlign: 'center', marginTop:'1.2%'}}>
          <div className='content'>
            <div className='header'>Item List</div>
            <div className='description' style={{marginLeft:'0'}}>
             <ul>
               <li>You will be able to create multiple ordering lists to help you keep track of your kitchen needs.</li> 
                <br></br>
               <li>Created lists can be edited for corrections or can be deleted when no longer needed.</li>
             </ul>
            </div>
          </div>
          <div className="image">
            <img src={aboutList} alt='Several cooking ingredients'/>
          </div>
        </div>
        <div className='ui card' style={{textAlign: 'center'}}>
          <div className='content'>
            <div className='header'>Menu Planning</div>
            <div className='description' style={{marginLeft:'0'}}>
              <ul>
                <li>Menu planning is a feature that allows you to create menus from scratch.</li>
                  <br></br>
                <li>Multiple menus can be created and saved.</li>
              </ul>
            </div>
          </div>
          <div className="image">
            <img src={menuPlanning} alt='a food menu'/>
          </div>
        </div>
        <div className='ui card' style={{textAlign: 'center'}}>
          <div className='content'>
            <div className='header'>Google Calendar</div>
            <div className='description' style={{marginLeft:'0'}}>
              <ul>
                <li>We added Google calendar and it's features to help you keep track of important events and dates.</li>
              </ul>
            </div>
          </div>
          <div className="image">
            <img src={googleCalendar} alt='Google calendar'/>
          </div>
        </div>
        <div className='ui card' style={{textAlign: 'center'}}>
          <div className='content'>
            <div className='header'>Profile Management</div>
            <div className='description' style={{marginLeft:'0'}}>
              <ul>
                <li>Profile Editing is a feature for changing the user's name as well as the email and password used for loging in</li>
              </ul>
            </div>
          </div>
          <div className="image" >
            <img src={aboutProfile} alt='cook doing some prep'/>
        </div>
        </div>
      </div>
     </div>
    </div>
   
  )
}

export default About;
