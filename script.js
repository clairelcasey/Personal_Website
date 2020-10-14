//function expression to select elements

const selectElement = (s) => document.querySelector(s);

//open the menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//close
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});


$(function(){
    $('a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active-page'); $(this).parents('li').addClass('active-page');
        }
    });
});