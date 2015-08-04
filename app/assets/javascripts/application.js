// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap/bootstrap
//= require_tree .


 // Nav Toggle
$(function() {
$( '#toggle' ).click(function() {
  $( '.main-nav' ).toggle( 'slide' , { direction: 'left' }, 200  );
  return false;
  }); 
});

$(function() {
$( '#close' ).click(function() {
  $( '.main-nav' ).toggle( 'slide' , { direction: 'left' }, 200  );
  });
});


 // Modal Toggle
$(function() {
$( '#modal-toggle' ).click(function() {
  $( '.entry-modal-wrap' ).toggle( 'slide' , { direction: 'up' }, 200  );
  return false;
  }); 
});

$(function() {
$( '#close-modal' ).click(function() {
  $( '.entry-modal-wrap' ).toggle( 'slide' , { direction: 'up' }, 200  );
  });
});

$(".field :input").attr("autocomplete", "off");