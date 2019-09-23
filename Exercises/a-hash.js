'use strict';

const phonebook = {
  'Olya': '+380502271406',
  'Ira': '+380502271407',
  'Tanya': '+380502271408'
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
