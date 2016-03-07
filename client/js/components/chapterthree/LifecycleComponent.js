import React,{Component} from 'react'; 
import $ from 'jquery';
import herp from 'jquery-ui';

 class LifecycleComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    	randomProp:props.randomProp,
	autoCompleteStrings:['herpderp','yes','okay']
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

/* Not required with es6 class syntax:
 *  getDefaultProps() {
 *    console.log('getDefaultProps');
 *  }
 *
 *  getInitialState() {
 *    console.log('getInitialState');
 *  }
 */

  componentWillMount() {
    console.log('componentWillMount');
  }


  render() {
    console.log('render');
    return (
      <div className="ui-widget">
      <div>The lifecycle component.</div>
      <div> Examples:   </div>
      <p>
      <div> ComponentDidMount autocomplete: </div>
      <input id="tags" ref="myInput" type="text" />
      </p>

      <p>
      <div>the checkbox button in our ChapterThree component is a componentWillReceiveProps() example. Its to show how the state in this component,
      is passed in as props to the children when they change their state(state:isChecked changes between true and false when we click the button), and 
      that change is then probagated down the hierarchy, in this case hitting our LifecycleComponent, which has a checkbox,
      that relies on this piece of state. tl;dr; This shows how components higher in the hierarchy can have an effect on the 
      components lower in the hierarchy. </div>
      <input type="checkbox" checked={this.props.isChecked} /> 
      </p>
	</div>
    );
  }

  //Auto-complete method, to see how we can hook into the component,
  //when its allowed to change the raw DOM.
  componentDidMount() {
    console.log('componentDidMount');
    $(this.refs.myInput.getDOMNode()).autocomplete({
	source:this.state.autoCompleteStrings
    });
  }

  /* life time(i guess render is a lifecycle method aswell): */
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    this.setState({
      isChecked:nextProps.isChecked
    });
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    //when we override this, we have to return true or false,
    //depending on if we should update the component
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
}
//not essential to the example, we will explain propTypes and defaultProps in chapter 4:
LifecycleComponent.propTypes = { randomProp:React.PropTypes.string  };
LifecycleComponent.defaultProps = {  randomProp:'random stuff'};
export default LifecycleComponent;
