app.component('post-form', {
    template:
    /*html*/
    `<form class="post-form" @submit.prevent="onSubmit">
    <h3>Create a post</h3>    
    <textarea id="body" v-model="body"></textarea>  

    <input class="button" type="submit" value="Post">  

    </form>`,
  data() {
      return {
          body: '',
          date: ''
      }
  },
  methods: {
      onSubmit() {
          if (this.body == '') {
              alert('Please type something to post')
              return
          }
          const current = new Date();
          const dateNow = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} - ${current.getSeconds()+" secs ago"}`;
        
          let myPost = {
              body: this.body,
              date: dateNow
          }
          this.$emit('post-submitted', myPost)

          this.body = ''
      }

  }
})
