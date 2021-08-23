const  solder = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello");
    }
};

const john = Object.create(solder);
    

// john.__proto__ = solder;

Object.setPrototypeOf(john, solder);

john.sayHello();