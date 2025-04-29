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
    const percentLimited = Math.max(0, Math.min(Math.round(percent * 10) / 10, 100))

    const hue = percentLimited / 100 * 120


    return (
        <>
            <div className={style.percentview}>

                <label className={style.percentviewinputs}>
                        <div className={style.valueinputs}>
                            <div className={style.input}>
                                <span>Value:</span>
                                <input type='number?' value={currentValue} onChange={(x) => setCurrentValue(Number(x.target.value))} />
                            </div>
        
                            <div className={style.input}>
                                <span>Max:</span>
                                <input type='number?' value={currentMax} onChange={(x) => setCurrentMax(Number(x.target.value))} />
                            </div>
                        </div>

                </label>

                <span>{percentLimited}%</span>
                <div className={style.percentviewbar}>
                    <div className={style.percentviewbarprogress} style={{ backgroundColor: `hsl(${hue}, 100%,50%)` /*makeColor(value/max)*/, width: `${percentLimited}%` }}></div>
                </div>
                <input type='range' step={0.001} value={percent} onChange={(x) => setCurrentValue(Math.round(Number(x.target.value)/100 * currentMax))} />
            </div>
        </>
    )
}

export default PercentView