import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import DisplayProduce from './DisplayProduce';
import DisplaySchedule from './DisplaySchedule';
import NewLocationControl from './NewLocationControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

library.add(faStroopwafel);
// import Body from './Body';
// import Icon from './Icon';
// import Nav from './Nav';
// import Ticket from './Links';



// import Error404 from './Error404';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      marketSchedule: [
        // {
        //   day: 'Sunday',
        //   location: 'Lents International',
        //   hours: '9:00am - 2:00pm',
        // },
        // {
        //   day: 'Monday',
        //   location: 'Pioneer Courthouse Square',
        //   hours: '10:00am - 2:00pm',
        // },
        // {
        //   day: 'Tuesday',
        //   location: 'Hillsboro',
        //   hours: '5:00pm - 8:30pm',
        // },
        // {
        //   day: 'Wednesday',
        //   location: 'Shemanski Park',
        //   hours: '10:00am - 2:00pm',
        // },
        // {
        //   day: 'Thursday',
        //   location: 'Northwest Portland',
        //   hours: '2:00pm - 6:00pm',
        // }
      ]
    };
    this.handleAddingNewLocationForm = this.handleAddingNewLocationForm.bind(this);

  }
  handleAddingNewLocationForm(newLocation){
    let newMarketSchedule = this.state.marketSchedule.slice();
    newMarketSchedule.push(newLocation);
    this.setState({marketSchedule: newMarketSchedule});
  }
  render(){
    return (
      <div>
        <style jsx global>{`
        body {
          background-color: black;
          margin: 0;
          padding: 0;
          color: #FFF;
        }
        `}</style>
        <Header/>

        <Switch>
          <Route exact path ='/' render={()=><Body marketSchedule={this.state.marketSchedule}/>}/>
          <Route exact path ='/displayproduce' component={DisplayProduce} />
          // <Route exact path = '/newlocationform'render={() =><NewLocationControl on NewLocationCreation={this.handledAddingNewLocationForm}/>} />
          <Route path = '/newlocation' render={()=><NewLocationControl onAddingNewLocationForm={this.handleAddingNewLocationForm} />}/>
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
