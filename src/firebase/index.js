import firebase from 'firebase';

try {
	// Initialize Firebase
	const config = {
		apiKey: process.env.API_KEY,
		authDomain: process.env.AUTH_DOMAIN,
		databaseURL: process.env.DATABASE_URL,
		storageBucket: process.env.STORAGE_BUCKET,
		messagingSenderId: process.env.MESSAGING_SENDER_ID
	};

	firebase.initializeApp(config);
} catch (e) {
	console.log('error cargando firebase');
	console.log(e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;
