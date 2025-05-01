const postsSection = document.getElementById("blog-posts")

async function getPosts() {
    const response = await fetch("https://public-api.wordpress.com/wp/v2/sites/neophyte.home.blog/posts")
    
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }

    const data = await response.json()
    return data
}

const posts = getPosts()
posts
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error(`Could not get posts: ${error}`)
})