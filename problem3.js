/******--------calculate the total oil price that i have to pay---------****/
// problem-3

function oilPrice(dieselQuantity, petrolQuantity, octanQuantity) {


    if (typeof dieselQuantity == 'number' && typeof petrolQuantity == 'number' && typeof octanQuantity == 'number') {

        const perDieselPrice = 114;
        const perPetrolPrice = 130;
        const perOctanPrice = 135;

        const totalDieselBuy = dieselQuantity * perDieselPrice;
        const totalPetrolBuy = petrolQuantity * perPetrolPrice;
        const totalOctanBuy = octanQuantity * perOctanPrice;

        const totalFuelCost = totalDieselBuy + totalPetrolBuy + totalOctanBuy;

        return totalFuelCost;

    }
    else {
        return 'pls enter a number'
    }


}

// const price = oilPrice(0, true, 3);
// console.log(price);
