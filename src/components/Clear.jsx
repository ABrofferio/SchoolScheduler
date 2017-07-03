import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clearReminders} from '../actions';

class Clear extends Component {
  render(){
    return(
        <button
          type='button'
          className='btn btn-danger'
          onClick={()=> this.props.clearReminders()}
          >
          Clear Reminders
        </button>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({clearReminders}, dispatch);
}

function mapStateToProps(state){
  return{
    reminders:state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Clear);
