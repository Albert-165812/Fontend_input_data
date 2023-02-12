import Axios from './Axios';
import $ from 'jquery';
const Save = (e) => {
    var lesson = $('#lesson').val()
    var list_item_lq = $('.item__LQ')
    var list_item_dv = $('.item__DV')
    var list_item_tv = $('.item__TV')[0].childNodes
    var item_td = $('.item_TD')[0]
    var val_Lamquen = []
    var val_Danhvan = []
    var val_Tapdoc = []
    var val_Timvan = []
    var content_lesson =[]
    for (const key in list_item_lq.toArray()) {
        var text_lq = list_item_lq[parseInt(key)].children[1].value
        var img_lq = list_item_lq[parseInt(key)].children[2].value
        val_Lamquen.push({
            "text": text_lq,
            "img": img_lq
        })
    }
    for (const key in list_item_dv.toArray()) {
        var text_dv = list_item_dv[parseInt(key)].children[1].value
        var img_dv = list_item_dv[parseInt(key)].children[2].value
        val_Danhvan.push({
            "text": text_dv,
            "img": img_dv
        })
    }
    // Tập đọc
    var text_title_td = item_td.childNodes[2].value
    var text_content_td = item_td.childNodes[3].value
    val_Tapdoc.push({
        "title": text_title_td,
        "content": text_content_td
    })

    var title_tv = list_item_tv[2].childNodes[0].childNodes
    var arr_title_tv = []
    var text_title_tv = ''
    var arr_content_tv = []
    for(var i = 0; i < title_tv.length-1; i++) {
        var a = title_tv[i].childNodes[0].childNodes[0].value
        var b = title_tv[i].childNodes[2].value 
        arr_title_tv.push(a+b)
    }
    // eslint-disable-next-line array-callback-return
    arr_title_tv.map((index)=>{
        text_title_tv = text_title_tv + index + ', '
    })
    var content_tv = list_item_tv[3].childNodes[0].childNodes
    for(let i = 0; i < content_tv.length; i++) {
        var c = content_tv[i].childNodes[1].childNodes[0].value
        var d = content_tv[i].childNodes[1].childNodes[1].value
        arr_content_tv.push({
            "content":c,
            "img":d
        })
    }    
    val_Timvan.push({
        "title":text_title_tv,
        "container": arr_content_tv
    })
    content_lesson.push({
        "title":lesson,
        val_Lamquen,
        val_Danhvan,
        val_Tapdoc,
        val_Timvan
    })
    if(lesson !== ""){
        console.log(lesson)
        Axios(content_lesson)
    }
}

export default Save