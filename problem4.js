/**-----------Hire Bus and microbus for picnic ------------**/
// problem4

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
// const people = publicBusFare(365);
// console.log(people);
