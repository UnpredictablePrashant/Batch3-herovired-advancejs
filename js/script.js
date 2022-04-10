const elements = document.getElementsByClassName('ratings')


for(element of elements){
    const rating = element.innerHTML
console.log(rating)
if(rating < 8){
    element.style.color = 'red'
}
}
