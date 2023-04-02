import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import classes from "../../styles/form.module.css";

const Form = () => {
  const form = useRef();
  const [display, setDisplay] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4p66eog', 'template_aymuvg5', form.current, 'GfCxqHLt_ZXOyvXJI')
      .then((result) => {
        console.log(result.text);
        setDisplay(true);
        setTimeout(() => {
          setDisplay(false);
        }, 3000);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <form className={`${classes.form}`} ref={form} onSubmit={sendEmail}>
      <div className={`${classes.form__group}`}>
        <input type="text" name="from_name" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" name="from_email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" name="message" rows={5} placeholder="Message" required />
      </div>

      <button className={`${classes.primary__btn}`} type="submit">
        Send
      </button>
      <div className={`${classes.text__div}`} style={{ display: display ? "flex" : "none", flexDirection: "column" }}>
        <h5>Thanks for contacting me!</h5>
        <p>I will get back to you soon😊</p>
      </div>
    </form>
  );
};

export default Form;
