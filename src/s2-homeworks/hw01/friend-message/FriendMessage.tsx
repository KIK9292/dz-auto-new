import React from 'react'
import s from './FriendMessage.module.css'

export type FriendMessagePropsType = {
    message:PropsType
}

type PropsType = {
    id:number;
    user:MessageTypeUser;
    message:MessageTypeMessage;
}

type MessageTypeUser={
    avatar:string;
    name:string
}

type MessageTypeMessage= {
    text: string;
    time: string;
}


// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={props.message.user.avatar} alt={"Avatar_Friend"}

                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.user.name}

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {props.message.message.text}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {props.message.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
