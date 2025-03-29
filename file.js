

document.querySelector('.faq').addEventListener('click', function() {
    document.querySelector('.ans').style.display = 'block';
});
document.querySelector('.ans').addEventListener('click', function() {
    document.querySelector('.ans').style.display = 'none';
});
document.querySelector('.hamburger').addEventListener('click',function(){
    document.querySelector('.hamtab').style.display = 'block';
});
document.querySelector('.cross').addEventListener('click',function(){
    document.querySelector('.hamtab').style.display = 'none';
});


