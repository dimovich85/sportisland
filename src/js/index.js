import $ from 'jquery';
import 'slick-carousel';

/* Mobile menu */

const $mobileBtn = $('.main-header__mobile');

$mobileBtn.on('click', e =>{
	e.preventDefault();
	const $target = $(e.target);
	if( !$target.hasClass('closer') ){
		$target.addClass('closer');
		$target.parents('.main-header__wrap')
		   	   .find('.main-navigation')
		   	   .addClass('active');
		$target.parents('.main-header__wrap')
		       .find('.main-header__widget')
		       .addClass('active');
		$('body').addClass('ov-h');
	} else{
		$target.removeClass('closer');
		$target.parents('.main-header__wrap')
		       .find('.main-navigation')
		       .removeClass('active');
		$target.parents('.main-header__wrap')
		       .find('.main-header__widget')
		       .removeClass('active');
		$('body').removeClass('ov-h');
	}
});

/* Slider */

$('.slider').slick({
	autoplay: true,
	slidesToShow: 2,
	nextArrow: '.sales__btn_next',
	prevArrow: '.sales__btn_prev',
	responsive: [
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	]
});

/* Tabs */

const tabHeads = $('.tabs-btns__btn');

tabHeads.on('click', function(event){
	event.preventDefault();
	const target = $(event.target);
	const link = target.attr('href');

	const content = $(link);
	const active = $('.tabs-btns .active-tab, .tabs-content .active-tab');
	active.removeClass('active-tab');
	target.parent().addClass('active-tab');
	content.addClass('active-tab');
});

/* Modal */

const $modalBtn = $('.btn_modal');
const $modalCloser = $('.modal__closer');
const $overlay = $('.modal');

$modalBtn.on('click', e => {
	e.preventDefault();
	const $target = $(e.target);
	const $goal = $($target.attr('href'));

	$goal.addClass('active');
	$goal.parents('.modal').addClass('active');
	$('body').addClass('ov-h');
});

const closeFunc = e => {
	e.preventDefault();
	if( $(e.target).is('.modal__closer, .modal, .wrapper') ){
		const active = $('.modal.active, .modal .active');
		active.removeClass('active');
		$('body').removeClass('ov-h');
	}
}

$modalCloser.on('click', closeFunc);
$overlay.on('click', closeFunc);

$(window).on('keydown', e => {
	if( e.key == 'Escape' )
		closeFunc(e);
});

/* Post ID */

const $postIdBtn = $('[href="#modal-form"]');

$postIdBtn.on('click', e => {
	e.preventDefault();
	const $target = $(e.target);
	const ID = $target.attr('data-post-id');
	const formContainer = $($target.attr('href'));
	const form = formContainer.find('form');
	const input = document.createElement('input');
	input.setAttribute('type', 'hidden');
	input.setAttribute('name', 'form-post-id');
	input.setAttribute('value', ID);
	form.append(input);
});