import { AbiCoder } from "web3-eth-abi";

const abiCoder = new AbiCoder()

const decodePrameters = (outputs, hex) => abiCoder.decodeParameters(outputs, hex)

export default decodePrameters