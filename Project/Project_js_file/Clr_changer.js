const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((btn )=>
{
   // console.log(btn)
    btn.addEventListener('click',(e)=>{
console.log(e)
console.log(e.target)
switch(e.target.id==='grey'|| e.target.id==='white'|| e.target.id==='yellow'|| e.target.id==='green'|| e.target.id==='bg-info'){

    case 'grey':
          body.style.backgroundColor =e.target.id
        case 'white':
            body.style.backgroundColor =e.target.id
        case 'yellow':
            body.style.backgroundColor =e.target.id
            case 'green':
                body.style.backgroundColor =e.target.id
                // you can use any variable name in case id reflect the clr. 
                case 'sky':
                body.style.backgroundColor =e.target.id

                default :
                    body.style.backgroundColor =e.target.id
}
    })
})