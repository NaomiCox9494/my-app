import React, {  useState, } from "react";
import * as firebase from 'firebase';

var firebaseConfig = {
            apiKey: "AIzaSyAD3smAbEf_4XU28c1Y8I51EJU1bvtOR2A",
            authDomain: "my-app-ff04f.firebaseapp.com",
            databaseURL: "https://my-app-ff04f.firebaseio.com",
            projectId: "my-app-ff04f",
            storageBucket: "my-app-ff04f.appspot.com",
            messagingSenderId: "562416042014",
            appId: "1:562416042014:web:f06d2ebaa2d68534ac2e0f",
            measurementId: "G-HZ08TT8E0L"
        }
    firebase.initializeApp(firebaseConfig);
 
const Form = (props) => {
        const [firstName, setFirstName] = useState("")
        const [lastName, setLastName] = useState("")
        const [email, setEmail] = useState("")
        const [message, setMessage] = useState("")

        console.log(email, firstName, lastName, message)

        const form = document.querySelector('.contactForm');

        function firebasePush() {
            console.log('fire base push')
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            const emailsRef = firebase.database().ref('emails');
            const data = {
                mail: email, 
                first : firstName,
                last : lastName,
                message : message
            }
            emailsRef.push(data);
            setFirstName("")
            setLastName("")
            setMessage("")
            setEmail("")
            }

    const handleSubmit = (e) => {
            console.log('handle submit')
            e.preventDefault();
            firebasePush()
            return alert('Data Successfully Sent to Realtime Database');
    }

    return (
        <div className="container">
        <p className="contact">Contact</p>
        <form className='contactForm'>

            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."
            onChange={ (e) => setFirstName(e.target.value)} value={firstName}/>

            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."
            onChange={ (e) => setLastName(e.target.value)} value={lastName}/>

             <label>Email</label>
            <input type="text" id="email" name="email" placeholder="email address"
            onChange={(e) => setEmail(e.target.value)} value={email}/>

            <label>Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height:"200px"}}
            onChange={(e) => setMessage(e.target.value)} value={message}></textarea>

            <button className='formBtn' type="submit" value="Submit" onClick={handleSubmit}>SUBMIT</button>
        </form>
        </div>
    )
}
export default Form