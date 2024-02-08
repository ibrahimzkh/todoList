const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: false,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.print(i));
    }
  },

  add: function (text) {
    const newObj = {
    text: text,
    completed: false}

    this.items.unshift(newObj);
  },

  remove: function(index) {
    this.items.splice(index, 1)
  },
  
  print: function(index) {
    if(this.items[index].completed){
      return `[x] ${this.items[index].text}`
    }else return `[] ${this.items[index].text}`
  },

  complete: function(index) {
    this.items[index].completed = true
      
    
  },
};

todoList.complete(0)
todoList.add("Перейти к следующему релизу");
todoList.printAll();
