import web3 from "web3";

const getJsonRpc = params => {
    const { data } = params

    let rpc = {
        jsonrpc: '2.0',
        id: 1,
        method: '',
        params:[]
    }

    let method = _getMethod(data.stateMutability)
    params.data = _encodeToABI(data)

    rpc.method = method
    rpc.params.push(params)
    rpc = JSON.stringify(rpc)
    return rpc
}

const _getMethod = stateMutability => stateMutability === 'view' ? 'eth_call' : 'eth_sendTransaction'

const _encodeToABI = data => {
    var abi = '0x' + data.signature

    data.inputs.forEach(input => {
        var arg = web3.utils.toTwosComplement(input.value)
        arg = arg.replace(/^0x/, '')
        abi = abi + arg
    })

    return abi
}

export default getJsonRpc