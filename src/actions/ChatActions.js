import axios from 'axios';
import _ from 'lodash';
import { firebaseRef } from '../firebase';

const IFRAMELY_API_KEY = '26925b59f9fccdf9ef3324';

import {
	CHAT_LOADING,
	CHAT_MSGS_LOADED,
	CHAT_INFO_LOADED,
	CHAT_LOAD_FAIL,
	POST_MSG,
	POST_MSG_FAIL,
	//POST_MSG_LOADING
} from './types';

function getFirebaseDb() {
	return firebaseRef;
}

export function postMessage(message, chatId) {
	return function (dispatch) {
		const timeStamp = Date.now();
		getFrame(getUrl(message.message))
			.then((thumbnail) => {
				const msg = { ...message, dateTime: timeStamp, thumbnail };
				setFirebaseMessage(msg, chatId, timeStamp, dispatch);
			})
			.catch(() => {
				const msg = { ...message, dateTime: timeStamp };
				setFirebaseMessage(msg, chatId, timeStamp, dispatch);
			});
	};
}

function setFirebaseMessage(msg, chatId, timeStamp, dispatch) {
	getFirebaseDb()
		.child(`entities/chats/${chatId}/${timeStamp}`)
		.set(msg)
		.then(() => {
			dispatch({ type: POST_MSG, payload: msg });
		})
		.catch(error => {
			console.log('Error posting message to chat. ', error);
			dispatch({ type: POST_MSG_FAIL, payload: error });
		});
}

function getFrame(url) {
	if (url) {
		const ROOT_URL = `http://iframe.ly/api/iframely?url=${url}&api_key=${IFRAMELY_API_KEY}&iframe=true&omit_script=true`;
		const request = axios.get(ROOT_URL);
		return request
			.then((response) => response.data.html)
			.catch(() => '');
	} else {
		return Promise.resolve('');
	}
}

function getUrl(text) {
	const urlRegex = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;
	const arrayUrl = urlRegex.exec(text);
	if (arrayUrl) {
		return arrayUrl.shift();
	} else {
		return null;
	}
}

//This function should map the Firebase snapshot to
//the groupInfo object and what data we want to load into
//the component
export function groupChatInfoLoaded(groupSnapShot) {
	//our object to store the chatRoom info
	const channels = groupSnapShot.child('channels').val();
	const groupies = groupSnapShot.child('groupies').val();

	const groupChatInfo = {
		name: groupSnapShot.key,
		channels: _.keys(channels),
		groupies: _.keys(groupies),
		selectedChannel: 'default',
	};

	return {
		type: CHAT_INFO_LOADED,
		payload: { groupChatInfo }
	};
}

export function groupChatMsgLoaded(chatSnapShot) {
	const chatMsgs = chatSnapShot.val();

	const chatInfo = {
		messages: _.values(chatMsgs)
	};

	return {
		type: CHAT_MSGS_LOADED,
		payload: { chatInfo }
	};
}

export function groupChatLoadFailed(error) {
	return {
		type: CHAT_LOAD_FAIL,
		payload: error
	};
}

export function fetchGroupChatInfo(group, channel) {
	const groupChatInfo = `entities/groups/${group}`;
	const groupChatId = `entities/chats/${group}-${channel}`;

	return function (dispatch) {
		dispatch({ type: CHAT_LOADING });

		getFirebaseDb().child(groupChatInfo)
			.on('value', groupInfoSnapshot => dispatch(groupChatInfoLoaded(groupInfoSnapshot)));
		// .catch(error => {
		// 	console.log(`Could not load group. Detail ${error}`);
		// 	dispatch(groupChatLoadFailed(error));
		// });

		getFirebaseDb().child(groupChatId)
			.on('value', msgsSnapshot => dispatch(groupChatMsgLoaded(msgsSnapshot)));
		// .catch(error => {
		// 	console.log(`Could not load group. Detail ${error}`);
		// 	dispatch(groupChatLoadFailed(error));
		// });
	};
}
