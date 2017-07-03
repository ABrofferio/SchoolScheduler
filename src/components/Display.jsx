import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteReminder} from '../actions';
import moment from  'moment';

class Display extends Component {
  render(){
    const {reminders} = this.props;
    console.log('reminders', reminders);
    return(
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return(
              <li key={reminder.id} className="list-group-item">
                <div className={reminder.categoryName}>
                  <div className='circle item-top'></div>
                  <div
                    className="delete-button item-top"
                    onClick={() => this.props.deleteReminder(reminder.id)}
                  >
                    x
                  </div>
                  <div>
                  <p className="mainItem mainInfo">{reminder.text} on {moment(new Date(reminder.dueDate)).format('MMM Do')} </p>
                  <p className="mainUntil mainInfo">{moment(new Date(reminder.dueDate)).fromNow()}</p>
                  </div>
                </div>

              </li>
            )
          })
        }
      </ul>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteReminder}, dispatch);
}

function mapStateToProps(state){
  return{
    reminders:state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Display);
