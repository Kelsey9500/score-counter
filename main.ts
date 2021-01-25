serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
radio.setGroup(1)
let Number2 = 50
basic.showString("" + (Number2))
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        Number2 += -1
        basic.showString("" + (Number2))
        serial.writeLine("")
        serial.writeNumber(Number2)
        serial.writeLine("")
    } else if (input.isGesture(Gesture.Shake)) {
        basic.showString("" + (Number2))
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(Number2)
    }
})
