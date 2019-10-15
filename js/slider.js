$(document).ready(function(){
console.log("chargement Dom");
// Mise en place Slider//


var Diaporama = {  // définition des variables
    
    diaporama : null, 
    slide : null, 
    indexSlide : null, 
    currentSlide : null,
    flecheDroite : null,
    flecheGauche : null,
    i : 0,
    
    init : function(){ //initialisation du diapo
        this.diaporama = $("#diaporama");
        this.slide = $(".slide");
        this.indexSlide = this.slide.length -1;
        this.currentSlide = this.slide.eq(this.i);
        this.flecheDroite = $("#flecheDroite");
        this.flecheGauche = $("#flecheGauche");
        this.slide.css("display", "none");
        this.currentSlide.css("display", "block");
        
        this.flecheDroite.click(function(){Diaporama.next()}); // Appel à  la fonction next
        this.flecheGauche.click(function(){Diaporama.previous()}); // Appel à la fonction previous
        
        $(document).keydown(function(toucheNext){ // Appel Ã  la fonction next l'orsque l'on presse la flèche droite du clavier
            var appui = toucheNext.which || toucheNext.keyCode;
            if(appui == 39){Diaporama.next()};
        });
        
        $(document).keydown(function(touchePrevious){ // Appel Ã  la fonction previous l'orsque l'on presse la flèche gauche du clavier
            var appui = touchePrevious.which || touchePrevious.keyCode;
            if(appui == 37){Diaporama.previous()};
        });
        
        // Diaporama.slideDiaporama(); // Appel à  la fonction slideDiaporama
    },
    
    next : function(){ // Image suivante
            this.i++;

            if( this.i <= this.indexSlide ){
                this.slide.css("display", "none");
                this.currentSlide = this.slide.eq(this.i);
                this.currentSlide.fadeIn(800, "swing");
                this.currentSlide.css("display", "block");
            }
            else if( this.i >= this.indexSlide ){
                this.slide.css("display", "none");
                this.currentSlide = this.slide.eq(0);
                this.currentSlide.fadeIn(800, "swing");
                this.currentSlide.css("display", "block");
                this.i = 0;
            }
            else{
                this.i = this.indexSlide;
            }
    },
    
    previous : function(){ // Image précédente
        this.i--;

        if( this.i >= 0 ){
            this.slide.css("display", "none");
            this.currentSlide = this.slide.eq(this.i);
            this.currentSlide.fadeIn(800, "swing");
            this.currentSlide.css("display", "block");
        }
        else if( this.i <= 0 ){
            this.slide.css("display", "none");
            this.currentSlide = this.slide.eq(3);
            this.currentSlide.fadeIn(800, "swing");
            this.currentSlide.css("display", "block");
            this.i = 3;
        }
        else{
            this.i = 0;
        }
    },
    
    slideDiaporama : function(){ // Défilement automatique
    setTimeout(function(){      
        if(this.i < this.indexSlide){
            this.i++;
        }
        else{
            this.i = 0;
        }
        
        this.diaporama = $("#diaporama");
        this.slide = $(".slide");
        this.indexSlide = this.slide.length -1;
        this.currentSlide = this.slide.eq(this.i);
        this.slide.css("display", "none");
        this.currentSlide = this.slide.eq(this.i);
        this.currentSlide.fadeIn(800, "swing");
        this.currentSlide.css("display", "block");

        Diaporama.slideDiaporama();

        }, 10000);
    },
};

$(document).ready(function(){
    Diaporama.init(); // rappelle de la fonction
});




});
