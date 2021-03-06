export const CHANGE_YAML = "CHANGE_YAML";

export const CLOSE_SNACK = "CLOSE_SNACK";

export const SELECT_JOB = "SELECT_JOB";
export const CLOSE_SELECT_JOB = "CLOSE_SELECT_JOB";

export const DEPLOY_SUBMIT = "DEPLOY_SUBMIT";
export const DEPLOY_SUCCESS = "DEPLOY_SUCCESS";
export const DEPLOY_FAILURE = "DEPLOY_FAILURE";

export const DEPLOY_PARAM_SUBMIT = "DEPLOY_PARAM_SUBMIT";
export const DEPLOY_PARAM_SUCCESS = "DEPLOY_PARAM_SUCCESS";
export const DEPLOY_PARAM_FAILURE = "DEPLOY_PARAM_FAILURE";

export const DELETE_SUBMIT = "DELETE SUBMIT";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const CHANGE_PARAMETER = "CHANGE_PARAMETER";


export const changeYaml = (yaml) => {
    return {
        type: CHANGE_YAML,
        yaml: yaml,
    };
};

export const changeParameters = (name, value) => {
    return {
        type: CHANGE_PARAMETER,
        name,
        value,
    };
};

export const submitWholeYaml = () => {
    return {
        type: DEPLOY_SUBMIT,
        loading: true,
    };
};

export const submitYamlParameters = () => {
    return {
        type: DEPLOY_PARAM_SUBMIT,
        loading: true,
    };
};

export const closeSnack =() => {
    return {
        type: CLOSE_SNACK,
    };
};

export const openModal = (id) => {
    return {
        type: SELECT_JOB,
        id,
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_SELECT_JOB,
    };
};

export const deleteJob = (id) => {
    return {
        type: DELETE_SUBMIT,
        id,
    };
};

