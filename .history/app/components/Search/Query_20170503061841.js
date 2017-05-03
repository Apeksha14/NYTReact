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
					<label htmlFor="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In"/>
				</div>
				<div className="hr"></div>
			</div>
			<div className="sign-up-htm">
				
			</div>
		</div>
	</div>
</div>
    )
  }

});

module.exports = Query;
