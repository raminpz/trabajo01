import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';




const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h3>
                Nombre: { contact.name }
            </h3>
            <h3>
                Apellidos: { contact.lastname } 
            </h3>
            <h3>
                Correo: { contact.email } 
            </h3>
            
            <h3>
                Conectado: { contact.conected ? 'Contacto no disponible':'Contacto en Línea'} 
            </h3>
            
        </div>
    );
};


ContactComponent.propTypes = { // Con instanceOf, indicamos que aqui va recibir un objeto Contact del service, y no algun variable.
    contact: PropTypes.instanceOf(Contact), 
    

};

export default ContactComponent;

// DESPUES DE AQUI VAMOS AL CONTACLIST