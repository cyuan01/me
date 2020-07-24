import React from "react";
import '../App.css';

class IdCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
      

    render() {
        return (
            <div 
                style={{
                    display: 'flex',
                    width: this.state.width * 0.3, 
                    height: this.state.width * 0.3 / 1.83,
                    backgroundColor: '#f0f0f0',
                    margin: 15,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <div style={{display: 'flex', width: '95%', height: '90%', justifyContent: 'center', flexDirection: 'coloumn'}}>
                    <div style={{display: 'flex', alignSelf: 'center'}}>
                        <p className="creditNumber">01101000 01101001 00100001</p>
                    </div>
                </div>
                {/* <div style = {{ display: 'flex', alignSelf: 'center', backgroundColor: 'red'}}>
                    <p className="creditNumber">01101000 01101001 00100001</p>
                </div> */}
            </div>
        )
    }
}

export default IdCard