function computeYRatio(height, max, min) {
    return (max - min) / height
}

function computeXRatio(width, length) {
    return width / (length - 2)
}
export function toDate(timestamp, withDay) {
    const shortMonths= [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]
    const shortDays= [
        'Sun',
        'Mon',
        'Tue',
        'Web',
        'Thu',
        'Fri',
        'Sat'
    ]
    const date = new Date(timestamp)
    if (withDay) {
        return `${shortDays[date.getDay()]}, 
        ${shortMonths[date.getMonth()]} ${date.getDate()}`
    }
    return `${shortMonths[date.getMonth()]} ${date.getDate()}`
}

function isOver(mouse, x, length, dWidth) {
    if (!mouse) return false
    const width = dWidth / length
    console.log('isOver')
    return Math.abs(x - mouse.x) < width / 3
}

function line(ctx, coords, {color}) {
    ctx.beginPath()
    ctx.lineWidth = 4
    ctx.strokeStyle = color
    for (const [x, y] of coords) {
        ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.closePath()
}

function circle(ctx, [x, y], radius, color) {
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.fillStyle = '#fff'
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}

function boundaries({columns, types}) {
    let min, max
    columns.forEach(col => {
        if (types[col[0]] !== 'line') return

        if (typeof min !== 'number') min = col[1]
        if (typeof max !== 'number') max = col[1]

        for (let i = 1; i < col.length; i++) {
            if (min > col[i]) min = col[i]
            if (max < col[i]) max = col[i]
        }
    })
    return [min, max]
}

function toCoords(xRatio, yRatio, DPI_HEIGHT, PADDING, yMin) {
    return (col) => col.map((y, i) => [
        Math.floor((i - 1) * xRatio),
        Math.floor(DPI_HEIGHT - PADDING - (y - yMin) / yRatio)
    ]).filter((_, i) => i !== 0)
}

function css(el, styles = {}) {
    Object.assign(el.style, styles)
}

module.exports = {computeXRatio, computeYRatio, toDate, isOver, line, circle, boundaries, toCoords, css}