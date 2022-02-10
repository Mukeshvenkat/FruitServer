export class Fruit {
    public name: string;
    public category: string;
    public quantity: number;
    public price: number;
    
    constructor(category: string, quantity: number, price: number){
        this.category = category;
        this.quantity = quantity;
        this.price = price;
    }
}