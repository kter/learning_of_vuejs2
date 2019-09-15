var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'ページをロードした時間' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'todo 1' },
      { text: 'todo 2' },
      { text: 'todo 3' },
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese'},
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  },
  created: function () {
    console.log('this is created life sycle hook');
  }
})

var  app8 = new Vue({
  el: '#app-8',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

var app9 = new Vue({
  el: '#app-9',
  data: {
    firstname: 'First',
    lastname: 'Last',
  },
  computed: {
    fullname: {
      get: function() {
        return this.firstname + ' ' + this.lastname
      },
      set: function(newFullname) {
        var names = newFullname.split(' ')
        this.firstname = names[0]
        this.lastname = names[names.length - 1]
      }
    }
  }
})

var app10 = new Vue({
  el: '#app-10',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark.'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
      .then(function (response) {
        vm.answer = _.capitalize(response.data.answer)
      })
      .catch(function (error) {
        vm.answer = 'Error! Could not reach the API. ' + error
      })
    }
  }
})

