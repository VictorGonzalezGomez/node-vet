//file system
const fs = require('fs');
// funtion register
const register = (name, age, animal, color, illness) => {
    const appointment = {
        name: name,
        age: age,
        animalType: animal,
        color: color,
        illness: illness
    }
    const Registrations = JSON.parse(fs.readFileSync('appointments.json', 'utf8'));
    Registrations.push(appointment);
    fs.writeFileSync('appointments.json', JSON.stringify(Registrations));
}
// funtion read
const read = () => {
    const citas = fs.readFileSync('appointments.json', 'utf8');
    console.log(JSON.parse(citas));
}
// export of funtions
module.exports = { register, read};