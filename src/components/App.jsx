import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder, deleteReminder, clearReminders} from '../actions';
import Display from './Display.jsx';
import Section from './Section.jsx';
import Category from './Category.jsx';
import Clear from './Clear.jsx';
import moment from  'moment';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      dueDate: '',
      sectionName:'',
      categoryName:''
    }
  }

  render(){
    return(
      <div className='App'>
        <h1 className='title'>Ready Set Organize</h1>
      <div className='form-inline'>
        <div className='form-group'>
          <div id="Academic">
          <Section sectionName = "Academic"/>
            <Category categoryName = "Tests"/>
            <Category categoryName = "Quizzes"/>
            <Category categoryName = "Papers"/>
            <Category categoryName = "Projects"/>
          </div>
          <div id="Extra-Curricular">
          <Section sectionName = "Extra-Curricular"/>
            <Category categoryName = "Event"/>
          </div>
          <div id="Personal">
          <Section sectionName = "Personal"/>
            <Category categoryName = "Event"/>
          </div>
        </div>
        </div>
        <br></br>
        <Display
          reminders={this.state}
        />
        <Clear
          reminders={this.state}
        />
      </div>
    )
  }
}
{/*function mapDispatchToProps(dispatch){
  return bindActionCreators({addReminder, deleteReminder, clearReminders}, dispatch);
}

function mapStateToProps(state){
  return{
    reminders:state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
*/}
export default App;
