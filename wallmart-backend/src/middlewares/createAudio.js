const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require('fs');
const path = require('path');

const textToSpeech = async (key, region, text, filename)=> {
    return new Promise((resolve, reject) => {
        const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
        speechConfig.speechSynthesisOutputFormat = 5; // mp3
        let audioConfig = null;
        if (filename) {
            audioConfig = sdk.AudioConfig.fromAudioFileOutput(filename);
        }
        const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakTextAsync(
            text,
            result => {
                const { audioData } = result;
                synthesizer.close();
                if (filename) {
                    const audioFile = fs.createReadStream(filename);
                    resolve(audioFile);
                } else {
                    const bufferStream = new PassThrough();
                    bufferStream.end(Buffer.from(audioData));
                    resolve(bufferStream);
                }
            },
            error => {
                synthesizer.close();
                reject(error);
            });
    });
};


async function fetchAudio(req, res, next) {
    const fileName = `${path.join(__dirname, '..', "audio/")}${req.details.product_name}.mp3`
    const subscriptionKey = ""; // removed azure key due to security reason. Will be sent on request. 
    const serviceRegion = "eastus";
    const text = req.text;
    const audio = await textToSpeech(subscriptionKey, serviceRegion, text, fileName);
    req.audioURL = fileName;
    req.imageURL = "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2089&q=80";
    next();
}

module.exports = fetchAudio;
