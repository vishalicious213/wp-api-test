const postsSection = document.getElementById("blog-posts")

function getPosts() {
    fetch("https://public-api.wordpress.com/wp/v2/sites/neophyte.home.blog/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(`Could not get posts: ${error}`)
    })
}

getPosts()