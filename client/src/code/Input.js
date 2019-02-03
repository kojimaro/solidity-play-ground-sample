const Input =[ 
    'pragma solidity ^0.5.0;',
    '',
    'contract SimpleStorage {',
    '',
    '   uint storedData;',
    '',
    '   function set(uint x) public {',
    '      storedData = x;',
    '   }',
    '',
    '}'
].join('\n');

export default Input;