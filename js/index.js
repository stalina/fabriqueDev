'use strict';

// 19:18

(function ($) {

  var $coin = $('#coin'),
      $mainBulb = $('#mainBulb'),
      $liquids = $('.liquid'),
      $Liquid01 = $('#Liquid1'),
      $Liquid02 = $('#Liquid2'),
      $Liquid03 = $('#Liquid3'),
      $Liquid04 = $('#Liquid4'),
      $Liquid05 = $('#Liquid5'),
      $Liquid06 = $('#Liquid6'),
      $Liquid07 = $('#Liquid7'),
      $Liquid08 = $('#Liquid8'),
      $Liquid09 = $('#Liquid9'),
      mainTl = new TimelineMax();

  function clearStage() {
    var clearTl = new TimelineMax();

    clearTl.set($coin, { x: -90, y: 120, scale: 0.5, transformOrigin: 'center center' }).set($mainBulb, { fill: '#fff' }).set($liquids, { stroke: '#fff' });

    return clearTl;
  }

  function initTimeline() {
    mainTl.add(clearStage());
  }

  initTimeline();
})(jQuery);