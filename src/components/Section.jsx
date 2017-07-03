import React, {Component} from 'react';

class Section extends Component {
  // sectionNaming(){
  //   this.setState({sectionName:this.props.sectionName})
  // }
  render() {
    return(
      <div>
      <h2>{this.props.sectionName}</h2>
      {/*}{this.sectionNaming()}*/}
      </div>
    )
  }
}

export default Section;
