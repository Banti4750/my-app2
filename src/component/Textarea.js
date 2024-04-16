/* global webkitSpeechRecognition */
import React, { useState } from 'react';

export default function Textarea(props) {
    const [text, setText] = useState('');

    const handelUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handelLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const capitalize = () => {
        let words = text.split(" ");
        let ans = "";
        for (let i = 0; i < words.length; i++) {
            ans += (words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ");
        }
        setText(ans);
        props.showAlert("Text Capitalized", "success");
    }

    const handelReverse = () => {
        let reversedText = text.split('').reverse().join('');
        setText(reversedText);
        props.showAlert("Text Reversed", "success");
    }

    // const reverseWords = () => {
    //     let words = text.split(" ");
    //     let reversedWords = words.reverse();
    //     let reversedString = reversedWords.join(" ");
    //     setText(reversedString);
    //     props.showAlert("Words Reversed", "success");
    // }

    const downloadTextFile = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(blob);
        anchor.download = 'text.txt';
        anchor.click();
        URL.revokeObjectURL(anchor.href);
        props.showAlert("Text Downloaded", "success");
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)

        props.showAlert("Text Copied to Clipboard", "success");

    }

    const Randomwords = () => {
        let words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula justo ac tortor lacinia, eget fermentum neque finibus. Fusce nec scelerisque arcu. In vitae libero in justo dictum facilisis nec id ligula. Sed nec sollicitudin lorem. Nulla consectetur commodo ligula, nec suscipit ex blandit non. Suspendisse potenti. Maecenas eget sapien nec mi finibus congue vel vel leo. Curabitur tempus, odio id viverra vestibulum, libero justo vehicula ligula, sed tristique libero nulla nec sapien. Maecenas id quam non ex faucibus sodales.";

        setText(words);
    }
    
    const speakWord = ()=> {
        // Create a new instance of SpeechSynthesisUtterance
        var utterance = new SpeechSynthesisUtterance(text);
    
        // Speak the word
        window.speechSynthesis.speak(utterance);
        props.showAlert("Reading words started !!!", "success");
    }
    
   const stopSpeaking =()=> {
        // If utterance is provided, cancel it
        
            window.speechSynthesis.cancel();
            props.showAlert("Reading words stoped !!!", "success");
        
    }
    
    const speakWordtotext = () => {
        // Create a new instance of SpeechSynthesisUtterance
        const recognition = new webkitSpeechRecognition();

        // Set parameters for recognition
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        // Start recognition
        recognition.start();

        // When speech is recognized, set the text
        recognition.onresult = function(event) {
            const spokenText = event.results[0][0].transcript;
            setText(spokenText);
            props.showAlert("Text Written by Speaking", "success");
        }

        // If recognition ends, stop recognition
        recognition.onend = function() {
            recognition.stop();
        }
    }
 

    const handelClear = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }

    const handelextraspace = () => {
        let trimmedText = text.replace(/\s+/g, ' ').trim();
        setText(trimmedText);
        props.showAlert("Extra Spaces Removed", "success");
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="container my-2" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.header}</h1>
            <div className="form-group">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleChange}
                    style={{ background: props.Mode === 'dark' ? '#282828' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }}
                    rows="10"
                ></textarea>
            </div>
            <div className="container my-2" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelUpclick}>UPPER CASE</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelLoclick}> lower case</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={capitalize}> Capitalized Case</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelReverse}>Reverse Text</button>
            {/* <button className="btn btn-primary mx-1 my-1" onClick={reverseWords}>Reverse Words</button> */}
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelextraspace}>Remove Extra Space</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={downloadTextFile}>Download Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy To Clipboard</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelClear}>Clear </button>
            <button  className="btn btn-primary mx-1 my-1" onClick={Randomwords}>Random Words </button><br />
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={stopSpeaking}><i class="fa-solid fa-volume-xmark"></i> </button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={speakWord}> <i class="fa-solid fa-volume-high"></i></button>

            <button  className="btn btn-primary mx-2 my-1" onClick={speakWordtotext}><i class="fa-solid fa-microphone"></i></button>
           
        </div>

       
    );
}
