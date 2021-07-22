const stateDefault = {
    mangDatCuoc: [
        {ma:'keo', hinhAnh: './img/gameOanTuXi/keo.png', datCuoc: false},
        {ma:'bua', hinhAnh: './img/gameOanTuXi/bua.png', datCuoc: true},
        {ma:'bao', hinhAnh: './img/gameOanTuXi/bao.png', datCuoc: false},
    ],
    ketQua: "I'm iron man, i love you 3000!!!!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma:'keo', hinhAnh: './img/gameOanTuXi/keo.png'}
}
const BaiTapOanTuXiReducer = (state=stateDefault,action) => {
    switch(action.type) {
        case 'CHON_KEO_BUA_BAO' : {
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate= mangCuocUpdate.map((item,index)=>{
                if(item.ma ===action.maCuoc){
                    return {...item, datCuoc:true}
                }
                return {...item ,datCuoc:false}
            })
           state.mangDatCuoc = mangCuocUpdate;
           return {...state}
        }
        case 'RAN_DOM' : {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]
            
            state.computer = quanCuocNgauNhien
            
           return {...state}
        }
        case 'END_GAME' : {
            let player = state.mangDatCuoc.find(item=> item.datCuoc === true);
            let computer = state.computer;
            switch(player.ma) {
                case 'keo':
                    if(computer.ma==='keo'){
                        state.ketQua="hoà nhau !!!";
                    }else if(computer.ma ==='bua'){
                        state.ketQua="Thua !!!";
                    } else {
                        state.soBanThang +=1;
                        state.ketQua="I'm iron man, i love you 3000!!!";
                    };break;
                case 'bua': 
                    if(computer.ma==='keo'){
                        state.soBanThang +=1;
                        state.ketQua="I'm iron man, i love you 3000!!!";
                    }else if(computer.ma ==='keo'){
                        state.ketQua="hoà nhau !!!";
                    } else {
                        state.ketQua="Thua !!!";
                    };break;
                case 'bao': 
                    if(computer.ma==='keo'){
                        state.ketQua="Thua !!!";
                    }else if(computer.ma ==='keo'){
                        state.soBanThang +=1;
                        state.ketQua="I'm iron man, i love you 3000!!!";
                    } else {
                        state.ketQua="hoà nhau !!!";
                    };break;
                default: 
                state.soBanThang +=1;
                state.ketQua="I'm iron man, i love you 3000!!!";
                return {...state}
            }
           state.soBanChoi +=1 ;
           return {...state}
        }
        default: return {...state};
    }
}
export default BaiTapOanTuXiReducer