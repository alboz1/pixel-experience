export default (packageInfo, action) => {
    switch (action.type) {
        case 'OPEN_PACKAGE':
            return {
                ...packageInfo,
                opened: true,
                name: action.name,
                version: action.version
            }
        case 'CLOSE_PACKAGE':
            return {
                opened: false,
                name: '',
                version: ''
            }
        default:
            return packageInfo
    }
}