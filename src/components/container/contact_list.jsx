import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/forms/contac';



const ContactListComponent = () => {

    const contact1 = new Contact('Ramiro','Nuñez Perez','raminp@gmail.com');

    

    return (
        <div>
            <div>
                <h1>Contacto:</h1>
            </div>
            {/* Aplicar un For/Map para renderizar una lista */}
            <ContactComponent contact={contact1}></ContactComponent>
        </div>
    );
};




export default ContactListComponent;
