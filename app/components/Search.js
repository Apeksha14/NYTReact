// Include React
var React = require("react");
var map = require("es6-map");


var Search = React.createClass({

  getInitialState: function() {
    return { 
      results : this.props.results

    };
    console.log(this.state.results);
  },

  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">
      <div className="col-sm-12">
        <br/>

        <div className="panel panel-primary">

          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-table"></i>Search</strong></h3>
          </div>

          <div className="panel-body" id="well-section">
              { this.state.results}
          </div>
        </div>
      </div>
    </div>

       <div className="container">

            {/* Added this.props.children to dump all of the child components into place */}
            {this.props.children}

          </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
