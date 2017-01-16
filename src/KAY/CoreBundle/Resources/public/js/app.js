/**
 * Created by Jerome on 16/01/2017.
 */
/*global $*/
$(document).ready(function () {
   "use strict";


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        var header = {};

            header.height = $('header')[0].offsetHeight;

        console.log(scroll);
    });
});