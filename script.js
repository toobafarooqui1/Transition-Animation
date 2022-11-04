const div = document.getElementsByTagName('div')

var elemments = Array.prototype.slice.call(div)

const animation = () => {
    elements.forEach((element) =>  {
        element.classList.add('animated')
        setTimeout(() => {
            element.classList.remove('animated')
        }, 4000)
    })
}
