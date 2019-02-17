const Input =[ 
    'pragma solidity ^0.5.0;',
    '',
    'contract SimpleStorage {',
    '',
    '   uint storedData;',
    '   uint storedData02;',
    '',
    '   function set(uint x, uint y) public {',
    '      storedData = x;',
    '      storedData02 = y;',
    '   }',
    '}'
].join('\n');

export default Input;