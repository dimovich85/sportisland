import $ from 'jquery';
import 'slick-carousel';

/* Slider */

$('.slider').slick({
	autoplay: true,
	slidesToShow: 2,
	nextArrow: '.sales__btn_next',
	prevArrow: '.sales__btn_prev'
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

$modalBtn.on('click', e => {
	e.preventDefault();
	const $target = $(e.target);
	const $goal = $($target.attr('href'));

	$goal.addClass('active');
	$goal.parents('.modal').addClass('active');
	$('body').addClass('ov-h');
});

$modalCloser.on('click', e => {
	e.preventDefault();
	const active = $('.modal.active, .modal .active');
	active.removeClass('active');
	$('body').removeClass('ov-h');
});

/* Post ID */

const $postIdBtn = $('[href="#modal-form"]');

$postIdBtn.on('click', e => {
	e.preventDefault();
	const $target = $(e.target);
	const ID = $target.attr('data-post-id');
	const form = $($target.attr('href'));
	const input = document.createElement('input');
	input.setAttribute('type', 'hidden');
	input.setAttribute('name', 'form-post-id');
	input.setAttribute('value', ID);
	form.append(input);
});