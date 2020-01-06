import React from 'react';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const selectRandom = (arr) => {
    const index = Math.floor(Math.random() * 100) % arr.length;
    return arr[index];
}

const [bools, counts] = [[true, false], [3, 20, 145]];


const chats = [];
const chatNames = ['Olamide', 'Olumide', 'Osas', 'Kenneth', 'Nwosu', 'Sholanke', 'Daniel', 'Ufedo', 'Lumez', 'Ibukun'];

for (let i = 0; i < chatNames.length; i++) {
    const chat = {
        chatName: chatNames[i],
        chatDP: '',
        mutedStatus: selectRandom(bools),
        unread: selectRandom(bools),
        unreadCount: selectRandom(counts),
        isGroup: selectRandom(bools),
        lastMessage: {
            sender: '',
            content: 'Lorem ipsum dolor sit',
            time: '11:24 AM'
        },
        key: i
    };

    chat.lastMessage.sender = !(chat.isGroup) ? '' : 'Kennibravo: ';
    chat.lastMessage.content = chat.lastMessage.sender + chat.lastMessage.content;

    chats.push(chat);
    
}

console.log(chats)


class Chats extends React.Component {
    render() {
        return (
            <div className="chats">
                {chats.map(item => (
                    <div key={item.key} className="chat">
                        <div className="dp"></div>
                        <div className="chat-sum">
                            <div className="chat-name-time">
                                <div className="chat-name">{item.chatName}</div>
                                <div className="chat-time">{item.lastMessage.time}</div>
                            </div>
                            <div className="chat-content-count">
                                <div className="chat-content">{item.lastMessage.content}</div>
                                <div className="chat-count-muted">
                                    {(item.mutedStatus) ? (
                                        <div className="chat-muted">
                                            <FontAwesomeIcon icon={faVolumeMute} />
                                        </div>
                                    ) : null}
                                    {(item.unread) ? (
                                        <div className="chat-unread">{item.unreadCount}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Chats;