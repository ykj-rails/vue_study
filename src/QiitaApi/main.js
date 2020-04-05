var app = new Vue({
  el: '#app',
  data: {
    items: null,
    keyword: '',
    message: ''
  },
  watch: {
    keyword: function(newKeyword, oldKeyword) {
      // console.log(newKeyword)
      this.message = 'ちょっと待てぃ'
      this.debouncedGetAnswer()
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer: function() {
      if (this.keyword === '') {
        this.items = null
        this.message = ''
        retturn
      }

      this.message = 'Loading...'
      var vm = this
      var params = { page: 1, per_page: 20, query: this.keyword }
      axios
        .get('https://qiita.com/api/v2/items', { params })
        .then(function(response) {
          vm.items = response.data
        })
        .catch(function(error) {
          vm.message = 'Error' + error
        })
        .finally(function() {
          vm.message = ''
        })
    }
  }
})
