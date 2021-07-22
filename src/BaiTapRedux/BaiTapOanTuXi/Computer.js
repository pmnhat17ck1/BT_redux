import React, { Component } from 'react'
import { connect } from 'react-redux'
class computer extends Component {
    render() {
        let keyFrame = `@keyframes randomItem${Date.now()}{
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: -0;}
        }`
        return (
            
            <div className="playerGame">
                <style>
                    {keyFrame}
                </style>
            <div className="theThink" style={{position:'relative'}}>
            <img style={{position:'absolute',left:'30%',animation:`randomItem${Date.now()} 0.5s`, transform: 'rotate(120deg)'}} className="mt-3" width={100} height={100} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}/>
            </div>
            <div className="speech-bubble"></div>
            <img style={{width:200,height:200}} src="./img/gameOanTuXi/playerComputer.png" alt="./img/gameOanTuXi/playerComputer.png"/>
          
        </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer
    }
}
export default connect(mapStateToProps)(computer)