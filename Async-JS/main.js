//Async-await fetch
async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    let output = '';
    data.forEach(item => output += `<h3>${item.title}</h3><p>${item.body}</p>`);
    document.body.innerHTML = output;
}

fetchPosts()