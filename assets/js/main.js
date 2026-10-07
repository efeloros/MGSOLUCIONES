(function(){
  document.documentElement.classList.remove('no-js');
  var h=document.querySelector('.site-header');
  var onScroll=function(){h&&h.classList.toggle('is-scrolled',window.scrollY>40)};
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  var t=document.querySelector('.menu-toggle'),n=document.getElementById('primary-nav');
  if(t&&n){
    t.addEventListener('click',function(){var o=n.classList.toggle('is-open');t.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
    n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('is-open');t.setAttribute('aria-expanded','false');document.body.style.overflow=''})});
  }
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  } else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('is-in')});
  // Vista previa estática: el formulario abre WhatsApp con los datos
  var f=document.getElementById('mg-form');
  if(f&&f.dataset.mode==='static'){
    f.addEventListener('submit',function(e){
      e.preventDefault();var d=new FormData(f);
      var msg='Hola MG Soluciones Técnicas. Soy '+d.get('nombre')+' ('+d.get('telefono')+'). Vehículo: '+(d.get('vehiculo')||'-')+'. Servicio: '+d.get('servicio')+'. '+(d.get('mensaje')||'');
      window.open('https://wa.me/'+(f.dataset.wa||'573100000000')+'?text='+encodeURIComponent(msg),'_blank');
    });
  }
})();
