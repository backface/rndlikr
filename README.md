# rndlikr

rndlikr is a WebExtension/Browser Add-On that randomly likes posts of 
your facebook feed by clicking the like button in random time intervals 
(given facebook it opened in one of your browser tabs). The aim is to 
obsufcate your real like patterns by random noise to decrease it's 
prediction value for facebook..

This is a proof-of-concept version for now. 
It works for one tab, but might get a bit confused it you open several 
tabs with facebook.

## INSTALL

There is no signed  package at the moment. To try it out, you have two possibilities:

1. Open Firefox and load `about:debugging` in the URL bar. Click the
   [Load Temporary Add-on](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
   button and select the `manifest.json`.
2. Install the
   [web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext)
   tool, change into the rndlikr directory and type `web-ext run`. This will launch Firefox and
   install the extension automatically (temporarly).
