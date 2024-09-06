import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      // ------Enter your web3forms access key below-------
      
      formData.append("access_key", "39768149-c775-4782-b109-1a1231453576");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Framgång", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Fel", res);
        setResult(res.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Skicka ett meddelande till oss <img src={msg_icon} alt="" /></h3>
        <p>Du är välkommen att kontakta oss via kontaktformuläret eller hitta vår kontaktinformation nedan. Din feedback, dina frågor och förslag är viktiga för oss eftersom vi strävar efter att tillhandahålla exceptionell service till vår universitetsgemenskap.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@theomacrezdev.com</li>
            <li><img src={phone_icon} alt="" />(+46) 123 456 78 90</li>
            <li><img src={location_icon} alt="" />Stora Torget 7, Nyköping<br/> 611 32, Sverige</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Ditt namn</label>
            <input type="text" name='name' placeholder='Skriv ditt namn' required/>
            <label>Telefonnummer</label>
            <input type="tel" name='phone' placeholder='Skriv in ditt mobilnummer' required/>
            <label>Skriv dina meddelanden här</label>
            <textarea name="message" rows="6" placeholder='Skriv in ditt meddelande' required></textarea>
            <button type='submit' className='btn dark-btn'>Skicka nu<img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
