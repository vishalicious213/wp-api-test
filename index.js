const postsSection = document.getElementById("blog-posts")
const posts = getPosts()

async function getPosts() {
    const response = await fetch("https://public-api.wordpress.com/wp/v2/sites/neophyte.home.blog/posts")
    
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }

    const data = await response.json()
    return data
}

function renderPosts(data) {
    let postsToRender = ""

    data.forEach(post => {
        console.log(post.title)
        postsToRender += `
            <section>
                <h2>${post.title.rendered}</h2>
                <div>${post.content.rendered}</div>
            </section>
        `
    })

    postsSection.innerHTML = postsToRender
}

posts
.then(data => {
    console.log(data)
    renderPosts(data)
})
.catch(error => {
    console.error(`Could not get posts: ${error}`)
})