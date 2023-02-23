const stars=document.querySelectorAll('.fa-star');
const emojies=document.querySelectorAll('.fa-regular')
const colors=['red','yellow','blue','orange','green']

stars.forEach((star,index)=>{
  star.addEventListener('click',()=>{
       updateRating(index)
  })
})
updateRating(0)
function updateRating(index){
    stars.forEach((star,idx)=>{
       if(idx<index+1){
          star.classList.add('active')
       }else{
        star.classList.remove('active')
       }
    })

    emojies.forEach((emoji)=>{
      emoji.style.transform=`translate(${-index * 50}px)`
      emoji.style.color=colors[index]
    })
}