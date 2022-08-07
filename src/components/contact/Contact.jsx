import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';


const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_xm6lew3', 'template_99eeq6f', formRef.current, 'jBBLBR9v505aqvT38')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Get in touch</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon"/>9512395686
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon"/>andrew@andrewjrice.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon"/>9512395686
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
          Please leave your info below and I’ll get back to you as soon as I can.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name"/>
            <input type="text" placeholder="Subject" name="subject"/>
            <input type="text" placeholder="Email" name="user_email"/>
            <textarea rows="5" placeholder="Message" name="message"/>
            <button>Submit</button> 
            {done && "Thank you!"}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact