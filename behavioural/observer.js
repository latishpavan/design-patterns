class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter((subscriber) => subscriber !== fn);
    }

    broadcast(data) {
        this.observers.forEach((subscriber) => subscriber(data));
    }
}

const observer = new EventObserver();
observer.subscribe((data) => console.log(`Observer one got the data, ${data}`));
observer.subscribe((data) => console.log(`Observer two got the data, ${data}`));
observer.subscribe((data) => console.log(`Observer six got the data, ${data}`));

observer.broadcast('take this observers!');
