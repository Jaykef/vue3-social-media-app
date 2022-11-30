const app = Vue.createApp({
    data() {
        return {
            name: 'Jaykef (苏杰)',
            image: './assets/images/jaykef.jpg',
            bio: 'Hi there! I am Jaykef, a programmer, freelancer and software engineering student at beijing institute of technology.',
            totalPosts: '164',
            followers: '1,105',
            following: '285',
            isFollowing: true,
            posts: []
        }
    },
    computed: {
        buttonText() {
            return (this.isFollowing) ? 'Unfollow' : 'Follow'
        },
        buttonText2() {
          return (this.isFollowing) ? 'Following' : 'Unfollowed'
        }
      }
})