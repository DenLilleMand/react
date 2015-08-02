import React from "react";
import Marty from "marty";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <header className="header-two-bars">

      <div className="header-first-bar">

      <div className="header-limiter">

      <h1><a href="#">Developing a React Edge<span></span></a></h1>

      <nav>
      </nav>

      </div>

      </div>

      <div className="header-second-bar">

      <div className="header-limiter">
      <nav>
      <a href="/chapters/chapterone"><i className="fa fa-file-text"></i> Chapter 1:Intro</a>
      <a href="/chapters/chaptertwo"><i className="fa fa-file-text"></i> Chapter 2:JSX</a>
      <a href="/chapters/chapterthree"><i className="fa fa-file-text"></i> Chapter 3:Component Lifecycle</a>
      <a href="/chapters/chapterfour"><i className="fa fa-file-text"></i> Chapter 4:Data Flow</a>
      <a href="/chapters/chapterfive"><i className="fa fa-file-text"></i> Chapter 5:Event Handling</a>
      <a href="/chapters/chaptersix"><i className="fa fa-file-text"></i> Chapter 6:Composing Components</a>
      </nav>

      </div>

      </div>

      <div className="header-second-bar">

      <div className="header-limiter">
      <nav>
      <a href="/chapters/chapterseven"><i className="fa fa-file-text"></i> Chapter 7: Mixins</a>
      <a href="/chapters/chaptereight"><i className="fa fa-file-text"></i> Chapter 8: DOM Manipulation</a>
      <a href="/chapters/chapternine"><i className="fa fa-file-text"></i> Chapter 9: Forms</a>
      <a href="/chapters/chapterten"><i className="fa fa-file-text"></i> Chapter 10:CSS Animations</a>
      <a href="/chapters/chaptereleven"><i className="fa fa-file-text"></i> Chapter 11: Performance Tuning</a>
      <a href="/chapters/chaptertwelve"><i className="fa fa-file-text"></i> Chapter 12: SSR</a>
      </nav>

      </div>
      </div>

      <div className="header-second-bar">

      <div className="header-limiter">
      <nav>
      <a href="/chapters/chapterthirteen"><i className="fa fa-file-text"></i> Chapter 13: In The Family</a>
      <a href="/chapters/chapterfourteen"><i className="fa fa-file-text"></i> Chapter 14: Development Tools</a>
      <a href="/chapters/chapterfifteen"><i className="fa fa-file-text"></i> Chapter 15: Testing With Jest</a>
      <a href="/chapters/chaptersixteen"><i className="fa fa-file-text"></i> Chapter 16: Architectural Patterns</a>
      <a href="/chapters/chapterseventeen"><i className="fa fa-file-text"></i> Chapter 17: Other uses</a>
      </nav>

      </div>
      </div>

      </header>
    );
  }
}
