var miGlobal = {
  sliders : {
    items: []
  }
}
//cache obj
miGlobal.cache = {
    $window : null,
    $html : null,
    $body : null,
    init : function() {
      this.$window = $(window);
      this.$html = $('html');
      this.$body = this.$html.find('body');
    }
}

  
  
function createSlider(sliderSelector) {
  var slider = tns({
    container: sliderSelector,
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: false,    
    autoplay: false,
    speed: 800,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: "#customize-controls",
    responsive: {
      375: {
        items: 2,
    },
     
      640: {
            items: 5,
        },
        
        768: {
            items: 3,
        },
        
        1366: {
            items: 5,
        }
    }
  });
  return slider
}

function filter (filterValue) {
    //1 destroy slider
    var sliderObj = miGlobal.sliders.items[0].slider; //hardcoded el index
    sliderObj.destroy(); 
                          
    //2 modify DOM obj create, delete, edit...
    var $cached = $(miGlobal.sliders.items[0].cached); //usamos el slider de caché, con los datos originales no filtrados
    $(sliderSelector).html($cached.html())
    if (filterValue != "all") {
        $(sliderSelector).find('[data-type]').not('[data-type*=' + filterValue + ']').remove();
    }
  
    //3 rebuild slider 
    miGlobal.sliders.items[0].slider = createSlider(sliderSelector);
}

miGlobal.cache.init()
var sliderSelector = '.my-slider';
var $cachedSlider = miGlobal.cache.$body.find(sliderSelector)[0].cloneNode(true); // ¡clon!
var $thisSlider = createSlider(sliderSelector);
var domSlider = miGlobal.sliders.items[0] = {
  'slider' : $thisSlider,
  'cached' : $cachedSlider
};