var Calculator = function(){
    
    this.add = function(x,y){
        return x+y
    }

    this.sub = function(x,y){
        return x-y
    }

    this.divide = function(x,y){
       return x/y
    }

    this.multiply = function(x,y){
        return x*y
    }
}

module.exports = Calculator
