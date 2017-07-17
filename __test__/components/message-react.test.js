import React from 'react';
import { shallow } from 'enzyme';
import Moment from 'moment';
import Message from '../../src/components/message';

/*<Message
          key={i}
          username={message.username}
          message={message.message}
          time={message.dateTime}
          thumbnail={message.thumbnail}
        />*/

describe('Message', () => {
    let msg;

    beforeEach(() => {
        msg = {
            key: 1,
            username: 'testuser',
            message: 'this is a test',
            time: Moment('2016-07-07T03:10:15.367Z').toDate(),
            thumbnail: 'img/fakeimage.jpg'
        };
    });    

    it('should show information from post', () => {
        const componentMessage = shallow(
            <Message 
                key={msg.key}
                username={msg.username}
                message={msg.message}
                time={msg.time}
                thumbnail={msg.thumbnail}
                
            />
        );

        expect(componentMessage.contains(msg.username)).toEqual(true);
        expect(componentMessage.contains(msg.message)).toEqual(true);
        expect(componentMessage.contains(Moment(msg.time).calendar())).toEqual(true);
    });

    
});
