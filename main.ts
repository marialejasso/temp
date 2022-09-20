let temp = 0
basic.forever(function () {
    temp = input.temperature()
    basic.showNumber(temp)
    if (temp == 10) {
        basic.showNumber(temp)
        basic.showIcon(IconNames.Happy)
    } else if (temp == 20) {
        basic.showNumber(temp)
        basic.showIcon(IconNames.Heart)
    } else if (temp == 30) {
        basic.showNumber(temp)
        basic.showIcon(IconNames.Target)
    } else if (temp == 40) {
        basic.showNumber(temp)
        basic.showIcon(IconNames.No)
    } else {
        basic.showNumber(temp)
    }
})
