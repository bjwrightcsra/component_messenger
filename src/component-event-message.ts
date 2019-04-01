export class ComponentEventMessage {

    /**
     * Dispatches an event carrying a payload to the window object
     * @param eventName name of event to attach to window object
     * @param objectMessageToSend object to send as a message, ends up in payload of detail
     */
    public static sendEventToWindow(eventName :string, objectMessageToSend: any) {
        window.dispatchEvent(new CustomEvent(eventName, {
            detail: {
                payload: objectMessageToSend
            }, 
            bubbles: true
        }));
    }

    /**
     * ***Best Practice: Remove Event Listeners in ngOnDestroy() phase
     * ***DO NOT PASS ANONYMOUS FUNCTIONS AS YOU CANNOT REMOVE LISTENER***
     * Attach an event listener to the window object.  Do not pass anonymous functions so
     * the event listener can be removed during ngOnDestroy()
     * @param eventName 
     * @param callBack 
     */
    public static listenToEvent(eventName :string, callBack: EventListenerOrEventListenerObject) {
        window.addEventListener(eventName, callBack);
    }

    /**
     * use this method during ngOnDestroy() to remove event listeners from window object
     * this saves memory.
     * @param eventName name of event to be removed
     * @param functionUsed name of function to be removed
     */
    public static removeEventListener(eventName :string, functionUsed: EventListenerOrEventListenerObject) {
        window.removeEventListener(eventName, functionUsed);
    }
}