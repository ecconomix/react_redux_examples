import React, { Component } from 'react';
import { resetCounter } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ResetCounter extends Component {
  constructor(props) {
        super(props);
   }
   render() {
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" 
                    onClick={(e) => {e.preventDefault();this.props.dispatch(resetCounter())}}>
                      Reset
                  </button>
                </div>
              </div>
            </form>
            </div>
     )
   }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(resetCounter, dispatch) }
}
export default connect(mapDispatchToProps)(ResetCounter);