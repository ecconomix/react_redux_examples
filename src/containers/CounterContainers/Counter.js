import { connect } from 'react-redux';
import Counter from 'components/CounterComponent/Counter';
import { 
  addCounter, 
  removeCounter, 
  resetCounter } from '../../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => 
  ({ count: state.counterApp.counterValue });

const mapDispatchToProps = dispatch => 
  bindActionCreators({addCounter, removeCounter, resetCounter}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
