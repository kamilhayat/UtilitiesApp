import React from 'react'

function About(props) {
    return (
        <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>About TextXChange</h1>
            <p>
                <h5>Transform Text with Ease</h5>
                Welcome to TextXChange, your go-to text transformation app! Whether you need to convert text to UPPERCASE or lowercase, or simply want to make your text more versatile, TextXChange has got you covered.

                Features
                <h6>Text Transformation</h6>
                Uppercase & Lowercase Conversion: With TextXChange, you can effortlessly convert any text to UPPERCASE or lowercase, making it perfect for formatting documents, coding, or any text-related task.

                <h6>Copy Text</h6>
                One-Click Copy: Easily copy the transformed text to your clipboard with just one click. Paste it anywhere you need, whether it's a message, document, or code editor.

                <h6>Text to Speech</h6>
                Listen to Your Text: Have the text read aloud to you with our built-in Text to Speech (TTS) feature. It's a great tool for proofreading or simply enjoying the content without reading it yourself.

                <h6>Clear Text</h6>
                Start Fresh: Clear your text input with a single tap. No need to manually delete each character – we make it quick and easy.

                <h4>Why Choose TextXChange?</h4>
                <h6>Simplicity:</h6> Our app is designed with simplicity in mind. No confusing options or unnecessary features. Just text transformation made easy.

                <h6>Efficiency:</h6> Get your text converted quickly and accurately. No more manual typing or formatting headaches.

                <h6>Accessibility:</h6> Our Text to Speech feature makes content more accessible for all users, including those with visual impairments.

                <h6>Free to Use:</h6> TextXChange is completely free to use, with no annoying ads or hidden fees.

                <h5>How to Use TextXChange</h5>
                Type or paste your text into the input box.
                Choose whether you want to convert it to UPPERCASE or lowercase.
                Click the "Transform" button.
                You can copy the transformed text, listen to it with Text to Speech, or clear the input as needed.
            </p>
        </div>
    )
}

export default About