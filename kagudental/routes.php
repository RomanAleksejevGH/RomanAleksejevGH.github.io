<?php

require_once("{$_SERVER['DOCUMENT_ROOT']}/router.php");



get('/', 'views/index.php');
get('/menu', 'views/ru/menu.php');
get('/services', 'views/ru/services.php');
get('/contact', 'views/ru/contact.php');
get('/can_do', 'views/ru/can_do.php');
get('/heal', 'views/ru/heal.php');
get('/remove', 'views/ru/remove.php');
get('/prosthetics', 'views/ru/prosthetics.php');
get('/child', 'views/ru/child.php');
get('/oboutus', 'views/ru/oboutus.php');
get('/prices', 'views/ru/prices.php');
get('/booking', 'views/ru/booking.php');
get('/reviews', 'views/ru/reviews.php');
// For GET or POST
// The 404.php which is inside the views folder will be called
// The 404.php has access to $_GET and $_POST
any('/404','views/404.php');
