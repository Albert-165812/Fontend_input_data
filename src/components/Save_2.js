import React from 'react'
import $ from "jquery"
import Axios from './Axios'
const Save_2 = (e) => {
    let chuong = $("#chuong").val()
    let baihoc = $("#lesson").val()
    let checkBox_LQ = $("#checkBox_LQ").is(":checked")
    let checkBox_OT = $("#checkBox_OT").is(":checked")
    let checkBox_KC = $("#checkBox_KC").is(":checked")
    let checkBox_DV = $("#checkBox_DV").is(":checked")
    var list_item_lq = $('.item__LQ')
    var list_item_dv = $('.item__DV')
    var item_kc = $('.item_TD')[0]
    var list_item_ot = $('.item__TV')[0]
    let data_lesson = []
    let data_send = {}
    var val_Lamquen = []
    var val_Danhvan = []
    var val_Kechuyen = []
    var val_Ontap = []
    // console.log(chuong,baihoc,checkBox_LQ,checkBox_OT,checkBox_KC,checkBox_DV)
    for (const key in list_item_lq.toArray()) {
        var text_lq = list_item_lq[parseInt(key)].children[1].value
        var img_lq = list_item_lq[parseInt(key)].children[2].value
        val_Lamquen.push({
            "text": text_lq,
            "img": img_lq
        })
    }
    // console.log(val_Lamquen)
    for (const key in list_item_dv.toArray()) {
        var text_dv = list_item_dv[parseInt(key)].children[1].value
        var text_cach_dv = list_item_dv[parseInt(key)].children[2].value
        var img_dv = list_item_dv[parseInt(key)].children[3].value
        val_Danhvan.push({
            "text": text_dv,
            "text_cach_danhvan": text_cach_dv,
            "img": img_dv
        })
    }
    // console.log(val_Danhvan)
    var arr_sub_kc = []
    let ten_kc = item_kc.childNodes[2].value
    for(var i = 0; i <item_kc.childNodes[3].childNodes.length;i++){
        // console.log(item_kc.childNodes[3].childNodes[i])
        var text_kc = item_kc.childNodes[3].childNodes[i].childNodes[0].value
        var img_kc = item_kc.childNodes[3].childNodes[i].childNodes[1].value
        arr_sub_kc.push({
            "text": text_kc,
            "img": img_kc
        })
    }
    val_Kechuyen.push({
        "title": ten_kc,
        "content":arr_sub_kc
    })
    // console.log(val_Kechuyen)
    for (let i = 0; i <list_item_ot.childNodes[2].childNodes[0].childNodes.length;i++){
        let img = list_item_ot.childNodes[2].childNodes[0].childNodes[i].childNodes[1].childNodes[0].value
        let text_bh = list_item_ot.childNodes[2].childNodes[0].childNodes[i].childNodes[1].childNodes[1].value
        let text = list_item_ot.childNodes[2].childNodes[0].childNodes[i].childNodes[1].childNodes[2].value
        val_Ontap.push({
            "ten_bai_hoc":text_bh,
            "img": img,
            "chu_cua_hinh":text
        })
    }
    if(checkBox_LQ) data_lesson.push(val_Lamquen)
    if(checkBox_DV) data_lesson.push(val_Danhvan)
    if(checkBox_KC) data_lesson.push(val_Kechuyen) 
    if(checkBox_OT) data_lesson.push(val_Ontap)
    data_send = {
        "chuong": chuong,
        "baihoc": baihoc,
        data_lesson
    }
    console.log(data_send)
    if(baihoc !== "" && chuong !== "") {
        Axios(data_send)
    }
}

export default Save_2