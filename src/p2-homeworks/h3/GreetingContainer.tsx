import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const trimmedNewName = e.currentTarget.value.trim()
        if (trimmedNewName !== ''){
            setName(trimmedNewName)
        } else {
            setName('')
            setError("Title is required");
        }

    }

    const addUser = () => {
        addUserCallback(name)  // name - берем из замыкания
        alert(`Hello ${name} !`)
    }

    const totalUsers = users.length // можно сделать на клик

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
