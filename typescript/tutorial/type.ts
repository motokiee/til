class Animal {
    bark() {
        return "unknown"
    }
}

class Cat extends Animal {
    bark() {
        return "にゃーん"
    }
}

let animal = new Animal();
let cat = new Cat();

// Run with `osascript -l JavaScript type.js`
// https://developer.apple.com/library/content/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/Introduction.html
console.log(animal.bark())
console.log(cat.bark())
