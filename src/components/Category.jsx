import React, {Component} from 'react';
import Add from './Add.jsx';

class Category extends Component {

  render() {
    return(
      <div>
      <h3 className={this.props.categoryName}>{this.props.categoryName}</h3>
      <Add
        reminders={this.state}
        categoryName={this.props.categoryName}
        sectionName={this.props.sectionName}
      />
      </div>
    )
  }
}

export default Category;
