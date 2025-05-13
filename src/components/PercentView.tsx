import { useState } from 'react'
import { FC } from 'react'
import style from './PercentView.module.css'


type PercentViewType = {
    value: number,
    max: number,
    makeColor: (percent: number) => string,
}


const PercentView: FC<PercentViewType> = ({ max, value, makeColor }) => {

    const [currentValue, setCurrentValue] = useState(value)
    const percent = (currentValue / max) * 100
    const percentLimited = Math.max(0, Math.min(Math.round(percent), 100))



    return (
        <>
            <div className={style.percentview}>

               

                <span>{percentLimited}%</span>
                <div className={style.percentviewbar}>
                    <div className={style.percentviewbarprogress} style={{ backgroundColor: makeColor(percentLimited), width: `${percentLimited}%` }}></div>
                </div>
                <input style={{backgroundColor: makeColor(percentLimited)}} type='range' step={0.001} defaultValue={percent} onChange={(x) => setCurrentValue(Math.round(Number(x.target.value)/100 * max))} />
            </div>
        </>
    )
}

export default PercentView