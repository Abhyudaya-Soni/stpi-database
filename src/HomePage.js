import React from 'react';

function HomePage({ notifications }) {
  console.log('Notifications:', notifications);

  return (
    
    <div className="container text-center">
      <h1 className="display-1">Welcome to STPI Jaipur</h1>
      <h3 className="display-6">Get started with the database</h3>
      <h3 className="display-6">Using the features above</h3>
      <br />
      <hr />
      <br />
      <br />
      <br />
      <div className='row'>
      <div className='col-4'></div>
      <div className="notifications col-4">
        
        <h2>Notifications</h2>
        {notifications.length === 0 ? (
          <p>No current notifications.</p>
        ) : (
          
          <ul type='none'>
            {notifications.map((Notification, index) => (
              
              <li key={index} className='alert alert-dark'>
                <p>Customer Name: {Notification['Customer Name']}</p>
                <p>Service: {Notification['Services']}</p>
                <p>Due Date: {Notification['Renewal Due Date']}</p>

              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='col-4'></div>
      </div>
      </div>
  );
}

export default HomePage;
