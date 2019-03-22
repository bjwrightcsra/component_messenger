import { ComponentTarget } from './component-target'

export abstract class ComponentMessenger {
    /**
     *  Sends an object to another component.
     * @param componentTarget instance of ComponentTarget class with selector and input name
     * @param objectToSend the object to send to the component target
     */
    public static sendObjectToComponent(componentTarget: ComponentTarget, objectToSend: any) {
        const componentToReceiveObject:any = document.querySelector(componentTarget.componentSelector);
        if (componentToReceiveObject != null) {
        console.log("found component: " + componentTarget.componentSelector);
        console.log("sending " + objectToSend + "to component");
        componentToReceiveObject[componentTarget.componentInputName] = objectToSend;
        } else {
        console.log("can't find " + componentTarget.componentSelector + " component!");
        }
    }
}