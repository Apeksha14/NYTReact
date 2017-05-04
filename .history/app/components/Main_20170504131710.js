var React = require('react');
var Router = require('react-router');

var Main = React.createClass({

  
  render: function(){

    return(

      <div className="main-container">


        <div className="container">

          <nav className="navbar navbar-default" role="navigation" id="navdiv">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand">NYT-React</a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#/search" className="myButton">Search</a></li>
                  <li><a href="#/saved">Saved Articles</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="jumbotron">
            <h2 className="text-center" style={{fontFamily: "Helvetica Neue", Helvetica, Arial, sans}}><strong>New York Times Article Search</strong></h2>
          </div>

          {this.props.children}

        </div>
      </div>
    )
  }
});

module.exports = Main;