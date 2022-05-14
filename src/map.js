function Map(){
    this.rows = 10;
    this.cols = 10;
    this.map = [
        ['#','#','#','#','#','#','#','#','#','#'],
        ['#','&','&','&','&','&','&','&','&','#'],
        ['#','&','&','&','&','&','&','&','&','#'],
        ['#','&','&','&','&','&','&','&','&','#'],
        ['#','&','&','&','&','&','&','&','&','#'],
        ['#','&','&','&','&','&','&','&','&','#'],
        ['#','&','&','&','&','&','&','&','&','#'],
        ['#','&','&','&','&','&','&','&','&','#'],
        ['#','&','&','&','&','&','&','&','&','#'],
        ['#','#','#','#','#','#','#','#','#','#']
    ];
    this.getElement = function(r, c){
        return this.map [r] [c];
    }
    this.setElement = function(r, c, e){
        this.map [r] [c] = e;
    }
    this.getRows = function(){
        return this.rows;
    }
    this.getColumns = function(){
        return this.cols;
    }
}