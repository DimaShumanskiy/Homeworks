import React from 'react'
import s from "./Message.module.css"

type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}


function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={s.message}>
                <img className={s.message__logo} src={props.avatar} alt=""/>
                <div className={s.message__content}>
                    <h2 className={s.content__nickname}>{props.name}</h2>
                    <p className={s.content__text}>{props.message}</p>
                    <span className={s.content__time}>{props.time}</span>
                </div>
            </div>

        </div>
    )
}

export default Message;
