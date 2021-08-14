$(function(){
    function Portfolio(image){
        this.image = image;
        var self = this;
        this.addFlipClass = function(){
            this.image.addClass('logo-flip');
        }
        this.removeFlipClass = function(){
            this.image.removeClass('logo-flip');
        }
        this.executeTheFlip = function(){
            this.image.on({
                'mouseenter':function(){self.addFlipClass();},
                'mouseleave':function(){self.removeFlipClass();}
            });
        }
    }
    var portfolio = new Portfolio($('#logo-container'));
    portfolio.executeTheFlip();

});
