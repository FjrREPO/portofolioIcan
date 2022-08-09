import React, { useState } from "react"
import "./Contact.css"
import Swal from 'sweetalert2'

const Form = () => {
    const [data, setData] = useState ({
    name: '',
    email: '',
    phone: '',
    massage: ''
    })

    const {name, email, phone, massage} = data

    const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
    e.preventDefault()

    try {
        const response = fetch(
        'https://v1.nocodeapi.com/beatness/google_sheets/LwtUiAFpdVMuxXVm?tabId=Sheet1', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify([
            [name, email, phone, massage, new Date().toLocaleString()]
            ])
        }
        )
        response.json()
        setData({ ...data, name:'', email:'', phone:'', massage:'' })
    } catch (err) {
        console.log(err)
    }
    }

    /* const [openPopup, setOpenPopup] = useState(false);

    const openpopup = () => {
    setOpenPopup(state=>!state);
    }; */

    const handleClickButton = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        text: "You want to send this massage?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Send!',
        cancelButtonText: 'Cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
            'Success!',
            'Your massage has been sent.',
            'success'
        )
        } else if (
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your massage was not sent.',
            'error'
        )
        }
    })
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
        <div className='form__group'>
            <input 
            type="text" 
            placeholder="Your Name" 
            required 
            maxLength='30'
            name="name"
            id="name"
            spellCheck='false'
            value={name}
            onChange={handleChange}
            />
        </div>
        <div className='form__group'>
            <input 
            type="email" 
            placeholder="Email Address" 
            required 
            maxLength='30'
            name="email"
            id="email"
            spellCheck='false'
            value={email}
            onChange={handleChange}
            />
        </div>
        <div className='form__group'>
            <input 
            type="tel" 
            placeholder="Phone Number" 
            required 
            maxLength='15'
            name="phone"
            id="phone"
            spellCheck='false'
            value={phone}
            onChange={handleChange}
            />
        </div>
        <div className='form__group'>
            <textarea 
            type="text" 
            rows={5} 
            placeholder="Message" 
            required 
            maxLength='1000'
            name="massage"
            id="massage"
            spellCheck='false'
            value={massage}
            onChange={handleChange}
            />
        </div>

        <button className="primary__btn" type="submit" onClick={handleClickButton}>
            Send
        </button>
        </form>
    )
}

export default Form
