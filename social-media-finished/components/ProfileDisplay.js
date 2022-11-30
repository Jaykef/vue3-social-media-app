app.component('profile-display', {
    props: {
        isFollowing: {
            type: Boolean,
            required: false
        }
    },
    template:
    /*html*/
    `
    <div class="profile-display">
        <div class="profile-container">
          <div class="profile-image">
            <!-- Profile Image goes here -->
            <img v-bind:src="image" alt="my profile image">
          </div>
          <div class="profile-info">
            <h1>{{ name }}</h1>
            <button class="button">Posts: {{ totalPosts }} </button>
            <button class="button">Followers: {{ followers }}</button>
            <button class="button">Following: {{ following }}</button>
            <p>{{ bio }}</p>
            <button class="follow-status" :isFollowing="followUser" v-text="buttonText2"></button>
            <button class="follow-status" @click="followUser" v-text="buttonText"></button>

            <post-list v-if="posts.length" :posts="posts"></post-list>
            <post-form @post-submitted="addPost" @deleted-post="deletedPost"></post-form>
          </div>
        </div>
      </div>`,
      data() {
        return {
            name: 'Jaykef (苏杰)',
            image: './assets/images/jaykef.jpg',
            bio: 'Hi there! I am Jaykef, a programmer, freelancer and software engineering student at beijing institute of technology.',
            totalPosts: 164,
            followers: 1188,
            following: 285,
            isFollowing: true,
            posts: []
        }
      },
      methods: {
          addPost(post) {
              this.posts.push(post)
              this.totalPosts += 1
          },
          deletedPost() {
            this.totalPosts -= 1
            this.$emit('deleted-post')
          },
          followUser() {
            this.isFollowing = ! this.isFollowing;
            if (this.isFollowing) {
              this.followers += 1
            } else {
              this.followers -= 1
            }
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