# Quickstart: Add military symbols to Google Maps via Speech and Sketch

For a general description and code walkthrough, see the top level [README](../README.md).

## Script external references

Three cdn libraries are referenced in [`index.html`](index.html):

1. Microsoft's Cognitive Services Speech SDK - used by the speech plugin
1. STP SDK itself - available on `jsdelivr`: [https://www.jsdelivr.com/package/npm/sketch-thru-plan-sdk]
1. The speech plugin

```html
    <!-- Speech recognition -->
    <script type="application/javascript" src="https://cdn.jsdelivr.net/npm/microsoft-cognitiveservices-speech-sdk@latest/distrib/browser/microsoft.cognitiveservices.speech.sdk.bundle-min.js"></script>
    <!-- STP SDK and plugins - needs to be added *after* the references to speech and communication services it may use -->
    <script type="application/javascript" src="https://cdn.jsdelivr.net/npm/sketch-thru-plan-sdk@0.3.1/dist/sketch-thru-plan-sdk-bundle-min.js"></script>
    <script type="application/javascript" src="https://cdn.jsdelivr.net/npm/@hyssostech/azurespeech-plugin@0.2.0/dist/stpazurespeech-bundle-min.js"></script>
```

## App scripts

The quickstart code is organized in three distinct files, referenced as scripts in the html file:

```html
    <script type="application/javascript" src="googlemaps.js"></script>
    <script type="application/javascript" src="basicrenderer.js"></script>
    <script type="application/javascript" src="index.js"></script>
```

1. [`googlemaps.js`](googlemaps.js) contains the mapping code
1. [`basicrenderer.js`](basicrenderer.js) contains the bare bones placeholder renderer code
1. [`index.js'](index.js) contains the main STP code

