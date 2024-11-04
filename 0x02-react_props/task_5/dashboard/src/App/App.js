import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import './App.css';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { useState } from 'react'


const coursesList = [{ id: 1, name: 'ES6', credit: 60 },
{ id: 2, name: 'Webpack', credit: 20 },
{ id: 3, name: 'React', credit: 40 }]

const notificationsList = [
  { id: 1, value: 'New course available', type: 'default' },
  { id: 2, value: 'New resume available', type: 'urgent' },
]


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className='App-body'>
          {
            isLoggedIn ? <CourseList listCourses={[]} /> : <Login login={() => setIsLoggedIn(true)} />
          }
        </div>
        <Footer />
      </div>
    </>
  );
}


App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
