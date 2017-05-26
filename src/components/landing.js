import React from 'react';


const Landing = () => {
	return (
		<section className='jumbotron d-flex flex-column justify-content-center expand'>
			<div className='text-center'>
				<h1 className='display-3'><strong>Welcome to GroupChat!</strong></h1>
				<h4 className='lead'>A showcase web app chat made with modern technology</h4>
				<img className="logo" src="img/React-blue.png" alt="https://facebook.github.io/react/" title="React" />
				<img className="logo" src="img/redux.png" alt="http://redux.js.org" title="Redux" />
				<img className="logo" src="img/firebase.png" alt="https://firebase.google.com" title="Firebase" />
				<img className="logo" src="img/bootstrap.png" alt="http://getbootstrap.com" title="Bootstrap" />
			</div>
		</section>
	);
};

export default Landing;
