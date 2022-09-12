import React from 'react';
import messages from "./../../assets/Local/messages";
import { connect } from 'react-redux';

class Home extends React.Component {
    render(){
        // const { lang } = this.props;
        const message = messages
        return(
            <div className="container my-5">
                <p>{message.home.content}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
}

export default connect(mapStateToProps,null)(Home);