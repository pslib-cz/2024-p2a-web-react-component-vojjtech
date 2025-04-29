import { useState } from 'react'
import { FC } from 'react'
import style from './PercentView.module.css'


type PercentViewType = {
    value: number,
    max: number,
    //makeColor: (percent: number) => string,
}


const PercentView: FC<PercentViewType> = ({ max, value, /*makeColor*/ }) => {

    const [currentValue, setCurrentValue] = useState(value)
    const [currentMax, setCurrentMax] = useState(max)

    const percent = (currentValue / currentMax) * 100
    const percentFloored = Math.round(percent * 10) / 10
    const percentLimited = Math.max(0, Math.min(percentFloored, 100))

    const hue = percentLimited / 100 * 120


    return (
        <>
            <div className={style.percentview}>

                <label className={style.percentviewinputs}>
                        <div className={style.input}>
                            <span>value:</span>
                            <input type='number?' value={currentValue} onChange={(x) => setCurrentValue(Number(x.target.value))} />
                        </div>
    
                        <div className={style.input}>
                            <span>max:</span>
                            <input type='number?' value={currentMax} onChange={(x) => setCurrentMax(Number(x.target.value))} />
                        </div>

                    <input type='range' value={percent} onChange={(x) => setCurrentValue(Number(x.target.value) * currentMax / 100)} />
                </label>

                <span>{percentLimited}%</span>
                <div className={style.percentviewbar}>
                    <div className={style.percentviewbarprogress} style={{ backgroundColor: `hsl(${hue}, 100%,50%)` /*makeColor(value/max)*/, width: `${percentLimited}%` }}></div>
                </div>
            </div>
        </>
    )
}

export default PercentView