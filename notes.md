## Concerns

- <img class="thumbnail-img" src=${post.jetpack_featured_media_url} alt=${post.}>
    - If the alt is changed to `post.title.rendered` and the word "hidden" is part of the title, like the blog post "Why you need a hidden HTML form for Netlify Forms in a React app" then the image will not render
    - Additionally, the alt will display as `{object object}`