/**-----convert radian to degree------**/

/**-------assignment problem-1-----**/

function radianToDegree(radian) {

    if (typeof radian == 'number') {

        const convertRadToDeg = radian * 57.2958;
        const applyTwoDecimal = convertRadToDeg.toFixed(2);
        const parseNumber = parseFloat(applyTwoDecimal);
        console.log(parseNumber);
        return parseNumber;

    }
    else {
        return 'please, enter a number';
    }

}
radianToDegree(55);



/**---------check whether the given file name is a javascript file or not------------**/

/**assignment-problem-2**/

function isJavaScriptFile(fileExtension) {

    if (typeof fileExtension === 'string') {

        const selectFileExtension = fileExtension.toLowerCase();

        if (selectFileExtension.endsWith('.js')) {

            return true;
        }

        return false;

    }
    else {
        return 'pls, enter a string';
    }
}





/**----------calculate the total oil price that i have to pay-----------**/

/**assignment-problem-3**/

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
        return 'pls, enter a number'
    }

}




/**----------Hire Bus and microbus for picnic-----------**/

/**assignment-problem-4**/



function publicBusFare(peopleQuantity) {

    if (typeof peopleQuantity == 'number') {

        const reserveBus = 50;
        const reserveMicroBus = 11;
        const perManFare = 250;

        if (peopleQuantity % reserveBus == 0) {

            const willGoByBus = peopleQuantity % reserveBus;
            const payPublicBusCost = willGoByBus * perManFare;
            return payPublicBusCost;
        }
        else if (peopleQuantity < reserveBus && peopleQuantity >= 11) {

            const remindOfMicro = peopleQuantity % reserveMicroBus;
            const payPublicBusCost = remindOfMicro * perManFare;
            return payPublicBusCost;
        }
        else if (peopleQuantity < 11) {

            const payPublicBusCost = peopleQuantity * perManFare;
            return payPublicBusCost;
        }
        else if (peopleQuantity > reserveBus) {

            const remindOfBus = peopleQuantity % reserveBus;
            const remindOfMicroBus = remindOfBus % reserveMicroBus;
            const payPublicBusCost = remindOfMicroBus * perManFare;
            return payPublicBusCost;
        }
    }
    else {
        return 'please, given a valid Input';
    }

}





/**----------hurry, we are best friend-----------**/

/**assignment-problem-5**/

function isBestFriend(myFriends, himFriends) {

    if (typeof myFriends === 'object' && typeof himFriends === 'object') {

        const myBestfriend = myFriends;
        const himBestfriend = himFriends;

        if (myBestfriend.name.toLowerCase() == himBestfriend.friend.toLowerCase() && himBestfriend.name.toLowerCase() == myBestfriend.friend.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'please, given a valid Input';
    }

}



