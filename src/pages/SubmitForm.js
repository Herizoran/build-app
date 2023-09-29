import React, { useState } from 'react';
import Button from "../components/Button";

const SubmitForm = ({ onSend }) => {
    const [author, setAuthor] = useState('');
    const [mail, setMail] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    onSend(author, mail, content);
    };

    const handleClick = (e) => {
        e.preventDefault();
        onSend(author, mail, content);
    };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>
              Author:
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </label>
        </div>
        <div>
            <label>
              Email:
              <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </label>
        </div>
        <div>
            <label>
                Content:
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </label>
        </div>
        <Button type="submit" onClick={handleClick} text="Publier"></Button>
    </form>
  );
}
export default SubmitForm;