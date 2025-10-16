import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {Marker, Popup, TileLayer, MapContainer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import  {useRef}  from 'react';

// --- Fix the standard marker icon ---
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;
// --- Fix completed ---

// Contact component to allow user send messages
// You are free to change the map location, name, email, city, country and state
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate'); // Letter state to change the animation style
    const contactArray: string[] = 'Contact me'.split(""); // String array to animate
    const cityCoordinates: [number, number] = [-18.5788, -46.5177] // Add your city coordinates
    
    // Change the letter style after 3 seconds
    useEffect(
        () => {
            setTimeout(
                () => {
                    setLetterClass('text-animate-hover')
                },
                3000
            )
        }
    ) 

    const refForm: any = useRef(null); // Form reference to config the email access

    // Function to allow user to send emails
    const sendEmail = (e: any) => {
        e.preventDefault();
        
        // It's necessary to create the .env file in the root path
        // Inside the .env file needs to create three variable: REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID and REACT_APP_PUBLIC_KEY
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID!, process.env.REACT_APP_TEMPLATE_ID!, refForm.current, {
                publicKey: process.env.REACT_APP_PUBLIC_KEY!
            }
        )
        .then(
            () => {
                alert("Message successfully sent!");
                window.location.reload();
            },
            (error) => {
                alert(`Failed to send the message... ${error.text}`)
                window.location.reload();
            }
        );
    };

    return <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={contactArray} idx={15} />
                </h1>

                <p>
                    I'm interested in new job or freelance opportunities - especially ambitious or
                    large projects. If you have any request or question,
                    don't hesitate to contact me using contact form.
                </p>

                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='Name' placeholder='Enter your name' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name='Email' placeholder='Enter your email address' required/>
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='Subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='Message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value='Send'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            <div className='info-map'>
                Arthur Nazário da Costa,
                <br />
                Brazil,
                <br />
                Patos de Minas - Minas Gerais,
                <br />
                <span>arthurcostaufu@gmail.com</span>
            </div>

            <div className='map-wrap'>
                <MapContainer center={cityCoordinates} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={cityCoordinates}>
                        <Popup>Arthur lives here :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>

        <Loader type='pacman' active={true} />
    </>
};

export default Contact;