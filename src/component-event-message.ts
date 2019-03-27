export class ComponentEventMessage {

    public static sendEventToWindow(eventName :string, objectToSend: any) {
        window.dispatchEvent(new CustomEvent(eventName, {
            detail: {
                payload: objectToSend
            }, 
            bubbles: true
        }));
    }
}