// When using the default layered navigation class names you can use this snippet
// To change the state to open instead of the default state ( hidden)

(function() {
 var elems = document.querySelectorAll('.catalog-category-view, .filter-options-content');
for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'block';
}
})();
