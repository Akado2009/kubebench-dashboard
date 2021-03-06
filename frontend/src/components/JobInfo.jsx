import React from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";


const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    modal: {
        top: '40%',
        left: '40%',
    }
});


const JobInfo = (props) => {
    const { classes } = props;

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.open}
            onClose={props.close}
            className={classes.modal}
        >
            <div className={classes.paper}>
                <Typography variant="h6" id="modal-title">
                    { props.name }
                </Typography>
                <Typography variant="subtitle1" id="simple-modal-description">
                    <ul>
                    { props.links.map((link, i) => {
                        return (
                            <li key={i}><a href={`${link}`}>{link}</a></li>
                        )
                    })}
                    </ul>
                </Typography>
                <Button variant="contained" color={"primary"} className={classes.button} onClick={props.submitYaml}>
                    Delete
                </Button>
            </div>
        </Modal>
    );
};

JobInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobInfo);