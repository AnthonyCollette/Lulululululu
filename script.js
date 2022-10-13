let button = document.getElementById('button')
let image = document.getElementById('image')
let fee = document.getElementById('fee')
let modal = document.getElementById('modal')

button.addEventListener('click', () => {
	if (image.style.opacity == '1') {
		image.style.opacity = '0'
		fee.style.opacity = '0'
	} else {
		image.style.opacity = '1'
		fee.style.opacity = '1'
	}
})

fee.addEventListener('click', () => {
	modal.style.display = 'flex'
	fee.style.opacity = '0'
})

modal.addEventListener('click', () => {
	modal.style.display = 'none'
})
