'use strict';

const phonebook = [{ name: 'Olya', phone: '+380502271406' },
  { name: 'Ira', phone: '+380502271407' },
  { name: 'Tanya', phone: '+380502271408' }];

const findPhoneByName = n => {
  for (const c of phonebook) {
    if (c.name === n) {
      return c.phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };
