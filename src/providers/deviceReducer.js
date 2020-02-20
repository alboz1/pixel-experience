export default (devices, action) => {
    switch (action.type) {
        case 'GET_DEVICES':
            return action.payload
        default:
            return devices
    }
}