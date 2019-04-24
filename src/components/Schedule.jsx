import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Schedule(props){

  let locationStyles = {
    textTransform: 'uppercase'
  };
  return (
    <div>
      <style jsx>{`
        div {
          border: 1px dotted yellow;
          text-align: center;
          font-family: Allerta;
        }

      `}</style>
      <h3 style={locationStyles}>{props.day}</h3>
      <h4>{props.location}</h4>
      <p>{props.hours}</p>
      <p>The ID is {props.id}</p>
      <p>Last updated:{displayTimeOpen(props.timeOpen)} ago</p>
    </div>
  );
}

function displayTimeOpen(timeOpen){
  return timeOpen.from(new Moment(), true);
  console.log(timeOpen);
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
};

export default Schedule;
