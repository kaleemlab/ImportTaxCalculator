import * as C from './styles'
import {useHistory} from 'react-router-dom'
import {Theme} from '../../components/Theme/intex'
import {SelectOption} from '../../components/SelectOption'
import {FormActions, useForm} from '../../context/FormContext'
import React, {useEffect, useState} from 'react'


export const FormStep2 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

    const [data, setData] = useState(0);

    const getData = () => {
        fetch('https://free.currconv.com/api/v7/convert?q=USD_PKR&compact=ultra&apiKey=2de3ebe521651a795386', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson.USD_PKR);
                setData(myJson.USD_PKR)
            });
    }

    useEffect(() => {
        getData()
    }, [])


    const handleNextStep = () => {
        history.push('/result')

    }

    useEffect(() => {
        if (state.name === '') {
            history.push('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }


    }, [])

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })

    }

    return (
        <Theme>
            <C.Container>
                <p className='passo'>Step 2/3</p>
                <h2>How was your experience?</h2>
                <label>Let us know about your experience with the overall process of ordering a package to get the
                    parcel delivered!</label>
                <SelectOption
                    title="Good Experience"
                    description=""
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption
                    title="Poor Experience"
                    description=""
                    icon="😡"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                <button onClick={handleNextStep}>Calculate Tax</button>
            </C.Container>
        </Theme>
    )
}
