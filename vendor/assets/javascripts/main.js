$( window ).load( function () {

  "use strict";

	setTimeout( function () {

		$( '.filter-button-group a:first-child' ).trigger( "click" );

	}, 50 );

	var $grid = $( '.grid' ).isotope( {
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	} );

	$( '.filter-button-group' ).on( 'click', 'a', function () {

		$( '.filter-button-group a' ).removeClass( "current" );
		$( this ).addClass( "current" );

		var filterValue = $( this ).attr( 'data-filter' );
		$grid.isotope( {
			filter: filterValue
		} );
		setTimeout( function () {

		}, 0 );

		return false;

	} );

  // delete main-preloader
	var mainPreloader = document.querySelector('.main-preloader');
	if( mainPreloader ) {
		mainPreloader.classList.add('window-is-loaded');
		setTimeout(function(){
				mainPreloader.parentNode.removeChild( mainPreloader );
		},650);
	}
	// /delete main-preloader

} );

// $( document ).ready( function () {
//
//   "use strict";
//
// 	$( 'a[href^="#"]' ).on( 'click', function ( event ) {
//
// 		event.preventDefault();
//
// 		var target = event.currentTarget.getAttribute( 'href' );
// 		if ( !target ) {
// 			return false;
// 		}
//
// 		target = document.querySelector( target );
//
// 		if ( !target ) {
// 			return false;
// 		}
//
// 		var startX = document.body.scrollTop,
// 			progressX = startX,
// 			endX = target.offsetTop,
// 			path;
//
// 		var goLeft = startX < endX;
//
// 		path = Math.abs( startX - endX );
//
// 		animate( {
// 			duration: 300,
// 			timing: function ( timeFraction ) {
// 				return timeFraction < 0.5 ? 4 * timeFraction * timeFraction * timeFraction :
// 					( timeFraction - 1 ) * ( 2 * timeFraction - 2 ) * ( 2 * timeFraction - 2 ) + 1;
// 			},
// 			draw: function ( progress ) {
//
// 				progressX = goLeft ? startX + path * progress : startX - path * progress;
//
// 				document.body.scrollTop = progressX;
//
// 			}
// 		} );
//
// 	} );
// } );
//
// function animate( setting ) {
//
// 	'use strict';
//
// 	var start = new Date()
// 		.getTime();
//
// 	function animate() {
//
// 		// timeFraction от 0 до 1
// 		var now = new Date()
// 			.getTime();
//
// 		var timeFraction = ( now - start ) / setting.duration;
//
// 		if ( timeFraction > 1 ) {
// 			timeFraction = 1;
// 		}
// 		// текущее состояние анимации
// 		var progress = setting.timing( timeFraction );
// 		setting.draw( progress );
//
// 		if ( timeFraction < 1 ) {
// 			window.requestAnimationFrame( animate );
// 		}
// 	}
//
// 	animate();
// }

document.addEventListener('scroll', function( event ){
  "use strict";
  event.preventDefault();
  event.stopPropagation();

});

// var prePos, isAnimate = false;;
//
// document.onscroll = function( event ) {
//   "use strict";
//
//   if( isAnimate ) {
//     event.preventDefault();
//   }
//
//   var startX = document.body.scrollTop;
//   if( ! prePos ) {
//     prePos = startX;
//   }
//
//   if( prePos > startX ) {
//     return false;
//   }
//
//   console.log( startX );
//
//   if( startX <= 100 ) {
//
//     event.preventDefault();
//
//     var target = document.querySelector('#top');
//     if( ! target ){
//       return false;
//     }
//
//     var progressX = startX,
//       endX = target.offsetTop,
//       path;
//
//     var goLeft = startX < endX;
//
//     // if( goLeft ){
//     //   console.log(goLeft);
//     //   return false;
//     // }
//
//     path = Math.abs( startX - endX );
//
//     isAnimate = true;
//
//     animate( {
//       duration: 300,
//       timing: function ( timeFraction ) {
//         // return timeFraction;
//         // return timeFraction < 0.5 ? 4 * timeFraction * timeFraction * timeFraction :
//         //   ( timeFraction - 1 ) * ( 2 * timeFraction - 2 ) * ( 2 * timeFraction - 2 ) + 1;
//         return timeFraction;
//       },
//       draw: function ( progress ) {
//
//         progressX = goLeft ? startX + path * progress : startX - path * progress;
//
//         console.log(progressX);
//
//         document.body.scrollTop = progressX;
//
//         if( progress >= 1 ) {
//           prePos = startX;
//           isAnimate = false;
//         }
//
//       }
//     } );
//   }
// };

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}