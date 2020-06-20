import React from 'react';

class ScrollTop extends React.Component {
    render() {
        return (
            <div className="scrolltop" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <i className="fa fa-angle-up" />
            </div>
        );
    }
}

export default ScrollTop;