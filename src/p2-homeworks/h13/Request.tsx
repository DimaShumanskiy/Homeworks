import React, {ChangeEvent, useState} from 'react';
import {requestAPI} from './RequestsAPI';
import {Favorite, FavoriteBorder} from "@mui/icons-material";
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
import {Button, Checkbox, FormControlLabel} from "@mui/material";
import s from './HW13.module.css'


const Request: React.FC = () => {
    let [message, setMessage] = useState<string>(`just check ${String.fromCodePoint(10084)}  and push the button`)

    const [success, setSuccess] = useState<boolean>(true)

    const onchangeCallbackCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setSuccess(e.currentTarget.checked)
    }
    const onchangeCallbackButton = () => {
        console.log(success)
        requestAPI.postRequest(success)
            .then(d => setMessage(d.errorText))
            .catch((error) => {
                setMessage(error.response.data.errorText)
            })
    }
    return <div className={s.content}>
        result of response: {message}
        <hr/>
        <FormControlLabel
            control={<Checkbox icon={<FavoriteBorder />}
            checkedIcon={<Favorite/>}
            name="checkedH"
            onChange={onchangeCallbackCheckbox}/>}
            label="thanks for tasks"
        />
        <Button
            onClick={onchangeCallbackButton}
            variant="contained"
            color="primary">
            Send request
        </Button>

    </div>
}

export default Request;