import React from "react";
import { Button } from '@material-ui/core';

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";


function LandingPage() {

	const getSpotifyUserLogin = () => {

		fetch("http://localhost:8080/services/login")
		.then((response) => response.text())
		.then(response => {
			window.location.replace(response);
		})
	}


	return(
		<div>
			<div style={{display: "flex", justifyContent: "center"}}>
				<h1>Happy Together</h1>
			</div>

			<div style={{display: "flex", justifyContent: "center"}}>
				<h1>
					With this app we will be able to create a playlist using two differents accounts in Spotify. The app will seek the songs that are presents in both accounts and export them to the new playlist. Happy together listening music ! :)
				</h1>
			</div>
			<div style={{display: "flex", justifyContent: "center", margin: "1rem"}}>
				<Button variant = "contained" color = "primary" onClick = {getSpotifyUserLogin}>Sign In</Button>
			</div>

		</div>
		);
}

export default withRouter(LandingPage);