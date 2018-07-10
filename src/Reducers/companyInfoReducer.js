const companyInfo = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case 'saveInfo':
            return { companyInformation: action.data };
        case 'getInfo':
            return state;
        default:
            return state;
    }
}
export default companyInfo;
