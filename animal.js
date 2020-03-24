const App = {
  displayCollectionToList: collection => {
    let animalsListElement = document.getElementById("animals")

    collection.forEach(item => {
      const listElement = document.createElement("li")
      const textNode = document.createTextNode(`${item.getDescription()}`)
      listElement.appendChild(textNode)
      animalsListElement.append(listElement)
    })
  }
}

class Animal {
  constructor({ name, age, color }) {
    this.name = name
    this.age = age
    this.color = color
  }

  getName = () => this.name
  getAge = () => `${this.age} years old`
  getColor = () => this.color
  getDescription = () => {
    return `${this.getName()} with color ${this.getColor()} is ${this.getAge()}`
  }

  setName = newName => {
    this.name = newName
  }

  setName = newAge => {
    this.age = newAge
  }

  setName = newColor => {
    this.color = newColor
  }
}

const zooAnimals = [
  new Animal({
    name: "Lion",
    color: "orange",
    age: 1.5
  }),
  new Animal({
    name: "Tiger",
    age: 2.4,
    color: "dark orange"
  }),
  new Animal({
    name: "Forest Bear",
    age: 3,
    color: "brown"
  })
]

App.displayCollectionToList(zooAnimals)
