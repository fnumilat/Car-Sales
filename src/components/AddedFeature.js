import React from 'react';
import { connect } from "react-redux";
import { remove } from '../actions/index';

const AddedFeature = props => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.remove(item)
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(props.feature)} >X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = {
  remove
}

export default connect(state => state, mapDispatchToProps)(AddedFeature);