var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    url: 'https://jp.vuejs.org/',
    toggle: true,
    languages: ['JavaScript', 'Ruby', 'Python']
  },
  methods: {
    click: function() {
      if (this.message !== 'Clicked!') {
        this.message = 'Clicked!'
      } else {
        this.message = 'Hello World!'
      }
    }
  }
})
