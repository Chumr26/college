import { useState } from 'react';
import { Form } from './Form';
import { Message } from './Message';

export function Apply() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (isSubmitted) {
        return <Message />;
    }

    return <Form onSubmit={() => setIsSubmitted(true)} />;
}
