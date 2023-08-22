import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './Contact.css';

const Contact = () => (
    <div className="div-contact-general-container">
        <div className="div-contact-container">
            <div className="row">
                <div className="col">
                    <img className="contactImg" src={require('../../images/contactImg.png')} alt="ContactUs"></img>
                </div>
                <div className="col">
                    <div className="div-contact-header">
                        <h1>Do you want to contact us?</h1>
                        <p>Have questions? Fill out the form below and the LerneDeutsch team will get back to you.</p>
                    </div>
                    <div className="div-contact-form">
                        <Formik
                            initialValues={{ name: '', email: '', message: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.name) {
                                    errors.name = 'We need a name in order for our team to contact you back!'
                                }
                                if (!values.email) {
                                    errors.email = 'We need an email address in order for our team to contact you back!';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = 'We`re sorry, we need a valid email address to contacto you back!';
                                } if (!values.message) {
                                    errors.message = 'We want to read your thoughts and address your questions, please fill out this space!';
                                }
                                /* Esta funcion flecha retorna el arreglo (objeto?) de errores */
                                return errors;
                            }}
                            /* Puedo definir como el formulario se envia */
                            onSubmit={
                                (values, { setSubmitting, resetForm }) => {
                                    /* Se le agrega un timer (por peticion Ajax) al formulario */
                                    setTimeout(() => {
                                        /* Se muestra en consola los datos enviado en formato JSON */
                                        console.log(JSON.stringify(values, null, 2));
                                        /* Mientras el formulario se haya mandado, se inicializa el contador y se deshabilita la opcion de mandar otra peticion, luego de esos 4 segundos, el form/submit queda en true */
                                        setSubmitting(false);
                                    }, 4000)
                                    //Una vez hecho el submit, con esta funcion se resetean los campos de los inputs
                                    resetForm({ value: '' });
                                }}
                        >
                            {/* Arrow function en donde se ahorran los parametros de 'formik' y de una vez se construye el formulario con el componente 'Form' y se muestran los errores con el componente 'ErrorMessage' */}
                            {({ isSubmitting }) => (
                                <Form>
                                    <Field type="text" name="name" placeholder="Name" />
                                    <ErrorMessage name="name" component="div" className="error" /><br />
                                    <Field type="email" name="email" placeholder="Email"/>
                                    <ErrorMessage name="email" component="div" className="error" /><br />
                                    <Field type="text" name="message" placeholder="Message"/>
                                    <ErrorMessage name="message" component="div" className="error" /><br />
                                    <div className="div-submit-contact-form">
                                        <button type="submit" disabled={isSubmitting}>Send Message</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;