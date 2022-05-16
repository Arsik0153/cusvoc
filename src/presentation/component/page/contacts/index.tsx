import React, {FC} from 'react';
import FilledContainer from 'presentation/component/common/Block/FilledContainer';
import { Wrapper, Title, Iframe, Text } from './styles';

const ContactsPage: FC = () => {
    return (
        <FilledContainer>
            <Wrapper>
                <Title>Contacts</Title>
                <Text>
                    This project was made by Tursynbay Yernar, Kadyrbergenova Nuraiym and Sairanbekov Zhanarys for Software Factory course.
                </Text>
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2505.963934683514!2d71.41937368224015!3d51.09067309528496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a605525605%3A0x4dff4a1973f7567e!2sAstana%20IT%20University!5e0!3m2!1sru!2skz!4v1652651661939!5m2!1sru!2skz"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Wrapper>
        </FilledContainer>
    );
};

export default ContactsPage;