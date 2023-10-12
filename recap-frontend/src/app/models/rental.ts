export interface Rental{
    rentalId : number;
    carId: number;
    customerId: number;
    customerName : string;
    brandName : string;
    carName : string;
    rentDate:Date;
    returnDate : Date;
}