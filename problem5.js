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
// const fnd1 = { name: 'AMINUL', friend: 'SHAWON' };
// const fnd2 = { name: 'shawon', friend: 'aminul' };
// const isBest = isBestFriend(fnd1, fnd2);
// console.log(isBest);

