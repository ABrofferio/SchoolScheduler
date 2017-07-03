import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addReminder} from '../actions';

class Add extends Component {
  render(){
    return(
      <div>
          <input
            className='form-control'
            placeholder='I have to...'
            onChange={event=>{
              this.setState({text: event.target.value});
              this.setState({categoryName: this.props.categoryName});
              this.setState({sectionName: this.props.sectionName});
            }}
          />
          <input
            className='form-control'
            type='datetime-local'
            onChange={event=>this.setState({dueDate: event.target.value})}
          />
        <button
          type='button'
          className='btn btn-succss'
          onClick={()=>this.props.addReminder(this.state.text, this.state.dueDate, this.state.sectionName, this.state.categoryName)}
        >
          Add Reminder
        </button>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addReminder}, dispatch);
}

function mapStateToProps(state){
  return{
    reminders:state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Add);
