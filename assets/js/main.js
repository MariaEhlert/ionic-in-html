fetch('https://dog.ceo/api/breeds/image/random/1')
.then(response => response.json())
.then(data => {
    (data && data.message.map((item) =>{
        getData(item);
    }))
})
const getData = (dogImg) => {
    const wrapper = document.querySelector('.dogImage');
    const img = document.createElement('img');
    img.setAttribute('src', dogImg);
    wrapper.append(img);
}