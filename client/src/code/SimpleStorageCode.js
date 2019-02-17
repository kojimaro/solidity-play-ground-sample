const SimpleStorageCode =[ 
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
    '',
    '   function get() public view returns (uint, uint) {',
    '      return (storedData, storedData02);',
    '   }',
    '}'
].join('\n');

export default SimpleStorageCode;