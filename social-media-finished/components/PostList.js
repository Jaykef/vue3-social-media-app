app.component('post-list', {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <!--<h3>My Posts:</h3>-->
        <div v-for="(post, index) in posts" :key="index" class="post-container">
            <h3>{{ post.body }}</h3><span>posted {{post.date}}</span>
            <button @click="deletePost" class="delButton">Delete</button>
        </div>`,
    methods: {
        deletePost() {
            this.posts.splice(this.posts.indexOf(1));
        },
    }
})