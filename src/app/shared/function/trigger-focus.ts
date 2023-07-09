export function triggerFocus(element: any) {
    const eventType = 'onfocusin' in element ? 'focusin' : 'focus';
    const bubbles = 'onfocusin' in element;
    let event;

    if ('createEvent' in document) {
        event = document.createEvent('Event');
        event.initEvent(eventType, bubbles, true);
    } else if ('Event' in window) {
        event = new Event(eventType, {bubbles: bubbles, cancelable: true});
    }

    element?.focus();
    element.dispatchEvent(event);
}
