// Include React
var React = require("react");
var helpers = require("./utils/helpers");

var Query = require("Search/Query.js");
var Results = require("/Search/Results.js");



var Main = React.createClass({

  getInitialState: function() {
    return { 
      searchTerm : "",
      results : {}
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    // If we have a new search term, run a new search
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm).then(function(data) {
        if (data !== this.state.results) {
          console.log("componentDidUpdate");
          this.setState({ results: data });
          console.log(this.state.results);

        }
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));
    }
  },
  

  // This function will respond to the user input
  handleChange: function(event) {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // When a user submits...
  handleSubmit: function(event) {
    // preventing the form from trying to submit itself
    event.preventDefault();
    // Set the parent to have the search term
    this.setTerm(this.state.searchTerm);
    console.log("handleSubmit");
    console.log(this.state.searchTerm);

    // Clearing the input field after submitting
    //this.setState({ searchTerm: "" });
  },
  setTerm: function(term) {
    this.setState({ 
      searchTerm: term
    });
  },

  // Here we render the component
  render: function() {

    return (
      <div className="container">

    <div className="jumbotron">
      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <br/>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>Search Parameters</strong></h3>
          </div>
          <div className="panel-body">

            <form role="form" onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label htmlFor="search">Topic:</label>
                <input type="text" id="searchTerm" className="form-control" value={this.state.searchTerm} onChange={this.handleChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="start-year">Start Year (Optional):</label>
                <input type="text"  className="form-control" id="start-year"/>
              </div>

              <div className="form-group">
                <label htmlFor="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year"/>
              </div>

              <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>

            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
    
     <Query updateSearch={this.setQuery} />

        <Results results={this.state.results}/>

    </div>
    </div>
       
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
