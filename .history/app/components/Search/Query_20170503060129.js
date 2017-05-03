var React = require('react');

var Query = React.createClass({

  getInitialState: function(){
    return {
      search: "",
      start: "",
      end: "",
    }
  },


    handleChange: function(event) {

      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);
    },


  handleSubmit: function(){

    this.props.updateSearch(this.state.search, this.state.start, this.state.end);
    return false;
  },


  render: function(){

    return(

     {/* <div className ="main-container">

          <div className="row">
            <div className="col-lg-12">

              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i> Search Parameters</strong></h1>
                </div>
                <div className="panel-body">

                  <form>
                    <div className="form-group">
                      <h4 className=""><strong>Topic</strong></h4>
                      <input type="text" value={this.state.value} className="form-control " id="search" onChange= {this.handleChange} required/>

                      <h4 className=""><strong>Start Year (Required)</strong></h4>
                      <input value={this.state.value} className="form-control " id="start" onChange= {this.handleChange} required/>

                      <h4 className=""><strong>End Year (Required)</strong></h4>
                      <input value={this.state.value} className="form-control " id="end" onChange= {this.handleChange} required/>

                    </div>

                    <div className="pull-right">
                      <button type="button" className="btn btn-primary" onClick={this.handleSubmit}><h4>Submit</h4></button>
                      <button type="button" className="btn btn-primary" onClick={this.clearResults}><h4>Clear Results</h4></button>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>

      </div>*/}
      <div className ="main-container">

          <div className="row">
            <div className="col-lg-12">

<div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" checked/>
					<label for="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Repeat Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Email Address</label>
					<input id="pass" type="text" className="input"/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign Up"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>
    )
  }

});

module.exports = Query;
