const postsSection = document.getElementById("blog-posts")
const postsGallery = document.getElementById("blog-posts-gallery")
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
            <section class="blog-post">
                <img class="featured-img" src=${post.jetpack_featured_media_url} alt=${post.slug}>
                <h2 class="post-title">${post.title.rendered}</h2>
                <div class="post-content">${post.content.rendered}</div>
            </section>
            <hr class="post-separator">
        `
    })

    postsSection.innerHTML = postsToRender
}

function renderPostGallery(data) {
    let postsToRender = ""

    data.forEach(post => {
        postsToRender += `
            <section class="blog-post-thumbnail">
                <img class="thumbnail-img" src=${post.jetpack_featured_media_url} alt=${post.slug}>
                <h2 class="thumbnail-title">${post.title.rendered}</h2>
            </section>
        `

        postsGallery.innerHTML = postsToRender
    })
}

posts
.then(data => {
    console.log(data)
    // renderPosts(data)
    renderPostGallery(data)
})
.catch(error => {
    console.error(`Could not get posts: ${error}`)
})