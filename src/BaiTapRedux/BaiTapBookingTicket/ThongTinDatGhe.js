import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
    render() {
        return (
            <>
            <div className="mt-5" >
                <button className="gheDuocChon"></button> <span className="text-light" style={{fontSize:25}}>Ghế đã đặt</span>
                <br />
                <button className="gheDangChon"></button> <span className="text-light" style={{fontSize:25}}>Ghế đang đặt</span>
                <br />
                <button className="ghe"></button><span className="text-light" style={{fontSize:25}}>Ghế chưa đặt</span>
            </div>
            <table className="table">
                <thead>
                    <tr className="text-light" style={{fontSize:30}}>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th></th>
                    </tr>
                </tbody>
            </table>
            </>
        )
    }
}
