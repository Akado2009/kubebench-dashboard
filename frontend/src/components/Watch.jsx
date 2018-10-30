import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ScheduleIcon from '@material-ui/icons/Schedule';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DoneIcon from '@material-ui/icons/Done';

import { openModal, closeModal, deleteJob } from "../actions";

import JobInfo from './JobInfo'

const styles = theme => ({
    root: {
        width: '90%',
        margin: '0 auto',
    },
    running: {
        color: '#8b8ffb',
    },
    failed: {
        color: '#f26363',
    },
    finished: {
        color: '#63f291',
    }
});


class Watch extends React.Component {
    componentDidMount() {

    }

    open = (id) => event => {
        this.props.openModal(id);
    }

    render () {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <h1>Watch</h1>
                <hr />
                <List component="nav">
                    {this.props.jobs.map((job, i) => {
                        let icon;
                        if (job.status === 'running') {
                            icon = (<ScheduleIcon className={classes.running}/>)
                        } else if (job.status === 'failed') {
                            icon = (<HighlightOffIcon className={classes.failed}/>)
                        } else {
                            icon = (<DoneIcon className={classes.finished}/>)
                        }
                        return (
                            <ListItem button key={i} onClick={this.open(i)}>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText inset primary={job.name} />
                            </ListItem>
                        );
                    })}
                </List>
                <JobInfo
                    close={this.props.closeModal}
                    open={this.props.modalOpen}
                    name={this.props.name}
                    delete={this.props.deleteJob}
                    links={this.props.links}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobsList,
        modalOpen: state.modalOpen,
        currentId: state.current,
        name: state.currentName,
        links: state.currentLinks,
    };
};

Watch.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, { openModal, closeModal, deleteJob })(withStyles(styles)(Watch));