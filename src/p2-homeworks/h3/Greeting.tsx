import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.inputError : s.input

    return (
        <>
        <div className={s.content}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    placeholder={'Enter your name'}/>
                <div className={s.textError}>{error}</div>
            </div>
            <div>
                <button
                    onClick={addUser}
                    className={s.btn}
                    disabled={!name}
                >add
                </button>
                <span>{totalUsers}</span>
            </div>

        </div>

        </>
    )
}

export default Greeting
