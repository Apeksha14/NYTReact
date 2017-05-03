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

      
<div className="login-wrap">
	<div className="login-html">
		<input  type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1" className="tab"></label>
		<input  type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab"></label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label htmlFor="user" className="label">Topic</label>
					<input value={this.state.value} onChange= {this.handleChange} id="search" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="start" className="label">Start Year</label>
					<input value={this.state.value} onChange= {this.handleChange}  id="start" type="text" className="input"/>
				</div>
        <div className="group">
					<label htmlFor="end" className="label">End Year</label>
					<input value={this.state.value} id="end" type="text" onChange= {this.handleChange}  className="input"/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Search"/>
				</div>
				<div className="hr"></div>
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label htmlFor="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Repeat Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Email Address</label>
					<input id="pass" type="text" className="input"/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign Up"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label htmlFor="tab-1">Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>
    )
  }

});

module.exports = Query;
