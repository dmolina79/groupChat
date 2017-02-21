import firebase from 'firebase';

try {
	let config;
	// Initialize Firebase
	if (process.env.NODE_ENV) {
		config = setupFbConfig();
	} else {
		config = {
			apiKey: 'fakeapikeyfortesting',
			databaseURL: 'https://localhost.firebaseio.test:5000'
			//databaseURL: 'ws://127.0.1:5000'
		};
	}

	firebase.initializeApp(config);
} catch (e) {
	console.log('error loading firebase');
	console.log(e);
}

function setupFbConfig() {
	const config = {
		apiKey: process.env.API_KEY,
		authDomain: process.env.AUTH_DOMAIN,
		databaseURL: process.env.DATABASE_URL,
		storageBucket: process.env.STORAGE_BUCKET,
		messagingSenderId: process.env.MESSAGING_SENDER_ID
	};
	return config;
}

export const firebaseRef = firebase.database().ref();
export default firebase;
