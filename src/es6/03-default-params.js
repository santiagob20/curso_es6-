function newUser(name, age, country) {
  var name = name || 'Santiago';
  var age = age || 27;
  var country = country || 'COL';
  console.log(name, age, country);
}

newUser();
newUser('David', 19, 'MX');

function newAdmin(name = 'Cesar', age = 45, country = 'VE') {
  console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 15, 'CH');
