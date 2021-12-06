function construction(obj) {
    if (obj.dizziness) {
        obj.levelOfHydrated += obj.weight * 0.1 * obj.experience;
        obj.dizziness = false;
    }

    return obj;
}

console.log(
    construction({
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true,
    })
);
