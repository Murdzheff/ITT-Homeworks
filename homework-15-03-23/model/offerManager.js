class Offer {
    constructor(interest,loanAmount,loanTerm) {
        this.interest = interest;
        this.loanAmount = loanAmount,
        this.loanTerm = loanTerm,
        this.monthlyPayment = (loanAmount / loanTerm) + ((interest /100) * loanAmount)/loanTerm
    }
}


class OfferManager {
    constructor() {
        
    }

    evaluate = (borrower,income,reqAmount,reqTerm) => {
        if (income <= 20000 && reqAmount <= income/2) {
            borrower.offers.push(new Offer(10,reqAmount,reqTerm))

        } else if (income <= 20000 && reqAmount >= income/2 && reqTerm < 24) {

            borrower.offers.push(new Offer(10,reqAmount,reqTerm))

        } else if (income > 20000 && income < 50000 && reqAmount <= income/2) {

            borrower.offers.push(new Offer(10,reqAmount,reqTerm))
            borrower.offers.push(new Offer(8,reqAmount,reqTerm))

        } else if (income > 20000 && income < 50000 && reqAmount >= income/2 && reqTerm < 24) {

            borrower.offers.push(new Offer(10,reqAmount,reqTerm))
            borrower.offers.push(new Offer(8,reqAmount,reqTerm))

        } else if (income > 50000 && reqAmount <= income/2) {

            borrower.offers.push(new Offer(6,reqAmount,reqTerm))
            borrower.offers.push(new Offer(8,reqAmount,reqTerm))
            borrower.offers.push(new Offer(10,reqAmount,reqTerm))

        } else if (income > 50000 && reqAmount >= income/2 && reqTerm < 24) {

            borrower.offers.push(new Offer(6,reqAmount,reqTerm))
            borrower.offers.push(new Offer(8,reqAmount,reqTerm))
            borrower.offers.push(new Offer(10,reqAmount,reqTerm))

        } else {
            return false;
        }

        localStorage.setItem("loggedIn",JSON.stringify(borrower));
        return true;
    }
}