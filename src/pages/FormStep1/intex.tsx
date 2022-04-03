import * as C from './styles'
import {useHistory} from 'react-router-dom'
import {FormActions, useForm} from '../../context/FormContext'
import {Theme} from '../../components/Theme/intex'
import React, {ChangeEvent, useEffect, useState} from 'react'
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';


export const FormStep1 = () => {
    const [modalBtn, setModalBtn] = useState(false);
    const history = useHistory()
    const {state, dispatch} = useForm()

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    const numbers = ["Repacking charges", "Postage due", "Postal fee", "Customs duty", "Customs Clearance fee", "Sales Tax", "Refugee Tax", "Warehousing charges -- each day charges"];
    const listItems = numbers.map((numbers) =>
        <li>{numbers}</li>
    );

    const numbersAvoid = [
        "Ask the seller if you need to pay any additional import duties, taxes or other customs-related charges.",
        "Contact your local post or customs office to find out more about your country’s customs duties and taxes.",
        "Import duties, taxed or other customs-related charges are normally collected by the shipping company upon delivery.",
        "Sellers are not responsible for delays caused by the customs department in your country.",
        "Additional costs or delays may occur during international trade.",
        "Some sellers offer domestic delivery. This means that they will send your order from a warehouse in your country. In this case, you won’t be asked to pay for any additional customs duties and taxes."];
    const listItemsAvoid = numbersAvoid.map((numbersAvoid) =>
        <li>{numbersAvoid}</li>
    );


    const handleNextStep = () => {
        if (state.name !== '' && state.name != null && parseInt(state.name) >= 1) {
            history.push('/experience')
        } else {
            alert('Please enter the valid price in PKR')
        }
    }


    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })

    }, [])

    const openModal = () => {
        setModalBtn(true);
    };

    const closeModal = () => {
        setModalBtn(false);

    };

    return (
        <Theme>
            <C.Container>
                <p className='passo'>Step 1/3</p>
                <h2>Total Package Price (in PKR)</h2>
                <p>You can convert the USD to PKR using latest exchange rate.</p>
                <label>Enter Parcel Price (in PKR)</label>
                <input
                    type="number"
                    autoFocus
                    onChange={handleNameChange}
                />
                <Modal onClose={closeModal} open={modalBtn}>
                    <h2>General Tax Details</h2>
                    <p>
                        There are more than 8+ types of taxes, which are getting charged on importing items to Pakistan.
                    </p>
                    <p>You'll get an official custom letter (mentioned tax details) along with your parcel when postman
                        will come to deliver the order.</p>
                    <p>Tax Duties varies between 30% to 100% of the each item cost.</p>
                    <p>Some time, there are no custom taxes if parcel item value is below 10USD (Exception or below 25%
                        Tax).</p>
                    <p>Please refer to the FBR / Pak Post / Custom website for the updated tax rates.</p>
                    <h3>
                        Please note: Customs duties and taxes are never covered by AliExpress or Any Other Similar
                        Supplier.
                    </h3>
                    <h4>To avoid any unforeseen surprises, please pay attention to the following:</h4>
                    <ul>{listItemsAvoid}</ul>
                    <h3>
                        List Of Taxes
                    </h3>
                    <ul>{listItems}</ul>
                </Modal>
                <button onClick={handleNextStep}>Next Step</button>
                <button id={"buttonHollow"}
                        onClick={openModal}>Tax Details
                </button>
            </C.Container>
        </Theme>
    )
}
