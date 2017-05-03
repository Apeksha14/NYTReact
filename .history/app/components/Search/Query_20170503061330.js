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
	
		<div className="login-form">
			
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
