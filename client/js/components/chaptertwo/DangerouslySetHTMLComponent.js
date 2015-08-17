import React,{Component} from 'react';

export default class DangerouslySetInnerHTMLComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { }
  }

  render() {
    var htmlString = {
      __html:"<span> an html string </span>"
    };
    return (
      <div dangerouslySetInnerHTML={htmlString}></div>
    );
  }

}
