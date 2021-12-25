import React from 'react'
import Slider from '@mui/material/Slider';
import s from './../../HW11.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value:number | number[]) => void
    value: [number, number]
    onChangeRangeO?: (value:number) => void
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки  // React.ChangeEvent<{}>
    const handleChange = (event: Event, value: (number | number[])) => {
        onChangeRange && onChangeRange(value as number)
    };

    // const handleChange = (event: Event, newValue: number | number[]) => {
    //     setValue(newValue as number[]);
    // };
    return (
        <div className={s.box}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
        </div>
    )
}

export default SuperDoubleRange
