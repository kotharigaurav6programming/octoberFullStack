// Example showing the concept of Prototype

function Vehicle(make,model,year){
    this.price = 1000000;
    this.color = "Black";
    this.display = function(){
        return `Car Details : \nMake : ${make}\nModel : ${model}\nYear : ${year} `
    }
}
Vehicle.prototype.show = function(){
    return `\nPrice : ${this.price}\nColor : ${this.color}`
}
const vehicle = new Vehicle("Honda","Amaze",2005);
console.log(vehicle.display());
console.log(vehicle.show());

