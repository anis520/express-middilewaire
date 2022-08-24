
const ageCheck = (req, res) => {
    // get data
    const {name, email, age} = req.body

    if (age >=21 ) {
        res.status(200).send( `Hi ${ name }, Your Email Is ${email}. You are ${age} years old. You Can Marry Now   `);
    }else {
        res.status(400).send(` Hi ${ name }, Your Email Is ${email}. You are ${age} years old. You Can't Marry Now  ` );
    }
};

module.exports=ageCheck

