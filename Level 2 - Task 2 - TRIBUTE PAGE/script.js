var reload = document.getElementById('reload');
var btn = document.getElementById('iron-man');
btn.addEventListener('click',function() {
    btn.innerText = 'Iron Man';
    reload.style.display = 'inline';
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(255,220,50)';
    document.getElementsByClassName('page')[0].style.backgroundColor = 'rgb(210,0,0)';
    document.getElementsByClassName('page')[0].style.color = 'white';
    document.getElementById('thumbnail').src = './img/intro.jpg';
    document.getElementById('name').innerText = 'IRON MAN';
    document.getElementById('name').style.color = 'rgb(255,210,50)';    
});
reload.addEventListener('click',function() {
    location.reload();
})