import * as ActionTypes from '../actions';
// import { combineReducers } from 'redux';

const initialState = {
    yaml: '',
    loading: false,
    snackOpen: false,
    snackText: '',
    jobsList: [
        {
            name: 'Job 1',
            status: 'running',
        },
        {
            name: 'Job 2',
            status: 'failed',
        },
        {
            name: 'Job 3',
            status: 'finished',
        }
    ],
    modalOpen: false,
    currentId: null,
    currentName: '',
    currentLinks: ['First link', 'Second link'],
    parameters: [
        {
            name: "serviceAccount",
            value: "default",
            description: "The service account used to run the job",
        },
        {
            name: "controllerImage",
            value: "gcr.io/kubeflow-images-public/kubebench/kubebench-controller:3c75b50",
            description: "Configurator image",
        },
        {
            name: "githubTokenSecret",
            description: "",
            value: "GitHub token secret",
        },
        {
            name: "githubTokenSecretKey",
            value: "",
            description: "Key of GitHub token secret",
        },
        {
            name: "gcpCredentialsSecret",
            value: "GCP credentials secret",
            description: "",
        },
        {
            name: "gcpCredentialsSecretKey",
            value: "",
            description: "Key of GCP credentials secret",
        },
        {
            name: "mainJobKsPrototype",
            value: "kubebench-example-tfcnn",
            description: "The Ksonnet prototype of the job being benchmarked",
        },
        {
            name: "mainJobKsPackage",
            value: "kubebench-examples",
            description: "The Ksonnet package of the job being benchmarked",
        },
        {
            name: "mainJobKsRegistry",
            value: "github.com/kubeflow/kubebench/tree/master/kubebench",
            description: "The Ksonnet registry of the job being benchmarked",
        },
        {
            name: "mainJobConfig",
            value: "tf-cnn/tf-cnn-dummy.yaml",
            description: "Path to the config of the benchmarked job",
        },
        {
            name: "experimentConfigPvc",
            value: "kubebench-config-pvc",
            description: "Configuration PVC",
        },
        {
            name: "experimentDataPvc",
            value: "",
            description: "Data PVC",
        },
        {
            name: "experimentRecordPvc",
            value: "kubebench-exp-pvc",
            description: "Experiment PVC",
        },
        {
            name: "postJobImage",
            value: "gcr.io/kubeflow-images-public/kubebench/kubebench-example-tf-cnn-post-processor:3c75b50",
            description: "Image of post processor",
        },
        {
            name: "postJobArgs",
            value: "",
            description: "Arguments of post processor",
        },
        {
            name: "reportType",
            value: "csv",
            description: "Type of reporter",
        },
        {
            name: "csvReporterInput",
            value: "result.json",
            description: "The input of CSV reporter",
        },
        {
            name: "csvReporterOutput",
            value: "report.csv",
            description: "The output of CSV reporter",
        }
    ]
};

const filterValue = (obj, key) => {
    return obj.findIndex(p => p.name === key)
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_YAML:
            return {
                ...state,
                yaml: action.yaml,
            };
        case ActionTypes.DEPLOY_SUBMIT:
            return {
                ...state,
                loading: action.loading,
                // snackOpen: true,
                // snackText: 'Successfully deployed',
            };
        case ActionTypes.DEPLOY_PARAM_SUBMIT:
            return {
                ...state,
                loading: action.loading,
            };
        case ActionTypes.CLOSE_SNACK:
            return {
                ...state,
                snackOpen: false,
            };
        case ActionTypes.SELECT_JOB:
            return {
                ...state,
                modalOpen: true,
                currentId: action.id,
                currentName: state.jobsList[action.id].name,
            };
        case ActionTypes.CLOSE_SELECT_JOB:
            return {
                ...state,
                modalOpen: false,
                currentId: action.id,
            };
        case ActionTypes.CHANGE_PARAMETER:
            let params = state.parameters.slice();
            let index = filterValue(params, action.name);
            params[index].value = action.value;
            return {
                ...state,
                parameters: params,
            };
        default:
            return state;

    }
};

export default rootReducer;