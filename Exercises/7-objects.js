'use strict';

const fn = () => {
  const firstObject = {
    name: 'Pasha'
  };
  let secondObject = {
    name: 'Sasha'
  };

  firstObject.name = 'Pavel';

  secondObject.name = 'Alexander';

  //firstObject = { state: 'Good' };

  secondObject = { state: 'Good' };

};

module.exports = { fn };
