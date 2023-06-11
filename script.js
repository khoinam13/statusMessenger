function messenger({
    title = '',
    lineMess = '',
    type = 'info',
    diration = 3000
}){
    const main = document.getElementById('box-messenger')
    if(main){
       const messenger = document.createElement('div')
       const delay = (diration/1000).toFixed(2)
       const icons = {
            success: 'fa-solid fa-circle-check',
            danger: 'fa-sharp fa-solid fa-triangle-exclamation'
       }
       const icon = icons[type]
       messenger.style.animation = `inLeftMess ease .5s, hiden 1s ease ${delay}s forwards`
       messenger.classList.add('messenger', `messenger--${type}`)
       messenger.innerHTML = `
       <div class="messenger__icon">
       <i class="${icon}"></i>
        </div>
        <div class="messenger__body">
            <div class="messenger__title">${title}</div>
            <div class="messenger__line-mess">${lineMess}</div>
        </div>
        <div class="messenger__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
       `
       main.appendChild(messenger)
    //    auto clear mess
       const autoClear = setTimeout(function(){
            main.removeChild(messenger)
       },diration + 1000)
    //    click clear mess
       messenger.onclick = function(e){
            console.log(e.target)
            if(e.target.closest('.messenger__close')){
                main.removeChild(messenger)
                clearTimeout(autoClear)
            }
       }
       

}
}
function messengerSuccess(){
    messenger({
        title: 'Thành Công',
        lineMess: 'Bạn đã đăng nhập thành công trên F8!',
        type : 'success',
        diration: 3000
    })
}
function messengerError(){
    messenger({
        title: 'Thất bại',
        lineMess: 'Có lỗi xảy ra, vui lòng liên hệ quản trị viên',
        type : 'danger',
        diration: 3000
    })
}
