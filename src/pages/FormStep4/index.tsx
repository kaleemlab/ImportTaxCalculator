import * as C from './styles'
import {Theme} from '../../components/Theme/intex'
import {FormActions, useForm} from '../../context/FormContext'
import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {EmailIcon, FacebookIcon, LinkedinIcon, RedditIcon, TwitterIcon, WhatsappIcon,} from "react-share";

export const FormStep4 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

    const [taxAmount, setTaxAmount] = useState(0);
    const [taxNotIncludedAmount, setTaxNotIncludedAmount] = useState(0);

    useEffect(() => {
        if (state.name === '') {
            history.push('/')
        } else {
            setTaxNotIncludedAmount(parseInt(state.name));
            if (state.name.length >= 5) {
                setTaxAmount(parseInt(state.name))
            } else {
                setTaxAmount(parseInt(state.name) * 0.3)
            }
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
    }, [])

    return (
        <Theme>
            <C.Container>
                <h2>You'll pay {(taxAmount + taxNotIncludedAmount).toFixed(0)} PKR total</h2>
                <p style={{margin: 5}}>or {taxAmount.toFixed(0)} PKR in Tax alone</p>
                <p style={{margin: 5}}>or {taxNotIncludedAmount.toFixed(0)} PKR (Tax not included)</p>
                <div style={{marginBottom: 7}}/>
                <h4 style={{marginTop: 15, color: 'rgb(1, 63, 28)'}}>Share website with friends:</h4>
                <div>
                    <div>
                        <a href="mailto:rajakaleemlab@gmail.com?subject=Checkout this tax calculator&amp;body=Check out this tax calculator https://paktaxcalculator.web.app">
                            <EmailIcon size={40} round={true}/>
                        </a>
                    </div>
                    <div>
                        <a href="whatsapp://send?text=Checkout this tax calculator https://paktaxcalculator.web.app"
                           data-action="share/whatsapp/share">
                            <WhatsappIcon size={40} round={true}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/intent/tweet?url=https://paktaxcalculator.web.app&text=Checkout this tax calculator"
                           target="_blank">
                            <TwitterIcon size={40} round={true}/>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/sharing/share-offsite/?url=https://paktaxcalculator.web.app"
                            target="_blank">
                            <LinkedinIcon size={40} round={true}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://paktaxcalculator.web.app"
                           target="_blank">
                            <FacebookIcon size={40} round={true}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.reddit.com/r/test/submit?title=Checkout this tax calculator&text=https://paktaxcalculator.web.app"
                           target="_blank">
                            <RedditIcon size={40} round={true}/>
                        </a>
                    </div>
                </div>
            </C.Container>
        </Theme>
    )
}
