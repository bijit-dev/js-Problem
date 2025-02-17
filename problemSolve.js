function calculateVAT(price) {
    if (typeof price !== "number" || price < 0) {
        return "Invalid";
    }
    const vat = price * 0.075
    return vat;
}

function validContact(contact) {    
    if (typeof contact !== "string") {
        return "Invalid";
    }
    for (let i in contact) {
        if (isNaN(contact[i]) || contact[i] === " " || contact.length !== 11 || contact.indexOf("01") !== 0) {
            return false;
        }
    }
    return true;
}

function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let result = 0;

    for (let i of marks) {
        if (isNaN(i)) {
            return false;
        }
        
        if (i >= 50) {
            result ++
        } else {
            result --
        }
    }

    if (result <= 0) {
        return false;
    }
    return true;
}

function validProposal(person1, person2) {  
    const name = typeof person1.name === "string" && typeof person2.name === "string";
    const age = typeof person1.age === "number" && typeof person2.age === "number";
    const gender = (person2.gender === "male" || person2.gender === "female") && (person1.gender === "male" || person1.gender === "female");
    
    if (typeof person1 !== "object" || typeof person2 !== "object" || !name || !age || !gender) {
        return "Invalid";
    }

    const ageDifference = Math.abs(person1.age - person2.age);
    
    if (person1.gender === person2.gender || ageDifference > 7) {
        return false;
    }
    return true;
}

function  calculateSleepTime( times ) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    let sum = 0;
    for (let sec of times) {
        if (isNaN(sec)) {
            return "Invalid";
        }
        sum += sec;
    }

    let time = {
        hour: 0,
        minute: 0,
        second: 0,
    }
    time.hour = Math.ceil(sum / 3600);
    return time;
}

console.log(calculateSleepTime([1000, 499, 519, 300]));
