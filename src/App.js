import './App.css';

import {useEditor} from "./hooks";

function App() {
    const {addTags, isEdit, setIsEdit, setStartPosition, setEndPosition, text} = useEditor()

    function createMarkup() {
        return {__html: text};
    }

    document.onselectionchange = function () {
        let {anchorNode, anchorOffset, focusNode, focusOffset} = document.getSelection();
        console.log({anchorNode, anchorOffset, focusNode, focusOffset})
        if (isEdit && anchorOffset && focusOffset && (anchorOffset !== 0 && focusOffset !== 0)) {
            setStartPosition(anchorOffset)
            setEndPosition(focusOffset)
        }
    }


    const handleOnClickItalic = () => {
        isEdit && addTags("<i>", "</i>")
    }
    const handleOnClickBold = () => {
        isEdit && addTags("<b>", "</b>")
    }
    const handleOnClickUnderline = () => {
        isEdit && addTags("<u>", "</u>")
    }
    const handleEditToggle = () => {
        isEdit
            ? setIsEdit(false)
            : setIsEdit(true)
    }

    return (
        <div className="App">
            <div className="panel">
                <ul>
                    <li>
                        <button className="italic" onClick={handleOnClickItalic}>i</button>
                    </li>
                    <li>
                        <button className="bold" onClick={handleOnClickBold}>B</button>
                    </li>
                    <li>
                        <button className="underline" onClick={handleOnClickUnderline}>U</button>
                    </li>
                </ul>
            </div>
            <div
                dangerouslySetInnerHTML={createMarkup()}
                className="editor"
                contenteditable={isEdit && "true"}/>
            <button onClick={handleEditToggle} className="edit_save">{isEdit ? "Save" : "Edit"}</button>
        </div>
    );
}

export default App;
