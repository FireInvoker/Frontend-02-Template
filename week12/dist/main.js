import {Component, createElement} from "./framework.js"

class Carousel extends Component{
    constructor() {
        super();
        this.attributes = Object.create(null);
    }

    setAttribute(name, value) {
        this.attributes[name] = value;
    }

    render() {
        console.log(this.attributes)
        this.root = document.createElement("div")
        for(let record of this.attributes.src) {
            let child = document.createElement("img")
            child.src = record;
            this.root.appendChild(child)
        }
        return this.root;
    }

    mountTo(parent) {
        parent.appendChild(this.render())
    }
}

let d = [
    "https://static001.geekbang.org/resource/image/40/b1/40da5d89c59262711beaa206c48e67b1.jpg",
    "https://static001.geekbang.org/resource/image/50/fe/5022c19ab75d3b0215a276167a69b2fe.jpg",
    "https://static001.geekbang.org/resource/image/a6/f1/a691e6b628ceb9d7c2ca9780126301f1.jpg",
    "https://static001.geekbang.org/resource/image/ee/1c/ee5415f97405929ec61a586991e2111c.jpg",
  ]

let a = <Carousel src={d}/>

//Document.body.appendChild(a);
a.mountTo(document.body)