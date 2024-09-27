/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco
 * Created on: Sep 2024
 * This program makes a physical LED turn on
*/

basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
})
