import React from 'react';
import { connect } from 'react-redux';
import Report from '../pages/Report';


const ReportContainer = props => <Report {...props}/>

const mapStateToProps = state =>({
    createRequestSuccess: state.reportReducer.createRequestSuccess
})

export default connect(
    mapStateToProps,
    null
)(ReportContainer)