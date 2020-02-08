export const scrollRight = (el, p) => {
  el.scrollBy(p, 0)
}

export const scrollLeft = (el, p) => {
  el.scrollBy(-p, 0)
}

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let hue1 = 0
let hue2 = 150
let strokeWidth = 150
let decreasing = true

export const blendModes = ['screen', 'exclusion', 'luminosity']

export const draw = ({ e, context, mobile }) => {
  const x = (mobile && e.touches[0].clientX) || e.clientX
  const y = (mobile && e.touches[0].clientY) || e.clientY
  const pageX = (mobile && e.touches[0].pageX) || e.pageX
  const pageY = (mobile && e.touches[0].pageY) || e.pageY
  hue1++
  hue2++
  const sat = x / 6
  if (decreasing === true && strokeWidth > 75) {
    strokeWidth = strokeWidth - 2
    if (strokeWidth === 75) {
      decreasing = false
    }
  } else {
    decreasing = false
    strokeWidth = strokeWidth + 2
    if (strokeWidth === 150) {
      decreasing = true
    }
  }

  const gradient =
    context && context.createLinearGradient(x - 35, y - 35, x + 35, y + 35)
  gradient.addColorStop(0, `hsl(${hue1}, ${sat}%, 60%)`)
  gradient.addColorStop(1, `hsl(${hue2}, ${sat}%, 60%)`)
  context.fillStyle = gradient
  context.beginPath()
  context.arc(pageX, pageY, strokeWidth, 0, 2 * Math.PI)
  context.fill()
}
