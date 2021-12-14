import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('')
    const charLimit = 240;

    const handleChange = (event) => {
        if (charLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText("");
        }
    }

    return (
        <div className="note new">
            <textarea
                rows="8"
                cols="10"
                placeholder="Start typing...."
                value={noteText}
                onChange={handleChange}
            >

            </textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;