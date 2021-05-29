import React, {Fragment} from 'react';
import { DropSection, DropTitle, Span, Form, FormInput, InputText, InputEmail, Textarea, InputSubmit} from './style';
import Footer from '../footer/index';

const Contact = () => {
    return (
        <Fragment>
            <DropSection>
                <div className="container">
                    <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                    <Form>
                        <FormInput>
                            <InputText placeholder="Your Name"/>
                            <InputEmail placeholder="Your Email"/>
                        </FormInput>
                        <InputText type="text" out='out'placeholder="Your Subject"/>
                        <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                        <InputSubmit value="Send Message"/>
                    </Form>
                </div>
            </DropSection>
            <Footer/>
        </Fragment>
    );
};

export default Contact;