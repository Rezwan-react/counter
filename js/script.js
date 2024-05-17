let show = document.querySelectorAll('.show')
let arr = Array.from(show)

arr.map((item)=>{
    let i = 0
    let count = ()=>{
        i++
        item.innerHTML = i
        if( i == item.dataset.number){
            clearInterval(stop)
        }
    }

    let stop = setInterval(()=>{
        count()

    },100)
})