import React, {useRef,useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import "./Contact.css";
import {useForm} from 'react-hook-form';

function Contact() {
    const contactRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data =>{
        console.log(data);
    }
    const toTop = () =>{
        window.scrollTo(0,0);
      }
      const scrollToInfo = () => {
        if(isLoaded){
        contactRef.current.scrollIntoView({ behavior: "smooth" })
        clearTimeout(scroll);
        }
      }
      const scroll = setTimeout(()=> {
        setIsLoaded(true);
      }, 2000);
      useEffect(scrollToInfo,[isLoaded]);
    return (
        <div ref={contactRef} onLoad={scroll}>
           
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)} >
            
            <h3>Full Name *</h3>
            <input type="text" placeholder="Full Name" name="name" ref=
            {register({required: "Full Name Required"})}/>
            {errors.name && <p>{errors.name.message}</p>}

            <h3>Phone Number </h3>
            <input type="text" placeholder="Phone Number" name="number" ref={register}/>
            <h3>Email Address *</h3>
            <input type="email" placeholder="Email" name="email" 
            ref={register ({required: "Email Required"})}/>
            {errors.email && <p>{errors.email.message}</p>}
            <h3>Message *</h3>
            <input id="message" type="text" placeholder="message" name="message" 
            ref={register ({required: " Please enter a message"})}/>
            {errors.message && <p>{errors.message.message}</p>}

            <input type="submit" className="blue"/>
        </form>
        <div className="contact-greeting">
            We are exited to hear from you!
        </div>

        <div className="bottle-container" >


<div className="bottle-wave"></div>
        <div className="bottle-wave"></div>
        <div className="bottle-wave"></div>
        
</div>

</div>
    )
}

export default Contact
