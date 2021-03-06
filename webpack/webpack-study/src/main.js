import $ from 'jquery'
import './css/index.css'

$(function() {
    $("li:odd").css('backgroundColor', 'red')
    $("li:even").css('backgroundColor', 'tomato')
})

class People {}

const a1 = Array.from([1])