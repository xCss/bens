﻿
(function(){

//province
    var provincelocation = [
        {
            "id": 4521984,
            "areaName": "北京市"
        },
        {
            "id": 4522003,
            "areaName": "天津市"
        },
        {
            "id": 4522022,
            "areaName": "河北省"
        },
        {
            "id": 4522217,
            "areaName": "山西省"
        },
        {
            "id": 4522359,
            "areaName": "内蒙古自治区"
        },
        {
            "id": 4522482,
            "areaName": "辽宁省"
        },
        {
            "id": 4522611,
            "areaName": "吉林省"
        },
        {
            "id": 4522689,
            "areaName": "黑龙江省"
        },
        {
            "id": 4522847,
            "areaName": "上海市"
        },
        {
            "id": 4522868,
            "areaName": "江苏省"
        },
        {
            "id": 4523000,
            "areaName": "浙江省"
        },
        {
            "id": 4523113,
            "areaName": "安徽省"
        },
        {
            "id": 4523253,
            "areaName": "福建省"
        },
        {
            "id": 4523357,
            "areaName": "江西省"
        },
        {
            "id": 4523480,
            "areaName": "山东省"
        },
        {
            "id": 4523655,
            "areaName": "河南省"
        },
        {
            "id": 4523850,
            "areaName": "湖北省"
        },
        {
            "id": 4523980,
            "areaName": "湖南省"
        },
        {
            "id": 4524130,
            "areaName": "广东省"
        },
        {
            "id": 4524292,
            "areaName": "广西壮族自治区"
        },
        {
            "id": 4524431,
            "areaName": "海南省"
        },
        {
            "id": 4524460,
            "areaName": "重庆市"
        },
        {
            "id": 4524503,
            "areaName": "四川省"
        },
        {
            "id": 4524724,
            "areaName": "贵州省"
        },
        {
            "id": 4524825,
            "areaName": "云南省"
        },
        {
            "id": 4524979,
            "areaName": "西藏自治区"
        },
        {
            "id": 4525061,
            "areaName": "陕西省"
        },
        {
            "id": 4525189,
            "areaName": "甘肃省"
        },
        {
            "id": 4525302,
            "areaName": "青海省"
        },
        {
            "id": 4525355,
            "areaName": "宁夏回族自治区"
        },
        {
            "id": 4525388,
            "areaName": "新疆维吾尔自治区"
        }
    ];


//city

    var citySectionJson ={
        "4521984": [
            {
                "id": 4521985,
                "areaName": "北京市"
            }
        ],
        "4522003": [
            {
                "id": 4522004,
                "areaName": "天津市"
            }
        ],
        "4522022": [
            {
                "id": 4522023,
                "areaName": "石家庄市"
            },
            {
                "id": 4522048,
                "areaName": "唐山市"
            },
            {
                "id": 4522064,
                "areaName": "秦皇岛市"
            },
            {
                "id": 4522073,
                "areaName": "邯郸市"
            },
            {
                "id": 4522094,
                "areaName": "邢台市"
            },
            {
                "id": 4522115,
                "areaName": "保定市"
            },
            {
                "id": 4522142,
                "areaName": "张家口市"
            },
            {
                "id": 4522161,
                "areaName": "承德市"
            },
            {
                "id": 4522174,
                "areaName": "沧州市"
            },
            {
                "id": 4522192,
                "areaName": "廊坊市"
            },
            {
                "id": 4522204,
                "areaName": "衡水市"
            }
        ],
        "4522217": [
            {
                "id": 4522218,
                "areaName": "太原市"
            },
            {
                "id": 4522230,
                "areaName": "大同市"
            },
            {
                "id": 4522243,
                "areaName": "阳泉市"
            },
            {
                "id": 4522250,
                "areaName": "长治市"
            },
            {
                "id": 4522265,
                "areaName": "晋城市"
            },
            {
                "id": 4522273,
                "areaName": "朔州市"
            },
            {
                "id": 4522281,
                "areaName": "晋中市"
            },
            {
                "id": 4522294,
                "areaName": "运城市"
            },
            {
                "id": 4522309,
                "areaName": "忻州市"
            },
            {
                "id": 4522325,
                "areaName": "临汾市"
            },
            {
                "id": 4522344,
                "areaName": "吕梁市"
            }
        ],
        "4522359": [
            {
                "id": 4522360,
                "areaName": "呼和浩特市"
            },
            {
                "id": 4522371,
                "areaName": "包头市"
            },
            {
                "id": 4522382,
                "areaName": "乌海市"
            },
            {
                "id": 4522387,
                "areaName": "赤峰市"
            },
            {
                "id": 4522401,
                "areaName": "通辽市"
            },
            {
                "id": 4522411,
                "areaName": "鄂尔多斯市"
            },
            {
                "id": 4522421,
                "areaName": "呼伦贝尔市"
            },
            {
                "id": 4522436,
                "areaName": "巴彦淖尔市"
            },
            {
                "id": 4522445,
                "areaName": "乌兰察布市"
            },
            {
                "id": 4522458,
                "areaName": "兴安盟"
            },
            {
                "id": 4522465,
                "areaName": "锡林郭勒盟"
            },
            {
                "id": 4522478,
                "areaName": "阿拉善盟"
            }
        ],
        "4522482": [
            {
                "id": 4522483,
                "areaName": "沈阳市"
            },
            {
                "id": 4522498,
                "areaName": "大连市"
            },
            {
                "id": 4522510,
                "areaName": "鞍山市"
            },
            {
                "id": 4522519,
                "areaName": "抚顺市"
            },
            {
                "id": 4522528,
                "areaName": "本溪市"
            },
            {
                "id": 4522536,
                "areaName": "丹东市"
            },
            {
                "id": 4522544,
                "areaName": "锦州市"
            },
            {
                "id": 4522553,
                "areaName": "营口市"
            },
            {
                "id": 4522561,
                "areaName": "阜新市"
            },
            {
                "id": 4522570,
                "areaName": "辽阳市"
            },
            {
                "id": 4522579,
                "areaName": "盘锦市"
            },
            {
                "id": 4522585,
                "areaName": "铁岭市"
            },
            {
                "id": 4522594,
                "areaName": "朝阳市"
            },
            {
                "id": 4522603,
                "areaName": "葫芦岛市"
            }
        ],
        "4522611": [
            {
                "id": 4522612,
                "areaName": "长春市"
            },
            {
                "id": 4522624,
                "areaName": "吉林市"
            },
            {
                "id": 4522635,
                "areaName": "四平市"
            },
            {
                "id": 4522643,
                "areaName": "辽源市"
            },
            {
                "id": 4522649,
                "areaName": "通化市"
            },
            {
                "id": 4522658,
                "areaName": "白山市"
            },
            {
                "id": 4522666,
                "areaName": "松原市"
            },
            {
                "id": 4522673,
                "areaName": "白城市"
            },
            {
                "id": 4522680,
                "areaName": "延边朝鲜族自治州"
            }
        ],
        "4522689": [
            {
                "id": 4522690,
                "areaName": "哈尔滨市"
            },
            {
                "id": 4522710,
                "areaName": "齐齐哈尔市"
            },
            {
                "id": 4522728,
                "areaName": "鸡西市"
            },
            {
                "id": 4522739,
                "areaName": "鹤岗市"
            },
            {
                "id": 4522749,
                "areaName": "双鸭山市"
            },
            {
                "id": 4522759,
                "areaName": "大庆市"
            },
            {
                "id": 4522770,
                "areaName": "伊春市"
            },
            {
                "id": 4522789,
                "areaName": "佳木斯市"
            },
            {
                "id": 4522801,
                "areaName": "七台河市"
            },
            {
                "id": 4522807,
                "areaName": "牡丹江市"
            },
            {
                "id": 4522819,
                "areaName": "黑河市"
            },
            {
                "id": 4522827,
                "areaName": "绥化市"
            },
            {
                "id": 4522839,
                "areaName": "大兴安岭地区"
            }
        ],
        "4522847": [
            {
                "id": 4522848,
                "areaName": "上海市"
            }
        ],
        "4522868": [
            {
                "id": 4522869,
                "areaName": "南京市"
            },
            {
                "id": 4522884,
                "areaName": "无锡市"
            },
            {
                "id": 4522894,
                "areaName": "徐州市"
            },
            {
                "id": 4522906,
                "areaName": "常州市"
            },
            {
                "id": 4522915,
                "areaName": "苏州市"
            },
            {
                "id": 4522928,
                "areaName": "南通市"
            },
            {
                "id": 4522938,
                "areaName": "连云港市"
            },
            {
                "id": 4522947,
                "areaName": "淮安市"
            },
            {
                "id": 4522957,
                "areaName": "盐城市"
            },
            {
                "id": 4522968,
                "areaName": "扬州市"
            },
            {
                "id": 4522977,
                "areaName": "镇江市"
            },
            {
                "id": 4522985,
                "areaName": "泰州市"
            },
            {
                "id": 4522993,
                "areaName": "宿迁市"
            }
        ],
        "4523000": [
            {
                "id": 4523001,
                "areaName": "杭州市"
            },
            {
                "id": 4523016,
                "areaName": "宁波市"
            },
            {
                "id": 4523029,
                "areaName": "温州市"
            },
            {
                "id": 4523042,
                "areaName": "嘉兴市"
            },
            {
                "id": 4523051,
                "areaName": "湖州市"
            },
            {
                "id": 4523058,
                "areaName": "绍兴市"
            },
            {
                "id": 4523066,
                "areaName": "金华市"
            },
            {
                "id": 4523077,
                "areaName": "衢州市"
            },
            {
                "id": 4523085,
                "areaName": "舟山市"
            },
            {
                "id": 4523091,
                "areaName": "台州市"
            },
            {
                "id": 4523102,
                "areaName": "丽水市"
            }
        ],
        "4523113": [
            {
                "id": 4523114,
                "areaName": "合肥市"
            },
            {
                "id": 4523123,
                "areaName": "芜湖市"
            },
            {
                "id": 4523132,
                "areaName": "蚌埠市"
            },
            {
                "id": 4523141,
                "areaName": "淮南市"
            },
            {
                "id": 4523149,
                "areaName": "马鞍山市"
            },
            {
                "id": 4523155,
                "areaName": "淮北市"
            },
            {
                "id": 4523161,
                "areaName": "铜陵市"
            },
            {
                "id": 4523167,
                "areaName": "安庆市"
            },
            {
                "id": 4523180,
                "areaName": "黄山市"
            },
            {
                "id": 4523189,
                "areaName": "滁州市"
            },
            {
                "id": 4523199,
                "areaName": "阜阳市"
            },
            {
                "id": 4523209,
                "areaName": "宿州市"
            },
            {
                "id": 4523216,
                "areaName": "巢湖市"
            },
            {
                "id": 4523223,
                "areaName": "六安市"
            },
            {
                "id": 4523232,
                "areaName": "亳州市"
            },
            {
                "id": 4523238,
                "areaName": "池州市"
            },
            {
                "id": 4523244,
                "areaName": "宣城市"
            }
        ],
        "4523253": [
            {
                "id": 4523254,
                "areaName": "福州市"
            },
            {
                "id": 4523269,
                "areaName": "厦门市"
            },
            {
                "id": 4523277,
                "areaName": "莆田市"
            },
            {
                "id": 4523284,
                "areaName": "三明市"
            },
            {
                "id": 4523298,
                "areaName": "泉州市"
            },
            {
                "id": 4523312,
                "areaName": "漳州市"
            },
            {
                "id": 4523325,
                "areaName": "南平市"
            },
            {
                "id": 4523337,
                "areaName": "龙岩市"
            },
            {
                "id": 4523346,
                "areaName": "宁德市"
            }
        ],
        "4523357": [
            {
                "id": 4523358,
                "areaName": "南昌市"
            },
            {
                "id": 4523369,
                "areaName": "景德镇市"
            },
            {
                "id": 4523375,
                "areaName": "萍乡市"
            },
            {
                "id": 4523382,
                "areaName": "九江市"
            },
            {
                "id": 4523397,
                "areaName": "新余市"
            },
            {
                "id": 4523401,
                "areaName": "鹰潭市"
            },
            {
                "id": 4523406,
                "areaName": "赣州市"
            },
            {
                "id": 4523426,
                "areaName": "吉安市"
            },
            {
                "id": 4523441,
                "areaName": "宜春市"
            },
            {
                "id": 4523453,
                "areaName": "抚州市"
            },
            {
                "id": 4523466,
                "areaName": "上饶市"
            }
        ],
        "4523480": [
            {
                "id": 4523481,
                "areaName": "济南市"
            },
            {
                "id": 4523493,
                "areaName": "青岛市"
            },
            {
                "id": 4523507,
                "areaName": "淄博市"
            },
            {
                "id": 4523517,
                "areaName": "枣庄市"
            },
            {
                "id": 4523525,
                "areaName": "东营市"
            },
            {
                "id": 4523532,
                "areaName": "烟台市"
            },
            {
                "id": 4523546,
                "areaName": "潍坊市"
            },
            {
                "id": 4523560,
                "areaName": "济宁市"
            },
            {
                "id": 4523574,
                "areaName": "泰安市"
            },
            {
                "id": 4523582,
                "areaName": "威海市"
            },
            {
                "id": 4523588,
                "areaName": "日照市"
            },
            {
                "id": 4523594,
                "areaName": "莱芜市"
            },
            {
                "id": 4523598,
                "areaName": "临沂市"
            },
            {
                "id": 4523612,
                "areaName": "德州市"
            },
            {
                "id": 4523625,
                "areaName": "聊城市"
            },
            {
                "id": 4523635,
                "areaName": "滨州市"
            },
            {
                "id": 4523644,
                "areaName": "菏泽市"
            }
        ],
        "4523655": [
            {
                "id": 4523656,
                "areaName": "郑州市"
            },
            {
                "id": 4523670,
                "areaName": "开封市"
            },
            {
                "id": 4523682,
                "areaName": "洛阳市"
            },
            {
                "id": 4523699,
                "areaName": "平顶山市"
            },
            {
                "id": 4523711,
                "areaName": "安阳市"
            },
            {
                "id": 4523722,
                "areaName": "鹤壁市"
            },
            {
                "id": 4523729,
                "areaName": "新乡市"
            },
            {
                "id": 4523743,
                "areaName": "焦作市"
            },
            {
                "id": 4523755,
                "areaName": "濮阳市"
            },
            {
                "id": 4523763,
                "areaName": "许昌市"
            },
            {
                "id": 4523771,
                "areaName": "漯河市"
            },
            {
                "id": 4523778,
                "areaName": "三门峡市"
            },
            {
                "id": 4523786,
                "areaName": "南阳市"
            },
            {
                "id": 4523801,
                "areaName": "商丘市"
            },
            {
                "id": 4523812,
                "areaName": "信阳市"
            },
            {
                "id": 4523824,
                "areaName": "周口市"
            },
            {
                "id": 4523836,
                "areaName": "驻马店市"
            },
            {
                "id": 4523848,
                "areaName": "省直辖县级行政区划"
            }
        ],
        "4523850": [
            {
                "id": 4523851,
                "areaName": "武汉市"
            },
            {
                "id": 4523866,
                "areaName": "黄石市"
            },
            {
                "id": 4523874,
                "areaName": "十堰市"
            },
            {
                "id": 4523884,
                "areaName": "宜昌市"
            },
            {
                "id": 4523899,
                "areaName": "襄樊市"
            },
            {
                "id": 4523910,
                "areaName": "鄂州市"
            },
            {
                "id": 4523915,
                "areaName": "荆门市"
            },
            {
                "id": 4523922,
                "areaName": "孝感市"
            },
            {
                "id": 4523931,
                "areaName": "荆州市"
            },
            {
                "id": 4523941,
                "areaName": "黄冈市"
            },
            {
                "id": 4523953,
                "areaName": "咸宁市"
            },
            {
                "id": 4523961,
                "areaName": "随州市"
            },
            {
                "id": 4523966,
                "areaName": "恩施土家族苗族自治州"
            },
            {
                "id": 4523975,
                "areaName": "省直辖县级行政区划"
            }
        ],
        "4523980": [
            {
                "id": 4523981,
                "areaName": "长沙市"
            },
            {
                "id": 4523992,
                "areaName": "株洲市"
            },
            {
                "id": 4524003,
                "areaName": "湘潭市"
            },
            {
                "id": 4524010,
                "areaName": "衡阳市"
            },
            {
                "id": 4524024,
                "areaName": "邵阳市"
            },
            {
                "id": 4524038,
                "areaName": "岳阳市"
            },
            {
                "id": 4524049,
                "areaName": "常德市"
            },
            {
                "id": 4524060,
                "areaName": "张家界市"
            },
            {
                "id": 4524066,
                "areaName": "益阳市"
            },
            {
                "id": 4524074,
                "areaName": "郴州市"
            },
            {
                "id": 4524087,
                "areaName": "永州市"
            },
            {
                "id": 4524100,
                "areaName": "怀化市"
            },
            {
                "id": 4524114,
                "areaName": "娄底市"
            },
            {
                "id": 4524121,
                "areaName": "湘西土家族苗族自治州"
            }
        ],
        "4524130": [
            {
                "id": 4524131,
                "areaName": "广州市"
            },
            {
                "id": 4524145,
                "areaName": "韶关市"
            },
            {
                "id": 4524157,
                "areaName": "深圳市"
            },
            {
                "id": 4524165,
                "areaName": "珠海市"
            },
            {
                "id": 4524170,
                "areaName": "汕头市"
            },
            {
                "id": 4524179,
                "areaName": "佛山市"
            },
            {
                "id": 4524186,
                "areaName": "江门市"
            },
            {
                "id": 4524195,
                "areaName": "湛江市"
            },
            {
                "id": 4524206,
                "areaName": "茂名市"
            },
            {
                "id": 4524214,
                "areaName": "肇庆市"
            },
            {
                "id": 4524224,
                "areaName": "惠州市"
            },
            {
                "id": 4524231,
                "areaName": "梅州市"
            },
            {
                "id": 4524241,
                "areaName": "汕尾市"
            },
            {
                "id": 4524247,
                "areaName": "河源市"
            },
            {
                "id": 4524255,
                "areaName": "阳江市"
            },
            {
                "id": 4524261,
                "areaName": "清远市"
            },
            {
                "id": 4524271,
                "areaName": "东莞市"
            },
            {
                "id": 4524272,
                "areaName": "中山市"
            },
            {
                "id": 4524273,
                "areaName": "潮州市"
            },
            {
                "id": 4524278,
                "areaName": "揭阳市"
            },
            {
                "id": 4524285,
                "areaName": "云浮市"
            }
        ],
        "4524292": [
            {
                "id": 4524293,
                "areaName": "南宁市"
            },
            {
                "id": 4524307,
                "areaName": "柳州市"
            },
            {
                "id": 4524319,
                "areaName": "桂林市"
            },
            {
                "id": 4524338,
                "areaName": "梧州市"
            },
            {
                "id": 4524347,
                "areaName": "北海市"
            },
            {
                "id": 4524353,
                "areaName": "防城港市"
            },
            {
                "id": 4524359,
                "areaName": "钦州市"
            },
            {
                "id": 4524365,
                "areaName": "贵港市"
            },
            {
                "id": 4524372,
                "areaName": "玉林市"
            },
            {
                "id": 4524380,
                "areaName": "百色市"
            },
            {
                "id": 4524394,
                "areaName": "贺州市"
            },
            {
                "id": 4524401,
                "areaName": "河池市"
            },
            {
                "id": 4524414,
                "areaName": "来宾市"
            },
            {
                "id": 4524422,
                "areaName": "崇左市"
            }
        ],
        "4524431": [
            {
                "id": 4524432,
                "areaName": "海口市"
            },
            {
                "id": 4524438,
                "areaName": "三亚市"
            },
            {
                "id": 4524440,
                "areaName": "省直辖县级行政区划"
            }
        ],
        "4524460": [
            {
                "id": 4524461,
                "areaName": "重庆市"
            }
        ],
        "4524503": [
            {
                "id": 4524504,
                "areaName": "成都市"
            },
            {
                "id": 4524525,
                "areaName": "自贡市"
            },
            {
                "id": 4524533,
                "areaName": "攀枝花市"
            },
            {
                "id": 4524540,
                "areaName": "泸州市"
            },
            {
                "id": 4524549,
                "areaName": "德阳市"
            },
            {
                "id": 4524557,
                "areaName": "绵阳市"
            },
            {
                "id": 4524568,
                "areaName": "广元市"
            },
            {
                "id": 4524577,
                "areaName": "遂宁市"
            },
            {
                "id": 4524584,
                "areaName": "内江市"
            },
            {
                "id": 4524591,
                "areaName": "乐山市"
            },
            {
                "id": 4524604,
                "areaName": "南充市"
            },
            {
                "id": 4524615,
                "areaName": "眉山市"
            },
            {
                "id": 4524623,
                "areaName": "宜宾市"
            },
            {
                "id": 4524635,
                "areaName": "广安市"
            },
            {
                "id": 4524642,
                "areaName": "达州市"
            },
            {
                "id": 4524651,
                "areaName": "雅安市"
            },
            {
                "id": 4524661,
                "areaName": "巴中市"
            },
            {
                "id": 4524667,
                "areaName": "资阳市"
            },
            {
                "id": 4524673,
                "areaName": "阿坝藏族羌族自治州"
            },
            {
                "id": 4524687,
                "areaName": "甘孜藏族自治州"
            },
            {
                "id": 4524706,
                "areaName": "凉山彝族自治州"
            }
        ],
        "4524724": [
            {
                "id": 4524725,
                "areaName": "贵阳市"
            },
            {
                "id": 4524737,
                "areaName": "六盘水市"
            },
            {
                "id": 4524742,
                "areaName": "遵义市"
            },
            {
                "id": 4524758,
                "areaName": "安顺市"
            },
            {
                "id": 4524766,
                "areaName": "铜仁地区"
            },
            {
                "id": 4524777,
                "areaName": "黔西南布依族苗族自治州"
            },
            {
                "id": 4524786,
                "areaName": "毕节地区"
            },
            {
                "id": 4524795,
                "areaName": "黔东南苗族侗族自治州"
            },
            {
                "id": 4524812,
                "areaName": "黔南布依族苗族自治州"
            }
        ],
        "4524825": [
            {
                "id": 4524826,
                "areaName": "昆明市"
            },
            {
                "id": 4524842,
                "areaName": "曲靖市"
            },
            {
                "id": 4524853,
                "areaName": "玉溪市"
            },
            {
                "id": 4524864,
                "areaName": "保山市"
            },
            {
                "id": 4524871,
                "areaName": "昭通市"
            },
            {
                "id": 4524884,
                "areaName": "丽江市"
            },
            {
                "id": 4524891,
                "areaName": "普洱市"
            },
            {
                "id": 4524903,
                "areaName": "临沧市"
            },
            {
                "id": 4524913,
                "areaName": "楚雄彝族自治州"
            },
            {
                "id": 4524924,
                "areaName": "红河哈尼族彝族自治州"
            },
            {
                "id": 4524938,
                "areaName": "文山壮族苗族自治州"
            },
            {
                "id": 4524947,
                "areaName": "西双版纳傣族自治州"
            },
            {
                "id": 4524951,
                "areaName": "大理白族自治州"
            },
            {
                "id": 4524964,
                "areaName": "德宏傣族景颇族自治州"
            },
            {
                "id": 4524970,
                "areaName": "怒江傈僳族自治州"
            },
            {
                "id": 4524975,
                "areaName": "迪庆藏族自治州"
            }
        ],
        "4524979": [
            {
                "id": 4524980,
                "areaName": "拉萨市"
            },
            {
                "id": 4524990,
                "areaName": "昌都地区"
            },
            {
                "id": 4525002,
                "areaName": "山南地区"
            },
            {
                "id": 4525015,
                "areaName": "日喀则地区"
            },
            {
                "id": 4525034,
                "areaName": "那曲地区"
            },
            {
                "id": 4525045,
                "areaName": "阿里地区"
            },
            {
                "id": 4525053,
                "areaName": "林芝地区"
            }
        ],
        "4525061": [
            {
                "id": 4525062,
                "areaName": "西安市"
            },
            {
                "id": 4525077,
                "areaName": "铜川市"
            },
            {
                "id": 4525083,
                "areaName": "宝鸡市"
            },
            {
                "id": 4525097,
                "areaName": "咸阳市"
            },
            {
                "id": 4525113,
                "areaName": "渭南市"
            },
            {
                "id": 4525126,
                "areaName": "延安市"
            },
            {
                "id": 4525141,
                "areaName": "汉中市"
            },
            {
                "id": 4525154,
                "areaName": "榆林市"
            },
            {
                "id": 4525168,
                "areaName": "安康市"
            },
            {
                "id": 4525180,
                "areaName": "商洛市"
            }
        ],
        "4525189": [
            {
                "id": 4525190,
                "areaName": "兰州市"
            },
            {
                "id": 4525200,
                "areaName": "嘉峪关市"
            },
            {
                "id": 4525202,
                "areaName": "金昌市"
            },
            {
                "id": 4525206,
                "areaName": "白银市"
            },
            {
                "id": 4525213,
                "areaName": "天水市"
            },
            {
                "id": 4525222,
                "areaName": "武威市"
            },
            {
                "id": 4525228,
                "areaName": "张掖市"
            },
            {
                "id": 4525236,
                "areaName": "平凉市"
            },
            {
                "id": 4525245,
                "areaName": "酒泉市"
            },
            {
                "id": 4525254,
                "areaName": "庆阳市"
            },
            {
                "id": 4525264,
                "areaName": "定西市"
            },
            {
                "id": 4525273,
                "areaName": "陇南市"
            },
            {
                "id": 4525284,
                "areaName": "临夏回族自治州"
            },
            {
                "id": 4525293,
                "areaName": "甘南藏族自治州"
            }
        ],
        "4525302": [
            {
                "id": 4525303,
                "areaName": "西宁市"
            },
            {
                "id": 4525312,
                "areaName": "海东地区"
            },
            {
                "id": 4525319,
                "areaName": "海北藏族自治州"
            },
            {
                "id": 4525324,
                "areaName": "黄南藏族自治州"
            },
            {
                "id": 4525329,
                "areaName": "海南藏族自治州"
            },
            {
                "id": 4525335,
                "areaName": "果洛藏族自治州"
            },
            {
                "id": 4525342,
                "areaName": "玉树藏族自治州"
            },
            {
                "id": 4525349,
                "areaName": "海西蒙古族藏族自治州"
            }
        ],
        "4525355": [
            {
                "id": 4525356,
                "areaName": "银川市"
            },
            {
                "id": 4525364,
                "areaName": "石嘴山市"
            },
            {
                "id": 4525369,
                "areaName": "吴忠市"
            },
            {
                "id": 4525376,
                "areaName": "固原市"
            },
            {
                "id": 4525383,
                "areaName": "中卫市"
            }
        ],
        "4525388": [
            {
                "id": 4525389,
                "areaName": "乌鲁木齐市"
            },
            {
                "id": 4525399,
                "areaName": "克拉玛依市"
            },
            {
                "id": 4525405,
                "areaName": "吐鲁番地区"
            },
            {
                "id": 4525409,
                "areaName": "哈密地区"
            },
            {
                "id": 4525413,
                "areaName": "昌吉回族自治州"
            },
            {
                "id": 4525421,
                "areaName": "博尔塔拉蒙古自治州"
            },
            {
                "id": 4525425,
                "areaName": "巴音郭楞蒙古自治州"
            },
            {
                "id": 4525435,
                "areaName": "阿克苏地区"
            },
            {
                "id": 4525445,
                "areaName": "克孜勒苏柯尔克孜自治州"
            },
            {
                "id": 4525450,
                "areaName": "喀什地区"
            },
            {
                "id": 4525463,
                "areaName": "和田地区"
            },
            {
                "id": 4525472,
                "areaName": "伊犁哈萨克自治州"
            },
            {
                "id": 4525483,
                "areaName": "塔城地区"
            },
            {
                "id": 4525491,
                "areaName": "阿勒泰地区"
            },
            {
                "id": 4525499,
                "areaName": "自治区直辖县级行政区划"
            }
        ]
    };

//section

    var sectionJson ={
        "4521985": [
            {
                "id": 4521986,
                "areaName": "东城区"
            },
            {
                "id": 4521987,
                "areaName": "西城区"
            },
            {
                "id": 4521988,
                "areaName": "朝阳区"
            },
            {
                "id": 4521989,
                "areaName": "丰台区"
            },
            {
                "id": 4521990,
                "areaName": "石景山区"
            },
            {
                "id": 4521991,
                "areaName": "海淀区"
            },
            {
                "id": 4521992,
                "areaName": "门头沟区"
            },
            {
                "id": 4521993,
                "areaName": "房山区"
            },
            {
                "id": 4521994,
                "areaName": "通州区"
            },
            {
                "id": 4521995,
                "areaName": "顺义区"
            },
            {
                "id": 4521996,
                "areaName": "昌平区"
            },
            {
                "id": 4521997,
                "areaName": "大兴区"
            },
            {
                "id": 4521998,
                "areaName": "怀柔区"
            },
            {
                "id": 4521999,
                "areaName": "平谷区"
            },
            {
                "id": 4522001,
                "areaName": "密云县"
            },
            {
                "id": 4522002,
                "areaName": "延庆县"
            }
        ],
        "4522004": [
            {
                "id": 4522005,
                "areaName": "和平区"
            },
            {
                "id": 4522006,
                "areaName": "河东区"
            },
            {
                "id": 4522007,
                "areaName": "河西区"
            },
            {
                "id": 4522008,
                "areaName": "南开区"
            },
            {
                "id": 4522009,
                "areaName": "河北区"
            },
            {
                "id": 4522010,
                "areaName": "红桥区"
            },
            {
                "id": 4522011,
                "areaName": "东丽区"
            },
            {
                "id": 4522012,
                "areaName": "西青区"
            },
            {
                "id": 4522013,
                "areaName": "津南区"
            },
            {
                "id": 4522014,
                "areaName": "北辰区"
            },
            {
                "id": 4522015,
                "areaName": "武清区"
            },
            {
                "id": 4522016,
                "areaName": "宝坻区"
            },
            {
                "id": 4522017,
                "areaName": "滨海新区"
            },
            {
                "id": 4522019,
                "areaName": "宁河县"
            },
            {
                "id": 4522020,
                "areaName": "静海县"
            },
            {
                "id": 4522021,
                "areaName": "蓟县"
            }
        ],
        "4522023": [
            {
                "id": 4522024,
                "areaName": "市辖区"
            },
            {
                "id": 4522025,
                "areaName": "长安区"
            },
            {
                "id": 4522026,
                "areaName": "桥东区"
            },
            {
                "id": 4522027,
                "areaName": "桥西区"
            },
            {
                "id": 4522028,
                "areaName": "新华区"
            },
            {
                "id": 4522029,
                "areaName": "井陉矿区"
            },
            {
                "id": 4522030,
                "areaName": "裕华区"
            },
            {
                "id": 4522031,
                "areaName": "井陉县"
            },
            {
                "id": 4522032,
                "areaName": "正定县"
            },
            {
                "id": 4522033,
                "areaName": "栾城县"
            },
            {
                "id": 4522034,
                "areaName": "行唐县"
            },
            {
                "id": 4522035,
                "areaName": "灵寿县"
            },
            {
                "id": 4522036,
                "areaName": "高邑县"
            },
            {
                "id": 4522037,
                "areaName": "深泽县"
            },
            {
                "id": 4522038,
                "areaName": "赞皇县"
            },
            {
                "id": 4522039,
                "areaName": "无极县"
            },
            {
                "id": 4522040,
                "areaName": "平山县"
            },
            {
                "id": 4522041,
                "areaName": "元氏县"
            },
            {
                "id": 4522042,
                "areaName": "赵县"
            },
            {
                "id": 4522043,
                "areaName": "辛集市"
            },
            {
                "id": 4522044,
                "areaName": "藁城市"
            },
            {
                "id": 4522045,
                "areaName": "晋州市"
            },
            {
                "id": 4522046,
                "areaName": "新乐市"
            },
            {
                "id": 4522047,
                "areaName": "鹿泉市"
            }
        ],
        "4522048": [
            {
                "id": 4522049,
                "areaName": "市辖区"
            },
            {
                "id": 4522050,
                "areaName": "路南区"
            },
            {
                "id": 4522051,
                "areaName": "路北区"
            },
            {
                "id": 4522052,
                "areaName": "古冶区"
            },
            {
                "id": 4522053,
                "areaName": "开平区"
            },
            {
                "id": 4522054,
                "areaName": "丰南区"
            },
            {
                "id": 4522055,
                "areaName": "丰润区"
            },
            {
                "id": 4522056,
                "areaName": "滦县"
            },
            {
                "id": 4522057,
                "areaName": "滦南县"
            },
            {
                "id": 4522058,
                "areaName": "乐亭县"
            },
            {
                "id": 4522059,
                "areaName": "迁西县"
            },
            {
                "id": 4522060,
                "areaName": "玉田县"
            },
            {
                "id": 4522061,
                "areaName": "唐海县"
            },
            {
                "id": 4522062,
                "areaName": "遵化市"
            },
            {
                "id": 4522063,
                "areaName": "迁安市"
            }
        ],
        "4522064": [
            {
                "id": 4522065,
                "areaName": "市辖区"
            },
            {
                "id": 4522066,
                "areaName": "海港区"
            },
            {
                "id": 4522067,
                "areaName": "山海关区"
            },
            {
                "id": 4522068,
                "areaName": "北戴河区"
            },
            {
                "id": 4522069,
                "areaName": "青龙满族自治县"
            },
            {
                "id": 4522070,
                "areaName": "昌黎县"
            },
            {
                "id": 4522071,
                "areaName": "抚宁县"
            },
            {
                "id": 4522072,
                "areaName": "卢龙县"
            }
        ],
        "4522073": [
            {
                "id": 4522074,
                "areaName": "市辖区"
            },
            {
                "id": 4522075,
                "areaName": "邯山区"
            },
            {
                "id": 4522076,
                "areaName": "丛台区"
            },
            {
                "id": 4522077,
                "areaName": "复兴区"
            },
            {
                "id": 4522078,
                "areaName": "峰峰矿区"
            },
            {
                "id": 4522079,
                "areaName": "邯郸县"
            },
            {
                "id": 4522080,
                "areaName": "临漳县"
            },
            {
                "id": 4522081,
                "areaName": "成安县"
            },
            {
                "id": 4522082,
                "areaName": "大名县"
            },
            {
                "id": 4522083,
                "areaName": "涉县"
            },
            {
                "id": 4522084,
                "areaName": "磁县"
            },
            {
                "id": 4522085,
                "areaName": "肥乡县"
            },
            {
                "id": 4522086,
                "areaName": "永年县"
            },
            {
                "id": 4522087,
                "areaName": "邱县"
            },
            {
                "id": 4522088,
                "areaName": "鸡泽县"
            },
            {
                "id": 4522089,
                "areaName": "广平县"
            },
            {
                "id": 4522090,
                "areaName": "馆陶县"
            },
            {
                "id": 4522091,
                "areaName": "魏县"
            },
            {
                "id": 4522092,
                "areaName": "曲周县"
            },
            {
                "id": 4522093,
                "areaName": "武安市"
            }
        ],
        "4522094": [
            {
                "id": 4522095,
                "areaName": "市辖区"
            },
            {
                "id": 4522096,
                "areaName": "桥东区"
            },
            {
                "id": 4522097,
                "areaName": "桥西区"
            },
            {
                "id": 4522098,
                "areaName": "邢台县"
            },
            {
                "id": 4522099,
                "areaName": "临城县"
            },
            {
                "id": 4522100,
                "areaName": "内丘县"
            },
            {
                "id": 4522101,
                "areaName": "柏乡县"
            },
            {
                "id": 4522102,
                "areaName": "隆尧县"
            },
            {
                "id": 4522103,
                "areaName": "任县"
            },
            {
                "id": 4522104,
                "areaName": "南和县"
            },
            {
                "id": 4522105,
                "areaName": "宁晋县"
            },
            {
                "id": 4522106,
                "areaName": "巨鹿县"
            },
            {
                "id": 4522107,
                "areaName": "新河县"
            },
            {
                "id": 4522108,
                "areaName": "广宗县"
            },
            {
                "id": 4522109,
                "areaName": "平乡县"
            },
            {
                "id": 4522110,
                "areaName": "威县"
            },
            {
                "id": 4522111,
                "areaName": "清河县"
            },
            {
                "id": 4522112,
                "areaName": "临西县"
            },
            {
                "id": 4522113,
                "areaName": "南宫市"
            },
            {
                "id": 4522114,
                "areaName": "沙河市"
            }
        ],
        "4522115": [
            {
                "id": 4522116,
                "areaName": "市辖区"
            },
            {
                "id": 4522117,
                "areaName": "新市区"
            },
            {
                "id": 4522118,
                "areaName": "北市区"
            },
            {
                "id": 4522119,
                "areaName": "南市区"
            },
            {
                "id": 4522120,
                "areaName": "满城县"
            },
            {
                "id": 4522121,
                "areaName": "清苑县"
            },
            {
                "id": 4522122,
                "areaName": "涞水县"
            },
            {
                "id": 4522123,
                "areaName": "阜平县"
            },
            {
                "id": 4522124,
                "areaName": "徐水县"
            },
            {
                "id": 4522125,
                "areaName": "定兴县"
            },
            {
                "id": 4522126,
                "areaName": "唐县"
            },
            {
                "id": 4522127,
                "areaName": "高阳县"
            },
            {
                "id": 4522128,
                "areaName": "容城县"
            },
            {
                "id": 4522129,
                "areaName": "涞源县"
            },
            {
                "id": 4522130,
                "areaName": "望都县"
            },
            {
                "id": 4522131,
                "areaName": "安新县"
            },
            {
                "id": 4522132,
                "areaName": "易县"
            },
            {
                "id": 4522133,
                "areaName": "曲阳县"
            },
            {
                "id": 4522134,
                "areaName": "蠡县"
            },
            {
                "id": 4522135,
                "areaName": "顺平县"
            },
            {
                "id": 4522136,
                "areaName": "博野县"
            },
            {
                "id": 4522137,
                "areaName": "雄县"
            },
            {
                "id": 4522138,
                "areaName": "涿州市"
            },
            {
                "id": 4522139,
                "areaName": "定州市"
            },
            {
                "id": 4522140,
                "areaName": "安国市"
            },
            {
                "id": 4522141,
                "areaName": "高碑店市"
            }
        ],
        "4522142": [
            {
                "id": 4522143,
                "areaName": "市辖区"
            },
            {
                "id": 4522144,
                "areaName": "桥东区"
            },
            {
                "id": 4522145,
                "areaName": "桥西区"
            },
            {
                "id": 4522146,
                "areaName": "宣化区"
            },
            {
                "id": 4522147,
                "areaName": "下花园区"
            },
            {
                "id": 4522148,
                "areaName": "宣化县"
            },
            {
                "id": 4522149,
                "areaName": "张北县"
            },
            {
                "id": 4522150,
                "areaName": "康保县"
            },
            {
                "id": 4522151,
                "areaName": "沽源县"
            },
            {
                "id": 4522152,
                "areaName": "尚义县"
            },
            {
                "id": 4522153,
                "areaName": "蔚县"
            },
            {
                "id": 4522154,
                "areaName": "阳原县"
            },
            {
                "id": 4522155,
                "areaName": "怀安县"
            },
            {
                "id": 4522156,
                "areaName": "万全县"
            },
            {
                "id": 4522157,
                "areaName": "怀来县"
            },
            {
                "id": 4522158,
                "areaName": "涿鹿县"
            },
            {
                "id": 4522159,
                "areaName": "赤城县"
            },
            {
                "id": 4522160,
                "areaName": "崇礼县"
            }
        ],
        "4522161": [
            {
                "id": 4522162,
                "areaName": "市辖区"
            },
            {
                "id": 4522163,
                "areaName": "双桥区"
            },
            {
                "id": 4522164,
                "areaName": "双滦区"
            },
            {
                "id": 4522165,
                "areaName": "鹰手营子矿区"
            },
            {
                "id": 4522166,
                "areaName": "承德县"
            },
            {
                "id": 4522167,
                "areaName": "兴隆县"
            },
            {
                "id": 4522168,
                "areaName": "平泉县"
            },
            {
                "id": 4522169,
                "areaName": "滦平县"
            },
            {
                "id": 4522170,
                "areaName": "隆化县"
            },
            {
                "id": 4522171,
                "areaName": "丰宁满族自治县"
            },
            {
                "id": 4522172,
                "areaName": "宽城满族自治县"
            },
            {
                "id": 4522173,
                "areaName": "围场满族蒙古族自治县"
            }
        ],
        "4522174": [
            {
                "id": 4522175,
                "areaName": "市辖区"
            },
            {
                "id": 4522176,
                "areaName": "新华区"
            },
            {
                "id": 4522177,
                "areaName": "运河区"
            },
            {
                "id": 4522178,
                "areaName": "沧县"
            },
            {
                "id": 4522179,
                "areaName": "青县"
            },
            {
                "id": 4522180,
                "areaName": "东光县"
            },
            {
                "id": 4522181,
                "areaName": "海兴县"
            },
            {
                "id": 4522182,
                "areaName": "盐山县"
            },
            {
                "id": 4522183,
                "areaName": "肃宁县"
            },
            {
                "id": 4522184,
                "areaName": "南皮县"
            },
            {
                "id": 4522185,
                "areaName": "吴桥县"
            },
            {
                "id": 4522186,
                "areaName": "献县"
            },
            {
                "id": 4522187,
                "areaName": "孟村回族自治县"
            },
            {
                "id": 4522188,
                "areaName": "泊头市"
            },
            {
                "id": 4522189,
                "areaName": "任丘市"
            },
            {
                "id": 4522190,
                "areaName": "黄骅市"
            },
            {
                "id": 4522191,
                "areaName": "河间市"
            }
        ],
        "4522192": [
            {
                "id": 4522193,
                "areaName": "市辖区"
            },
            {
                "id": 4522194,
                "areaName": "安次区"
            },
            {
                "id": 4522195,
                "areaName": "广阳区"
            },
            {
                "id": 4522196,
                "areaName": "固安县"
            },
            {
                "id": 4522197,
                "areaName": "永清县"
            },
            {
                "id": 4522198,
                "areaName": "香河县"
            },
            {
                "id": 4522199,
                "areaName": "大城县"
            },
            {
                "id": 4522200,
                "areaName": "文安县"
            },
            {
                "id": 4522201,
                "areaName": "大厂回族自治县"
            },
            {
                "id": 4522202,
                "areaName": "霸州市"
            },
            {
                "id": 4522203,
                "areaName": "三河市"
            }
        ],
        "4522204": [
            {
                "id": 4522205,
                "areaName": "市辖区"
            },
            {
                "id": 4522206,
                "areaName": "桃城区"
            },
            {
                "id": 4522207,
                "areaName": "枣强县"
            },
            {
                "id": 4522208,
                "areaName": "武邑县"
            },
            {
                "id": 4522209,
                "areaName": "武强县"
            },
            {
                "id": 4522210,
                "areaName": "饶阳县"
            },
            {
                "id": 4522211,
                "areaName": "安平县"
            },
            {
                "id": 4522212,
                "areaName": "故城县"
            },
            {
                "id": 4522213,
                "areaName": "景县"
            },
            {
                "id": 4522214,
                "areaName": "阜城县"
            },
            {
                "id": 4522215,
                "areaName": "冀州市"
            },
            {
                "id": 4522216,
                "areaName": "深州市"
            }
        ],
        "4522218": [
            {
                "id": 4522219,
                "areaName": "市辖区"
            },
            {
                "id": 4522220,
                "areaName": "小店区"
            },
            {
                "id": 4522221,
                "areaName": "迎泽区"
            },
            {
                "id": 4522222,
                "areaName": "杏花岭区"
            },
            {
                "id": 4522223,
                "areaName": "尖草坪区"
            },
            {
                "id": 4522224,
                "areaName": "万柏林区"
            },
            {
                "id": 4522225,
                "areaName": "晋源区"
            },
            {
                "id": 4522226,
                "areaName": "清徐县"
            },
            {
                "id": 4522227,
                "areaName": "阳曲县"
            },
            {
                "id": 4522228,
                "areaName": "娄烦县"
            },
            {
                "id": 4522229,
                "areaName": "古交市"
            }
        ],
        "4522230": [
            {
                "id": 4522231,
                "areaName": "市辖区"
            },
            {
                "id": 4522232,
                "areaName": "城区"
            },
            {
                "id": 4522233,
                "areaName": "矿区"
            },
            {
                "id": 4522234,
                "areaName": "南郊区"
            },
            {
                "id": 4522235,
                "areaName": "新荣区"
            },
            {
                "id": 4522236,
                "areaName": "阳高县"
            },
            {
                "id": 4522237,
                "areaName": "天镇县"
            },
            {
                "id": 4522238,
                "areaName": "广灵县"
            },
            {
                "id": 4522239,
                "areaName": "灵丘县"
            },
            {
                "id": 4522240,
                "areaName": "浑源县"
            },
            {
                "id": 4522241,
                "areaName": "左云县"
            },
            {
                "id": 4522242,
                "areaName": "大同县"
            }
        ],
        "4522243": [
            {
                "id": 4522244,
                "areaName": "市辖区"
            },
            {
                "id": 4522245,
                "areaName": "城区"
            },
            {
                "id": 4522246,
                "areaName": "矿区"
            },
            {
                "id": 4522247,
                "areaName": "郊区"
            },
            {
                "id": 4522248,
                "areaName": "平定县"
            },
            {
                "id": 4522249,
                "areaName": "盂县"
            }
        ],
        "4522250": [
            {
                "id": 4522251,
                "areaName": "市辖区"
            },
            {
                "id": 4522252,
                "areaName": "城区"
            },
            {
                "id": 4522253,
                "areaName": "郊区"
            },
            {
                "id": 4522254,
                "areaName": "长治县"
            },
            {
                "id": 4522255,
                "areaName": "襄垣县"
            },
            {
                "id": 4522256,
                "areaName": "屯留县"
            },
            {
                "id": 4522257,
                "areaName": "平顺县"
            },
            {
                "id": 4522258,
                "areaName": "黎城县"
            },
            {
                "id": 4522259,
                "areaName": "壶关县"
            },
            {
                "id": 4522260,
                "areaName": "长子县"
            },
            {
                "id": 4522261,
                "areaName": "武乡县"
            },
            {
                "id": 4522262,
                "areaName": "沁县"
            },
            {
                "id": 4522263,
                "areaName": "沁源县"
            },
            {
                "id": 4522264,
                "areaName": "潞城市"
            }
        ],
        "4522265": [
            {
                "id": 4522266,
                "areaName": "市辖区"
            },
            {
                "id": 4522267,
                "areaName": "城区"
            },
            {
                "id": 4522268,
                "areaName": "沁水县"
            },
            {
                "id": 4522269,
                "areaName": "阳城县"
            },
            {
                "id": 4522270,
                "areaName": "陵川县"
            },
            {
                "id": 4522271,
                "areaName": "泽州县"
            },
            {
                "id": 4522272,
                "areaName": "高平市"
            }
        ],
        "4522273": [
            {
                "id": 4522274,
                "areaName": "市辖区"
            },
            {
                "id": 4522275,
                "areaName": "朔城区"
            },
            {
                "id": 4522276,
                "areaName": "平鲁区"
            },
            {
                "id": 4522277,
                "areaName": "山阴县"
            },
            {
                "id": 4522278,
                "areaName": "应县"
            },
            {
                "id": 4522279,
                "areaName": "右玉县"
            },
            {
                "id": 4522280,
                "areaName": "怀仁县"
            }
        ],
        "4522281": [
            {
                "id": 4522282,
                "areaName": "市辖区"
            },
            {
                "id": 4522283,
                "areaName": "榆次区"
            },
            {
                "id": 4522284,
                "areaName": "榆社县"
            },
            {
                "id": 4522285,
                "areaName": "左权县"
            },
            {
                "id": 4522286,
                "areaName": "和顺县"
            },
            {
                "id": 4522287,
                "areaName": "昔阳县"
            },
            {
                "id": 4522288,
                "areaName": "寿阳县"
            },
            {
                "id": 4522289,
                "areaName": "太谷县"
            },
            {
                "id": 4522290,
                "areaName": "祁县"
            },
            {
                "id": 4522291,
                "areaName": "平遥县"
            },
            {
                "id": 4522292,
                "areaName": "灵石县"
            },
            {
                "id": 4522293,
                "areaName": "介休市"
            }
        ],
        "4522294": [
            {
                "id": 4522295,
                "areaName": "市辖区"
            },
            {
                "id": 4522296,
                "areaName": "盐湖区"
            },
            {
                "id": 4522297,
                "areaName": "临猗县"
            },
            {
                "id": 4522298,
                "areaName": "万荣县"
            },
            {
                "id": 4522299,
                "areaName": "闻喜县"
            },
            {
                "id": 4522300,
                "areaName": "稷山县"
            },
            {
                "id": 4522301,
                "areaName": "新绛县"
            },
            {
                "id": 4522302,
                "areaName": "绛县"
            },
            {
                "id": 4522303,
                "areaName": "垣曲县"
            },
            {
                "id": 4522304,
                "areaName": "夏县"
            },
            {
                "id": 4522305,
                "areaName": "平陆县"
            },
            {
                "id": 4522306,
                "areaName": "芮城县"
            },
            {
                "id": 4522307,
                "areaName": "永济市"
            },
            {
                "id": 4522308,
                "areaName": "河津市"
            }
        ],
        "4522309": [
            {
                "id": 4522310,
                "areaName": "市辖区"
            },
            {
                "id": 4522311,
                "areaName": "忻府区"
            },
            {
                "id": 4522312,
                "areaName": "定襄县"
            },
            {
                "id": 4522313,
                "areaName": "五台县"
            },
            {
                "id": 4522314,
                "areaName": "代县"
            },
            {
                "id": 4522315,
                "areaName": "繁峙县"
            },
            {
                "id": 4522316,
                "areaName": "宁武县"
            },
            {
                "id": 4522317,
                "areaName": "静乐县"
            },
            {
                "id": 4522318,
                "areaName": "神池县"
            },
            {
                "id": 4522319,
                "areaName": "五寨县"
            },
            {
                "id": 4522320,
                "areaName": "岢岚县"
            },
            {
                "id": 4522321,
                "areaName": "河曲县"
            },
            {
                "id": 4522322,
                "areaName": "保德县"
            },
            {
                "id": 4522323,
                "areaName": "偏关县"
            },
            {
                "id": 4522324,
                "areaName": "原平市"
            }
        ],
        "4522325": [
            {
                "id": 4522326,
                "areaName": "市辖区"
            },
            {
                "id": 4522327,
                "areaName": "尧都区"
            },
            {
                "id": 4522328,
                "areaName": "曲沃县"
            },
            {
                "id": 4522329,
                "areaName": "翼城县"
            },
            {
                "id": 4522330,
                "areaName": "襄汾县"
            },
            {
                "id": 4522331,
                "areaName": "洪洞县"
            },
            {
                "id": 4522332,
                "areaName": "古县"
            },
            {
                "id": 4522333,
                "areaName": "安泽县"
            },
            {
                "id": 4522334,
                "areaName": "浮山县"
            },
            {
                "id": 4522335,
                "areaName": "吉县"
            },
            {
                "id": 4522336,
                "areaName": "乡宁县"
            },
            {
                "id": 4522337,
                "areaName": "大宁县"
            },
            {
                "id": 4522338,
                "areaName": "隰县"
            },
            {
                "id": 4522339,
                "areaName": "永和县"
            },
            {
                "id": 4522340,
                "areaName": "蒲县"
            },
            {
                "id": 4522341,
                "areaName": "汾西县"
            },
            {
                "id": 4522342,
                "areaName": "侯马市"
            },
            {
                "id": 4522343,
                "areaName": "霍州市"
            }
        ],
        "4522344": [
            {
                "id": 4522345,
                "areaName": "市辖区"
            },
            {
                "id": 4522346,
                "areaName": "离石区"
            },
            {
                "id": 4522347,
                "areaName": "文水县"
            },
            {
                "id": 4522348,
                "areaName": "交城县"
            },
            {
                "id": 4522349,
                "areaName": "兴县"
            },
            {
                "id": 4522350,
                "areaName": "临县"
            },
            {
                "id": 4522351,
                "areaName": "柳林县"
            },
            {
                "id": 4522352,
                "areaName": "石楼县"
            },
            {
                "id": 4522353,
                "areaName": "岚县"
            },
            {
                "id": 4522354,
                "areaName": "方山县"
            },
            {
                "id": 4522355,
                "areaName": "中阳县"
            },
            {
                "id": 4522356,
                "areaName": "交口县"
            },
            {
                "id": 4522357,
                "areaName": "孝义市"
            },
            {
                "id": 4522358,
                "areaName": "汾阳市"
            }
        ],
        "4522360": [
            {
                "id": 4522361,
                "areaName": "市辖区"
            },
            {
                "id": 4522362,
                "areaName": "新城区"
            },
            {
                "id": 4522363,
                "areaName": "回民区"
            },
            {
                "id": 4522364,
                "areaName": "玉泉区"
            },
            {
                "id": 4522365,
                "areaName": "赛罕区"
            },
            {
                "id": 4522366,
                "areaName": "土默特左旗"
            },
            {
                "id": 4522367,
                "areaName": "托克托县"
            },
            {
                "id": 4522368,
                "areaName": "和林格尔县"
            },
            {
                "id": 4522369,
                "areaName": "清水河县"
            },
            {
                "id": 4522370,
                "areaName": "武川县"
            }
        ],
        "4522371": [
            {
                "id": 4522372,
                "areaName": "市辖区"
            },
            {
                "id": 4522373,
                "areaName": "东河区"
            },
            {
                "id": 4522374,
                "areaName": "昆都仑区"
            },
            {
                "id": 4522375,
                "areaName": "青山区"
            },
            {
                "id": 4522376,
                "areaName": "石拐区"
            },
            {
                "id": 4522377,
                "areaName": "白云鄂博矿区"
            },
            {
                "id": 4522378,
                "areaName": "九原区"
            },
            {
                "id": 4522379,
                "areaName": "土默特右旗"
            },
            {
                "id": 4522380,
                "areaName": "固阳县"
            },
            {
                "id": 4522381,
                "areaName": "达尔罕茂明安联合旗"
            }
        ],
        "4522382": [
            {
                "id": 4522383,
                "areaName": "市辖区"
            },
            {
                "id": 4522384,
                "areaName": "海勃湾区"
            },
            {
                "id": 4522385,
                "areaName": "海南区"
            },
            {
                "id": 4522386,
                "areaName": "乌达区"
            }
        ],
        "4522387": [
            {
                "id": 4522388,
                "areaName": "市辖区"
            },
            {
                "id": 4522389,
                "areaName": "红山区"
            },
            {
                "id": 4522390,
                "areaName": "元宝山区"
            },
            {
                "id": 4522391,
                "areaName": "松山区"
            },
            {
                "id": 4522392,
                "areaName": "阿鲁科尔沁旗"
            },
            {
                "id": 4522393,
                "areaName": "巴林左旗"
            },
            {
                "id": 4522394,
                "areaName": "巴林右旗"
            },
            {
                "id": 4522395,
                "areaName": "林西县"
            },
            {
                "id": 4522396,
                "areaName": "克什克腾旗"
            },
            {
                "id": 4522397,
                "areaName": "翁牛特旗"
            },
            {
                "id": 4522398,
                "areaName": "喀喇沁旗"
            },
            {
                "id": 4522399,
                "areaName": "宁城县"
            },
            {
                "id": 4522400,
                "areaName": "敖汉旗"
            }
        ],
        "4522401": [
            {
                "id": 4522402,
                "areaName": "市辖区"
            },
            {
                "id": 4522403,
                "areaName": "科尔沁区"
            },
            {
                "id": 4522404,
                "areaName": "科尔沁左翼中旗"
            },
            {
                "id": 4522405,
                "areaName": "科尔沁左翼后旗"
            },
            {
                "id": 4522406,
                "areaName": "开鲁县"
            },
            {
                "id": 4522407,
                "areaName": "库伦旗"
            },
            {
                "id": 4522408,
                "areaName": "奈曼旗"
            },
            {
                "id": 4522409,
                "areaName": "扎鲁特旗"
            },
            {
                "id": 4522410,
                "areaName": "霍林郭勒市"
            }
        ],
        "4522411": [
            {
                "id": 4522412,
                "areaName": "市辖区"
            },
            {
                "id": 4522413,
                "areaName": "东胜区"
            },
            {
                "id": 4522414,
                "areaName": "达拉特旗"
            },
            {
                "id": 4522415,
                "areaName": "准格尔旗"
            },
            {
                "id": 4522416,
                "areaName": "鄂托克前旗"
            },
            {
                "id": 4522417,
                "areaName": "鄂托克旗"
            },
            {
                "id": 4522418,
                "areaName": "杭锦旗"
            },
            {
                "id": 4522419,
                "areaName": "乌审旗"
            },
            {
                "id": 4522420,
                "areaName": "伊金霍洛旗"
            }
        ],
        "4522421": [
            {
                "id": 4522422,
                "areaName": "市辖区"
            },
            {
                "id": 4522423,
                "areaName": "海拉尔区"
            },
            {
                "id": 4522424,
                "areaName": "阿荣旗"
            },
            {
                "id": 4522425,
                "areaName": "莫力达瓦达斡尔族自治旗"
            },
            {
                "id": 4522426,
                "areaName": "鄂伦春自治旗"
            },
            {
                "id": 4522427,
                "areaName": "鄂温克族自治旗"
            },
            {
                "id": 4522428,
                "areaName": "陈巴尔虎旗"
            },
            {
                "id": 4522429,
                "areaName": "新巴尔虎左旗"
            },
            {
                "id": 4522430,
                "areaName": "新巴尔虎右旗"
            },
            {
                "id": 4522431,
                "areaName": "满洲里市"
            },
            {
                "id": 4522432,
                "areaName": "牙克石市"
            },
            {
                "id": 4522433,
                "areaName": "扎兰屯市"
            },
            {
                "id": 4522434,
                "areaName": "额尔古纳市"
            },
            {
                "id": 4522435,
                "areaName": "根河市"
            }
        ],
        "4522436": [
            {
                "id": 4522437,
                "areaName": "市辖区"
            },
            {
                "id": 4522438,
                "areaName": "临河区"
            },
            {
                "id": 4522439,
                "areaName": "五原县"
            },
            {
                "id": 4522440,
                "areaName": "磴口县"
            },
            {
                "id": 4522441,
                "areaName": "乌拉特前旗"
            },
            {
                "id": 4522442,
                "areaName": "乌拉特中旗"
            },
            {
                "id": 4522443,
                "areaName": "乌拉特后旗"
            },
            {
                "id": 4522444,
                "areaName": "杭锦后旗"
            }
        ],
        "4522445": [
            {
                "id": 4522446,
                "areaName": "市辖区"
            },
            {
                "id": 4522447,
                "areaName": "集宁区"
            },
            {
                "id": 4522448,
                "areaName": "卓资县"
            },
            {
                "id": 4522449,
                "areaName": "化德县"
            },
            {
                "id": 4522450,
                "areaName": "商都县"
            },
            {
                "id": 4522451,
                "areaName": "兴和县"
            },
            {
                "id": 4522452,
                "areaName": "凉城县"
            },
            {
                "id": 4522453,
                "areaName": "察哈尔右翼前旗"
            },
            {
                "id": 4522454,
                "areaName": "察哈尔右翼中旗"
            },
            {
                "id": 4522455,
                "areaName": "察哈尔右翼后旗"
            },
            {
                "id": 4522456,
                "areaName": "四子王旗"
            },
            {
                "id": 4522457,
                "areaName": "丰镇市"
            }
        ],
        "4522458": [
            {
                "id": 4522459,
                "areaName": "乌兰浩特市"
            },
            {
                "id": 4522460,
                "areaName": "阿尔山市"
            },
            {
                "id": 4522461,
                "areaName": "科尔沁右翼前旗"
            },
            {
                "id": 4522462,
                "areaName": "科尔沁右翼中旗"
            },
            {
                "id": 4522463,
                "areaName": "扎赉特旗"
            },
            {
                "id": 4522464,
                "areaName": "突泉县"
            }
        ],
        "4522465": [
            {
                "id": 4522466,
                "areaName": "二连浩特市"
            },
            {
                "id": 4522467,
                "areaName": "锡林浩特市"
            },
            {
                "id": 4522468,
                "areaName": "阿巴嘎旗"
            },
            {
                "id": 4522469,
                "areaName": "苏尼特左旗"
            },
            {
                "id": 4522470,
                "areaName": "苏尼特右旗"
            },
            {
                "id": 4522471,
                "areaName": "东乌珠穆沁旗"
            },
            {
                "id": 4522472,
                "areaName": "西乌珠穆沁旗"
            },
            {
                "id": 4522473,
                "areaName": "太仆寺旗"
            },
            {
                "id": 4522474,
                "areaName": "镶黄旗"
            },
            {
                "id": 4522475,
                "areaName": "正镶白旗"
            },
            {
                "id": 4522476,
                "areaName": "正蓝旗"
            },
            {
                "id": 4522477,
                "areaName": "多伦县"
            }
        ],
        "4522478": [
            {
                "id": 4522479,
                "areaName": "阿拉善左旗"
            },
            {
                "id": 4522480,
                "areaName": "阿拉善右旗"
            },
            {
                "id": 4522481,
                "areaName": "额济纳旗"
            }
        ],
        "4522483": [
            {
                "id": 4522484,
                "areaName": "浑南新区"
            },
            {
                "id": 4522485,
                "areaName": "和平区"
            },
            {
                "id": 4522486,
                "areaName": "沈河区"
            },
            {
                "id": 4522487,
                "areaName": "大东区"
            },
            {
                "id": 4522488,
                "areaName": "皇姑区"
            },
            {
                "id": 4522489,
                "areaName": "铁西区"
            },
            {
                "id": 4522490,
                "areaName": "苏家屯区"
            },
            {
                "id": 4522491,
                "areaName": "东陵区"
            },
            {
                "id": 4522492,
                "areaName": "沈北新区"
            },
            {
                "id": 4522493,
                "areaName": "于洪区"
            },
            {
                "id": 4522494,
                "areaName": "辽中县"
            },
            {
                "id": 4522495,
                "areaName": "康平县"
            },
            {
                "id": 4522496,
                "areaName": "法库县"
            },
            {
                "id": 4522497,
                "areaName": "新民市"
            }
        ],
        "4522498": [
            {
                "id": 4522499,
                "areaName": "市辖区"
            },
            {
                "id": 4522500,
                "areaName": "中山区"
            },
            {
                "id": 4522501,
                "areaName": "西岗区"
            },
            {
                "id": 4522502,
                "areaName": "沙河口区"
            },
            {
                "id": 4522503,
                "areaName": "甘井子区"
            },
            {
                "id": 4522504,
                "areaName": "旅顺口区"
            },
            {
                "id": 4522505,
                "areaName": "金州区"
            },
            {
                "id": 4522506,
                "areaName": "长海县"
            },
            {
                "id": 4522507,
                "areaName": "瓦房店市"
            },
            {
                "id": 4522508,
                "areaName": "普兰店市"
            },
            {
                "id": 4522509,
                "areaName": "庄河市"
            }
        ],
        "4522510": [
            {
                "id": 4522511,
                "areaName": "市辖区"
            },
            {
                "id": 4522512,
                "areaName": "铁东区"
            },
            {
                "id": 4522513,
                "areaName": "铁西区"
            },
            {
                "id": 4522514,
                "areaName": "立山区"
            },
            {
                "id": 4522515,
                "areaName": "千山区"
            },
            {
                "id": 4522516,
                "areaName": "台安县"
            },
            {
                "id": 4522517,
                "areaName": "岫岩满族自治县"
            },
            {
                "id": 4522518,
                "areaName": "海城市"
            }
        ],
        "4522519": [
            {
                "id": 4522520,
                "areaName": "市辖区"
            },
            {
                "id": 4522521,
                "areaName": "新抚区"
            },
            {
                "id": 4522522,
                "areaName": "东洲区"
            },
            {
                "id": 4522523,
                "areaName": "望花区"
            },
            {
                "id": 4522524,
                "areaName": "顺城区"
            },
            {
                "id": 4522525,
                "areaName": "抚顺县"
            },
            {
                "id": 4522526,
                "areaName": "新宾满族自治县"
            },
            {
                "id": 4522527,
                "areaName": "清原满族自治县"
            }
        ],
        "4522528": [
            {
                "id": 4522529,
                "areaName": "市辖区"
            },
            {
                "id": 4522530,
                "areaName": "平山区"
            },
            {
                "id": 4522531,
                "areaName": "溪湖区"
            },
            {
                "id": 4522532,
                "areaName": "明山区"
            },
            {
                "id": 4522533,
                "areaName": "南芬区"
            },
            {
                "id": 4522534,
                "areaName": "本溪满族自治县"
            },
            {
                "id": 4522535,
                "areaName": "桓仁满族自治县"
            }
        ],
        "4522536": [
            {
                "id": 4522537,
                "areaName": "市辖区"
            },
            {
                "id": 4522538,
                "areaName": "元宝区"
            },
            {
                "id": 4522539,
                "areaName": "振兴区"
            },
            {
                "id": 4522540,
                "areaName": "振安区"
            },
            {
                "id": 4522541,
                "areaName": "宽甸满族自治县"
            },
            {
                "id": 4522542,
                "areaName": "东港市"
            },
            {
                "id": 4522543,
                "areaName": "凤城市"
            }
        ],
        "4522544": [
            {
                "id": 4522545,
                "areaName": "市辖区"
            },
            {
                "id": 4522546,
                "areaName": "古塔区"
            },
            {
                "id": 4522547,
                "areaName": "凌河区"
            },
            {
                "id": 4522548,
                "areaName": "太和区"
            },
            {
                "id": 4522549,
                "areaName": "黑山县"
            },
            {
                "id": 4522550,
                "areaName": "义县"
            },
            {
                "id": 4522551,
                "areaName": "凌海市"
            },
            {
                "id": 4522552,
                "areaName": "北镇市"
            }
        ],
        "4522553": [
            {
                "id": 4522554,
                "areaName": "市辖区"
            },
            {
                "id": 4522555,
                "areaName": "站前区"
            },
            {
                "id": 4522556,
                "areaName": "西市区"
            },
            {
                "id": 4522557,
                "areaName": "鲅鱼圈区"
            },
            {
                "id": 4522558,
                "areaName": "老边区"
            },
            {
                "id": 4522559,
                "areaName": "盖州市"
            },
            {
                "id": 4522560,
                "areaName": "大石桥市"
            }
        ],
        "4522561": [
            {
                "id": 4522562,
                "areaName": "市辖区"
            },
            {
                "id": 4522563,
                "areaName": "海州区"
            },
            {
                "id": 4522564,
                "areaName": "新邱区"
            },
            {
                "id": 4522565,
                "areaName": "太平区"
            },
            {
                "id": 4522566,
                "areaName": "清河门区"
            },
            {
                "id": 4522567,
                "areaName": "细河区"
            },
            {
                "id": 4522568,
                "areaName": "阜新蒙古族自治县"
            },
            {
                "id": 4522569,
                "areaName": "彰武县"
            }
        ],
        "4522570": [
            {
                "id": 4522571,
                "areaName": "市辖区"
            },
            {
                "id": 4522572,
                "areaName": "白塔区"
            },
            {
                "id": 4522573,
                "areaName": "文圣区"
            },
            {
                "id": 4522574,
                "areaName": "宏伟区"
            },
            {
                "id": 4522575,
                "areaName": "弓长岭区"
            },
            {
                "id": 4522576,
                "areaName": "太子河区"
            },
            {
                "id": 4522577,
                "areaName": "辽阳县"
            },
            {
                "id": 4522578,
                "areaName": "灯塔市"
            }
        ],
        "4522579": [
            {
                "id": 4522580,
                "areaName": "市辖区"
            },
            {
                "id": 4522581,
                "areaName": "双台子区"
            },
            {
                "id": 4522582,
                "areaName": "兴隆台区"
            },
            {
                "id": 4522583,
                "areaName": "大洼县"
            },
            {
                "id": 4522584,
                "areaName": "盘山县"
            }
        ],
        "4522585": [
            {
                "id": 4522586,
                "areaName": "市辖区"
            },
            {
                "id": 4522587,
                "areaName": "银州区"
            },
            {
                "id": 4522588,
                "areaName": "清河区"
            },
            {
                "id": 4522589,
                "areaName": "铁岭县"
            },
            {
                "id": 4522590,
                "areaName": "西丰县"
            },
            {
                "id": 4522591,
                "areaName": "昌图县"
            },
            {
                "id": 4522592,
                "areaName": "调兵山市"
            },
            {
                "id": 4522593,
                "areaName": "开原市"
            }
        ],
        "4522594": [
            {
                "id": 4522595,
                "areaName": "市辖区"
            },
            {
                "id": 4522596,
                "areaName": "双塔区"
            },
            {
                "id": 4522597,
                "areaName": "龙城区"
            },
            {
                "id": 4522598,
                "areaName": "朝阳县"
            },
            {
                "id": 4522599,
                "areaName": "建平县"
            },
            {
                "id": 4522600,
                "areaName": "喀喇沁左翼蒙古族自治县"
            },
            {
                "id": 4522601,
                "areaName": "北票市"
            },
            {
                "id": 4522602,
                "areaName": "凌源市"
            }
        ],
        "4522603": [
            {
                "id": 4522604,
                "areaName": "市辖区"
            },
            {
                "id": 4522605,
                "areaName": "连山区"
            },
            {
                "id": 4522606,
                "areaName": "龙港区"
            },
            {
                "id": 4522607,
                "areaName": "南票区"
            },
            {
                "id": 4522608,
                "areaName": "绥中县"
            },
            {
                "id": 4522609,
                "areaName": "建昌县"
            },
            {
                "id": 4522610,
                "areaName": "兴城市"
            }
        ],
        "4522612": [
            {
                "id": 4522613,
                "areaName": "市辖区"
            },
            {
                "id": 4522614,
                "areaName": "南关区"
            },
            {
                "id": 4522615,
                "areaName": "宽城区"
            },
            {
                "id": 4522616,
                "areaName": "朝阳区"
            },
            {
                "id": 4522617,
                "areaName": "二道区"
            },
            {
                "id": 4522618,
                "areaName": "绿园区"
            },
            {
                "id": 4522619,
                "areaName": "双阳区"
            },
            {
                "id": 4522620,
                "areaName": "农安县"
            },
            {
                "id": 4522621,
                "areaName": "九台市"
            },
            {
                "id": 4522622,
                "areaName": "榆树市"
            },
            {
                "id": 4522623,
                "areaName": "德惠市"
            }
        ],
        "4522624": [
            {
                "id": 4522625,
                "areaName": "市辖区"
            },
            {
                "id": 4522626,
                "areaName": "昌邑区"
            },
            {
                "id": 4522627,
                "areaName": "龙潭区"
            },
            {
                "id": 4522628,
                "areaName": "船营区"
            },
            {
                "id": 4522629,
                "areaName": "丰满区"
            },
            {
                "id": 4522630,
                "areaName": "永吉县"
            },
            {
                "id": 4522631,
                "areaName": "蛟河市"
            },
            {
                "id": 4522632,
                "areaName": "桦甸市"
            },
            {
                "id": 4522633,
                "areaName": "舒兰市"
            },
            {
                "id": 4522634,
                "areaName": "磐石市"
            }
        ],
        "4522635": [
            {
                "id": 4522636,
                "areaName": "市辖区"
            },
            {
                "id": 4522637,
                "areaName": "铁西区"
            },
            {
                "id": 4522638,
                "areaName": "铁东区"
            },
            {
                "id": 4522639,
                "areaName": "梨树县"
            },
            {
                "id": 4522640,
                "areaName": "伊通满族自治县"
            },
            {
                "id": 4522641,
                "areaName": "公主岭市"
            },
            {
                "id": 4522642,
                "areaName": "双辽市"
            }
        ],
        "4522643": [
            {
                "id": 4522644,
                "areaName": "市辖区"
            },
            {
                "id": 4522645,
                "areaName": "龙山区"
            },
            {
                "id": 4522646,
                "areaName": "西安区"
            },
            {
                "id": 4522647,
                "areaName": "东丰县"
            },
            {
                "id": 4522648,
                "areaName": "东辽县"
            }
        ],
        "4522649": [
            {
                "id": 4522650,
                "areaName": "市辖区"
            },
            {
                "id": 4522651,
                "areaName": "东昌区"
            },
            {
                "id": 4522652,
                "areaName": "二道江区"
            },
            {
                "id": 4522653,
                "areaName": "通化县"
            },
            {
                "id": 4522654,
                "areaName": "辉南县"
            },
            {
                "id": 4522655,
                "areaName": "柳河县"
            },
            {
                "id": 4522656,
                "areaName": "梅河口市"
            },
            {
                "id": 4522657,
                "areaName": "集安市"
            }
        ],
        "4522658": [
            {
                "id": 4522659,
                "areaName": "市辖区"
            },
            {
                "id": 4522660,
                "areaName": "八道江区"
            },
            {
                "id": 4522661,
                "areaName": "江源区"
            },
            {
                "id": 4522662,
                "areaName": "抚松县"
            },
            {
                "id": 4522663,
                "areaName": "靖宇县"
            },
            {
                "id": 4522664,
                "areaName": "长白朝鲜族自治县"
            },
            {
                "id": 4522665,
                "areaName": "临江市"
            }
        ],
        "4522666": [
            {
                "id": 4522667,
                "areaName": "市辖区"
            },
            {
                "id": 4522668,
                "areaName": "宁江区"
            },
            {
                "id": 4522669,
                "areaName": "前郭尔罗斯蒙古族自治县"
            },
            {
                "id": 4522670,
                "areaName": "长岭县"
            },
            {
                "id": 4522671,
                "areaName": "乾安县"
            },
            {
                "id": 4522672,
                "areaName": "扶余县"
            }
        ],
        "4522673": [
            {
                "id": 4522674,
                "areaName": "市辖区"
            },
            {
                "id": 4522675,
                "areaName": "洮北区"
            },
            {
                "id": 4522676,
                "areaName": "镇赉县"
            },
            {
                "id": 4522677,
                "areaName": "通榆县"
            },
            {
                "id": 4522678,
                "areaName": "洮南市"
            },
            {
                "id": 4522679,
                "areaName": "大安市"
            }
        ],
        "4522680": [
            {
                "id": 4522681,
                "areaName": "延吉市"
            },
            {
                "id": 4522682,
                "areaName": "图们市"
            },
            {
                "id": 4522683,
                "areaName": "敦化市"
            },
            {
                "id": 4522684,
                "areaName": "珲春市"
            },
            {
                "id": 4522685,
                "areaName": "龙井市"
            },
            {
                "id": 4522686,
                "areaName": "和龙市"
            },
            {
                "id": 4522687,
                "areaName": "汪清县"
            },
            {
                "id": 4522688,
                "areaName": "安图县"
            }
        ],
        "4522690": [
            {
                "id": 4522691,
                "areaName": "市辖区"
            },
            {
                "id": 4522692,
                "areaName": "道里区"
            },
            {
                "id": 4522693,
                "areaName": "南岗区"
            },
            {
                "id": 4522694,
                "areaName": "道外区"
            },
            {
                "id": 4522695,
                "areaName": "平房区"
            },
            {
                "id": 4522696,
                "areaName": "松北区"
            },
            {
                "id": 4522697,
                "areaName": "香坊区"
            },
            {
                "id": 4522698,
                "areaName": "呼兰区"
            },
            {
                "id": 4522699,
                "areaName": "阿城区"
            },
            {
                "id": 4522700,
                "areaName": "依兰县"
            },
            {
                "id": 4522701,
                "areaName": "方正县"
            },
            {
                "id": 4522702,
                "areaName": "宾县"
            },
            {
                "id": 4522703,
                "areaName": "巴彦县"
            },
            {
                "id": 4522704,
                "areaName": "木兰县"
            },
            {
                "id": 4522705,
                "areaName": "通河县"
            },
            {
                "id": 4522706,
                "areaName": "延寿县"
            },
            {
                "id": 4522707,
                "areaName": "双城市"
            },
            {
                "id": 4522708,
                "areaName": "尚志市"
            },
            {
                "id": 4522709,
                "areaName": "五常市"
            }
        ],
        "4522710": [
            {
                "id": 4522711,
                "areaName": "市辖区"
            },
            {
                "id": 4522712,
                "areaName": "龙沙区"
            },
            {
                "id": 4522713,
                "areaName": "建华区"
            },
            {
                "id": 4522714,
                "areaName": "铁锋区"
            },
            {
                "id": 4522715,
                "areaName": "昂昂溪区"
            },
            {
                "id": 4522716,
                "areaName": "富拉尔基区"
            },
            {
                "id": 4522717,
                "areaName": "碾子山区"
            },
            {
                "id": 4522718,
                "areaName": "梅里斯达斡尔族区"
            },
            {
                "id": 4522719,
                "areaName": "龙江县"
            },
            {
                "id": 4522720,
                "areaName": "依安县"
            },
            {
                "id": 4522721,
                "areaName": "泰来县"
            },
            {
                "id": 4522722,
                "areaName": "甘南县"
            },
            {
                "id": 4522723,
                "areaName": "富裕县"
            },
            {
                "id": 4522724,
                "areaName": "克山县"
            },
            {
                "id": 4522725,
                "areaName": "克东县"
            },
            {
                "id": 4522726,
                "areaName": "拜泉县"
            },
            {
                "id": 4522727,
                "areaName": "讷河市"
            }
        ],
        "4522728": [
            {
                "id": 4522729,
                "areaName": "市辖区"
            },
            {
                "id": 4522730,
                "areaName": "鸡冠区"
            },
            {
                "id": 4522731,
                "areaName": "恒山区"
            },
            {
                "id": 4522732,
                "areaName": "滴道区"
            },
            {
                "id": 4522733,
                "areaName": "梨树区"
            },
            {
                "id": 4522734,
                "areaName": "城子河区"
            },
            {
                "id": 4522735,
                "areaName": "麻山区"
            },
            {
                "id": 4522736,
                "areaName": "鸡东县"
            },
            {
                "id": 4522737,
                "areaName": "虎林市"
            },
            {
                "id": 4522738,
                "areaName": "密山市"
            }
        ],
        "4522739": [
            {
                "id": 4522740,
                "areaName": "市辖区"
            },
            {
                "id": 4522741,
                "areaName": "向阳区"
            },
            {
                "id": 4522742,
                "areaName": "工农区"
            },
            {
                "id": 4522743,
                "areaName": "南山区"
            },
            {
                "id": 4522744,
                "areaName": "兴安区"
            },
            {
                "id": 4522745,
                "areaName": "东山区"
            },
            {
                "id": 4522746,
                "areaName": "兴山区"
            },
            {
                "id": 4522747,
                "areaName": "萝北县"
            },
            {
                "id": 4522748,
                "areaName": "绥滨县"
            }
        ],
        "4522749": [
            {
                "id": 4522750,
                "areaName": "市辖区"
            },
            {
                "id": 4522751,
                "areaName": "尖山区"
            },
            {
                "id": 4522752,
                "areaName": "岭东区"
            },
            {
                "id": 4522753,
                "areaName": "四方台区"
            },
            {
                "id": 4522754,
                "areaName": "宝山区"
            },
            {
                "id": 4522755,
                "areaName": "集贤县"
            },
            {
                "id": 4522756,
                "areaName": "友谊县"
            },
            {
                "id": 4522757,
                "areaName": "宝清县"
            },
            {
                "id": 4522758,
                "areaName": "饶河县"
            }
        ],
        "4522759": [
            {
                "id": 4522760,
                "areaName": "市辖区"
            },
            {
                "id": 4522761,
                "areaName": "萨尔图区"
            },
            {
                "id": 4522762,
                "areaName": "龙凤区"
            },
            {
                "id": 4522763,
                "areaName": "让胡路区"
            },
            {
                "id": 4522764,
                "areaName": "红岗区"
            },
            {
                "id": 4522765,
                "areaName": "大同区"
            },
            {
                "id": 4522766,
                "areaName": "肇州县"
            },
            {
                "id": 4522767,
                "areaName": "肇源县"
            },
            {
                "id": 4522768,
                "areaName": "林甸县"
            },
            {
                "id": 4522769,
                "areaName": "杜尔伯特蒙古族自治县"
            }
        ],
        "4522770": [
            {
                "id": 4522771,
                "areaName": "市辖区"
            },
            {
                "id": 4522772,
                "areaName": "伊春区"
            },
            {
                "id": 4522773,
                "areaName": "南岔区"
            },
            {
                "id": 4522774,
                "areaName": "友好区"
            },
            {
                "id": 4522775,
                "areaName": "西林区"
            },
            {
                "id": 4522776,
                "areaName": "翠峦区"
            },
            {
                "id": 4522777,
                "areaName": "新青区"
            },
            {
                "id": 4522778,
                "areaName": "美溪区"
            },
            {
                "id": 4522779,
                "areaName": "金山屯区"
            },
            {
                "id": 4522780,
                "areaName": "五营区"
            },
            {
                "id": 4522781,
                "areaName": "乌马河区"
            },
            {
                "id": 4522782,
                "areaName": "汤旺河区"
            },
            {
                "id": 4522783,
                "areaName": "带岭区"
            },
            {
                "id": 4522784,
                "areaName": "乌伊岭区"
            },
            {
                "id": 4522785,
                "areaName": "红星区"
            },
            {
                "id": 4522786,
                "areaName": "上甘岭区"
            },
            {
                "id": 4522787,
                "areaName": "嘉荫县"
            },
            {
                "id": 4522788,
                "areaName": "铁力市"
            }
        ],
        "4522789": [
            {
                "id": 4522790,
                "areaName": "市辖区"
            },
            {
                "id": 4522791,
                "areaName": "向阳区"
            },
            {
                "id": 4522792,
                "areaName": "前进区"
            },
            {
                "id": 4522793,
                "areaName": "东风区"
            },
            {
                "id": 4522794,
                "areaName": "郊区"
            },
            {
                "id": 4522795,
                "areaName": "桦南县"
            },
            {
                "id": 4522796,
                "areaName": "桦川县"
            },
            {
                "id": 4522797,
                "areaName": "汤原县"
            },
            {
                "id": 4522798,
                "areaName": "抚远县"
            },
            {
                "id": 4522799,
                "areaName": "同江市"
            },
            {
                "id": 4522800,
                "areaName": "富锦市"
            }
        ],
        "4522801": [
            {
                "id": 4522802,
                "areaName": "市辖区"
            },
            {
                "id": 4522803,
                "areaName": "新兴区"
            },
            {
                "id": 4522804,
                "areaName": "桃山区"
            },
            {
                "id": 4522805,
                "areaName": "茄子河区"
            },
            {
                "id": 4522806,
                "areaName": "勃利县"
            }
        ],
        "4522807": [
            {
                "id": 4522808,
                "areaName": "市辖区"
            },
            {
                "id": 4522809,
                "areaName": "东安区"
            },
            {
                "id": 4522810,
                "areaName": "阳明区"
            },
            {
                "id": 4522811,
                "areaName": "爱民区"
            },
            {
                "id": 4522812,
                "areaName": "西安区"
            },
            {
                "id": 4522813,
                "areaName": "东宁县"
            },
            {
                "id": 4522814,
                "areaName": "林口县"
            },
            {
                "id": 4522815,
                "areaName": "绥芬河市"
            },
            {
                "id": 4522816,
                "areaName": "海林市"
            },
            {
                "id": 4522817,
                "areaName": "宁安市"
            },
            {
                "id": 4522818,
                "areaName": "穆棱市"
            }
        ],
        "4522819": [
            {
                "id": 4522820,
                "areaName": "市辖区"
            },
            {
                "id": 4522821,
                "areaName": "爱辉区"
            },
            {
                "id": 4522822,
                "areaName": "嫩江县"
            },
            {
                "id": 4522823,
                "areaName": "逊克县"
            },
            {
                "id": 4522824,
                "areaName": "孙吴县"
            },
            {
                "id": 4522825,
                "areaName": "北安市"
            },
            {
                "id": 4522826,
                "areaName": "五大连池市"
            }
        ],
        "4522827": [
            {
                "id": 4522828,
                "areaName": "市辖区"
            },
            {
                "id": 4522829,
                "areaName": "北林区"
            },
            {
                "id": 4522830,
                "areaName": "望奎县"
            },
            {
                "id": 4522831,
                "areaName": "兰西县"
            },
            {
                "id": 4522832,
                "areaName": "青冈县"
            },
            {
                "id": 4522833,
                "areaName": "庆安县"
            },
            {
                "id": 4522834,
                "areaName": "明水县"
            },
            {
                "id": 4522835,
                "areaName": "绥棱县"
            },
            {
                "id": 4522836,
                "areaName": "安达市"
            },
            {
                "id": 4522837,
                "areaName": "肇东市"
            },
            {
                "id": 4522838,
                "areaName": "海伦市"
            }
        ],
        "4522839": [
            {
                "id": 4522840,
                "areaName": "加格达奇区"
            },
            {
                "id": 4522841,
                "areaName": "松岭区"
            },
            {
                "id": 4522842,
                "areaName": "新林区"
            },
            {
                "id": 4522843,
                "areaName": "呼中区"
            },
            {
                "id": 4522844,
                "areaName": "呼玛县"
            },
            {
                "id": 4522845,
                "areaName": "塔河县"
            },
            {
                "id": 4522846,
                "areaName": "漠河县"
            }
        ],
        "4522848": [
            {
                "id": 4522849,
                "areaName": "黄浦区"
            },
            {
                "id": 4522850,
                "areaName": "卢湾区"
            },
            {
                "id": 4522851,
                "areaName": "徐汇区"
            },
            {
                "id": 4522852,
                "areaName": "长宁区"
            },
            {
                "id": 4522853,
                "areaName": "静安区"
            },
            {
                "id": 4522854,
                "areaName": "普陀区"
            },
            {
                "id": 4522855,
                "areaName": "闸北区"
            },
            {
                "id": 4522856,
                "areaName": "虹口区"
            },
            {
                "id": 4522857,
                "areaName": "杨浦区"
            },
            {
                "id": 4522858,
                "areaName": "闵行区"
            },
            {
                "id": 4522859,
                "areaName": "宝山区"
            },
            {
                "id": 4522860,
                "areaName": "嘉定区"
            },
            {
                "id": 4522861,
                "areaName": "浦东新区"
            },
            {
                "id": 4522862,
                "areaName": "金山区"
            },
            {
                "id": 4522863,
                "areaName": "松江区"
            },
            {
                "id": 4522864,
                "areaName": "青浦区"
            },
            {
                "id": 4522865,
                "areaName": "奉贤区"
            },
            {
                "id": 4522867,
                "areaName": "崇明县"
            }
        ],
        "4522869": [
            {
                "id": 4522870,
                "areaName": "市辖区"
            },
            {
                "id": 4522871,
                "areaName": "玄武区"
            },
            {
                "id": 4522872,
                "areaName": "白下区"
            },
            {
                "id": 4522873,
                "areaName": "秦淮区"
            },
            {
                "id": 4522874,
                "areaName": "建邺区"
            },
            {
                "id": 4522875,
                "areaName": "鼓楼区"
            },
            {
                "id": 4522876,
                "areaName": "下关区"
            },
            {
                "id": 4522877,
                "areaName": "浦口区"
            },
            {
                "id": 4522878,
                "areaName": "栖霞区"
            },
            {
                "id": 4522879,
                "areaName": "雨花台区"
            },
            {
                "id": 4522880,
                "areaName": "江宁区"
            },
            {
                "id": 4522881,
                "areaName": "六合区"
            },
            {
                "id": 4522882,
                "areaName": "溧水县"
            },
            {
                "id": 4522883,
                "areaName": "高淳县"
            }
        ],
        "4522884": [
            {
                "id": 4522885,
                "areaName": "市辖区"
            },
            {
                "id": 4522886,
                "areaName": "崇安区"
            },
            {
                "id": 4522887,
                "areaName": "南长区"
            },
            {
                "id": 4522888,
                "areaName": "北塘区"
            },
            {
                "id": 4522889,
                "areaName": "锡山区"
            },
            {
                "id": 4522890,
                "areaName": "惠山区"
            },
            {
                "id": 4522891,
                "areaName": "滨湖区"
            },
            {
                "id": 4522892,
                "areaName": "江阴市"
            },
            {
                "id": 4522893,
                "areaName": "宜兴市"
            }
        ],
        "4522894": [
            {
                "id": 4522895,
                "areaName": "市辖区"
            },
            {
                "id": 4522896,
                "areaName": "鼓楼区"
            },
            {
                "id": 4522897,
                "areaName": "云龙区"
            },
            {
                "id": 4522898,
                "areaName": "贾汪区"
            },
            {
                "id": 4522899,
                "areaName": "泉山区"
            },
            {
                "id": 4522900,
                "areaName": "铜山区"
            },
            {
                "id": 4522901,
                "areaName": "丰县"
            },
            {
                "id": 4522902,
                "areaName": "沛县"
            },
            {
                "id": 4522903,
                "areaName": "睢宁县"
            },
            {
                "id": 4522904,
                "areaName": "新沂市"
            },
            {
                "id": 4522905,
                "areaName": "邳州市"
            }
        ],
        "4522906": [
            {
                "id": 4522907,
                "areaName": "市辖区"
            },
            {
                "id": 4522908,
                "areaName": "天宁区"
            },
            {
                "id": 4522909,
                "areaName": "钟楼区"
            },
            {
                "id": 4522910,
                "areaName": "戚墅堰区"
            },
            {
                "id": 4522911,
                "areaName": "新北区"
            },
            {
                "id": 4522912,
                "areaName": "武进区"
            },
            {
                "id": 4522913,
                "areaName": "溧阳市"
            },
            {
                "id": 4522914,
                "areaName": "金坛市"
            }
        ],
        "4522915": [
            {
                "id": 4522916,
                "areaName": "市辖区"
            },
            {
                "id": 4522917,
                "areaName": "沧浪区"
            },
            {
                "id": 4522918,
                "areaName": "平江区"
            },
            {
                "id": 4522919,
                "areaName": "金阊区"
            },
            {
                "id": 4522920,
                "areaName": "虎丘区"
            },
            {
                "id": 4522921,
                "areaName": "吴中区"
            },
            {
                "id": 4522922,
                "areaName": "相城区"
            },
            {
                "id": 4522923,
                "areaName": "常熟市"
            },
            {
                "id": 4522924,
                "areaName": "张家港市"
            },
            {
                "id": 4522925,
                "areaName": "昆山市"
            },
            {
                "id": 4522926,
                "areaName": "吴江市"
            },
            {
                "id": 4522927,
                "areaName": "太仓市"
            }
        ],
        "4522928": [
            {
                "id": 4522929,
                "areaName": "市辖区"
            },
            {
                "id": 4522930,
                "areaName": "崇川区"
            },
            {
                "id": 4522931,
                "areaName": "港闸区"
            },
            {
                "id": 4522932,
                "areaName": "通州区"
            },
            {
                "id": 4522933,
                "areaName": "海安县"
            },
            {
                "id": 4522934,
                "areaName": "如东县"
            },
            {
                "id": 4522935,
                "areaName": "启东市"
            },
            {
                "id": 4522936,
                "areaName": "如皋市"
            },
            {
                "id": 4522937,
                "areaName": "海门市"
            }
        ],
        "4522938": [
            {
                "id": 4522939,
                "areaName": "市辖区"
            },
            {
                "id": 4522940,
                "areaName": "连云区"
            },
            {
                "id": 4522941,
                "areaName": "新浦区"
            },
            {
                "id": 4522942,
                "areaName": "海州区"
            },
            {
                "id": 4522943,
                "areaName": "赣榆县"
            },
            {
                "id": 4522944,
                "areaName": "东海县"
            },
            {
                "id": 4522945,
                "areaName": "灌云县"
            },
            {
                "id": 4522946,
                "areaName": "灌南县"
            }
        ],
        "4522947": [
            {
                "id": 4522948,
                "areaName": "市辖区"
            },
            {
                "id": 4522949,
                "areaName": "清河区"
            },
            {
                "id": 4522950,
                "areaName": "楚州区"
            },
            {
                "id": 4522951,
                "areaName": "淮阴区"
            },
            {
                "id": 4522952,
                "areaName": "清浦区"
            },
            {
                "id": 4522953,
                "areaName": "涟水县"
            },
            {
                "id": 4522954,
                "areaName": "洪泽县"
            },
            {
                "id": 4522955,
                "areaName": "盱眙县"
            },
            {
                "id": 4522956,
                "areaName": "金湖县"
            }
        ],
        "4522957": [
            {
                "id": 4522958,
                "areaName": "市辖区"
            },
            {
                "id": 4522959,
                "areaName": "亭湖区"
            },
            {
                "id": 4522960,
                "areaName": "盐都区"
            },
            {
                "id": 4522961,
                "areaName": "响水县"
            },
            {
                "id": 4522962,
                "areaName": "滨海县"
            },
            {
                "id": 4522963,
                "areaName": "阜宁县"
            },
            {
                "id": 4522964,
                "areaName": "射阳县"
            },
            {
                "id": 4522965,
                "areaName": "建湖县"
            },
            {
                "id": 4522966,
                "areaName": "东台市"
            },
            {
                "id": 4522967,
                "areaName": "大丰市"
            }
        ],
        "4522968": [
            {
                "id": 4522969,
                "areaName": "市辖区"
            },
            {
                "id": 4522970,
                "areaName": "广陵区"
            },
            {
                "id": 4522971,
                "areaName": "邗江区"
            },
            {
                "id": 4522972,
                "areaName": "维扬区"
            },
            {
                "id": 4522973,
                "areaName": "宝应县"
            },
            {
                "id": 4522974,
                "areaName": "仪征市"
            },
            {
                "id": 4522975,
                "areaName": "高邮市"
            },
            {
                "id": 4522976,
                "areaName": "江都市"
            }
        ],
        "4522977": [
            {
                "id": 4522978,
                "areaName": "市辖区"
            },
            {
                "id": 4522979,
                "areaName": "京口区"
            },
            {
                "id": 4522980,
                "areaName": "润州区"
            },
            {
                "id": 4522981,
                "areaName": "丹徒区"
            },
            {
                "id": 4522982,
                "areaName": "丹阳市"
            },
            {
                "id": 4522983,
                "areaName": "扬中市"
            },
            {
                "id": 4522984,
                "areaName": "句容市"
            }
        ],
        "4522985": [
            {
                "id": 4522986,
                "areaName": "市辖区"
            },
            {
                "id": 4522987,
                "areaName": "海陵区"
            },
            {
                "id": 4522988,
                "areaName": "高港区"
            },
            {
                "id": 4522989,
                "areaName": "兴化市"
            },
            {
                "id": 4522990,
                "areaName": "靖江市"
            },
            {
                "id": 4522991,
                "areaName": "泰兴市"
            },
            {
                "id": 4522992,
                "areaName": "姜堰市"
            }
        ],
        "4522993": [
            {
                "id": 4522994,
                "areaName": "市辖区"
            },
            {
                "id": 4522995,
                "areaName": "宿城区"
            },
            {
                "id": 4522996,
                "areaName": "宿豫区"
            },
            {
                "id": 4522997,
                "areaName": "沭阳县"
            },
            {
                "id": 4522998,
                "areaName": "泗阳县"
            },
            {
                "id": 4522999,
                "areaName": "泗洪县"
            }
        ],
        "4523001": [
            {
                "id": 4523002,
                "areaName": "市辖区"
            },
            {
                "id": 4523003,
                "areaName": "上城区"
            },
            {
                "id": 4523004,
                "areaName": "下城区"
            },
            {
                "id": 4523005,
                "areaName": "江干区"
            },
            {
                "id": 4523006,
                "areaName": "拱墅区"
            },
            {
                "id": 4523007,
                "areaName": "西湖区"
            },
            {
                "id": 4523008,
                "areaName": "滨江区"
            },
            {
                "id": 4523009,
                "areaName": "萧山区"
            },
            {
                "id": 4523010,
                "areaName": "余杭区"
            },
            {
                "id": 4523011,
                "areaName": "桐庐县"
            },
            {
                "id": 4523012,
                "areaName": "淳安县"
            },
            {
                "id": 4523013,
                "areaName": "建德市"
            },
            {
                "id": 4523014,
                "areaName": "富阳市"
            },
            {
                "id": 4523015,
                "areaName": "临安市"
            }
        ],
        "4523016": [
            {
                "id": 4523017,
                "areaName": "市辖区"
            },
            {
                "id": 4523018,
                "areaName": "海曙区"
            },
            {
                "id": 4523019,
                "areaName": "江东区"
            },
            {
                "id": 4523020,
                "areaName": "江北区"
            },
            {
                "id": 4523021,
                "areaName": "北仑区"
            },
            {
                "id": 4523022,
                "areaName": "镇海区"
            },
            {
                "id": 4523023,
                "areaName": "鄞州区"
            },
            {
                "id": 4523024,
                "areaName": "象山县"
            },
            {
                "id": 4523025,
                "areaName": "宁海县"
            },
            {
                "id": 4523026,
                "areaName": "余姚市"
            },
            {
                "id": 4523027,
                "areaName": "慈溪市"
            },
            {
                "id": 4523028,
                "areaName": "奉化市"
            }
        ],
        "4523029": [
            {
                "id": 4523030,
                "areaName": "市辖区"
            },
            {
                "id": 4523031,
                "areaName": "鹿城区"
            },
            {
                "id": 4523032,
                "areaName": "龙湾区"
            },
            {
                "id": 4523033,
                "areaName": "瓯海区"
            },
            {
                "id": 4523034,
                "areaName": "洞头县"
            },
            {
                "id": 4523035,
                "areaName": "永嘉县"
            },
            {
                "id": 4523036,
                "areaName": "平阳县"
            },
            {
                "id": 4523037,
                "areaName": "苍南县"
            },
            {
                "id": 4523038,
                "areaName": "文成县"
            },
            {
                "id": 4523039,
                "areaName": "泰顺县"
            },
            {
                "id": 4523040,
                "areaName": "瑞安市"
            },
            {
                "id": 4523041,
                "areaName": "乐清市"
            }
        ],
        "4523042": [
            {
                "id": 4523043,
                "areaName": "市辖区"
            },
            {
                "id": 4523044,
                "areaName": "南湖区"
            },
            {
                "id": 4523045,
                "areaName": "秀洲区"
            },
            {
                "id": 4523046,
                "areaName": "嘉善县"
            },
            {
                "id": 4523047,
                "areaName": "海盐县"
            },
            {
                "id": 4523048,
                "areaName": "海宁市"
            },
            {
                "id": 4523049,
                "areaName": "平湖市"
            },
            {
                "id": 4523050,
                "areaName": "桐乡市"
            }
        ],
        "4523051": [
            {
                "id": 4523052,
                "areaName": "市辖区"
            },
            {
                "id": 4523053,
                "areaName": "吴兴区"
            },
            {
                "id": 4523054,
                "areaName": "南浔区"
            },
            {
                "id": 4523055,
                "areaName": "德清县"
            },
            {
                "id": 4523056,
                "areaName": "长兴县"
            },
            {
                "id": 4523057,
                "areaName": "安吉县"
            }
        ],
        "4523058": [
            {
                "id": 4523059,
                "areaName": "市辖区"
            },
            {
                "id": 4523060,
                "areaName": "越城区"
            },
            {
                "id": 4523061,
                "areaName": "绍兴县"
            },
            {
                "id": 4523062,
                "areaName": "新昌县"
            },
            {
                "id": 4523063,
                "areaName": "诸暨市"
            },
            {
                "id": 4523064,
                "areaName": "上虞市"
            },
            {
                "id": 4523065,
                "areaName": "嵊州市"
            }
        ],
        "4523066": [
            {
                "id": 4523067,
                "areaName": "市辖区"
            },
            {
                "id": 4523068,
                "areaName": "婺城区"
            },
            {
                "id": 4523069,
                "areaName": "金东区"
            },
            {
                "id": 4523070,
                "areaName": "武义县"
            },
            {
                "id": 4523071,
                "areaName": "浦江县"
            },
            {
                "id": 4523072,
                "areaName": "磐安县"
            },
            {
                "id": 4523073,
                "areaName": "兰溪市"
            },
            {
                "id": 4523074,
                "areaName": "义乌市"
            },
            {
                "id": 4523075,
                "areaName": "东阳市"
            },
            {
                "id": 4523076,
                "areaName": "永康市"
            }
        ],
        "4523077": [
            {
                "id": 4523078,
                "areaName": "市辖区"
            },
            {
                "id": 4523079,
                "areaName": "柯城区"
            },
            {
                "id": 4523080,
                "areaName": "衢江区"
            },
            {
                "id": 4523081,
                "areaName": "常山县"
            },
            {
                "id": 4523082,
                "areaName": "开化县"
            },
            {
                "id": 4523083,
                "areaName": "龙游县"
            },
            {
                "id": 4523084,
                "areaName": "江山市"
            }
        ],
        "4523085": [
            {
                "id": 4523086,
                "areaName": "市辖区"
            },
            {
                "id": 4523087,
                "areaName": "定海区"
            },
            {
                "id": 4523088,
                "areaName": "普陀区"
            },
            {
                "id": 4523089,
                "areaName": "岱山县"
            },
            {
                "id": 4523090,
                "areaName": "嵊泗县"
            }
        ],
        "4523091": [
            {
                "id": 4523092,
                "areaName": "市辖区"
            },
            {
                "id": 4523093,
                "areaName": "椒江区"
            },
            {
                "id": 4523094,
                "areaName": "黄岩区"
            },
            {
                "id": 4523095,
                "areaName": "路桥区"
            },
            {
                "id": 4523096,
                "areaName": "玉环县"
            },
            {
                "id": 4523097,
                "areaName": "三门县"
            },
            {
                "id": 4523098,
                "areaName": "天台县"
            },
            {
                "id": 4523099,
                "areaName": "仙居县"
            },
            {
                "id": 4523100,
                "areaName": "温岭市"
            },
            {
                "id": 4523101,
                "areaName": "临海市"
            }
        ],
        "4523102": [
            {
                "id": 4523103,
                "areaName": "市辖区"
            },
            {
                "id": 4523104,
                "areaName": "莲都区"
            },
            {
                "id": 4523105,
                "areaName": "青田县"
            },
            {
                "id": 4523106,
                "areaName": "缙云县"
            },
            {
                "id": 4523107,
                "areaName": "遂昌县"
            },
            {
                "id": 4523108,
                "areaName": "松阳县"
            },
            {
                "id": 4523109,
                "areaName": "云和县"
            },
            {
                "id": 4523110,
                "areaName": "庆元县"
            },
            {
                "id": 4523111,
                "areaName": "景宁畲族自治县"
            },
            {
                "id": 4523112,
                "areaName": "龙泉市"
            }
        ],
        "4523114": [
            {
                "id": 4523115,
                "areaName": "市辖区"
            },
            {
                "id": 4523116,
                "areaName": "瑶海区"
            },
            {
                "id": 4523117,
                "areaName": "庐阳区"
            },
            {
                "id": 4523118,
                "areaName": "蜀山区"
            },
            {
                "id": 4523119,
                "areaName": "包河区"
            },
            {
                "id": 4523120,
                "areaName": "长丰县"
            },
            {
                "id": 4523121,
                "areaName": "肥东县"
            },
            {
                "id": 4523122,
                "areaName": "肥西县"
            }
        ],
        "4523123": [
            {
                "id": 4523124,
                "areaName": "市辖区"
            },
            {
                "id": 4523125,
                "areaName": "镜湖区"
            },
            {
                "id": 4523126,
                "areaName": "弋江区"
            },
            {
                "id": 4523127,
                "areaName": "鸠江区"
            },
            {
                "id": 4523128,
                "areaName": "三山区"
            },
            {
                "id": 4523129,
                "areaName": "芜湖县"
            },
            {
                "id": 4523130,
                "areaName": "繁昌县"
            },
            {
                "id": 4523131,
                "areaName": "南陵县"
            }
        ],
        "4523132": [
            {
                "id": 4523133,
                "areaName": "市辖区"
            },
            {
                "id": 4523134,
                "areaName": "龙子湖区"
            },
            {
                "id": 4523135,
                "areaName": "蚌山区"
            },
            {
                "id": 4523136,
                "areaName": "禹会区"
            },
            {
                "id": 4523137,
                "areaName": "淮上区"
            },
            {
                "id": 4523138,
                "areaName": "怀远县"
            },
            {
                "id": 4523139,
                "areaName": "五河县"
            },
            {
                "id": 4523140,
                "areaName": "固镇县"
            }
        ],
        "4523141": [
            {
                "id": 4523142,
                "areaName": "市辖区"
            },
            {
                "id": 4523143,
                "areaName": "大通区"
            },
            {
                "id": 4523144,
                "areaName": "田家庵区"
            },
            {
                "id": 4523145,
                "areaName": "谢家集区"
            },
            {
                "id": 4523146,
                "areaName": "八公山区"
            },
            {
                "id": 4523147,
                "areaName": "潘集区"
            },
            {
                "id": 4523148,
                "areaName": "凤台县"
            }
        ],
        "4523149": [
            {
                "id": 4523150,
                "areaName": "市辖区"
            },
            {
                "id": 4523151,
                "areaName": "金家庄区"
            },
            {
                "id": 4523152,
                "areaName": "花山区"
            },
            {
                "id": 4523153,
                "areaName": "雨山区"
            },
            {
                "id": 4523154,
                "areaName": "当涂县"
            }
        ],
        "4523155": [
            {
                "id": 4523156,
                "areaName": "市辖区"
            },
            {
                "id": 4523157,
                "areaName": "杜集区"
            },
            {
                "id": 4523158,
                "areaName": "相山区"
            },
            {
                "id": 4523159,
                "areaName": "烈山区"
            },
            {
                "id": 4523160,
                "areaName": "濉溪县"
            }
        ],
        "4523161": [
            {
                "id": 4523162,
                "areaName": "市辖区"
            },
            {
                "id": 4523163,
                "areaName": "铜官山区"
            },
            {
                "id": 4523164,
                "areaName": "狮子山区"
            },
            {
                "id": 4523165,
                "areaName": "郊区"
            },
            {
                "id": 4523166,
                "areaName": "铜陵县"
            }
        ],
        "4523167": [
            {
                "id": 4523168,
                "areaName": "市辖区"
            },
            {
                "id": 4523169,
                "areaName": "迎江区"
            },
            {
                "id": 4523170,
                "areaName": "大观区"
            },
            {
                "id": 4523171,
                "areaName": "宜秀区"
            },
            {
                "id": 4523172,
                "areaName": "怀宁县"
            },
            {
                "id": 4523173,
                "areaName": "枞阳县"
            },
            {
                "id": 4523174,
                "areaName": "潜山县"
            },
            {
                "id": 4523175,
                "areaName": "太湖县"
            },
            {
                "id": 4523176,
                "areaName": "宿松县"
            },
            {
                "id": 4523177,
                "areaName": "望江县"
            },
            {
                "id": 4523178,
                "areaName": "岳西县"
            },
            {
                "id": 4523179,
                "areaName": "桐城市"
            }
        ],
        "4523180": [
            {
                "id": 4523181,
                "areaName": "市辖区"
            },
            {
                "id": 4523182,
                "areaName": "屯溪区"
            },
            {
                "id": 4523183,
                "areaName": "黄山区"
            },
            {
                "id": 4523184,
                "areaName": "徽州区"
            },
            {
                "id": 4523185,
                "areaName": "歙县"
            },
            {
                "id": 4523186,
                "areaName": "休宁县"
            },
            {
                "id": 4523187,
                "areaName": "黟县"
            },
            {
                "id": 4523188,
                "areaName": "祁门县"
            }
        ],
        "4523189": [
            {
                "id": 4523190,
                "areaName": "市辖区"
            },
            {
                "id": 4523191,
                "areaName": "琅琊区"
            },
            {
                "id": 4523192,
                "areaName": "南谯区"
            },
            {
                "id": 4523193,
                "areaName": "来安县"
            },
            {
                "id": 4523194,
                "areaName": "全椒县"
            },
            {
                "id": 4523195,
                "areaName": "定远县"
            },
            {
                "id": 4523196,
                "areaName": "凤阳县"
            },
            {
                "id": 4523197,
                "areaName": "天长市"
            },
            {
                "id": 4523198,
                "areaName": "明光市"
            }
        ],
        "4523199": [
            {
                "id": 4523200,
                "areaName": "市辖区"
            },
            {
                "id": 4523201,
                "areaName": "颍州区"
            },
            {
                "id": 4523202,
                "areaName": "颍东区"
            },
            {
                "id": 4523203,
                "areaName": "颍泉区"
            },
            {
                "id": 4523204,
                "areaName": "临泉县"
            },
            {
                "id": 4523205,
                "areaName": "太和县"
            },
            {
                "id": 4523206,
                "areaName": "阜南县"
            },
            {
                "id": 4523207,
                "areaName": "颍上县"
            },
            {
                "id": 4523208,
                "areaName": "界首市"
            }
        ],
        "4523209": [
            {
                "id": 4523210,
                "areaName": "市辖区"
            },
            {
                "id": 4523211,
                "areaName": "埇桥区"
            },
            {
                "id": 4523212,
                "areaName": "砀山县"
            },
            {
                "id": 4523213,
                "areaName": "萧县"
            },
            {
                "id": 4523214,
                "areaName": "灵璧县"
            },
            {
                "id": 4523215,
                "areaName": "泗县"
            }
        ],
        "4523216": [
            {
                "id": 4523217,
                "areaName": "市辖区"
            },
            {
                "id": 4523218,
                "areaName": "居巢区"
            },
            {
                "id": 4523219,
                "areaName": "庐江县"
            },
            {
                "id": 4523220,
                "areaName": "无为县"
            },
            {
                "id": 4523221,
                "areaName": "含山县"
            },
            {
                "id": 4523222,
                "areaName": "和县"
            }
        ],
        "4523223": [
            {
                "id": 4523224,
                "areaName": "市辖区"
            },
            {
                "id": 4523225,
                "areaName": "金安区"
            },
            {
                "id": 4523226,
                "areaName": "裕安区"
            },
            {
                "id": 4523227,
                "areaName": "寿县"
            },
            {
                "id": 4523228,
                "areaName": "霍邱县"
            },
            {
                "id": 4523229,
                "areaName": "舒城县"
            },
            {
                "id": 4523230,
                "areaName": "金寨县"
            },
            {
                "id": 4523231,
                "areaName": "霍山县"
            }
        ],
        "4523232": [
            {
                "id": 4523233,
                "areaName": "市辖区"
            },
            {
                "id": 4523234,
                "areaName": "谯城区"
            },
            {
                "id": 4523235,
                "areaName": "涡阳县"
            },
            {
                "id": 4523236,
                "areaName": "蒙城县"
            },
            {
                "id": 4523237,
                "areaName": "利辛县"
            }
        ],
        "4523238": [
            {
                "id": 4523239,
                "areaName": "市辖区"
            },
            {
                "id": 4523240,
                "areaName": "贵池区"
            },
            {
                "id": 4523241,
                "areaName": "东至县"
            },
            {
                "id": 4523242,
                "areaName": "石台县"
            },
            {
                "id": 4523243,
                "areaName": "青阳县"
            }
        ],
        "4523244": [
            {
                "id": 4523245,
                "areaName": "市辖区"
            },
            {
                "id": 4523246,
                "areaName": "宣州区"
            },
            {
                "id": 4523247,
                "areaName": "郎溪县"
            },
            {
                "id": 4523248,
                "areaName": "广德县"
            },
            {
                "id": 4523249,
                "areaName": "泾县"
            },
            {
                "id": 4523250,
                "areaName": "绩溪县"
            },
            {
                "id": 4523251,
                "areaName": "旌德县"
            },
            {
                "id": 4523252,
                "areaName": "宁国市"
            }
        ],
        "4523254": [
            {
                "id": 4523255,
                "areaName": "市辖区"
            },
            {
                "id": 4523256,
                "areaName": "鼓楼区"
            },
            {
                "id": 4523257,
                "areaName": "台江区"
            },
            {
                "id": 4523258,
                "areaName": "仓山区"
            },
            {
                "id": 4523259,
                "areaName": "马尾区"
            },
            {
                "id": 4523260,
                "areaName": "晋安区"
            },
            {
                "id": 4523261,
                "areaName": "闽侯县"
            },
            {
                "id": 4523262,
                "areaName": "连江县"
            },
            {
                "id": 4523263,
                "areaName": "罗源县"
            },
            {
                "id": 4523264,
                "areaName": "闽清县"
            },
            {
                "id": 4523265,
                "areaName": "永泰县"
            },
            {
                "id": 4523266,
                "areaName": "平潭县"
            },
            {
                "id": 4523267,
                "areaName": "福清市"
            },
            {
                "id": 4523268,
                "areaName": "长乐市"
            }
        ],
        "4523269": [
            {
                "id": 4523270,
                "areaName": "市辖区"
            },
            {
                "id": 4523271,
                "areaName": "思明区"
            },
            {
                "id": 4523272,
                "areaName": "海沧区"
            },
            {
                "id": 4523273,
                "areaName": "湖里区"
            },
            {
                "id": 4523274,
                "areaName": "集美区"
            },
            {
                "id": 4523275,
                "areaName": "同安区"
            },
            {
                "id": 4523276,
                "areaName": "翔安区"
            }
        ],
        "4523277": [
            {
                "id": 4523278,
                "areaName": "市辖区"
            },
            {
                "id": 4523279,
                "areaName": "城厢区"
            },
            {
                "id": 4523280,
                "areaName": "涵江区"
            },
            {
                "id": 4523281,
                "areaName": "荔城区"
            },
            {
                "id": 4523282,
                "areaName": "秀屿区"
            },
            {
                "id": 4523283,
                "areaName": "仙游县"
            }
        ],
        "4523284": [
            {
                "id": 4523285,
                "areaName": "市辖区"
            },
            {
                "id": 4523286,
                "areaName": "梅列区"
            },
            {
                "id": 4523287,
                "areaName": "三元区"
            },
            {
                "id": 4523288,
                "areaName": "明溪县"
            },
            {
                "id": 4523289,
                "areaName": "清流县"
            },
            {
                "id": 4523290,
                "areaName": "宁化县"
            },
            {
                "id": 4523291,
                "areaName": "大田县"
            },
            {
                "id": 4523292,
                "areaName": "尤溪县"
            },
            {
                "id": 4523293,
                "areaName": "沙县"
            },
            {
                "id": 4523294,
                "areaName": "将乐县"
            },
            {
                "id": 4523295,
                "areaName": "泰宁县"
            },
            {
                "id": 4523296,
                "areaName": "建宁县"
            },
            {
                "id": 4523297,
                "areaName": "永安市"
            }
        ],
        "4523298": [
            {
                "id": 4523299,
                "areaName": "市辖区"
            },
            {
                "id": 4523300,
                "areaName": "鲤城区"
            },
            {
                "id": 4523301,
                "areaName": "丰泽区"
            },
            {
                "id": 4523302,
                "areaName": "洛江区"
            },
            {
                "id": 4523303,
                "areaName": "泉港区"
            },
            {
                "id": 4523304,
                "areaName": "惠安县"
            },
            {
                "id": 4523305,
                "areaName": "安溪县"
            },
            {
                "id": 4523306,
                "areaName": "永春县"
            },
            {
                "id": 4523307,
                "areaName": "德化县"
            },
            {
                "id": 4523308,
                "areaName": "金门县"
            },
            {
                "id": 4523309,
                "areaName": "石狮市"
            },
            {
                "id": 4523310,
                "areaName": "晋江市"
            },
            {
                "id": 4523311,
                "areaName": "南安市"
            }
        ],
        "4523312": [
            {
                "id": 4523313,
                "areaName": "市辖区"
            },
            {
                "id": 4523314,
                "areaName": "芗城区"
            },
            {
                "id": 4523315,
                "areaName": "龙文区"
            },
            {
                "id": 4523316,
                "areaName": "云霄县"
            },
            {
                "id": 4523317,
                "areaName": "漳浦县"
            },
            {
                "id": 4523318,
                "areaName": "诏安县"
            },
            {
                "id": 4523319,
                "areaName": "长泰县"
            },
            {
                "id": 4523320,
                "areaName": "东山县"
            },
            {
                "id": 4523321,
                "areaName": "南靖县"
            },
            {
                "id": 4523322,
                "areaName": "平和县"
            },
            {
                "id": 4523323,
                "areaName": "华安县"
            },
            {
                "id": 4523324,
                "areaName": "龙海市"
            }
        ],
        "4523325": [
            {
                "id": 4523326,
                "areaName": "市辖区"
            },
            {
                "id": 4523327,
                "areaName": "延平区"
            },
            {
                "id": 4523328,
                "areaName": "顺昌县"
            },
            {
                "id": 4523329,
                "areaName": "浦城县"
            },
            {
                "id": 4523330,
                "areaName": "光泽县"
            },
            {
                "id": 4523331,
                "areaName": "松溪县"
            },
            {
                "id": 4523332,
                "areaName": "政和县"
            },
            {
                "id": 4523333,
                "areaName": "邵武市"
            },
            {
                "id": 4523334,
                "areaName": "武夷山市"
            },
            {
                "id": 4523335,
                "areaName": "建瓯市"
            },
            {
                "id": 4523336,
                "areaName": "建阳市"
            }
        ],
        "4523337": [
            {
                "id": 4523338,
                "areaName": "市辖区"
            },
            {
                "id": 4523339,
                "areaName": "新罗区"
            },
            {
                "id": 4523340,
                "areaName": "长汀县"
            },
            {
                "id": 4523341,
                "areaName": "永定县"
            },
            {
                "id": 4523342,
                "areaName": "上杭县"
            },
            {
                "id": 4523343,
                "areaName": "武平县"
            },
            {
                "id": 4523344,
                "areaName": "连城县"
            },
            {
                "id": 4523345,
                "areaName": "漳平市"
            }
        ],
        "4523346": [
            {
                "id": 4523347,
                "areaName": "市辖区"
            },
            {
                "id": 4523348,
                "areaName": "蕉城区"
            },
            {
                "id": 4523349,
                "areaName": "霞浦县"
            },
            {
                "id": 4523350,
                "areaName": "古田县"
            },
            {
                "id": 4523351,
                "areaName": "屏南县"
            },
            {
                "id": 4523352,
                "areaName": "寿宁县"
            },
            {
                "id": 4523353,
                "areaName": "周宁县"
            },
            {
                "id": 4523354,
                "areaName": "柘荣县"
            },
            {
                "id": 4523355,
                "areaName": "福安市"
            },
            {
                "id": 4523356,
                "areaName": "福鼎市"
            }
        ],
        "4523358": [
            {
                "id": 4523359,
                "areaName": "市辖区"
            },
            {
                "id": 4523360,
                "areaName": "东湖区"
            },
            {
                "id": 4523361,
                "areaName": "西湖区"
            },
            {
                "id": 4523362,
                "areaName": "青云谱区"
            },
            {
                "id": 4523363,
                "areaName": "湾里区"
            },
            {
                "id": 4523364,
                "areaName": "青山湖区"
            },
            {
                "id": 4523365,
                "areaName": "南昌县"
            },
            {
                "id": 4523366,
                "areaName": "新建县"
            },
            {
                "id": 4523367,
                "areaName": "安义县"
            },
            {
                "id": 4523368,
                "areaName": "进贤县"
            }
        ],
        "4523369": [
            {
                "id": 4523370,
                "areaName": "市辖区"
            },
            {
                "id": 4523371,
                "areaName": "昌江区"
            },
            {
                "id": 4523372,
                "areaName": "珠山区"
            },
            {
                "id": 4523373,
                "areaName": "浮梁县"
            },
            {
                "id": 4523374,
                "areaName": "乐平市"
            }
        ],
        "4523375": [
            {
                "id": 4523376,
                "areaName": "市辖区"
            },
            {
                "id": 4523377,
                "areaName": "安源区"
            },
            {
                "id": 4523378,
                "areaName": "湘东区"
            },
            {
                "id": 4523379,
                "areaName": "莲花县"
            },
            {
                "id": 4523380,
                "areaName": "上栗县"
            },
            {
                "id": 4523381,
                "areaName": "芦溪县"
            }
        ],
        "4523382": [
            {
                "id": 4523383,
                "areaName": "市辖区"
            },
            {
                "id": 4523384,
                "areaName": "庐山区"
            },
            {
                "id": 4523385,
                "areaName": "浔阳区"
            },
            {
                "id": 4523386,
                "areaName": "九江县"
            },
            {
                "id": 4523387,
                "areaName": "武宁县"
            },
            {
                "id": 4523388,
                "areaName": "修水县"
            },
            {
                "id": 4523389,
                "areaName": "永修县"
            },
            {
                "id": 4523390,
                "areaName": "德安县"
            },
            {
                "id": 4523391,
                "areaName": "星子县"
            },
            {
                "id": 4523392,
                "areaName": "都昌县"
            },
            {
                "id": 4523393,
                "areaName": "湖口县"
            },
            {
                "id": 4523394,
                "areaName": "彭泽县"
            },
            {
                "id": 4523395,
                "areaName": "瑞昌市"
            },
            {
                "id": 4523396,
                "areaName": "共青城市"
            }
        ],
        "4523397": [
            {
                "id": 4523398,
                "areaName": "市辖区"
            },
            {
                "id": 4523399,
                "areaName": "渝水区"
            },
            {
                "id": 4523400,
                "areaName": "分宜县"
            }
        ],
        "4523401": [
            {
                "id": 4523402,
                "areaName": "市辖区"
            },
            {
                "id": 4523403,
                "areaName": "月湖区"
            },
            {
                "id": 4523404,
                "areaName": "余江县"
            },
            {
                "id": 4523405,
                "areaName": "贵溪市"
            }
        ],
        "4523406": [
            {
                "id": 4523407,
                "areaName": "市辖区"
            },
            {
                "id": 4523408,
                "areaName": "章贡区"
            },
            {
                "id": 4523409,
                "areaName": "赣县"
            },
            {
                "id": 4523410,
                "areaName": "信丰县"
            },
            {
                "id": 4523411,
                "areaName": "大余县"
            },
            {
                "id": 4523412,
                "areaName": "上犹县"
            },
            {
                "id": 4523413,
                "areaName": "崇义县"
            },
            {
                "id": 4523414,
                "areaName": "安远县"
            },
            {
                "id": 4523415,
                "areaName": "龙南县"
            },
            {
                "id": 4523416,
                "areaName": "定南县"
            },
            {
                "id": 4523417,
                "areaName": "全南县"
            },
            {
                "id": 4523418,
                "areaName": "宁都县"
            },
            {
                "id": 4523419,
                "areaName": "于都县"
            },
            {
                "id": 4523420,
                "areaName": "兴国县"
            },
            {
                "id": 4523421,
                "areaName": "会昌县"
            },
            {
                "id": 4523422,
                "areaName": "寻乌县"
            },
            {
                "id": 4523423,
                "areaName": "石城县"
            },
            {
                "id": 4523424,
                "areaName": "瑞金市"
            },
            {
                "id": 4523425,
                "areaName": "南康市"
            }
        ],
        "4523426": [
            {
                "id": 4523427,
                "areaName": "市辖区"
            },
            {
                "id": 4523428,
                "areaName": "吉州区"
            },
            {
                "id": 4523429,
                "areaName": "青原区"
            },
            {
                "id": 4523430,
                "areaName": "吉安县"
            },
            {
                "id": 4523431,
                "areaName": "吉水县"
            },
            {
                "id": 4523432,
                "areaName": "峡江县"
            },
            {
                "id": 4523433,
                "areaName": "新干县"
            },
            {
                "id": 4523434,
                "areaName": "永丰县"
            },
            {
                "id": 4523435,
                "areaName": "泰和县"
            },
            {
                "id": 4523436,
                "areaName": "遂川县"
            },
            {
                "id": 4523437,
                "areaName": "万安县"
            },
            {
                "id": 4523438,
                "areaName": "安福县"
            },
            {
                "id": 4523439,
                "areaName": "永新县"
            },
            {
                "id": 4523440,
                "areaName": "井冈山市"
            }
        ],
        "4523441": [
            {
                "id": 4523442,
                "areaName": "市辖区"
            },
            {
                "id": 4523443,
                "areaName": "袁州区"
            },
            {
                "id": 4523444,
                "areaName": "奉新县"
            },
            {
                "id": 4523445,
                "areaName": "万载县"
            },
            {
                "id": 4523446,
                "areaName": "上高县"
            },
            {
                "id": 4523447,
                "areaName": "宜丰县"
            },
            {
                "id": 4523448,
                "areaName": "靖安县"
            },
            {
                "id": 4523449,
                "areaName": "铜鼓县"
            },
            {
                "id": 4523450,
                "areaName": "丰城市"
            },
            {
                "id": 4523451,
                "areaName": "樟树市"
            },
            {
                "id": 4523452,
                "areaName": "高安市"
            }
        ],
        "4523453": [
            {
                "id": 4523454,
                "areaName": "市辖区"
            },
            {
                "id": 4523455,
                "areaName": "临川区"
            },
            {
                "id": 4523456,
                "areaName": "南城县"
            },
            {
                "id": 4523457,
                "areaName": "黎川县"
            },
            {
                "id": 4523458,
                "areaName": "南丰县"
            },
            {
                "id": 4523459,
                "areaName": "崇仁县"
            },
            {
                "id": 4523460,
                "areaName": "乐安县"
            },
            {
                "id": 4523461,
                "areaName": "宜黄县"
            },
            {
                "id": 4523462,
                "areaName": "金溪县"
            },
            {
                "id": 4523463,
                "areaName": "资溪县"
            },
            {
                "id": 4523464,
                "areaName": "东乡县"
            },
            {
                "id": 4523465,
                "areaName": "广昌县"
            }
        ],
        "4523466": [
            {
                "id": 4523467,
                "areaName": "市辖区"
            },
            {
                "id": 4523468,
                "areaName": "信州区"
            },
            {
                "id": 4523469,
                "areaName": "上饶县"
            },
            {
                "id": 4523470,
                "areaName": "广丰县"
            },
            {
                "id": 4523471,
                "areaName": "玉山县"
            },
            {
                "id": 4523472,
                "areaName": "铅山县"
            },
            {
                "id": 4523473,
                "areaName": "横峰县"
            },
            {
                "id": 4523474,
                "areaName": "弋阳县"
            },
            {
                "id": 4523475,
                "areaName": "余干县"
            },
            {
                "id": 4523476,
                "areaName": "鄱阳县"
            },
            {
                "id": 4523477,
                "areaName": "万年县"
            },
            {
                "id": 4523478,
                "areaName": "婺源县"
            },
            {
                "id": 4523479,
                "areaName": "德兴市"
            }
        ],
        "4523481": [
            {
                "id": 4523482,
                "areaName": "市辖区"
            },
            {
                "id": 4523483,
                "areaName": "历下区"
            },
            {
                "id": 4523484,
                "areaName": "市中区"
            },
            {
                "id": 4523485,
                "areaName": "槐荫区"
            },
            {
                "id": 4523486,
                "areaName": "天桥区"
            },
            {
                "id": 4523487,
                "areaName": "历城区"
            },
            {
                "id": 4523488,
                "areaName": "长清区"
            },
            {
                "id": 4523489,
                "areaName": "平阴县"
            },
            {
                "id": 4523490,
                "areaName": "济阳县"
            },
            {
                "id": 4523491,
                "areaName": "商河县"
            },
            {
                "id": 4523492,
                "areaName": "章丘市"
            }
        ],
        "4523493": [
            {
                "id": 4523494,
                "areaName": "市辖区"
            },
            {
                "id": 4523495,
                "areaName": "市南区"
            },
            {
                "id": 4523496,
                "areaName": "市北区"
            },
            {
                "id": 4523497,
                "areaName": "四方区"
            },
            {
                "id": 4523498,
                "areaName": "黄岛区"
            },
            {
                "id": 4523499,
                "areaName": "崂山区"
            },
            {
                "id": 4523500,
                "areaName": "李沧区"
            },
            {
                "id": 4523501,
                "areaName": "城阳区"
            },
            {
                "id": 4523502,
                "areaName": "胶州市"
            },
            {
                "id": 4523503,
                "areaName": "即墨市"
            },
            {
                "id": 4523504,
                "areaName": "平度市"
            },
            {
                "id": 4523505,
                "areaName": "胶南市"
            },
            {
                "id": 4523506,
                "areaName": "莱西市"
            }
        ],
        "4523507": [
            {
                "id": 4523508,
                "areaName": "市辖区"
            },
            {
                "id": 4523509,
                "areaName": "淄川区"
            },
            {
                "id": 4523510,
                "areaName": "张店区"
            },
            {
                "id": 4523511,
                "areaName": "博山区"
            },
            {
                "id": 4523512,
                "areaName": "临淄区"
            },
            {
                "id": 4523513,
                "areaName": "周村区"
            },
            {
                "id": 4523514,
                "areaName": "桓台县"
            },
            {
                "id": 4523515,
                "areaName": "高青县"
            },
            {
                "id": 4523516,
                "areaName": "沂源县"
            }
        ],
        "4523517": [
            {
                "id": 4523518,
                "areaName": "市辖区"
            },
            {
                "id": 4523519,
                "areaName": "市中区"
            },
            {
                "id": 4523520,
                "areaName": "薛城区"
            },
            {
                "id": 4523521,
                "areaName": "峄城区"
            },
            {
                "id": 4523522,
                "areaName": "台儿庄区"
            },
            {
                "id": 4523523,
                "areaName": "山亭区"
            },
            {
                "id": 4523524,
                "areaName": "滕州市"
            }
        ],
        "4523525": [
            {
                "id": 4523526,
                "areaName": "市辖区"
            },
            {
                "id": 4523527,
                "areaName": "东营区"
            },
            {
                "id": 4523528,
                "areaName": "河口区"
            },
            {
                "id": 4523529,
                "areaName": "垦利县"
            },
            {
                "id": 4523530,
                "areaName": "利津县"
            },
            {
                "id": 4523531,
                "areaName": "广饶县"
            }
        ],
        "4523532": [
            {
                "id": 4523533,
                "areaName": "市辖区"
            },
            {
                "id": 4523534,
                "areaName": "芝罘区"
            },
            {
                "id": 4523535,
                "areaName": "福山区"
            },
            {
                "id": 4523536,
                "areaName": "牟平区"
            },
            {
                "id": 4523537,
                "areaName": "莱山区"
            },
            {
                "id": 4523538,
                "areaName": "长岛县"
            },
            {
                "id": 4523539,
                "areaName": "龙口市"
            },
            {
                "id": 4523540,
                "areaName": "莱阳市"
            },
            {
                "id": 4523541,
                "areaName": "莱州市"
            },
            {
                "id": 4523542,
                "areaName": "蓬莱市"
            },
            {
                "id": 4523543,
                "areaName": "招远市"
            },
            {
                "id": 4523544,
                "areaName": "栖霞市"
            },
            {
                "id": 4523545,
                "areaName": "海阳市"
            }
        ],
        "4523546": [
            {
                "id": 4523547,
                "areaName": "市辖区"
            },
            {
                "id": 4523548,
                "areaName": "潍城区"
            },
            {
                "id": 4523549,
                "areaName": "寒亭区"
            },
            {
                "id": 4523550,
                "areaName": "坊子区"
            },
            {
                "id": 4523551,
                "areaName": "奎文区"
            },
            {
                "id": 4523552,
                "areaName": "临朐县"
            },
            {
                "id": 4523553,
                "areaName": "昌乐县"
            },
            {
                "id": 4523554,
                "areaName": "青州市"
            },
            {
                "id": 4523555,
                "areaName": "诸城市"
            },
            {
                "id": 4523556,
                "areaName": "寿光市"
            },
            {
                "id": 4523557,
                "areaName": "安丘市"
            },
            {
                "id": 4523558,
                "areaName": "高密市"
            },
            {
                "id": 4523559,
                "areaName": "昌邑市"
            }
        ],
        "4523560": [
            {
                "id": 4523561,
                "areaName": "市辖区"
            },
            {
                "id": 4523562,
                "areaName": "市中区"
            },
            {
                "id": 4523563,
                "areaName": "任城区"
            },
            {
                "id": 4523564,
                "areaName": "微山县"
            },
            {
                "id": 4523565,
                "areaName": "鱼台县"
            },
            {
                "id": 4523566,
                "areaName": "金乡县"
            },
            {
                "id": 4523567,
                "areaName": "嘉祥县"
            },
            {
                "id": 4523568,
                "areaName": "汶上县"
            },
            {
                "id": 4523569,
                "areaName": "泗水县"
            },
            {
                "id": 4523570,
                "areaName": "梁山县"
            },
            {
                "id": 4523571,
                "areaName": "曲阜市"
            },
            {
                "id": 4523572,
                "areaName": "兖州市"
            },
            {
                "id": 4523573,
                "areaName": "邹城市"
            }
        ],
        "4523574": [
            {
                "id": 4523575,
                "areaName": "市辖区"
            },
            {
                "id": 4523576,
                "areaName": "泰山区"
            },
            {
                "id": 4523577,
                "areaName": "岱岳区"
            },
            {
                "id": 4523578,
                "areaName": "宁阳县"
            },
            {
                "id": 4523579,
                "areaName": "东平县"
            },
            {
                "id": 4523580,
                "areaName": "新泰市"
            },
            {
                "id": 4523581,
                "areaName": "肥城市"
            }
        ],
        "4523582": [
            {
                "id": 4523583,
                "areaName": "市辖区"
            },
            {
                "id": 4523584,
                "areaName": "环翠区"
            },
            {
                "id": 4523585,
                "areaName": "文登市"
            },
            {
                "id": 4523586,
                "areaName": "荣成市"
            },
            {
                "id": 4523587,
                "areaName": "乳山市"
            }
        ],
        "4523588": [
            {
                "id": 4523589,
                "areaName": "市辖区"
            },
            {
                "id": 4523590,
                "areaName": "东港区"
            },
            {
                "id": 4523591,
                "areaName": "岚山区"
            },
            {
                "id": 4523592,
                "areaName": "五莲县"
            },
            {
                "id": 4523593,
                "areaName": "莒县"
            }
        ],
        "4523594": [
            {
                "id": 4523595,
                "areaName": "市辖区"
            },
            {
                "id": 4523596,
                "areaName": "莱城区"
            },
            {
                "id": 4523597,
                "areaName": "钢城区"
            }
        ],
        "4523598": [
            {
                "id": 4523599,
                "areaName": "市辖区"
            },
            {
                "id": 4523600,
                "areaName": "兰山区"
            },
            {
                "id": 4523601,
                "areaName": "罗庄区"
            },
            {
                "id": 4523602,
                "areaName": "河东区"
            },
            {
                "id": 4523603,
                "areaName": "沂南县"
            },
            {
                "id": 4523604,
                "areaName": "郯城县"
            },
            {
                "id": 4523605,
                "areaName": "沂水县"
            },
            {
                "id": 4523606,
                "areaName": "苍山县"
            },
            {
                "id": 4523607,
                "areaName": "费县"
            },
            {
                "id": 4523608,
                "areaName": "平邑县"
            },
            {
                "id": 4523609,
                "areaName": "莒南县"
            },
            {
                "id": 4523610,
                "areaName": "蒙阴县"
            },
            {
                "id": 4523611,
                "areaName": "临沭县"
            }
        ],
        "4523612": [
            {
                "id": 4523613,
                "areaName": "市辖区"
            },
            {
                "id": 4523614,
                "areaName": "德城区"
            },
            {
                "id": 4523615,
                "areaName": "陵县"
            },
            {
                "id": 4523616,
                "areaName": "宁津县"
            },
            {
                "id": 4523617,
                "areaName": "庆云县"
            },
            {
                "id": 4523618,
                "areaName": "临邑县"
            },
            {
                "id": 4523619,
                "areaName": "齐河县"
            },
            {
                "id": 4523620,
                "areaName": "平原县"
            },
            {
                "id": 4523621,
                "areaName": "夏津县"
            },
            {
                "id": 4523622,
                "areaName": "武城县"
            },
            {
                "id": 4523623,
                "areaName": "乐陵市"
            },
            {
                "id": 4523624,
                "areaName": "禹城市"
            }
        ],
        "4523625": [
            {
                "id": 4523626,
                "areaName": "市辖区"
            },
            {
                "id": 4523627,
                "areaName": "东昌府区"
            },
            {
                "id": 4523628,
                "areaName": "阳谷县"
            },
            {
                "id": 4523629,
                "areaName": "莘县"
            },
            {
                "id": 4523630,
                "areaName": "茌平县"
            },
            {
                "id": 4523631,
                "areaName": "东阿县"
            },
            {
                "id": 4523632,
                "areaName": "冠县"
            },
            {
                "id": 4523633,
                "areaName": "高唐县"
            },
            {
                "id": 4523634,
                "areaName": "临清市"
            }
        ],
        "4523635": [
            {
                "id": 4523636,
                "areaName": "市辖区"
            },
            {
                "id": 4523637,
                "areaName": "滨城区"
            },
            {
                "id": 4523638,
                "areaName": "惠民县"
            },
            {
                "id": 4523639,
                "areaName": "阳信县"
            },
            {
                "id": 4523640,
                "areaName": "无棣县"
            },
            {
                "id": 4523641,
                "areaName": "沾化县"
            },
            {
                "id": 4523642,
                "areaName": "博兴县"
            },
            {
                "id": 4523643,
                "areaName": "邹平县"
            }
        ],
        "4523644": [
            {
                "id": 4523645,
                "areaName": "市辖区"
            },
            {
                "id": 4523646,
                "areaName": "牡丹区"
            },
            {
                "id": 4523647,
                "areaName": "曹县"
            },
            {
                "id": 4523648,
                "areaName": "单县"
            },
            {
                "id": 4523649,
                "areaName": "成武县"
            },
            {
                "id": 4523650,
                "areaName": "巨野县"
            },
            {
                "id": 4523651,
                "areaName": "郓城县"
            },
            {
                "id": 4523652,
                "areaName": "鄄城县"
            },
            {
                "id": 4523653,
                "areaName": "定陶县"
            },
            {
                "id": 4523654,
                "areaName": "东明县"
            }
        ],
        "4523656": [
            {
                "id": 4523657,
                "areaName": "市辖区"
            },
            {
                "id": 4523658,
                "areaName": "中原区"
            },
            {
                "id": 4523659,
                "areaName": "二七区"
            },
            {
                "id": 4523660,
                "areaName": "管城回族区"
            },
            {
                "id": 4523661,
                "areaName": "金水区"
            },
            {
                "id": 4523662,
                "areaName": "上街区"
            },
            {
                "id": 4523663,
                "areaName": "惠济区"
            },
            {
                "id": 4523664,
                "areaName": "中牟县"
            },
            {
                "id": 4523665,
                "areaName": "巩义市"
            },
            {
                "id": 4523666,
                "areaName": "荥阳市"
            },
            {
                "id": 4523667,
                "areaName": "新密市"
            },
            {
                "id": 4523668,
                "areaName": "新郑市"
            },
            {
                "id": 4523669,
                "areaName": "登封市"
            }
        ],
        "4523670": [
            {
                "id": 4523671,
                "areaName": "市辖区"
            },
            {
                "id": 4523672,
                "areaName": "龙亭区"
            },
            {
                "id": 4523673,
                "areaName": "顺河回族区"
            },
            {
                "id": 4523674,
                "areaName": "鼓楼区"
            },
            {
                "id": 4523675,
                "areaName": "禹王台区"
            },
            {
                "id": 4523676,
                "areaName": "金明区"
            },
            {
                "id": 4523677,
                "areaName": "杞县"
            },
            {
                "id": 4523678,
                "areaName": "通许县"
            },
            {
                "id": 4523679,
                "areaName": "尉氏县"
            },
            {
                "id": 4523680,
                "areaName": "开封县"
            },
            {
                "id": 4523681,
                "areaName": "兰考县"
            }
        ],
        "4523682": [
            {
                "id": 4523683,
                "areaName": "市辖区"
            },
            {
                "id": 4523684,
                "areaName": "老城区"
            },
            {
                "id": 4523685,
                "areaName": "西工区"
            },
            {
                "id": 4523686,
                "areaName": "瀍河回族区"
            },
            {
                "id": 4523687,
                "areaName": "涧西区"
            },
            {
                "id": 4523688,
                "areaName": "吉利区"
            },
            {
                "id": 4523689,
                "areaName": "洛龙区"
            },
            {
                "id": 4523690,
                "areaName": "孟津县"
            },
            {
                "id": 4523691,
                "areaName": "新安县"
            },
            {
                "id": 4523692,
                "areaName": "栾川县"
            },
            {
                "id": 4523693,
                "areaName": "嵩县"
            },
            {
                "id": 4523694,
                "areaName": "汝阳县"
            },
            {
                "id": 4523695,
                "areaName": "宜阳县"
            },
            {
                "id": 4523696,
                "areaName": "洛宁县"
            },
            {
                "id": 4523697,
                "areaName": "伊川县"
            },
            {
                "id": 4523698,
                "areaName": "偃师市"
            }
        ],
        "4523699": [
            {
                "id": 4523700,
                "areaName": "市辖区"
            },
            {
                "id": 4523701,
                "areaName": "新华区"
            },
            {
                "id": 4523702,
                "areaName": "卫东区"
            },
            {
                "id": 4523703,
                "areaName": "石龙区"
            },
            {
                "id": 4523704,
                "areaName": "湛河区"
            },
            {
                "id": 4523705,
                "areaName": "宝丰县"
            },
            {
                "id": 4523706,
                "areaName": "叶县"
            },
            {
                "id": 4523707,
                "areaName": "鲁山县"
            },
            {
                "id": 4523708,
                "areaName": "郏县"
            },
            {
                "id": 4523709,
                "areaName": "舞钢市"
            },
            {
                "id": 4523710,
                "areaName": "汝州市"
            }
        ],
        "4523711": [
            {
                "id": 4523712,
                "areaName": "市辖区"
            },
            {
                "id": 4523713,
                "areaName": "文峰区"
            },
            {
                "id": 4523714,
                "areaName": "北关区"
            },
            {
                "id": 4523715,
                "areaName": "殷都区"
            },
            {
                "id": 4523716,
                "areaName": "龙安区"
            },
            {
                "id": 4523717,
                "areaName": "安阳县"
            },
            {
                "id": 4523718,
                "areaName": "汤阴县"
            },
            {
                "id": 4523719,
                "areaName": "滑县"
            },
            {
                "id": 4523720,
                "areaName": "内黄县"
            },
            {
                "id": 4523721,
                "areaName": "林州市"
            }
        ],
        "4523722": [
            {
                "id": 4523723,
                "areaName": "市辖区"
            },
            {
                "id": 4523724,
                "areaName": "鹤山区"
            },
            {
                "id": 4523725,
                "areaName": "山城区"
            },
            {
                "id": 4523726,
                "areaName": "淇滨区"
            },
            {
                "id": 4523727,
                "areaName": "浚县"
            },
            {
                "id": 4523728,
                "areaName": "淇县"
            }
        ],
        "4523729": [
            {
                "id": 4523730,
                "areaName": "市辖区"
            },
            {
                "id": 4523731,
                "areaName": "红旗区"
            },
            {
                "id": 4523732,
                "areaName": "卫滨区"
            },
            {
                "id": 4523733,
                "areaName": "凤泉区"
            },
            {
                "id": 4523734,
                "areaName": "牧野区"
            },
            {
                "id": 4523735,
                "areaName": "新乡县"
            },
            {
                "id": 4523736,
                "areaName": "获嘉县"
            },
            {
                "id": 4523737,
                "areaName": "原阳县"
            },
            {
                "id": 4523738,
                "areaName": "延津县"
            },
            {
                "id": 4523739,
                "areaName": "封丘县"
            },
            {
                "id": 4523740,
                "areaName": "长垣县"
            },
            {
                "id": 4523741,
                "areaName": "卫辉市"
            },
            {
                "id": 4523742,
                "areaName": "辉县市"
            }
        ],
        "4523743": [
            {
                "id": 4523744,
                "areaName": "市辖区"
            },
            {
                "id": 4523745,
                "areaName": "解放区"
            },
            {
                "id": 4523746,
                "areaName": "中站区"
            },
            {
                "id": 4523747,
                "areaName": "马村区"
            },
            {
                "id": 4523748,
                "areaName": "山阳区"
            },
            {
                "id": 4523749,
                "areaName": "修武县"
            },
            {
                "id": 4523750,
                "areaName": "博爱县"
            },
            {
                "id": 4523751,
                "areaName": "武陟县"
            },
            {
                "id": 4523752,
                "areaName": "温县"
            },
            {
                "id": 4523753,
                "areaName": "沁阳市"
            },
            {
                "id": 4523754,
                "areaName": "孟州市"
            }
        ],
        "4523755": [
            {
                "id": 4523756,
                "areaName": "市辖区"
            },
            {
                "id": 4523757,
                "areaName": "华龙区"
            },
            {
                "id": 4523758,
                "areaName": "清丰县"
            },
            {
                "id": 4523759,
                "areaName": "南乐县"
            },
            {
                "id": 4523760,
                "areaName": "范县"
            },
            {
                "id": 4523761,
                "areaName": "台前县"
            },
            {
                "id": 4523762,
                "areaName": "濮阳县"
            }
        ],
        "4523763": [
            {
                "id": 4523764,
                "areaName": "市辖区"
            },
            {
                "id": 4523765,
                "areaName": "魏都区"
            },
            {
                "id": 4523766,
                "areaName": "许昌县"
            },
            {
                "id": 4523767,
                "areaName": "鄢陵县"
            },
            {
                "id": 4523768,
                "areaName": "襄城县"
            },
            {
                "id": 4523769,
                "areaName": "禹州市"
            },
            {
                "id": 4523770,
                "areaName": "长葛市"
            }
        ],
        "4523771": [
            {
                "id": 4523772,
                "areaName": "市辖区"
            },
            {
                "id": 4523773,
                "areaName": "源汇区"
            },
            {
                "id": 4523774,
                "areaName": "郾城区"
            },
            {
                "id": 4523775,
                "areaName": "召陵区"
            },
            {
                "id": 4523776,
                "areaName": "舞阳县"
            },
            {
                "id": 4523777,
                "areaName": "临颍县"
            }
        ],
        "4523778": [
            {
                "id": 4523779,
                "areaName": "市辖区"
            },
            {
                "id": 4523780,
                "areaName": "湖滨区"
            },
            {
                "id": 4523781,
                "areaName": "渑池县"
            },
            {
                "id": 4523782,
                "areaName": "陕县"
            },
            {
                "id": 4523783,
                "areaName": "卢氏县"
            },
            {
                "id": 4523784,
                "areaName": "义马市"
            },
            {
                "id": 4523785,
                "areaName": "灵宝市"
            }
        ],
        "4523786": [
            {
                "id": 4523787,
                "areaName": "市辖区"
            },
            {
                "id": 4523788,
                "areaName": "宛城区"
            },
            {
                "id": 4523789,
                "areaName": "卧龙区"
            },
            {
                "id": 4523790,
                "areaName": "南召县"
            },
            {
                "id": 4523791,
                "areaName": "方城县"
            },
            {
                "id": 4523792,
                "areaName": "西峡县"
            },
            {
                "id": 4523793,
                "areaName": "镇平县"
            },
            {
                "id": 4523794,
                "areaName": "内乡县"
            },
            {
                "id": 4523795,
                "areaName": "淅川县"
            },
            {
                "id": 4523796,
                "areaName": "社旗县"
            },
            {
                "id": 4523797,
                "areaName": "唐河县"
            },
            {
                "id": 4523798,
                "areaName": "新野县"
            },
            {
                "id": 4523799,
                "areaName": "桐柏县"
            },
            {
                "id": 4523800,
                "areaName": "邓州市"
            }
        ],
        "4523801": [
            {
                "id": 4523802,
                "areaName": "市辖区"
            },
            {
                "id": 4523803,
                "areaName": "梁园区"
            },
            {
                "id": 4523804,
                "areaName": "睢阳区"
            },
            {
                "id": 4523805,
                "areaName": "民权县"
            },
            {
                "id": 4523806,
                "areaName": "睢县"
            },
            {
                "id": 4523807,
                "areaName": "宁陵县"
            },
            {
                "id": 4523808,
                "areaName": "柘城县"
            },
            {
                "id": 4523809,
                "areaName": "虞城县"
            },
            {
                "id": 4523810,
                "areaName": "夏邑县"
            },
            {
                "id": 4523811,
                "areaName": "永城市"
            }
        ],
        "4523812": [
            {
                "id": 4523813,
                "areaName": "市辖区"
            },
            {
                "id": 4523814,
                "areaName": "浉河区"
            },
            {
                "id": 4523815,
                "areaName": "平桥区"
            },
            {
                "id": 4523816,
                "areaName": "罗山县"
            },
            {
                "id": 4523817,
                "areaName": "光山县"
            },
            {
                "id": 4523818,
                "areaName": "新县"
            },
            {
                "id": 4523819,
                "areaName": "商城县"
            },
            {
                "id": 4523820,
                "areaName": "固始县"
            },
            {
                "id": 4523821,
                "areaName": "潢川县"
            },
            {
                "id": 4523822,
                "areaName": "淮滨县"
            },
            {
                "id": 4523823,
                "areaName": "息县"
            }
        ],
        "4523824": [
            {
                "id": 4523825,
                "areaName": "市辖区"
            },
            {
                "id": 4523826,
                "areaName": "川汇区"
            },
            {
                "id": 4523827,
                "areaName": "扶沟县"
            },
            {
                "id": 4523828,
                "areaName": "西华县"
            },
            {
                "id": 4523829,
                "areaName": "商水县"
            },
            {
                "id": 4523830,
                "areaName": "沈丘县"
            },
            {
                "id": 4523831,
                "areaName": "郸城县"
            },
            {
                "id": 4523832,
                "areaName": "淮阳县"
            },
            {
                "id": 4523833,
                "areaName": "太康县"
            },
            {
                "id": 4523834,
                "areaName": "鹿邑县"
            },
            {
                "id": 4523835,
                "areaName": "项城市"
            }
        ],
        "4523836": [
            {
                "id": 4523837,
                "areaName": "市辖区"
            },
            {
                "id": 4523838,
                "areaName": "驿城区"
            },
            {
                "id": 4523839,
                "areaName": "西平县"
            },
            {
                "id": 4523840,
                "areaName": "上蔡县"
            },
            {
                "id": 4523841,
                "areaName": "平舆县"
            },
            {
                "id": 4523842,
                "areaName": "正阳县"
            },
            {
                "id": 4523843,
                "areaName": "确山县"
            },
            {
                "id": 4523844,
                "areaName": "泌阳县"
            },
            {
                "id": 4523845,
                "areaName": "汝南县"
            },
            {
                "id": 4523846,
                "areaName": "遂平县"
            },
            {
                "id": 4523847,
                "areaName": "新蔡县"
            }
        ],
        "4523848": [
            {
                "id": 4523849,
                "areaName": "济源市"
            }
        ],
        "4523851": [
            {
                "id": 4523852,
                "areaName": "市辖区"
            },
            {
                "id": 4523853,
                "areaName": "江岸区"
            },
            {
                "id": 4523854,
                "areaName": "江汉区"
            },
            {
                "id": 4523855,
                "areaName": "硚口区"
            },
            {
                "id": 4523856,
                "areaName": "汉阳区"
            },
            {
                "id": 4523857,
                "areaName": "武昌区"
            },
            {
                "id": 4523858,
                "areaName": "青山区"
            },
            {
                "id": 4523859,
                "areaName": "洪山区"
            },
            {
                "id": 4523860,
                "areaName": "东西湖区"
            },
            {
                "id": 4523861,
                "areaName": "汉南区"
            },
            {
                "id": 4523862,
                "areaName": "蔡甸区"
            },
            {
                "id": 4523863,
                "areaName": "江夏区"
            },
            {
                "id": 4523864,
                "areaName": "黄陂区"
            },
            {
                "id": 4523865,
                "areaName": "新洲区"
            }
        ],
        "4523866": [
            {
                "id": 4523867,
                "areaName": "市辖区"
            },
            {
                "id": 4523868,
                "areaName": "黄石港区"
            },
            {
                "id": 4523869,
                "areaName": "西塞山区"
            },
            {
                "id": 4523870,
                "areaName": "下陆区"
            },
            {
                "id": 4523871,
                "areaName": "铁山区"
            },
            {
                "id": 4523872,
                "areaName": "阳新县"
            },
            {
                "id": 4523873,
                "areaName": "大冶市"
            }
        ],
        "4523874": [
            {
                "id": 4523875,
                "areaName": "市辖区"
            },
            {
                "id": 4523876,
                "areaName": "茅箭区"
            },
            {
                "id": 4523877,
                "areaName": "张湾区"
            },
            {
                "id": 4523878,
                "areaName": "郧县"
            },
            {
                "id": 4523879,
                "areaName": "郧西县"
            },
            {
                "id": 4523880,
                "areaName": "竹山县"
            },
            {
                "id": 4523881,
                "areaName": "竹溪县"
            },
            {
                "id": 4523882,
                "areaName": "房县"
            },
            {
                "id": 4523883,
                "areaName": "丹江口市"
            }
        ],
        "4523884": [
            {
                "id": 4523885,
                "areaName": "市辖区"
            },
            {
                "id": 4523886,
                "areaName": "西陵区"
            },
            {
                "id": 4523887,
                "areaName": "伍家岗区"
            },
            {
                "id": 4523888,
                "areaName": "点军区"
            },
            {
                "id": 4523889,
                "areaName": "猇亭区"
            },
            {
                "id": 4523890,
                "areaName": "夷陵区"
            },
            {
                "id": 4523891,
                "areaName": "远安县"
            },
            {
                "id": 4523892,
                "areaName": "兴山县"
            },
            {
                "id": 4523893,
                "areaName": "秭归县"
            },
            {
                "id": 4523894,
                "areaName": "长阳土家族自治县"
            },
            {
                "id": 4523895,
                "areaName": "五峰土家族自治县"
            },
            {
                "id": 4523896,
                "areaName": "宜都市"
            },
            {
                "id": 4523897,
                "areaName": "当阳市"
            },
            {
                "id": 4523898,
                "areaName": "枝江市"
            }
        ],
        "4523899": [
            {
                "id": 4523900,
                "areaName": "市辖区"
            },
            {
                "id": 4523901,
                "areaName": "襄城区"
            },
            {
                "id": 4523902,
                "areaName": "樊城区"
            },
            {
                "id": 4523903,
                "areaName": "襄阳区"
            },
            {
                "id": 4523904,
                "areaName": "南漳县"
            },
            {
                "id": 4523905,
                "areaName": "谷城县"
            },
            {
                "id": 4523906,
                "areaName": "保康县"
            },
            {
                "id": 4523907,
                "areaName": "老河口市"
            },
            {
                "id": 4523908,
                "areaName": "枣阳市"
            },
            {
                "id": 4523909,
                "areaName": "宜城市"
            }
        ],
        "4523910": [
            {
                "id": 4523911,
                "areaName": "市辖区"
            },
            {
                "id": 4523912,
                "areaName": "梁子湖区"
            },
            {
                "id": 4523913,
                "areaName": "华容区"
            },
            {
                "id": 4523914,
                "areaName": "鄂城区"
            }
        ],
        "4523915": [
            {
                "id": 4523916,
                "areaName": "市辖区"
            },
            {
                "id": 4523917,
                "areaName": "东宝区"
            },
            {
                "id": 4523918,
                "areaName": "掇刀区"
            },
            {
                "id": 4523919,
                "areaName": "京山县"
            },
            {
                "id": 4523920,
                "areaName": "沙洋县"
            },
            {
                "id": 4523921,
                "areaName": "钟祥市"
            }
        ],
        "4523922": [
            {
                "id": 4523923,
                "areaName": "市辖区"
            },
            {
                "id": 4523924,
                "areaName": "孝南区"
            },
            {
                "id": 4523925,
                "areaName": "孝昌县"
            },
            {
                "id": 4523926,
                "areaName": "大悟县"
            },
            {
                "id": 4523927,
                "areaName": "云梦县"
            },
            {
                "id": 4523928,
                "areaName": "应城市"
            },
            {
                "id": 4523929,
                "areaName": "安陆市"
            },
            {
                "id": 4523930,
                "areaName": "汉川市"
            }
        ],
        "4523931": [
            {
                "id": 4523932,
                "areaName": "市辖区"
            },
            {
                "id": 4523933,
                "areaName": "沙市区"
            },
            {
                "id": 4523934,
                "areaName": "荆州区"
            },
            {
                "id": 4523935,
                "areaName": "公安县"
            },
            {
                "id": 4523936,
                "areaName": "监利县"
            },
            {
                "id": 4523937,
                "areaName": "江陵县"
            },
            {
                "id": 4523938,
                "areaName": "石首市"
            },
            {
                "id": 4523939,
                "areaName": "洪湖市"
            },
            {
                "id": 4523940,
                "areaName": "松滋市"
            }
        ],
        "4523941": [
            {
                "id": 4523942,
                "areaName": "市辖区"
            },
            {
                "id": 4523943,
                "areaName": "黄州区"
            },
            {
                "id": 4523944,
                "areaName": "团风县"
            },
            {
                "id": 4523945,
                "areaName": "红安县"
            },
            {
                "id": 4523946,
                "areaName": "罗田县"
            },
            {
                "id": 4523947,
                "areaName": "英山县"
            },
            {
                "id": 4523948,
                "areaName": "浠水县"
            },
            {
                "id": 4523949,
                "areaName": "蕲春县"
            },
            {
                "id": 4523950,
                "areaName": "黄梅县"
            },
            {
                "id": 4523951,
                "areaName": "麻城市"
            },
            {
                "id": 4523952,
                "areaName": "武穴市"
            }
        ],
        "4523953": [
            {
                "id": 4523954,
                "areaName": "市辖区"
            },
            {
                "id": 4523955,
                "areaName": "咸安区"
            },
            {
                "id": 4523956,
                "areaName": "嘉鱼县"
            },
            {
                "id": 4523957,
                "areaName": "通城县"
            },
            {
                "id": 4523958,
                "areaName": "崇阳县"
            },
            {
                "id": 4523959,
                "areaName": "通山县"
            },
            {
                "id": 4523960,
                "areaName": "赤壁市"
            }
        ],
        "4523961": [
            {
                "id": 4523962,
                "areaName": "市辖区"
            },
            {
                "id": 4523963,
                "areaName": "曾都区"
            },
            {
                "id": 4523964,
                "areaName": "随县"
            },
            {
                "id": 4523965,
                "areaName": "广水市"
            }
        ],
        "4523966": [
            {
                "id": 4523967,
                "areaName": "恩施市"
            },
            {
                "id": 4523968,
                "areaName": "利川市"
            },
            {
                "id": 4523969,
                "areaName": "建始县"
            },
            {
                "id": 4523970,
                "areaName": "巴东县"
            },
            {
                "id": 4523971,
                "areaName": "宣恩县"
            },
            {
                "id": 4523972,
                "areaName": "咸丰县"
            },
            {
                "id": 4523973,
                "areaName": "来凤县"
            },
            {
                "id": 4523974,
                "areaName": "鹤峰县"
            }
        ],
        "4523975": [
            {
                "id": 4523976,
                "areaName": "仙桃市"
            },
            {
                "id": 4523977,
                "areaName": "潜江市"
            },
            {
                "id": 4523978,
                "areaName": "天门市"
            },
            {
                "id": 4523979,
                "areaName": "神农架林区"
            }
        ],
        "4523981": [
            {
                "id": 4523982,
                "areaName": "市辖区"
            },
            {
                "id": 4523983,
                "areaName": "芙蓉区"
            },
            {
                "id": 4523984,
                "areaName": "天心区"
            },
            {
                "id": 4523985,
                "areaName": "岳麓区"
            },
            {
                "id": 4523986,
                "areaName": "开福区"
            },
            {
                "id": 4523987,
                "areaName": "雨花区"
            },
            {
                "id": 4523988,
                "areaName": "长沙县"
            },
            {
                "id": 4523989,
                "areaName": "望城县"
            },
            {
                "id": 4523990,
                "areaName": "宁乡县"
            },
            {
                "id": 4523991,
                "areaName": "浏阳市"
            }
        ],
        "4523992": [
            {
                "id": 4523993,
                "areaName": "市辖区"
            },
            {
                "id": 4523994,
                "areaName": "荷塘区"
            },
            {
                "id": 4523995,
                "areaName": "芦淞区"
            },
            {
                "id": 4523996,
                "areaName": "石峰区"
            },
            {
                "id": 4523997,
                "areaName": "天元区"
            },
            {
                "id": 4523998,
                "areaName": "株洲县"
            },
            {
                "id": 4523999,
                "areaName": "攸县"
            },
            {
                "id": 4524000,
                "areaName": "茶陵县"
            },
            {
                "id": 4524001,
                "areaName": "炎陵县"
            },
            {
                "id": 4524002,
                "areaName": "醴陵市"
            }
        ],
        "4524003": [
            {
                "id": 4524004,
                "areaName": "市辖区"
            },
            {
                "id": 4524005,
                "areaName": "雨湖区"
            },
            {
                "id": 4524006,
                "areaName": "岳塘区"
            },
            {
                "id": 4524007,
                "areaName": "湘潭县"
            },
            {
                "id": 4524008,
                "areaName": "湘乡市"
            },
            {
                "id": 4524009,
                "areaName": "韶山市"
            }
        ],
        "4524010": [
            {
                "id": 4524011,
                "areaName": "市辖区"
            },
            {
                "id": 4524012,
                "areaName": "珠晖区"
            },
            {
                "id": 4524013,
                "areaName": "雁峰区"
            },
            {
                "id": 4524014,
                "areaName": "石鼓区"
            },
            {
                "id": 4524015,
                "areaName": "蒸湘区"
            },
            {
                "id": 4524016,
                "areaName": "南岳区"
            },
            {
                "id": 4524017,
                "areaName": "衡阳县"
            },
            {
                "id": 4524018,
                "areaName": "衡南县"
            },
            {
                "id": 4524019,
                "areaName": "衡山县"
            },
            {
                "id": 4524020,
                "areaName": "衡东县"
            },
            {
                "id": 4524021,
                "areaName": "祁东县"
            },
            {
                "id": 4524022,
                "areaName": "耒阳市"
            },
            {
                "id": 4524023,
                "areaName": "常宁市"
            }
        ],
        "4524024": [
            {
                "id": 4524025,
                "areaName": "市辖区"
            },
            {
                "id": 4524026,
                "areaName": "双清区"
            },
            {
                "id": 4524027,
                "areaName": "大祥区"
            },
            {
                "id": 4524028,
                "areaName": "北塔区"
            },
            {
                "id": 4524029,
                "areaName": "邵东县"
            },
            {
                "id": 4524030,
                "areaName": "新邵县"
            },
            {
                "id": 4524031,
                "areaName": "邵阳县"
            },
            {
                "id": 4524032,
                "areaName": "隆回县"
            },
            {
                "id": 4524033,
                "areaName": "洞口县"
            },
            {
                "id": 4524034,
                "areaName": "绥宁县"
            },
            {
                "id": 4524035,
                "areaName": "新宁县"
            },
            {
                "id": 4524036,
                "areaName": "城步苗族自治县"
            },
            {
                "id": 4524037,
                "areaName": "武冈市"
            }
        ],
        "4524038": [
            {
                "id": 4524039,
                "areaName": "市辖区"
            },
            {
                "id": 4524040,
                "areaName": "岳阳楼区"
            },
            {
                "id": 4524041,
                "areaName": "云溪区"
            },
            {
                "id": 4524042,
                "areaName": "君山区"
            },
            {
                "id": 4524043,
                "areaName": "岳阳县"
            },
            {
                "id": 4524044,
                "areaName": "华容县"
            },
            {
                "id": 4524045,
                "areaName": "湘阴县"
            },
            {
                "id": 4524046,
                "areaName": "平江县"
            },
            {
                "id": 4524047,
                "areaName": "汨罗市"
            },
            {
                "id": 4524048,
                "areaName": "临湘市"
            }
        ],
        "4524049": [
            {
                "id": 4524050,
                "areaName": "市辖区"
            },
            {
                "id": 4524051,
                "areaName": "武陵区"
            },
            {
                "id": 4524052,
                "areaName": "鼎城区"
            },
            {
                "id": 4524053,
                "areaName": "安乡县"
            },
            {
                "id": 4524054,
                "areaName": "汉寿县"
            },
            {
                "id": 4524055,
                "areaName": "澧县"
            },
            {
                "id": 4524056,
                "areaName": "临澧县"
            },
            {
                "id": 4524057,
                "areaName": "桃源县"
            },
            {
                "id": 4524058,
                "areaName": "石门县"
            },
            {
                "id": 4524059,
                "areaName": "津市市"
            }
        ],
        "4524060": [
            {
                "id": 4524061,
                "areaName": "市辖区"
            },
            {
                "id": 4524062,
                "areaName": "永定区"
            },
            {
                "id": 4524063,
                "areaName": "武陵源区"
            },
            {
                "id": 4524064,
                "areaName": "慈利县"
            },
            {
                "id": 4524065,
                "areaName": "桑植县"
            }
        ],
        "4524066": [
            {
                "id": 4524067,
                "areaName": "市辖区"
            },
            {
                "id": 4524068,
                "areaName": "资阳区"
            },
            {
                "id": 4524069,
                "areaName": "赫山区"
            },
            {
                "id": 4524070,
                "areaName": "南县"
            },
            {
                "id": 4524071,
                "areaName": "桃江县"
            },
            {
                "id": 4524072,
                "areaName": "安化县"
            },
            {
                "id": 4524073,
                "areaName": "沅江市"
            }
        ],
        "4524074": [
            {
                "id": 4524075,
                "areaName": "市辖区"
            },
            {
                "id": 4524076,
                "areaName": "北湖区"
            },
            {
                "id": 4524077,
                "areaName": "苏仙区"
            },
            {
                "id": 4524078,
                "areaName": "桂阳县"
            },
            {
                "id": 4524079,
                "areaName": "宜章县"
            },
            {
                "id": 4524080,
                "areaName": "永兴县"
            },
            {
                "id": 4524081,
                "areaName": "嘉禾县"
            },
            {
                "id": 4524082,
                "areaName": "临武县"
            },
            {
                "id": 4524083,
                "areaName": "汝城县"
            },
            {
                "id": 4524084,
                "areaName": "桂东县"
            },
            {
                "id": 4524085,
                "areaName": "安仁县"
            },
            {
                "id": 4524086,
                "areaName": "资兴市"
            }
        ],
        "4524087": [
            {
                "id": 4524088,
                "areaName": "市辖区"
            },
            {
                "id": 4524089,
                "areaName": "零陵区"
            },
            {
                "id": 4524090,
                "areaName": "冷水滩区"
            },
            {
                "id": 4524091,
                "areaName": "祁阳县"
            },
            {
                "id": 4524092,
                "areaName": "东安县"
            },
            {
                "id": 4524093,
                "areaName": "双牌县"
            },
            {
                "id": 4524094,
                "areaName": "道县"
            },
            {
                "id": 4524095,
                "areaName": "江永县"
            },
            {
                "id": 4524096,
                "areaName": "宁远县"
            },
            {
                "id": 4524097,
                "areaName": "蓝山县"
            },
            {
                "id": 4524098,
                "areaName": "新田县"
            },
            {
                "id": 4524099,
                "areaName": "江华瑶族自治县"
            }
        ],
        "4524100": [
            {
                "id": 4524101,
                "areaName": "市辖区"
            },
            {
                "id": 4524102,
                "areaName": "鹤城区"
            },
            {
                "id": 4524103,
                "areaName": "中方县"
            },
            {
                "id": 4524104,
                "areaName": "沅陵县"
            },
            {
                "id": 4524105,
                "areaName": "辰溪县"
            },
            {
                "id": 4524106,
                "areaName": "溆浦县"
            },
            {
                "id": 4524107,
                "areaName": "会同县"
            },
            {
                "id": 4524108,
                "areaName": "麻阳苗族自治县"
            },
            {
                "id": 4524109,
                "areaName": "新晃侗族自治县"
            },
            {
                "id": 4524110,
                "areaName": "芷江侗族自治县"
            },
            {
                "id": 4524111,
                "areaName": "靖州苗族侗族自治县"
            },
            {
                "id": 4524112,
                "areaName": "通道侗族自治县"
            },
            {
                "id": 4524113,
                "areaName": "洪江市"
            }
        ],
        "4524114": [
            {
                "id": 4524115,
                "areaName": "市辖区"
            },
            {
                "id": 4524116,
                "areaName": "娄星区"
            },
            {
                "id": 4524117,
                "areaName": "双峰县"
            },
            {
                "id": 4524118,
                "areaName": "新化县"
            },
            {
                "id": 4524119,
                "areaName": "冷水江市"
            },
            {
                "id": 4524120,
                "areaName": "涟源市"
            }
        ],
        "4524121": [
            {
                "id": 4524122,
                "areaName": "吉首市"
            },
            {
                "id": 4524123,
                "areaName": "泸溪县"
            },
            {
                "id": 4524124,
                "areaName": "凤凰县"
            },
            {
                "id": 4524125,
                "areaName": "花垣县"
            },
            {
                "id": 4524126,
                "areaName": "保靖县"
            },
            {
                "id": 4524127,
                "areaName": "古丈县"
            },
            {
                "id": 4524128,
                "areaName": "永顺县"
            },
            {
                "id": 4524129,
                "areaName": "龙山县"
            }
        ],
        "4524131": [
            {
                "id": 4524132,
                "areaName": "市辖区"
            },
            {
                "id": 4524133,
                "areaName": "荔湾区"
            },
            {
                "id": 4524134,
                "areaName": "越秀区"
            },
            {
                "id": 4524135,
                "areaName": "海珠区"
            },
            {
                "id": 4524136,
                "areaName": "天河区"
            },
            {
                "id": 4524137,
                "areaName": "白云区"
            },
            {
                "id": 4524138,
                "areaName": "黄埔区"
            },
            {
                "id": 4524139,
                "areaName": "番禺区"
            },
            {
                "id": 4524140,
                "areaName": "花都区"
            },
            {
                "id": 4524141,
                "areaName": "南沙区"
            },
            {
                "id": 4524142,
                "areaName": "萝岗区"
            },
            {
                "id": 4524143,
                "areaName": "增城市"
            },
            {
                "id": 4524144,
                "areaName": "从化市"
            }
        ],
        "4524145": [
            {
                "id": 4524146,
                "areaName": "市辖区"
            },
            {
                "id": 4524147,
                "areaName": "武江区"
            },
            {
                "id": 4524148,
                "areaName": "浈江区"
            },
            {
                "id": 4524149,
                "areaName": "曲江区"
            },
            {
                "id": 4524150,
                "areaName": "始兴县"
            },
            {
                "id": 4524151,
                "areaName": "仁化县"
            },
            {
                "id": 4524152,
                "areaName": "翁源县"
            },
            {
                "id": 4524153,
                "areaName": "乳源瑶族自治县"
            },
            {
                "id": 4524154,
                "areaName": "新丰县"
            },
            {
                "id": 4524155,
                "areaName": "乐昌市"
            },
            {
                "id": 4524156,
                "areaName": "南雄市"
            }
        ],
        "4524157": [
            {
                "id": 4524158,
                "areaName": "市辖区"
            },
            {
                "id": 4524159,
                "areaName": "罗湖区"
            },
            {
                "id": 4524160,
                "areaName": "福田区"
            },
            {
                "id": 4524161,
                "areaName": "南山区"
            },
            {
                "id": 4524162,
                "areaName": "宝安区"
            },
            {
                "id": 4524163,
                "areaName": "龙岗区"
            },
            {
                "id": 4524164,
                "areaName": "盐田区"
            }
        ],
        "4524165": [
            {
                "id": 4524166,
                "areaName": "市辖区"
            },
            {
                "id": 4524167,
                "areaName": "香洲区"
            },
            {
                "id": 4524168,
                "areaName": "斗门区"
            },
            {
                "id": 4524169,
                "areaName": "金湾区"
            }
        ],
        "4524170": [
            {
                "id": 4524171,
                "areaName": "市辖区"
            },
            {
                "id": 4524172,
                "areaName": "龙湖区"
            },
            {
                "id": 4524173,
                "areaName": "金平区"
            },
            {
                "id": 4524174,
                "areaName": "濠江区"
            },
            {
                "id": 4524175,
                "areaName": "潮阳区"
            },
            {
                "id": 4524176,
                "areaName": "潮南区"
            },
            {
                "id": 4524177,
                "areaName": "澄海区"
            },
            {
                "id": 4524178,
                "areaName": "南澳县"
            }
        ],
        "4524179": [
            {
                "id": 4524180,
                "areaName": "市辖区"
            },
            {
                "id": 4524181,
                "areaName": "禅城区"
            },
            {
                "id": 4524182,
                "areaName": "南海区"
            },
            {
                "id": 4524183,
                "areaName": "顺德区"
            },
            {
                "id": 4524184,
                "areaName": "三水区"
            },
            {
                "id": 4524185,
                "areaName": "高明区"
            }
        ],
        "4524186": [
            {
                "id": 4524187,
                "areaName": "市辖区"
            },
            {
                "id": 4524188,
                "areaName": "蓬江区"
            },
            {
                "id": 4524189,
                "areaName": "江海区"
            },
            {
                "id": 4524190,
                "areaName": "新会区"
            },
            {
                "id": 4524191,
                "areaName": "台山市"
            },
            {
                "id": 4524192,
                "areaName": "开平市"
            },
            {
                "id": 4524193,
                "areaName": "鹤山市"
            },
            {
                "id": 4524194,
                "areaName": "恩平市"
            }
        ],
        "4524195": [
            {
                "id": 4524196,
                "areaName": "市辖区"
            },
            {
                "id": 4524197,
                "areaName": "赤坎区"
            },
            {
                "id": 4524198,
                "areaName": "霞山区"
            },
            {
                "id": 4524199,
                "areaName": "坡头区"
            },
            {
                "id": 4524200,
                "areaName": "麻章区"
            },
            {
                "id": 4524201,
                "areaName": "遂溪县"
            },
            {
                "id": 4524202,
                "areaName": "徐闻县"
            },
            {
                "id": 4524203,
                "areaName": "廉江市"
            },
            {
                "id": 4524204,
                "areaName": "雷州市"
            },
            {
                "id": 4524205,
                "areaName": "吴川市"
            }
        ],
        "4524206": [
            {
                "id": 4524207,
                "areaName": "市辖区"
            },
            {
                "id": 4524208,
                "areaName": "茂南区"
            },
            {
                "id": 4524209,
                "areaName": "茂港区"
            },
            {
                "id": 4524210,
                "areaName": "电白县"
            },
            {
                "id": 4524211,
                "areaName": "高州市"
            },
            {
                "id": 4524212,
                "areaName": "化州市"
            },
            {
                "id": 4524213,
                "areaName": "信宜市"
            }
        ],
        "4524214": [
            {
                "id": 4524215,
                "areaName": "市辖区"
            },
            {
                "id": 4524216,
                "areaName": "端州区"
            },
            {
                "id": 4524217,
                "areaName": "鼎湖区"
            },
            {
                "id": 4524218,
                "areaName": "广宁县"
            },
            {
                "id": 4524219,
                "areaName": "怀集县"
            },
            {
                "id": 4524220,
                "areaName": "封开县"
            },
            {
                "id": 4524221,
                "areaName": "德庆县"
            },
            {
                "id": 4524222,
                "areaName": "高要市"
            },
            {
                "id": 4524223,
                "areaName": "四会市"
            }
        ],
        "4524224": [
            {
                "id": 4524225,
                "areaName": "市辖区"
            },
            {
                "id": 4524226,
                "areaName": "惠城区"
            },
            {
                "id": 4524227,
                "areaName": "惠阳区"
            },
            {
                "id": 4524228,
                "areaName": "博罗县"
            },
            {
                "id": 4524229,
                "areaName": "惠东县"
            },
            {
                "id": 4524230,
                "areaName": "龙门县"
            }
        ],
        "4524231": [
            {
                "id": 4524232,
                "areaName": "市辖区"
            },
            {
                "id": 4524233,
                "areaName": "梅江区"
            },
            {
                "id": 4524234,
                "areaName": "梅县"
            },
            {
                "id": 4524235,
                "areaName": "大埔县"
            },
            {
                "id": 4524236,
                "areaName": "丰顺县"
            },
            {
                "id": 4524237,
                "areaName": "五华县"
            },
            {
                "id": 4524238,
                "areaName": "平远县"
            },
            {
                "id": 4524239,
                "areaName": "蕉岭县"
            },
            {
                "id": 4524240,
                "areaName": "兴宁市"
            }
        ],
        "4524241": [
            {
                "id": 4524242,
                "areaName": "市辖区"
            },
            {
                "id": 4524243,
                "areaName": "城区"
            },
            {
                "id": 4524244,
                "areaName": "海丰县"
            },
            {
                "id": 4524245,
                "areaName": "陆河县"
            },
            {
                "id": 4524246,
                "areaName": "陆丰市"
            }
        ],
        "4524247": [
            {
                "id": 4524248,
                "areaName": "市辖区"
            },
            {
                "id": 4524249,
                "areaName": "源城区"
            },
            {
                "id": 4524250,
                "areaName": "紫金县"
            },
            {
                "id": 4524251,
                "areaName": "龙川县"
            },
            {
                "id": 4524252,
                "areaName": "连平县"
            },
            {
                "id": 4524253,
                "areaName": "和平县"
            },
            {
                "id": 4524254,
                "areaName": "东源县"
            }
        ],
        "4524255": [
            {
                "id": 4524256,
                "areaName": "市辖区"
            },
            {
                "id": 4524257,
                "areaName": "江城区"
            },
            {
                "id": 4524258,
                "areaName": "阳西县"
            },
            {
                "id": 4524259,
                "areaName": "阳东县"
            },
            {
                "id": 4524260,
                "areaName": "阳春市"
            }
        ],
        "4524261": [
            {
                "id": 4524262,
                "areaName": "市辖区"
            },
            {
                "id": 4524263,
                "areaName": "清城区"
            },
            {
                "id": 4524264,
                "areaName": "佛冈县"
            },
            {
                "id": 4524265,
                "areaName": "阳山县"
            },
            {
                "id": 4524266,
                "areaName": "连山壮族瑶族自治县"
            },
            {
                "id": 4524267,
                "areaName": "连南瑶族自治县"
            },
            {
                "id": 4524268,
                "areaName": "清新县"
            },
            {
                "id": 4524269,
                "areaName": "英德市"
            },
            {
                "id": 4524270,
                "areaName": "连州市"
            }
        ],
        "4524273": [
            {
                "id": 4524274,
                "areaName": "市辖区"
            },
            {
                "id": 4524275,
                "areaName": "湘桥区"
            },
            {
                "id": 4524276,
                "areaName": "潮安县"
            },
            {
                "id": 4524277,
                "areaName": "饶平县"
            }
        ],
        "4524278": [
            {
                "id": 4524279,
                "areaName": "市辖区"
            },
            {
                "id": 4524280,
                "areaName": "榕城区"
            },
            {
                "id": 4524281,
                "areaName": "揭东县"
            },
            {
                "id": 4524282,
                "areaName": "揭西县"
            },
            {
                "id": 4524283,
                "areaName": "惠来县"
            },
            {
                "id": 4524284,
                "areaName": "普宁市"
            }
        ],
        "4524285": [
            {
                "id": 4524286,
                "areaName": "市辖区"
            },
            {
                "id": 4524287,
                "areaName": "云城区"
            },
            {
                "id": 4524288,
                "areaName": "新兴县"
            },
            {
                "id": 4524289,
                "areaName": "郁南县"
            },
            {
                "id": 4524290,
                "areaName": "云安县"
            },
            {
                "id": 4524291,
                "areaName": "罗定市"
            }
        ],
        "4524293": [
            {
                "id": 4524294,
                "areaName": "市辖区"
            },
            {
                "id": 4524295,
                "areaName": "兴宁区"
            },
            {
                "id": 4524296,
                "areaName": "青秀区"
            },
            {
                "id": 4524297,
                "areaName": "江南区"
            },
            {
                "id": 4524298,
                "areaName": "西乡塘区"
            },
            {
                "id": 4524299,
                "areaName": "良庆区"
            },
            {
                "id": 4524300,
                "areaName": "邕宁区"
            },
            {
                "id": 4524301,
                "areaName": "武鸣县"
            },
            {
                "id": 4524302,
                "areaName": "隆安县"
            },
            {
                "id": 4524303,
                "areaName": "马山县"
            },
            {
                "id": 4524304,
                "areaName": "上林县"
            },
            {
                "id": 4524305,
                "areaName": "宾阳县"
            },
            {
                "id": 4524306,
                "areaName": "横县"
            }
        ],
        "4524307": [
            {
                "id": 4524308,
                "areaName": "市辖区"
            },
            {
                "id": 4524309,
                "areaName": "城中区"
            },
            {
                "id": 4524310,
                "areaName": "鱼峰区"
            },
            {
                "id": 4524311,
                "areaName": "柳南区"
            },
            {
                "id": 4524312,
                "areaName": "柳北区"
            },
            {
                "id": 4524313,
                "areaName": "柳江县"
            },
            {
                "id": 4524314,
                "areaName": "柳城县"
            },
            {
                "id": 4524315,
                "areaName": "鹿寨县"
            },
            {
                "id": 4524316,
                "areaName": "融安县"
            },
            {
                "id": 4524317,
                "areaName": "融水苗族自治县"
            },
            {
                "id": 4524318,
                "areaName": "三江侗族自治县"
            }
        ],
        "4524319": [
            {
                "id": 4524320,
                "areaName": "市辖区"
            },
            {
                "id": 4524321,
                "areaName": "秀峰区"
            },
            {
                "id": 4524322,
                "areaName": "叠彩区"
            },
            {
                "id": 4524323,
                "areaName": "象山区"
            },
            {
                "id": 4524324,
                "areaName": "七星区"
            },
            {
                "id": 4524325,
                "areaName": "雁山区"
            },
            {
                "id": 4524326,
                "areaName": "阳朔县"
            },
            {
                "id": 4524327,
                "areaName": "临桂县"
            },
            {
                "id": 4524328,
                "areaName": "灵川县"
            },
            {
                "id": 4524329,
                "areaName": "全州县"
            },
            {
                "id": 4524330,
                "areaName": "兴安县"
            },
            {
                "id": 4524331,
                "areaName": "永福县"
            },
            {
                "id": 4524332,
                "areaName": "灌阳县"
            },
            {
                "id": 4524333,
                "areaName": "龙胜各族自治县"
            },
            {
                "id": 4524334,
                "areaName": "资源县"
            },
            {
                "id": 4524335,
                "areaName": "平乐县"
            },
            {
                "id": 4524336,
                "areaName": "荔蒲县"
            },
            {
                "id": 4524337,
                "areaName": "恭城瑶族自治县"
            }
        ],
        "4524338": [
            {
                "id": 4524339,
                "areaName": "市辖区"
            },
            {
                "id": 4524340,
                "areaName": "万秀区"
            },
            {
                "id": 4524341,
                "areaName": "蝶山区"
            },
            {
                "id": 4524342,
                "areaName": "长洲区"
            },
            {
                "id": 4524343,
                "areaName": "苍梧县"
            },
            {
                "id": 4524344,
                "areaName": "藤县"
            },
            {
                "id": 4524345,
                "areaName": "蒙山县"
            },
            {
                "id": 4524346,
                "areaName": "岑溪市"
            }
        ],
        "4524347": [
            {
                "id": 4524348,
                "areaName": "市辖区"
            },
            {
                "id": 4524349,
                "areaName": "海城区"
            },
            {
                "id": 4524350,
                "areaName": "银海区"
            },
            {
                "id": 4524351,
                "areaName": "铁山港区"
            },
            {
                "id": 4524352,
                "areaName": "合浦县"
            }
        ],
        "4524353": [
            {
                "id": 4524354,
                "areaName": "市辖区"
            },
            {
                "id": 4524355,
                "areaName": "港口区"
            },
            {
                "id": 4524356,
                "areaName": "防城区"
            },
            {
                "id": 4524357,
                "areaName": "上思县"
            },
            {
                "id": 4524358,
                "areaName": "东兴市"
            }
        ],
        "4524359": [
            {
                "id": 4524360,
                "areaName": "市辖区"
            },
            {
                "id": 4524361,
                "areaName": "钦南区"
            },
            {
                "id": 4524362,
                "areaName": "钦北区"
            },
            {
                "id": 4524363,
                "areaName": "灵山县"
            },
            {
                "id": 4524364,
                "areaName": "浦北县"
            }
        ],
        "4524365": [
            {
                "id": 4524366,
                "areaName": "市辖区"
            },
            {
                "id": 4524367,
                "areaName": "港北区"
            },
            {
                "id": 4524368,
                "areaName": "港南区"
            },
            {
                "id": 4524369,
                "areaName": "覃塘区"
            },
            {
                "id": 4524370,
                "areaName": "平南县"
            },
            {
                "id": 4524371,
                "areaName": "桂平市"
            }
        ],
        "4524372": [
            {
                "id": 4524373,
                "areaName": "市辖区"
            },
            {
                "id": 4524374,
                "areaName": "玉州区"
            },
            {
                "id": 4524375,
                "areaName": "容县"
            },
            {
                "id": 4524376,
                "areaName": "陆川县"
            },
            {
                "id": 4524377,
                "areaName": "博白县"
            },
            {
                "id": 4524378,
                "areaName": "兴业县"
            },
            {
                "id": 4524379,
                "areaName": "北流市"
            }
        ],
        "4524380": [
            {
                "id": 4524381,
                "areaName": "市辖区"
            },
            {
                "id": 4524382,
                "areaName": "右江区"
            },
            {
                "id": 4524383,
                "areaName": "田阳县"
            },
            {
                "id": 4524384,
                "areaName": "田东县"
            },
            {
                "id": 4524385,
                "areaName": "平果县"
            },
            {
                "id": 4524386,
                "areaName": "德保县"
            },
            {
                "id": 4524387,
                "areaName": "靖西县"
            },
            {
                "id": 4524388,
                "areaName": "那坡县"
            },
            {
                "id": 4524389,
                "areaName": "凌云县"
            },
            {
                "id": 4524390,
                "areaName": "乐业县"
            },
            {
                "id": 4524391,
                "areaName": "田林县"
            },
            {
                "id": 4524392,
                "areaName": "西林县"
            },
            {
                "id": 4524393,
                "areaName": "隆林各族自治县"
            }
        ],
        "4524394": [
            {
                "id": 4524395,
                "areaName": "市辖区"
            },
            {
                "id": 4524396,
                "areaName": "八步区"
            },
            {
                "id": 4524397,
                "areaName": "平桂管理区"
            },
            {
                "id": 4524398,
                "areaName": "昭平县"
            },
            {
                "id": 4524399,
                "areaName": "钟山县"
            },
            {
                "id": 4524400,
                "areaName": "富川瑶族自治县"
            }
        ],
        "4524401": [
            {
                "id": 4524402,
                "areaName": "市辖区"
            },
            {
                "id": 4524403,
                "areaName": "金城江区"
            },
            {
                "id": 4524404,
                "areaName": "南丹县"
            },
            {
                "id": 4524405,
                "areaName": "天峨县"
            },
            {
                "id": 4524406,
                "areaName": "凤山县"
            },
            {
                "id": 4524407,
                "areaName": "东兰县"
            },
            {
                "id": 4524408,
                "areaName": "罗城仫佬族自治县"
            },
            {
                "id": 4524409,
                "areaName": "环江毛南族自治县"
            },
            {
                "id": 4524410,
                "areaName": "巴马瑶族自治县"
            },
            {
                "id": 4524411,
                "areaName": "都安瑶族自治县"
            },
            {
                "id": 4524412,
                "areaName": "大化瑶族自治县"
            },
            {
                "id": 4524413,
                "areaName": "宜州市"
            }
        ],
        "4524414": [
            {
                "id": 4524415,
                "areaName": "市辖区"
            },
            {
                "id": 4524416,
                "areaName": "兴宾区"
            },
            {
                "id": 4524417,
                "areaName": "忻城县"
            },
            {
                "id": 4524418,
                "areaName": "象州县"
            },
            {
                "id": 4524419,
                "areaName": "武宣县"
            },
            {
                "id": 4524420,
                "areaName": "金秀瑶族自治县"
            },
            {
                "id": 4524421,
                "areaName": "合山市"
            }
        ],
        "4524422": [
            {
                "id": 4524423,
                "areaName": "市辖区"
            },
            {
                "id": 4524424,
                "areaName": "江洲区"
            },
            {
                "id": 4524425,
                "areaName": "扶绥县"
            },
            {
                "id": 4524426,
                "areaName": "宁明县"
            },
            {
                "id": 4524427,
                "areaName": "龙州县"
            },
            {
                "id": 4524428,
                "areaName": "大新县"
            },
            {
                "id": 4524429,
                "areaName": "天等县"
            },
            {
                "id": 4524430,
                "areaName": "凭祥市"
            }
        ],
        "4524432": [
            {
                "id": 4524433,
                "areaName": "市辖区"
            },
            {
                "id": 4524434,
                "areaName": "秀英区"
            },
            {
                "id": 4524435,
                "areaName": "龙华区"
            },
            {
                "id": 4524436,
                "areaName": "琼山区"
            },
            {
                "id": 4524437,
                "areaName": "美兰区"
            }
        ],
        "4524438": [
            {
                "id": 4524439,
                "areaName": "市辖区"
            }
        ],
        "4524440": [
            {
                "id": 4524441,
                "areaName": "五指山市"
            },
            {
                "id": 4524442,
                "areaName": "琼海市"
            },
            {
                "id": 4524443,
                "areaName": "儋州市"
            },
            {
                "id": 4524444,
                "areaName": "文昌市"
            },
            {
                "id": 4524445,
                "areaName": "万宁市"
            },
            {
                "id": 4524446,
                "areaName": "东方市"
            },
            {
                "id": 4524447,
                "areaName": "定安县"
            },
            {
                "id": 4524448,
                "areaName": "屯昌县"
            },
            {
                "id": 4524449,
                "areaName": "澄迈县"
            },
            {
                "id": 4524450,
                "areaName": "临高县"
            },
            {
                "id": 4524451,
                "areaName": "白沙黎族自治县"
            },
            {
                "id": 4524452,
                "areaName": "昌江黎族自治县"
            },
            {
                "id": 4524453,
                "areaName": "乐东黎族自治县"
            },
            {
                "id": 4524454,
                "areaName": "陵水黎族自治县"
            },
            {
                "id": 4524455,
                "areaName": "保亭黎族苗族自治县"
            },
            {
                "id": 4524456,
                "areaName": "琼中黎族苗族自治县"
            },
            {
                "id": 4524457,
                "areaName": "西沙群岛"
            },
            {
                "id": 4524458,
                "areaName": "南沙群岛"
            },
            {
                "id": 4524459,
                "areaName": "中沙群岛的岛礁及其海域"
            }
        ],
        "4524461": [
            {
                "id": 4524462,
                "areaName": "万州区"
            },
            {
                "id": 4524463,
                "areaName": "涪陵区"
            },
            {
                "id": 4524464,
                "areaName": "渝中区"
            },
            {
                "id": 4524465,
                "areaName": "大渡口区"
            },
            {
                "id": 4524466,
                "areaName": "江北区"
            },
            {
                "id": 4524467,
                "areaName": "沙坪坝区"
            },
            {
                "id": 4524468,
                "areaName": "九龙坡区"
            },
            {
                "id": 4524469,
                "areaName": "南岸区"
            },
            {
                "id": 4524470,
                "areaName": "北碚区"
            },
            {
                "id": 4524471,
                "areaName": "万盛区"
            },
            {
                "id": 4524472,
                "areaName": "双桥区"
            },
            {
                "id": 4524473,
                "areaName": "渝北区"
            },
            {
                "id": 4524474,
                "areaName": "巴南区"
            },
            {
                "id": 4524475,
                "areaName": "黔江区"
            },
            {
                "id": 4524476,
                "areaName": "长寿区"
            },
            {
                "id": 4524477,
                "areaName": "江津区"
            },
            {
                "id": 4524478,
                "areaName": "合川区"
            },
            {
                "id": 4524479,
                "areaName": "永川区"
            },
            {
                "id": 4524480,
                "areaName": "南川区"
            },
            {
                "id": 4524482,
                "areaName": "綦江县"
            },
            {
                "id": 4524483,
                "areaName": "潼南县"
            },
            {
                "id": 4524484,
                "areaName": "铜梁县"
            },
            {
                "id": 4524485,
                "areaName": "大足县"
            },
            {
                "id": 4524486,
                "areaName": "荣昌县"
            },
            {
                "id": 4524487,
                "areaName": "璧山县"
            },
            {
                "id": 4524488,
                "areaName": "梁平县"
            },
            {
                "id": 4524489,
                "areaName": "城口县"
            },
            {
                "id": 4524490,
                "areaName": "丰都县"
            },
            {
                "id": 4524491,
                "areaName": "垫江县"
            },
            {
                "id": 4524492,
                "areaName": "武隆县"
            },
            {
                "id": 4524493,
                "areaName": "忠县"
            },
            {
                "id": 4524494,
                "areaName": "开县"
            },
            {
                "id": 4524495,
                "areaName": "云阳县"
            },
            {
                "id": 4524496,
                "areaName": "奉节县"
            },
            {
                "id": 4524497,
                "areaName": "巫山县"
            },
            {
                "id": 4524498,
                "areaName": "巫溪县"
            },
            {
                "id": 4524499,
                "areaName": "石柱土家族自治县"
            },
            {
                "id": 4524500,
                "areaName": "秀山土家族苗族自治县"
            },
            {
                "id": 4524501,
                "areaName": "酉阳土家族苗族自治县"
            },
            {
                "id": 4524502,
                "areaName": "彭水苗族土家族自治县"
            }
        ],
        "4524504": [
            {
                "id": 4524505,
                "areaName": "市辖区"
            },
            {
                "id": 4524506,
                "areaName": "锦江区"
            },
            {
                "id": 4524507,
                "areaName": "青羊区"
            },
            {
                "id": 4524508,
                "areaName": "金牛区"
            },
            {
                "id": 4524509,
                "areaName": "武侯区"
            },
            {
                "id": 4524510,
                "areaName": "成华区"
            },
            {
                "id": 4524511,
                "areaName": "龙泉驿区"
            },
            {
                "id": 4524512,
                "areaName": "青白江区"
            },
            {
                "id": 4524513,
                "areaName": "新都区"
            },
            {
                "id": 4524514,
                "areaName": "温江区"
            },
            {
                "id": 4524515,
                "areaName": "金堂县"
            },
            {
                "id": 4524516,
                "areaName": "双流县"
            },
            {
                "id": 4524517,
                "areaName": "郫县"
            },
            {
                "id": 4524518,
                "areaName": "大邑县"
            },
            {
                "id": 4524519,
                "areaName": "蒲江县"
            },
            {
                "id": 4524520,
                "areaName": "新津县"
            },
            {
                "id": 4524521,
                "areaName": "都江堰市"
            },
            {
                "id": 4524522,
                "areaName": "彭州市"
            },
            {
                "id": 4524523,
                "areaName": "邛崃市"
            },
            {
                "id": 4524524,
                "areaName": "崇州市"
            }
        ],
        "4524525": [
            {
                "id": 4524526,
                "areaName": "市辖区"
            },
            {
                "id": 4524527,
                "areaName": "自流井区"
            },
            {
                "id": 4524528,
                "areaName": "贡井区"
            },
            {
                "id": 4524529,
                "areaName": "大安区"
            },
            {
                "id": 4524530,
                "areaName": "沿滩区"
            },
            {
                "id": 4524531,
                "areaName": "荣县"
            },
            {
                "id": 4524532,
                "areaName": "富顺县"
            }
        ],
        "4524533": [
            {
                "id": 4524534,
                "areaName": "市辖区"
            },
            {
                "id": 4524535,
                "areaName": "东区"
            },
            {
                "id": 4524536,
                "areaName": "西区"
            },
            {
                "id": 4524537,
                "areaName": "仁和区"
            },
            {
                "id": 4524538,
                "areaName": "米易县"
            },
            {
                "id": 4524539,
                "areaName": "盐边县"
            }
        ],
        "4524540": [
            {
                "id": 4524541,
                "areaName": "市辖区"
            },
            {
                "id": 4524542,
                "areaName": "江阳区"
            },
            {
                "id": 4524543,
                "areaName": "纳溪区"
            },
            {
                "id": 4524544,
                "areaName": "龙马潭区"
            },
            {
                "id": 4524545,
                "areaName": "泸县"
            },
            {
                "id": 4524546,
                "areaName": "合江县"
            },
            {
                "id": 4524547,
                "areaName": "叙永县"
            },
            {
                "id": 4524548,
                "areaName": "古蔺县"
            }
        ],
        "4524549": [
            {
                "id": 4524550,
                "areaName": "市辖区"
            },
            {
                "id": 4524551,
                "areaName": "旌阳区"
            },
            {
                "id": 4524552,
                "areaName": "中江县"
            },
            {
                "id": 4524553,
                "areaName": "罗江县"
            },
            {
                "id": 4524554,
                "areaName": "广汉市"
            },
            {
                "id": 4524555,
                "areaName": "什邡市"
            },
            {
                "id": 4524556,
                "areaName": "绵竹市"
            }
        ],
        "4524557": [
            {
                "id": 4524558,
                "areaName": "市辖区"
            },
            {
                "id": 4524559,
                "areaName": "涪城区"
            },
            {
                "id": 4524560,
                "areaName": "游仙区"
            },
            {
                "id": 4524561,
                "areaName": "三台县"
            },
            {
                "id": 4524562,
                "areaName": "盐亭县"
            },
            {
                "id": 4524563,
                "areaName": "安县"
            },
            {
                "id": 4524564,
                "areaName": "梓潼县"
            },
            {
                "id": 4524565,
                "areaName": "北川羌族自治县"
            },
            {
                "id": 4524566,
                "areaName": "平武县"
            },
            {
                "id": 4524567,
                "areaName": "江油市"
            }
        ],
        "4524568": [
            {
                "id": 4524569,
                "areaName": "市辖区"
            },
            {
                "id": 4524570,
                "areaName": "利州区"
            },
            {
                "id": 4524571,
                "areaName": "元坝区"
            },
            {
                "id": 4524572,
                "areaName": "朝天区"
            },
            {
                "id": 4524573,
                "areaName": "旺苍县"
            },
            {
                "id": 4524574,
                "areaName": "青川县"
            },
            {
                "id": 4524575,
                "areaName": "剑阁县"
            },
            {
                "id": 4524576,
                "areaName": "苍溪县"
            }
        ],
        "4524577": [
            {
                "id": 4524578,
                "areaName": "市辖区"
            },
            {
                "id": 4524579,
                "areaName": "船山区"
            },
            {
                "id": 4524580,
                "areaName": "安居区"
            },
            {
                "id": 4524581,
                "areaName": "蓬溪县"
            },
            {
                "id": 4524582,
                "areaName": "射洪县"
            },
            {
                "id": 4524583,
                "areaName": "大英县"
            }
        ],
        "4524584": [
            {
                "id": 4524585,
                "areaName": "市辖区"
            },
            {
                "id": 4524586,
                "areaName": "市中区"
            },
            {
                "id": 4524587,
                "areaName": "东兴区"
            },
            {
                "id": 4524588,
                "areaName": "威远县"
            },
            {
                "id": 4524589,
                "areaName": "资中县"
            },
            {
                "id": 4524590,
                "areaName": "隆昌县"
            }
        ],
        "4524591": [
            {
                "id": 4524592,
                "areaName": "市辖区"
            },
            {
                "id": 4524593,
                "areaName": "市中区"
            },
            {
                "id": 4524594,
                "areaName": "沙湾区"
            },
            {
                "id": 4524595,
                "areaName": "五通桥区"
            },
            {
                "id": 4524596,
                "areaName": "金口河区"
            },
            {
                "id": 4524597,
                "areaName": "犍为县"
            },
            {
                "id": 4524598,
                "areaName": "井研县"
            },
            {
                "id": 4524599,
                "areaName": "夹江县"
            },
            {
                "id": 4524600,
                "areaName": "沐川县"
            },
            {
                "id": 4524601,
                "areaName": "峨边彝族自治县"
            },
            {
                "id": 4524602,
                "areaName": "马边彝族自治县"
            },
            {
                "id": 4524603,
                "areaName": "峨眉山市"
            }
        ],
        "4524604": [
            {
                "id": 4524605,
                "areaName": "市辖区"
            },
            {
                "id": 4524606,
                "areaName": "顺庆区"
            },
            {
                "id": 4524607,
                "areaName": "高坪区"
            },
            {
                "id": 4524608,
                "areaName": "嘉陵区"
            },
            {
                "id": 4524609,
                "areaName": "南部县"
            },
            {
                "id": 4524610,
                "areaName": "营山县"
            },
            {
                "id": 4524611,
                "areaName": "蓬安县"
            },
            {
                "id": 4524612,
                "areaName": "仪陇县"
            },
            {
                "id": 4524613,
                "areaName": "西充县"
            },
            {
                "id": 4524614,
                "areaName": "阆中市"
            }
        ],
        "4524615": [
            {
                "id": 4524616,
                "areaName": "市辖区"
            },
            {
                "id": 4524617,
                "areaName": "东坡区"
            },
            {
                "id": 4524618,
                "areaName": "仁寿县"
            },
            {
                "id": 4524619,
                "areaName": "彭山县"
            },
            {
                "id": 4524620,
                "areaName": "洪雅县"
            },
            {
                "id": 4524621,
                "areaName": "丹棱县"
            },
            {
                "id": 4524622,
                "areaName": "青神县"
            }
        ],
        "4524623": [
            {
                "id": 4524624,
                "areaName": "市辖区"
            },
            {
                "id": 4524625,
                "areaName": "翠屏区"
            },
            {
                "id": 4524626,
                "areaName": "宜宾县"
            },
            {
                "id": 4524627,
                "areaName": "南溪县"
            },
            {
                "id": 4524628,
                "areaName": "江安县"
            },
            {
                "id": 4524629,
                "areaName": "长宁县"
            },
            {
                "id": 4524630,
                "areaName": "高县"
            },
            {
                "id": 4524631,
                "areaName": "珙县"
            },
            {
                "id": 4524632,
                "areaName": "筠连县"
            },
            {
                "id": 4524633,
                "areaName": "兴文县"
            },
            {
                "id": 4524634,
                "areaName": "屏山县"
            }
        ],
        "4524635": [
            {
                "id": 4524636,
                "areaName": "市辖区"
            },
            {
                "id": 4524637,
                "areaName": "广安区"
            },
            {
                "id": 4524638,
                "areaName": "岳池县"
            },
            {
                "id": 4524639,
                "areaName": "武胜县"
            },
            {
                "id": 4524640,
                "areaName": "邻水县"
            },
            {
                "id": 4524641,
                "areaName": "华蓥市"
            }
        ],
        "4524642": [
            {
                "id": 4524643,
                "areaName": "市辖区"
            },
            {
                "id": 4524644,
                "areaName": "通川区"
            },
            {
                "id": 4524645,
                "areaName": "达县"
            },
            {
                "id": 4524646,
                "areaName": "宣汉县"
            },
            {
                "id": 4524647,
                "areaName": "开江县"
            },
            {
                "id": 4524648,
                "areaName": "大竹县"
            },
            {
                "id": 4524649,
                "areaName": "渠县"
            },
            {
                "id": 4524650,
                "areaName": "万源市"
            }
        ],
        "4524651": [
            {
                "id": 4524652,
                "areaName": "市辖区"
            },
            {
                "id": 4524653,
                "areaName": "雨城区"
            },
            {
                "id": 4524654,
                "areaName": "名山县"
            },
            {
                "id": 4524655,
                "areaName": "荥经县"
            },
            {
                "id": 4524656,
                "areaName": "汉源县"
            },
            {
                "id": 4524657,
                "areaName": "石棉县"
            },
            {
                "id": 4524658,
                "areaName": "天全县"
            },
            {
                "id": 4524659,
                "areaName": "芦山县"
            },
            {
                "id": 4524660,
                "areaName": "宝兴县"
            }
        ],
        "4524661": [
            {
                "id": 4524662,
                "areaName": "市辖区"
            },
            {
                "id": 4524663,
                "areaName": "巴州区"
            },
            {
                "id": 4524664,
                "areaName": "通江县"
            },
            {
                "id": 4524665,
                "areaName": "南江县"
            },
            {
                "id": 4524666,
                "areaName": "平昌县"
            }
        ],
        "4524667": [
            {
                "id": 4524668,
                "areaName": "市辖区"
            },
            {
                "id": 4524669,
                "areaName": "雁江区"
            },
            {
                "id": 4524670,
                "areaName": "安岳县"
            },
            {
                "id": 4524671,
                "areaName": "乐至县"
            },
            {
                "id": 4524672,
                "areaName": "简阳市"
            }
        ],
        "4524673": [
            {
                "id": 4524674,
                "areaName": "汶川县"
            },
            {
                "id": 4524675,
                "areaName": "理县"
            },
            {
                "id": 4524676,
                "areaName": "茂县"
            },
            {
                "id": 4524677,
                "areaName": "松潘县"
            },
            {
                "id": 4524678,
                "areaName": "九寨沟县"
            },
            {
                "id": 4524679,
                "areaName": "金川县"
            },
            {
                "id": 4524680,
                "areaName": "小金县"
            },
            {
                "id": 4524681,
                "areaName": "黑水县"
            },
            {
                "id": 4524682,
                "areaName": "马尔康县"
            },
            {
                "id": 4524683,
                "areaName": "壤塘县"
            },
            {
                "id": 4524684,
                "areaName": "阿坝县"
            },
            {
                "id": 4524685,
                "areaName": "若尔盖县"
            },
            {
                "id": 4524686,
                "areaName": "红原县"
            }
        ],
        "4524687": [
            {
                "id": 4524688,
                "areaName": "康定县"
            },
            {
                "id": 4524689,
                "areaName": "泸定县"
            },
            {
                "id": 4524690,
                "areaName": "丹巴县"
            },
            {
                "id": 4524691,
                "areaName": "九龙县"
            },
            {
                "id": 4524692,
                "areaName": "雅江县"
            },
            {
                "id": 4524693,
                "areaName": "道孚县"
            },
            {
                "id": 4524694,
                "areaName": "炉霍县"
            },
            {
                "id": 4524695,
                "areaName": "甘孜县"
            },
            {
                "id": 4524696,
                "areaName": "新龙县"
            },
            {
                "id": 4524697,
                "areaName": "德格县"
            },
            {
                "id": 4524698,
                "areaName": "白玉县"
            },
            {
                "id": 4524699,
                "areaName": "石渠县"
            },
            {
                "id": 4524700,
                "areaName": "色达县"
            },
            {
                "id": 4524701,
                "areaName": "理塘县"
            },
            {
                "id": 4524702,
                "areaName": "巴塘县"
            },
            {
                "id": 4524703,
                "areaName": "乡城县"
            },
            {
                "id": 4524704,
                "areaName": "稻城县"
            },
            {
                "id": 4524705,
                "areaName": "得荣县"
            }
        ],
        "4524706": [
            {
                "id": 4524707,
                "areaName": "西昌市"
            },
            {
                "id": 4524708,
                "areaName": "木里藏族自治县"
            },
            {
                "id": 4524709,
                "areaName": "盐源县"
            },
            {
                "id": 4524710,
                "areaName": "德昌县"
            },
            {
                "id": 4524711,
                "areaName": "会理县"
            },
            {
                "id": 4524712,
                "areaName": "会东县"
            },
            {
                "id": 4524713,
                "areaName": "宁南县"
            },
            {
                "id": 4524714,
                "areaName": "普格县"
            },
            {
                "id": 4524715,
                "areaName": "布拖县"
            },
            {
                "id": 4524716,
                "areaName": "金阳县"
            },
            {
                "id": 4524717,
                "areaName": "昭觉县"
            },
            {
                "id": 4524718,
                "areaName": "喜德县"
            },
            {
                "id": 4524719,
                "areaName": "冕宁县"
            },
            {
                "id": 4524720,
                "areaName": "越西县"
            },
            {
                "id": 4524721,
                "areaName": "甘洛县"
            },
            {
                "id": 4524722,
                "areaName": "美姑县"
            },
            {
                "id": 4524723,
                "areaName": "雷波县"
            }
        ],
        "4524725": [
            {
                "id": 4524726,
                "areaName": "市辖区"
            },
            {
                "id": 4524727,
                "areaName": "南明区"
            },
            {
                "id": 4524728,
                "areaName": "云岩区"
            },
            {
                "id": 4524729,
                "areaName": "花溪区"
            },
            {
                "id": 4524730,
                "areaName": "乌当区"
            },
            {
                "id": 4524731,
                "areaName": "白云区"
            },
            {
                "id": 4524732,
                "areaName": "小河区"
            },
            {
                "id": 4524733,
                "areaName": "开阳县"
            },
            {
                "id": 4524734,
                "areaName": "息烽县"
            },
            {
                "id": 4524735,
                "areaName": "修文县"
            },
            {
                "id": 4524736,
                "areaName": "清镇市"
            }
        ],
        "4524737": [
            {
                "id": 4524738,
                "areaName": "钟山区"
            },
            {
                "id": 4524739,
                "areaName": "六枝特区"
            },
            {
                "id": 4524740,
                "areaName": "水城县"
            },
            {
                "id": 4524741,
                "areaName": "盘县"
            }
        ],
        "4524742": [
            {
                "id": 4524743,
                "areaName": "市辖区"
            },
            {
                "id": 4524744,
                "areaName": "红花岗区"
            },
            {
                "id": 4524745,
                "areaName": "汇川区"
            },
            {
                "id": 4524746,
                "areaName": "遵义县"
            },
            {
                "id": 4524747,
                "areaName": "桐梓县"
            },
            {
                "id": 4524748,
                "areaName": "绥阳县"
            },
            {
                "id": 4524749,
                "areaName": "正安县"
            },
            {
                "id": 4524750,
                "areaName": "道真仡佬族苗族自治县"
            },
            {
                "id": 4524751,
                "areaName": "务川仡佬族苗族自治县"
            },
            {
                "id": 4524752,
                "areaName": "凤冈县"
            },
            {
                "id": 4524753,
                "areaName": "湄潭县"
            },
            {
                "id": 4524754,
                "areaName": "余庆县"
            },
            {
                "id": 4524755,
                "areaName": "习水县"
            },
            {
                "id": 4524756,
                "areaName": "赤水市"
            },
            {
                "id": 4524757,
                "areaName": "仁怀市"
            }
        ],
        "4524758": [
            {
                "id": 4524759,
                "areaName": "市辖区"
            },
            {
                "id": 4524760,
                "areaName": "西秀区"
            },
            {
                "id": 4524761,
                "areaName": "平坝县"
            },
            {
                "id": 4524762,
                "areaName": "普定县"
            },
            {
                "id": 4524763,
                "areaName": "镇宁布依族苗族自治县"
            },
            {
                "id": 4524764,
                "areaName": "关岭布依族苗族自治县"
            },
            {
                "id": 4524765,
                "areaName": "紫云苗族布依族自治县"
            }
        ],
        "4524766": [
            {
                "id": 4524767,
                "areaName": "铜仁市"
            },
            {
                "id": 4524768,
                "areaName": "江口县"
            },
            {
                "id": 4524769,
                "areaName": "玉屏侗族自治县"
            },
            {
                "id": 4524770,
                "areaName": "石阡县"
            },
            {
                "id": 4524771,
                "areaName": "思南县"
            },
            {
                "id": 4524772,
                "areaName": "印江土家族苗族自治县"
            },
            {
                "id": 4524773,
                "areaName": "德江县"
            },
            {
                "id": 4524774,
                "areaName": "沿河土家族自治县"
            },
            {
                "id": 4524775,
                "areaName": "松桃苗族自治县"
            },
            {
                "id": 4524776,
                "areaName": "万山特区"
            }
        ],
        "4524777": [
            {
                "id": 4524778,
                "areaName": "兴义市"
            },
            {
                "id": 4524779,
                "areaName": "兴仁县"
            },
            {
                "id": 4524780,
                "areaName": "普安县"
            },
            {
                "id": 4524781,
                "areaName": "晴隆县"
            },
            {
                "id": 4524782,
                "areaName": "贞丰县"
            },
            {
                "id": 4524783,
                "areaName": "望谟县"
            },
            {
                "id": 4524784,
                "areaName": "册亨县"
            },
            {
                "id": 4524785,
                "areaName": "安龙县"
            }
        ],
        "4524786": [
            {
                "id": 4524787,
                "areaName": "毕节市"
            },
            {
                "id": 4524788,
                "areaName": "大方县"
            },
            {
                "id": 4524789,
                "areaName": "黔西县"
            },
            {
                "id": 4524790,
                "areaName": "金沙县"
            },
            {
                "id": 4524791,
                "areaName": "织金县"
            },
            {
                "id": 4524792,
                "areaName": "纳雍县"
            },
            {
                "id": 4524793,
                "areaName": "威宁彝族回族苗族自治县"
            },
            {
                "id": 4524794,
                "areaName": "赫章县"
            }
        ],
        "4524795": [
            {
                "id": 4524796,
                "areaName": "凯里市"
            },
            {
                "id": 4524797,
                "areaName": "黄平县"
            },
            {
                "id": 4524798,
                "areaName": "施秉县"
            },
            {
                "id": 4524799,
                "areaName": "三穗县"
            },
            {
                "id": 4524800,
                "areaName": "镇远县"
            },
            {
                "id": 4524801,
                "areaName": "岑巩县"
            },
            {
                "id": 4524802,
                "areaName": "天柱县"
            },
            {
                "id": 4524803,
                "areaName": "锦屏县"
            },
            {
                "id": 4524804,
                "areaName": "剑河县"
            },
            {
                "id": 4524805,
                "areaName": "台江县"
            },
            {
                "id": 4524806,
                "areaName": "黎平县"
            },
            {
                "id": 4524807,
                "areaName": "榕江县"
            },
            {
                "id": 4524808,
                "areaName": "从江县"
            },
            {
                "id": 4524809,
                "areaName": "雷山县"
            },
            {
                "id": 4524810,
                "areaName": "麻江县"
            },
            {
                "id": 4524811,
                "areaName": "丹寨县"
            }
        ],
        "4524812": [
            {
                "id": 4524813,
                "areaName": "都匀市"
            },
            {
                "id": 4524814,
                "areaName": "福泉市"
            },
            {
                "id": 4524815,
                "areaName": "荔波县"
            },
            {
                "id": 4524816,
                "areaName": "贵定县"
            },
            {
                "id": 4524817,
                "areaName": "瓮安县"
            },
            {
                "id": 4524818,
                "areaName": "独山县"
            },
            {
                "id": 4524819,
                "areaName": "平塘县"
            },
            {
                "id": 4524820,
                "areaName": "罗甸县"
            },
            {
                "id": 4524821,
                "areaName": "长顺县"
            },
            {
                "id": 4524822,
                "areaName": "龙里县"
            },
            {
                "id": 4524823,
                "areaName": "惠水县"
            },
            {
                "id": 4524824,
                "areaName": "三都水族自治县"
            }
        ],
        "4524826": [
            {
                "id": 4524827,
                "areaName": "市辖区"
            },
            {
                "id": 4524828,
                "areaName": "五华区"
            },
            {
                "id": 4524829,
                "areaName": "盘龙区"
            },
            {
                "id": 4524830,
                "areaName": "官渡区"
            },
            {
                "id": 4524831,
                "areaName": "西山区"
            },
            {
                "id": 4524832,
                "areaName": "东川区"
            },
            {
                "id": 4524833,
                "areaName": "呈贡县"
            },
            {
                "id": 4524834,
                "areaName": "晋宁县"
            },
            {
                "id": 4524835,
                "areaName": "富民县"
            },
            {
                "id": 4524836,
                "areaName": "宜良县"
            },
            {
                "id": 4524837,
                "areaName": "石林彝族自治县"
            },
            {
                "id": 4524838,
                "areaName": "嵩明县"
            },
            {
                "id": 4524839,
                "areaName": "禄劝彝族苗族自治县"
            },
            {
                "id": 4524840,
                "areaName": "寻甸回族彝族自治县"
            },
            {
                "id": 4524841,
                "areaName": "安宁市"
            }
        ],
        "4524842": [
            {
                "id": 4524843,
                "areaName": "市辖区"
            },
            {
                "id": 4524844,
                "areaName": "麒麟区"
            },
            {
                "id": 4524845,
                "areaName": "马龙县"
            },
            {
                "id": 4524846,
                "areaName": "陆良县"
            },
            {
                "id": 4524847,
                "areaName": "师宗县"
            },
            {
                "id": 4524848,
                "areaName": "罗平县"
            },
            {
                "id": 4524849,
                "areaName": "富源县"
            },
            {
                "id": 4524850,
                "areaName": "会泽县"
            },
            {
                "id": 4524851,
                "areaName": "沾益县"
            },
            {
                "id": 4524852,
                "areaName": "宣威市"
            }
        ],
        "4524853": [
            {
                "id": 4524854,
                "areaName": "市辖区"
            },
            {
                "id": 4524855,
                "areaName": "红塔区"
            },
            {
                "id": 4524856,
                "areaName": "江川县"
            },
            {
                "id": 4524857,
                "areaName": "澄江县"
            },
            {
                "id": 4524858,
                "areaName": "通海县"
            },
            {
                "id": 4524859,
                "areaName": "华宁县"
            },
            {
                "id": 4524860,
                "areaName": "易门县"
            },
            {
                "id": 4524861,
                "areaName": "峨山彝族自治县"
            },
            {
                "id": 4524862,
                "areaName": "新平彝族傣族自治县"
            },
            {
                "id": 4524863,
                "areaName": "元江哈尼族彝族傣族自治县"
            }
        ],
        "4524864": [
            {
                "id": 4524865,
                "areaName": "市辖区"
            },
            {
                "id": 4524866,
                "areaName": "隆阳区"
            },
            {
                "id": 4524867,
                "areaName": "施甸县"
            },
            {
                "id": 4524868,
                "areaName": "腾冲县"
            },
            {
                "id": 4524869,
                "areaName": "龙陵县"
            },
            {
                "id": 4524870,
                "areaName": "昌宁县"
            }
        ],
        "4524871": [
            {
                "id": 4524872,
                "areaName": "市辖区"
            },
            {
                "id": 4524873,
                "areaName": "昭阳区"
            },
            {
                "id": 4524874,
                "areaName": "鲁甸县"
            },
            {
                "id": 4524875,
                "areaName": "巧家县"
            },
            {
                "id": 4524876,
                "areaName": "盐津县"
            },
            {
                "id": 4524877,
                "areaName": "大关县"
            },
            {
                "id": 4524878,
                "areaName": "永善县"
            },
            {
                "id": 4524879,
                "areaName": "绥江县"
            },
            {
                "id": 4524880,
                "areaName": "镇雄县"
            },
            {
                "id": 4524881,
                "areaName": "彝良县"
            },
            {
                "id": 4524882,
                "areaName": "威信县"
            },
            {
                "id": 4524883,
                "areaName": "水富县"
            }
        ],
        "4524884": [
            {
                "id": 4524885,
                "areaName": "市辖区"
            },
            {
                "id": 4524886,
                "areaName": "古城区"
            },
            {
                "id": 4524887,
                "areaName": "玉龙纳西族自治县"
            },
            {
                "id": 4524888,
                "areaName": "永胜县"
            },
            {
                "id": 4524889,
                "areaName": "华坪县"
            },
            {
                "id": 4524890,
                "areaName": "宁蒗彝族自治县"
            }
        ],
        "4524891": [
            {
                "id": 4524892,
                "areaName": "市辖区"
            },
            {
                "id": 4524893,
                "areaName": "思茅区"
            },
            {
                "id": 4524894,
                "areaName": "宁洱哈尼族彝族自治县"
            },
            {
                "id": 4524895,
                "areaName": "墨江哈尼族自治县"
            },
            {
                "id": 4524896,
                "areaName": "景东彝族自治县"
            },
            {
                "id": 4524897,
                "areaName": "景谷傣族彝族自治县"
            },
            {
                "id": 4524898,
                "areaName": "镇沅彝族哈尼族拉祜族自治县"
            },
            {
                "id": 4524899,
                "areaName": "江城哈尼族彝族自治县"
            },
            {
                "id": 4524900,
                "areaName": "孟连傣族拉祜族佤族自治县"
            },
            {
                "id": 4524901,
                "areaName": "澜沧拉祜族自治县"
            },
            {
                "id": 4524902,
                "areaName": "西盟佤族自治县"
            }
        ],
        "4524903": [
            {
                "id": 4524904,
                "areaName": "市辖区"
            },
            {
                "id": 4524905,
                "areaName": "临翔区"
            },
            {
                "id": 4524906,
                "areaName": "凤庆县"
            },
            {
                "id": 4524907,
                "areaName": "云县"
            },
            {
                "id": 4524908,
                "areaName": "永德县"
            },
            {
                "id": 4524909,
                "areaName": "镇康县"
            },
            {
                "id": 4524910,
                "areaName": "双江拉祜族佤族布朗族傣族自治县"
            },
            {
                "id": 4524911,
                "areaName": "耿马傣族佤族自治县"
            },
            {
                "id": 4524912,
                "areaName": "沧源佤族自治县"
            }
        ],
        "4524913": [
            {
                "id": 4524914,
                "areaName": "楚雄市"
            },
            {
                "id": 4524915,
                "areaName": "双柏县"
            },
            {
                "id": 4524916,
                "areaName": "牟定县"
            },
            {
                "id": 4524917,
                "areaName": "南华县"
            },
            {
                "id": 4524918,
                "areaName": "姚安县"
            },
            {
                "id": 4524919,
                "areaName": "大姚县"
            },
            {
                "id": 4524920,
                "areaName": "永仁县"
            },
            {
                "id": 4524921,
                "areaName": "元谋县"
            },
            {
                "id": 4524922,
                "areaName": "武定县"
            },
            {
                "id": 4524923,
                "areaName": "禄丰县"
            }
        ],
        "4524924": [
            {
                "id": 4524925,
                "areaName": "个旧市"
            },
            {
                "id": 4524926,
                "areaName": "开远市"
            },
            {
                "id": 4524927,
                "areaName": "蒙自市"
            },
            {
                "id": 4524928,
                "areaName": "屏边苗族自治县"
            },
            {
                "id": 4524929,
                "areaName": "建水县"
            },
            {
                "id": 4524930,
                "areaName": "石屏县"
            },
            {
                "id": 4524931,
                "areaName": "弥勒县"
            },
            {
                "id": 4524932,
                "areaName": "泸西县"
            },
            {
                "id": 4524933,
                "areaName": "元阳县"
            },
            {
                "id": 4524934,
                "areaName": "红河县"
            },
            {
                "id": 4524935,
                "areaName": "金平苗族瑶族傣族自治县"
            },
            {
                "id": 4524936,
                "areaName": "绿春县"
            },
            {
                "id": 4524937,
                "areaName": "河口瑶族自治县"
            }
        ],
        "4524938": [
            {
                "id": 4524939,
                "areaName": "文山县"
            },
            {
                "id": 4524940,
                "areaName": "砚山县"
            },
            {
                "id": 4524941,
                "areaName": "西畴县"
            },
            {
                "id": 4524942,
                "areaName": "麻栗坡县"
            },
            {
                "id": 4524943,
                "areaName": "马关县"
            },
            {
                "id": 4524944,
                "areaName": "丘北县"
            },
            {
                "id": 4524945,
                "areaName": "广南县"
            },
            {
                "id": 4524946,
                "areaName": "富宁县"
            }
        ],
        "4524947": [
            {
                "id": 4524948,
                "areaName": "景洪市"
            },
            {
                "id": 4524949,
                "areaName": "勐海县"
            },
            {
                "id": 4524950,
                "areaName": "勐腊县"
            }
        ],
        "4524951": [
            {
                "id": 4524952,
                "areaName": "大理市"
            },
            {
                "id": 4524953,
                "areaName": "漾濞彝族自治县"
            },
            {
                "id": 4524954,
                "areaName": "祥云县"
            },
            {
                "id": 4524955,
                "areaName": "宾川县"
            },
            {
                "id": 4524956,
                "areaName": "弥渡县"
            },
            {
                "id": 4524957,
                "areaName": "南涧彝族自治县"
            },
            {
                "id": 4524958,
                "areaName": "巍山彝族回族自治县"
            },
            {
                "id": 4524959,
                "areaName": "永平县"
            },
            {
                "id": 4524960,
                "areaName": "云龙县"
            },
            {
                "id": 4524961,
                "areaName": "洱源县"
            },
            {
                "id": 4524962,
                "areaName": "剑川县"
            },
            {
                "id": 4524963,
                "areaName": "鹤庆县"
            }
        ],
        "4524964": [
            {
                "id": 4524965,
                "areaName": "瑞丽市"
            },
            {
                "id": 4524966,
                "areaName": "芒市"
            },
            {
                "id": 4524967,
                "areaName": "梁河县"
            },
            {
                "id": 4524968,
                "areaName": "盈江县"
            },
            {
                "id": 4524969,
                "areaName": "陇川县"
            }
        ],
        "4524970": [
            {
                "id": 4524971,
                "areaName": "泸水县"
            },
            {
                "id": 4524972,
                "areaName": "福贡县"
            },
            {
                "id": 4524973,
                "areaName": "贡山独龙族怒族自治县"
            },
            {
                "id": 4524974,
                "areaName": "兰坪白族普米族自治县"
            }
        ],
        "4524975": [
            {
                "id": 4524976,
                "areaName": "香格里拉县"
            },
            {
                "id": 4524977,
                "areaName": "德钦县"
            },
            {
                "id": 4524978,
                "areaName": "维西傈僳族自治县"
            }
        ],
        "4524980": [
            {
                "id": 4524981,
                "areaName": "市辖区"
            },
            {
                "id": 4524982,
                "areaName": "城关区"
            },
            {
                "id": 4524983,
                "areaName": "林周县"
            },
            {
                "id": 4524984,
                "areaName": "当雄县"
            },
            {
                "id": 4524985,
                "areaName": "尼木县"
            },
            {
                "id": 4524986,
                "areaName": "曲水县"
            },
            {
                "id": 4524987,
                "areaName": "堆龙德庆县"
            },
            {
                "id": 4524988,
                "areaName": "达孜县"
            },
            {
                "id": 4524989,
                "areaName": "墨竹工卡县"
            }
        ],
        "4524990": [
            {
                "id": 4524991,
                "areaName": "昌都县"
            },
            {
                "id": 4524992,
                "areaName": "江达县"
            },
            {
                "id": 4524993,
                "areaName": "贡觉县"
            },
            {
                "id": 4524994,
                "areaName": "类乌齐县"
            },
            {
                "id": 4524995,
                "areaName": "丁青县"
            },
            {
                "id": 4524996,
                "areaName": "察雅县"
            },
            {
                "id": 4524997,
                "areaName": "八宿县"
            },
            {
                "id": 4524998,
                "areaName": "左贡县"
            },
            {
                "id": 4524999,
                "areaName": "芒康县"
            },
            {
                "id": 4525000,
                "areaName": "洛隆县"
            },
            {
                "id": 4525001,
                "areaName": "边坝县"
            }
        ],
        "4525002": [
            {
                "id": 4525003,
                "areaName": "乃东县"
            },
            {
                "id": 4525004,
                "areaName": "扎囊县"
            },
            {
                "id": 4525005,
                "areaName": "贡嘎县"
            },
            {
                "id": 4525006,
                "areaName": "桑日县"
            },
            {
                "id": 4525007,
                "areaName": "琼结县"
            },
            {
                "id": 4525008,
                "areaName": "曲松县"
            },
            {
                "id": 4525009,
                "areaName": "措美县"
            },
            {
                "id": 4525010,
                "areaName": "洛扎县"
            },
            {
                "id": 4525011,
                "areaName": "加查县"
            },
            {
                "id": 4525012,
                "areaName": "隆子县"
            },
            {
                "id": 4525013,
                "areaName": "错那县"
            },
            {
                "id": 4525014,
                "areaName": "浪卡子县"
            }
        ],
        "4525015": [
            {
                "id": 4525016,
                "areaName": "日喀则市"
            },
            {
                "id": 4525017,
                "areaName": "南木林县"
            },
            {
                "id": 4525018,
                "areaName": "江孜县"
            },
            {
                "id": 4525019,
                "areaName": "定日县"
            },
            {
                "id": 4525020,
                "areaName": "萨迦县"
            },
            {
                "id": 4525021,
                "areaName": "拉孜县"
            },
            {
                "id": 4525022,
                "areaName": "昂仁县"
            },
            {
                "id": 4525023,
                "areaName": "谢通门县"
            },
            {
                "id": 4525024,
                "areaName": "白朗县"
            },
            {
                "id": 4525025,
                "areaName": "仁布县"
            },
            {
                "id": 4525026,
                "areaName": "康马县"
            },
            {
                "id": 4525027,
                "areaName": "定结县"
            },
            {
                "id": 4525028,
                "areaName": "仲巴县"
            },
            {
                "id": 4525029,
                "areaName": "亚东县"
            },
            {
                "id": 4525030,
                "areaName": "吉隆县"
            },
            {
                "id": 4525031,
                "areaName": "聂拉木县"
            },
            {
                "id": 4525032,
                "areaName": "萨嘎县"
            },
            {
                "id": 4525033,
                "areaName": "岗巴县"
            }
        ],
        "4525034": [
            {
                "id": 4525035,
                "areaName": "那曲县"
            },
            {
                "id": 4525036,
                "areaName": "嘉黎县"
            },
            {
                "id": 4525037,
                "areaName": "比如县"
            },
            {
                "id": 4525038,
                "areaName": "聂荣县"
            },
            {
                "id": 4525039,
                "areaName": "安多县"
            },
            {
                "id": 4525040,
                "areaName": "申扎县"
            },
            {
                "id": 4525041,
                "areaName": "索县"
            },
            {
                "id": 4525042,
                "areaName": "班戈县"
            },
            {
                "id": 4525043,
                "areaName": "巴青县"
            },
            {
                "id": 4525044,
                "areaName": "尼玛县"
            }
        ],
        "4525045": [
            {
                "id": 4525046,
                "areaName": "普兰县"
            },
            {
                "id": 4525047,
                "areaName": "札达县"
            },
            {
                "id": 4525048,
                "areaName": "噶尔县"
            },
            {
                "id": 4525049,
                "areaName": "日土县"
            },
            {
                "id": 4525050,
                "areaName": "革吉县"
            },
            {
                "id": 4525051,
                "areaName": "改则县"
            },
            {
                "id": 4525052,
                "areaName": "措勤县"
            }
        ],
        "4525053": [
            {
                "id": 4525054,
                "areaName": "林芝县"
            },
            {
                "id": 4525055,
                "areaName": "工布江达县"
            },
            {
                "id": 4525056,
                "areaName": "米林县"
            },
            {
                "id": 4525057,
                "areaName": "墨脱县"
            },
            {
                "id": 4525058,
                "areaName": "波密县"
            },
            {
                "id": 4525059,
                "areaName": "察隅县"
            },
            {
                "id": 4525060,
                "areaName": "朗县"
            }
        ],
        "4525062": [
            {
                "id": 4525063,
                "areaName": "市辖区"
            },
            {
                "id": 4525064,
                "areaName": "新城区"
            },
            {
                "id": 4525065,
                "areaName": "碑林区"
            },
            {
                "id": 4525066,
                "areaName": "莲湖区"
            },
            {
                "id": 4525067,
                "areaName": "灞桥区"
            },
            {
                "id": 4525068,
                "areaName": "未央区"
            },
            {
                "id": 4525069,
                "areaName": "雁塔区"
            },
            {
                "id": 4525070,
                "areaName": "阎良区"
            },
            {
                "id": 4525071,
                "areaName": "临潼区"
            },
            {
                "id": 4525072,
                "areaName": "长安区"
            },
            {
                "id": 4525073,
                "areaName": "蓝田县"
            },
            {
                "id": 4525074,
                "areaName": "周至县"
            },
            {
                "id": 4525075,
                "areaName": "户县"
            },
            {
                "id": 4525076,
                "areaName": "高陵县"
            }
        ],
        "4525077": [
            {
                "id": 4525078,
                "areaName": "市辖区"
            },
            {
                "id": 4525079,
                "areaName": "王益区"
            },
            {
                "id": 4525080,
                "areaName": "印台区"
            },
            {
                "id": 4525081,
                "areaName": "耀州区"
            },
            {
                "id": 4525082,
                "areaName": "宜君县"
            }
        ],
        "4525083": [
            {
                "id": 4525084,
                "areaName": "市辖区"
            },
            {
                "id": 4525085,
                "areaName": "渭滨区"
            },
            {
                "id": 4525086,
                "areaName": "金台区"
            },
            {
                "id": 4525087,
                "areaName": "陈仓区"
            },
            {
                "id": 4525088,
                "areaName": "凤翔县"
            },
            {
                "id": 4525089,
                "areaName": "岐山县"
            },
            {
                "id": 4525090,
                "areaName": "扶风县"
            },
            {
                "id": 4525091,
                "areaName": "眉县"
            },
            {
                "id": 4525092,
                "areaName": "陇县"
            },
            {
                "id": 4525093,
                "areaName": "千阳县"
            },
            {
                "id": 4525094,
                "areaName": "麟游县"
            },
            {
                "id": 4525095,
                "areaName": "凤县"
            },
            {
                "id": 4525096,
                "areaName": "太白县"
            }
        ],
        "4525097": [
            {
                "id": 4525098,
                "areaName": "市辖区"
            },
            {
                "id": 4525099,
                "areaName": "秦都区"
            },
            {
                "id": 4525100,
                "areaName": "杨陵区"
            },
            {
                "id": 4525101,
                "areaName": "渭城区"
            },
            {
                "id": 4525102,
                "areaName": "三原县"
            },
            {
                "id": 4525103,
                "areaName": "泾阳县"
            },
            {
                "id": 4525104,
                "areaName": "乾县"
            },
            {
                "id": 4525105,
                "areaName": "礼泉县"
            },
            {
                "id": 4525106,
                "areaName": "永寿县"
            },
            {
                "id": 4525107,
                "areaName": "彬县"
            },
            {
                "id": 4525108,
                "areaName": "长武县"
            },
            {
                "id": 4525109,
                "areaName": "旬邑县"
            },
            {
                "id": 4525110,
                "areaName": "淳化县"
            },
            {
                "id": 4525111,
                "areaName": "武功县"
            },
            {
                "id": 4525112,
                "areaName": "兴平市"
            }
        ],
        "4525113": [
            {
                "id": 4525114,
                "areaName": "市辖区"
            },
            {
                "id": 4525115,
                "areaName": "临渭区"
            },
            {
                "id": 4525116,
                "areaName": "华县"
            },
            {
                "id": 4525117,
                "areaName": "潼关县"
            },
            {
                "id": 4525118,
                "areaName": "大荔县"
            },
            {
                "id": 4525119,
                "areaName": "合阳县"
            },
            {
                "id": 4525120,
                "areaName": "澄城县"
            },
            {
                "id": 4525121,
                "areaName": "蒲城县"
            },
            {
                "id": 4525122,
                "areaName": "白水县"
            },
            {
                "id": 4525123,
                "areaName": "富平县"
            },
            {
                "id": 4525124,
                "areaName": "韩城市"
            },
            {
                "id": 4525125,
                "areaName": "华阴市"
            }
        ],
        "4525126": [
            {
                "id": 4525127,
                "areaName": "市辖区"
            },
            {
                "id": 4525128,
                "areaName": "宝塔区"
            },
            {
                "id": 4525129,
                "areaName": "延长县"
            },
            {
                "id": 4525130,
                "areaName": "延川县"
            },
            {
                "id": 4525131,
                "areaName": "子长县"
            },
            {
                "id": 4525132,
                "areaName": "安塞县"
            },
            {
                "id": 4525133,
                "areaName": "志丹县"
            },
            {
                "id": 4525134,
                "areaName": "吴起县"
            },
            {
                "id": 4525135,
                "areaName": "甘泉县"
            },
            {
                "id": 4525136,
                "areaName": "富县"
            },
            {
                "id": 4525137,
                "areaName": "洛川县"
            },
            {
                "id": 4525138,
                "areaName": "宜川县"
            },
            {
                "id": 4525139,
                "areaName": "黄龙县"
            },
            {
                "id": 4525140,
                "areaName": "黄陵县"
            }
        ],
        "4525141": [
            {
                "id": 4525142,
                "areaName": "市辖区"
            },
            {
                "id": 4525143,
                "areaName": "汉台区"
            },
            {
                "id": 4525144,
                "areaName": "南郑县"
            },
            {
                "id": 4525145,
                "areaName": "城固县"
            },
            {
                "id": 4525146,
                "areaName": "洋县"
            },
            {
                "id": 4525147,
                "areaName": "西乡县"
            },
            {
                "id": 4525148,
                "areaName": "勉县"
            },
            {
                "id": 4525149,
                "areaName": "宁强县"
            },
            {
                "id": 4525150,
                "areaName": "略阳县"
            },
            {
                "id": 4525151,
                "areaName": "镇巴县"
            },
            {
                "id": 4525152,
                "areaName": "留坝县"
            },
            {
                "id": 4525153,
                "areaName": "佛坪县"
            }
        ],
        "4525154": [
            {
                "id": 4525155,
                "areaName": "市辖区"
            },
            {
                "id": 4525156,
                "areaName": "榆阳区"
            },
            {
                "id": 4525157,
                "areaName": "神木县"
            },
            {
                "id": 4525158,
                "areaName": "府谷县"
            },
            {
                "id": 4525159,
                "areaName": "横山县"
            },
            {
                "id": 4525160,
                "areaName": "靖边县"
            },
            {
                "id": 4525161,
                "areaName": "定边县"
            },
            {
                "id": 4525162,
                "areaName": "绥德县"
            },
            {
                "id": 4525163,
                "areaName": "米脂县"
            },
            {
                "id": 4525164,
                "areaName": "佳县"
            },
            {
                "id": 4525165,
                "areaName": "吴堡县"
            },
            {
                "id": 4525166,
                "areaName": "清涧县"
            },
            {
                "id": 4525167,
                "areaName": "子洲县"
            }
        ],
        "4525168": [
            {
                "id": 4525169,
                "areaName": "市辖区"
            },
            {
                "id": 4525170,
                "areaName": "汉滨区"
            },
            {
                "id": 4525171,
                "areaName": "汉阴县"
            },
            {
                "id": 4525172,
                "areaName": "石泉县"
            },
            {
                "id": 4525173,
                "areaName": "宁陕县"
            },
            {
                "id": 4525174,
                "areaName": "紫阳县"
            },
            {
                "id": 4525175,
                "areaName": "岚皋县"
            },
            {
                "id": 4525176,
                "areaName": "平利县"
            },
            {
                "id": 4525177,
                "areaName": "镇坪县"
            },
            {
                "id": 4525178,
                "areaName": "旬阳县"
            },
            {
                "id": 4525179,
                "areaName": "白河县"
            }
        ],
        "4525180": [
            {
                "id": 4525181,
                "areaName": "市辖区"
            },
            {
                "id": 4525182,
                "areaName": "商州区"
            },
            {
                "id": 4525183,
                "areaName": "洛南县"
            },
            {
                "id": 4525184,
                "areaName": "丹凤县"
            },
            {
                "id": 4525185,
                "areaName": "商南县"
            },
            {
                "id": 4525186,
                "areaName": "山阳县"
            },
            {
                "id": 4525187,
                "areaName": "镇安县"
            },
            {
                "id": 4525188,
                "areaName": "柞水县"
            }
        ],
        "4525190": [
            {
                "id": 4525191,
                "areaName": "市辖区"
            },
            {
                "id": 4525192,
                "areaName": "城关区"
            },
            {
                "id": 4525193,
                "areaName": "七里河区"
            },
            {
                "id": 4525194,
                "areaName": "西固区"
            },
            {
                "id": 4525195,
                "areaName": "安宁区"
            },
            {
                "id": 4525196,
                "areaName": "红古区"
            },
            {
                "id": 4525197,
                "areaName": "永登县"
            },
            {
                "id": 4525198,
                "areaName": "皋兰县"
            },
            {
                "id": 4525199,
                "areaName": "榆中县"
            }
        ],
        "4525200": [
            {
                "id": 4525201,
                "areaName": "市辖区"
            }
        ],
        "4525202": [
            {
                "id": 4525203,
                "areaName": "市辖区"
            },
            {
                "id": 4525204,
                "areaName": "金川区"
            },
            {
                "id": 4525205,
                "areaName": "永昌县"
            }
        ],
        "4525206": [
            {
                "id": 4525207,
                "areaName": "市辖区"
            },
            {
                "id": 4525208,
                "areaName": "白银区"
            },
            {
                "id": 4525209,
                "areaName": "平川区"
            },
            {
                "id": 4525210,
                "areaName": "靖远县"
            },
            {
                "id": 4525211,
                "areaName": "会宁县"
            },
            {
                "id": 4525212,
                "areaName": "景泰县"
            }
        ],
        "4525213": [
            {
                "id": 4525214,
                "areaName": "市辖区"
            },
            {
                "id": 4525215,
                "areaName": "秦州区"
            },
            {
                "id": 4525216,
                "areaName": "麦积区"
            },
            {
                "id": 4525217,
                "areaName": "清水县"
            },
            {
                "id": 4525218,
                "areaName": "秦安县"
            },
            {
                "id": 4525219,
                "areaName": "甘谷县"
            },
            {
                "id": 4525220,
                "areaName": "武山县"
            },
            {
                "id": 4525221,
                "areaName": "张家川回族自治县"
            }
        ],
        "4525222": [
            {
                "id": 4525223,
                "areaName": "市辖区"
            },
            {
                "id": 4525224,
                "areaName": "凉州区"
            },
            {
                "id": 4525225,
                "areaName": "民勤县"
            },
            {
                "id": 4525226,
                "areaName": "古浪县"
            },
            {
                "id": 4525227,
                "areaName": "天祝藏族自治县"
            }
        ],
        "4525228": [
            {
                "id": 4525229,
                "areaName": "市辖区"
            },
            {
                "id": 4525230,
                "areaName": "甘州区"
            },
            {
                "id": 4525231,
                "areaName": "肃南裕固族自治县"
            },
            {
                "id": 4525232,
                "areaName": "民乐县"
            },
            {
                "id": 4525233,
                "areaName": "临泽县"
            },
            {
                "id": 4525234,
                "areaName": "高台县"
            },
            {
                "id": 4525235,
                "areaName": "山丹县"
            }
        ],
        "4525236": [
            {
                "id": 4525237,
                "areaName": "市辖区"
            },
            {
                "id": 4525238,
                "areaName": "崆峒区"
            },
            {
                "id": 4525239,
                "areaName": "泾川县"
            },
            {
                "id": 4525240,
                "areaName": "灵台县"
            },
            {
                "id": 4525241,
                "areaName": "崇信县"
            },
            {
                "id": 4525242,
                "areaName": "华亭县"
            },
            {
                "id": 4525243,
                "areaName": "庄浪县"
            },
            {
                "id": 4525244,
                "areaName": "静宁县"
            }
        ],
        "4525245": [
            {
                "id": 4525246,
                "areaName": "市辖区"
            },
            {
                "id": 4525247,
                "areaName": "肃州区"
            },
            {
                "id": 4525248,
                "areaName": "金塔县"
            },
            {
                "id": 4525249,
                "areaName": "瓜州县"
            },
            {
                "id": 4525250,
                "areaName": "肃北蒙古族自治县"
            },
            {
                "id": 4525251,
                "areaName": "阿克塞哈萨克族自治县"
            },
            {
                "id": 4525252,
                "areaName": "玉门市"
            },
            {
                "id": 4525253,
                "areaName": "敦煌市"
            }
        ],
        "4525254": [
            {
                "id": 4525255,
                "areaName": "市辖区"
            },
            {
                "id": 4525256,
                "areaName": "西峰区"
            },
            {
                "id": 4525257,
                "areaName": "庆城县"
            },
            {
                "id": 4525258,
                "areaName": "环县"
            },
            {
                "id": 4525259,
                "areaName": "华池县"
            },
            {
                "id": 4525260,
                "areaName": "合水县"
            },
            {
                "id": 4525261,
                "areaName": "正宁县"
            },
            {
                "id": 4525262,
                "areaName": "宁县"
            },
            {
                "id": 4525263,
                "areaName": "镇原县"
            }
        ],
        "4525264": [
            {
                "id": 4525265,
                "areaName": "市辖区"
            },
            {
                "id": 4525266,
                "areaName": "安定区"
            },
            {
                "id": 4525267,
                "areaName": "通渭县"
            },
            {
                "id": 4525268,
                "areaName": "陇西县"
            },
            {
                "id": 4525269,
                "areaName": "渭源县"
            },
            {
                "id": 4525270,
                "areaName": "临洮县"
            },
            {
                "id": 4525271,
                "areaName": "漳县"
            },
            {
                "id": 4525272,
                "areaName": "岷县"
            }
        ],
        "4525273": [
            {
                "id": 4525274,
                "areaName": "市辖区"
            },
            {
                "id": 4525275,
                "areaName": "武都区"
            },
            {
                "id": 4525276,
                "areaName": "成县"
            },
            {
                "id": 4525277,
                "areaName": "文县"
            },
            {
                "id": 4525278,
                "areaName": "宕昌县"
            },
            {
                "id": 4525279,
                "areaName": "康县"
            },
            {
                "id": 4525280,
                "areaName": "西和县"
            },
            {
                "id": 4525281,
                "areaName": "礼县"
            },
            {
                "id": 4525282,
                "areaName": "徽县"
            },
            {
                "id": 4525283,
                "areaName": "两当县"
            }
        ],
        "4525284": [
            {
                "id": 4525285,
                "areaName": "临夏市"
            },
            {
                "id": 4525286,
                "areaName": "临夏县"
            },
            {
                "id": 4525287,
                "areaName": "康乐县"
            },
            {
                "id": 4525288,
                "areaName": "永靖县"
            },
            {
                "id": 4525289,
                "areaName": "广河县"
            },
            {
                "id": 4525290,
                "areaName": "和政县"
            },
            {
                "id": 4525291,
                "areaName": "东乡族自治县"
            },
            {
                "id": 4525292,
                "areaName": "积石山保安族东乡族撒拉族自治县"
            }
        ],
        "4525293": [
            {
                "id": 4525294,
                "areaName": "合作市"
            },
            {
                "id": 4525295,
                "areaName": "临潭县"
            },
            {
                "id": 4525296,
                "areaName": "卓尼县"
            },
            {
                "id": 4525297,
                "areaName": "舟曲县"
            },
            {
                "id": 4525298,
                "areaName": "迭部县"
            },
            {
                "id": 4525299,
                "areaName": "玛曲县"
            },
            {
                "id": 4525300,
                "areaName": "碌曲县"
            },
            {
                "id": 4525301,
                "areaName": "夏河县"
            }
        ],
        "4525303": [
            {
                "id": 4525304,
                "areaName": "市辖区"
            },
            {
                "id": 4525305,
                "areaName": "城东区"
            },
            {
                "id": 4525306,
                "areaName": "城中区"
            },
            {
                "id": 4525307,
                "areaName": "城西区"
            },
            {
                "id": 4525308,
                "areaName": "城北区"
            },
            {
                "id": 4525309,
                "areaName": "大通回族土族自治县"
            },
            {
                "id": 4525310,
                "areaName": "湟中县"
            },
            {
                "id": 4525311,
                "areaName": "湟源县"
            }
        ],
        "4525312": [
            {
                "id": 4525313,
                "areaName": "平安县"
            },
            {
                "id": 4525314,
                "areaName": "民和回族土族自治县"
            },
            {
                "id": 4525315,
                "areaName": "乐都县"
            },
            {
                "id": 4525316,
                "areaName": "互助土族自治县"
            },
            {
                "id": 4525317,
                "areaName": "化隆回族自治县"
            },
            {
                "id": 4525318,
                "areaName": "循化撒拉族自治县"
            }
        ],
        "4525319": [
            {
                "id": 4525320,
                "areaName": "门源回族自治县"
            },
            {
                "id": 4525321,
                "areaName": "祁连县"
            },
            {
                "id": 4525322,
                "areaName": "海晏县"
            },
            {
                "id": 4525323,
                "areaName": "刚察县"
            }
        ],
        "4525324": [
            {
                "id": 4525325,
                "areaName": "同仁县"
            },
            {
                "id": 4525326,
                "areaName": "尖扎县"
            },
            {
                "id": 4525327,
                "areaName": "泽库县"
            },
            {
                "id": 4525328,
                "areaName": "河南蒙古族自治县"
            }
        ],
        "4525329": [
            {
                "id": 4525330,
                "areaName": "共和县"
            },
            {
                "id": 4525331,
                "areaName": "同德县"
            },
            {
                "id": 4525332,
                "areaName": "贵德县"
            },
            {
                "id": 4525333,
                "areaName": "兴海县"
            },
            {
                "id": 4525334,
                "areaName": "贵南县"
            }
        ],
        "4525335": [
            {
                "id": 4525336,
                "areaName": "玛沁县"
            },
            {
                "id": 4525337,
                "areaName": "班玛县"
            },
            {
                "id": 4525338,
                "areaName": "甘德县"
            },
            {
                "id": 4525339,
                "areaName": "达日县"
            },
            {
                "id": 4525340,
                "areaName": "久治县"
            },
            {
                "id": 4525341,
                "areaName": "玛多县"
            }
        ],
        "4525342": [
            {
                "id": 4525343,
                "areaName": "玉树县"
            },
            {
                "id": 4525344,
                "areaName": "杂多县"
            },
            {
                "id": 4525345,
                "areaName": "称多县"
            },
            {
                "id": 4525346,
                "areaName": "治多县"
            },
            {
                "id": 4525347,
                "areaName": "囊谦县"
            },
            {
                "id": 4525348,
                "areaName": "曲麻莱县"
            }
        ],
        "4525349": [
            {
                "id": 4525350,
                "areaName": "格尔木市"
            },
            {
                "id": 4525351,
                "areaName": "德令哈市"
            },
            {
                "id": 4525352,
                "areaName": "乌兰县"
            },
            {
                "id": 4525353,
                "areaName": "都兰县"
            },
            {
                "id": 4525354,
                "areaName": "天峻县"
            }
        ],
        "4525356": [
            {
                "id": 4525357,
                "areaName": "市辖区"
            },
            {
                "id": 4525358,
                "areaName": "兴庆区"
            },
            {
                "id": 4525359,
                "areaName": "西夏区"
            },
            {
                "id": 4525360,
                "areaName": "金凤区"
            },
            {
                "id": 4525361,
                "areaName": "永宁县"
            },
            {
                "id": 4525362,
                "areaName": "贺兰县"
            },
            {
                "id": 4525363,
                "areaName": "灵武市"
            }
        ],
        "4525364": [
            {
                "id": 4525365,
                "areaName": "市辖区"
            },
            {
                "id": 4525366,
                "areaName": "大武口区"
            },
            {
                "id": 4525367,
                "areaName": "惠农区"
            },
            {
                "id": 4525368,
                "areaName": "平罗县"
            }
        ],
        "4525369": [
            {
                "id": 4525370,
                "areaName": "市辖区"
            },
            {
                "id": 4525371,
                "areaName": "利通区"
            },
            {
                "id": 4525372,
                "areaName": "红寺堡区"
            },
            {
                "id": 4525373,
                "areaName": "盐池县"
            },
            {
                "id": 4525374,
                "areaName": "同心县"
            },
            {
                "id": 4525375,
                "areaName": "青铜峡市"
            }
        ],
        "4525376": [
            {
                "id": 4525377,
                "areaName": "市辖区"
            },
            {
                "id": 4525378,
                "areaName": "原州区"
            },
            {
                "id": 4525379,
                "areaName": "西吉县"
            },
            {
                "id": 4525380,
                "areaName": "隆德县"
            },
            {
                "id": 4525381,
                "areaName": "泾源县"
            },
            {
                "id": 4525382,
                "areaName": "彭阳县"
            }
        ],
        "4525383": [
            {
                "id": 4525384,
                "areaName": "市辖区"
            },
            {
                "id": 4525385,
                "areaName": "沙坡头区"
            },
            {
                "id": 4525386,
                "areaName": "中宁县"
            },
            {
                "id": 4525387,
                "areaName": "海原县"
            }
        ],
        "4525389": [
            {
                "id": 4525390,
                "areaName": "市辖区"
            },
            {
                "id": 4525391,
                "areaName": "天山区"
            },
            {
                "id": 4525392,
                "areaName": "沙依巴克区"
            },
            {
                "id": 4525393,
                "areaName": "新市区"
            },
            {
                "id": 4525394,
                "areaName": "水磨沟区"
            },
            {
                "id": 4525395,
                "areaName": "头屯河区"
            },
            {
                "id": 4525396,
                "areaName": "达坂城区"
            },
            {
                "id": 4525397,
                "areaName": "米东区"
            },
            {
                "id": 4525398,
                "areaName": "乌鲁木齐县"
            }
        ],
        "4525399": [
            {
                "id": 4525400,
                "areaName": "市辖区"
            },
            {
                "id": 4525401,
                "areaName": "独山子区"
            },
            {
                "id": 4525402,
                "areaName": "克拉玛依区"
            },
            {
                "id": 4525403,
                "areaName": "白碱滩区"
            },
            {
                "id": 4525404,
                "areaName": "乌尔禾区"
            }
        ],
        "4525405": [
            {
                "id": 4525406,
                "areaName": "吐鲁番市"
            },
            {
                "id": 4525407,
                "areaName": "鄯善县"
            },
            {
                "id": 4525408,
                "areaName": "托克逊县"
            }
        ],
        "4525409": [
            {
                "id": 4525410,
                "areaName": "哈密市"
            },
            {
                "id": 4525411,
                "areaName": "巴里坤哈萨克自治县"
            },
            {
                "id": 4525412,
                "areaName": "伊吾县"
            }
        ],
        "4525413": [
            {
                "id": 4525414,
                "areaName": "昌吉市"
            },
            {
                "id": 4525415,
                "areaName": "阜康市"
            },
            {
                "id": 4525416,
                "areaName": "呼图壁县"
            },
            {
                "id": 4525417,
                "areaName": "玛纳斯县"
            },
            {
                "id": 4525418,
                "areaName": "奇台县"
            },
            {
                "id": 4525419,
                "areaName": "吉木萨尔县"
            },
            {
                "id": 4525420,
                "areaName": "木垒哈萨克自治县"
            }
        ],
        "4525421": [
            {
                "id": 4525422,
                "areaName": "博乐市"
            },
            {
                "id": 4525423,
                "areaName": "精河县"
            },
            {
                "id": 4525424,
                "areaName": "温泉县"
            }
        ],
        "4525425": [
            {
                "id": 4525426,
                "areaName": "库尔勒市"
            },
            {
                "id": 4525427,
                "areaName": "轮台县"
            },
            {
                "id": 4525428,
                "areaName": "尉犁县"
            },
            {
                "id": 4525429,
                "areaName": "若羌县"
            },
            {
                "id": 4525430,
                "areaName": "且末县"
            },
            {
                "id": 4525431,
                "areaName": "焉耆回族自治县"
            },
            {
                "id": 4525432,
                "areaName": "和静县"
            },
            {
                "id": 4525433,
                "areaName": "和硕县"
            },
            {
                "id": 4525434,
                "areaName": "博湖县"
            }
        ],
        "4525435": [
            {
                "id": 4525436,
                "areaName": "阿克苏市"
            },
            {
                "id": 4525437,
                "areaName": "温宿县"
            },
            {
                "id": 4525438,
                "areaName": "库车县"
            },
            {
                "id": 4525439,
                "areaName": "沙雅县"
            },
            {
                "id": 4525440,
                "areaName": "新和县"
            },
            {
                "id": 4525441,
                "areaName": "拜城县"
            },
            {
                "id": 4525442,
                "areaName": "乌什县"
            },
            {
                "id": 4525443,
                "areaName": "阿瓦提县"
            },
            {
                "id": 4525444,
                "areaName": "柯坪县"
            }
        ],
        "4525445": [
            {
                "id": 4525446,
                "areaName": "阿图什市"
            },
            {
                "id": 4525447,
                "areaName": "阿克陶县"
            },
            {
                "id": 4525448,
                "areaName": "阿合奇县"
            },
            {
                "id": 4525449,
                "areaName": "乌恰县"
            }
        ],
        "4525450": [
            {
                "id": 4525451,
                "areaName": "喀什市"
            },
            {
                "id": 4525452,
                "areaName": "疏附县"
            },
            {
                "id": 4525453,
                "areaName": "疏勒县"
            },
            {
                "id": 4525454,
                "areaName": "英吉沙县"
            },
            {
                "id": 4525455,
                "areaName": "泽普县"
            },
            {
                "id": 4525456,
                "areaName": "莎车县"
            },
            {
                "id": 4525457,
                "areaName": "叶城县"
            },
            {
                "id": 4525458,
                "areaName": "麦盖提县"
            },
            {
                "id": 4525459,
                "areaName": "岳普湖县"
            },
            {
                "id": 4525460,
                "areaName": "伽师县"
            },
            {
                "id": 4525461,
                "areaName": "巴楚县"
            },
            {
                "id": 4525462,
                "areaName": "塔什库尔干塔吉克自治县"
            }
        ],
        "4525463": [
            {
                "id": 4525464,
                "areaName": "和田市"
            },
            {
                "id": 4525465,
                "areaName": "和田县"
            },
            {
                "id": 4525466,
                "areaName": "墨玉县"
            },
            {
                "id": 4525467,
                "areaName": "皮山县"
            },
            {
                "id": 4525468,
                "areaName": "洛浦县"
            },
            {
                "id": 4525469,
                "areaName": "策勒县"
            },
            {
                "id": 4525470,
                "areaName": "于田县"
            },
            {
                "id": 4525471,
                "areaName": "民丰县"
            }
        ],
        "4525472": [
            {
                "id": 4525473,
                "areaName": "伊宁市"
            },
            {
                "id": 4525474,
                "areaName": "奎屯市"
            },
            {
                "id": 4525475,
                "areaName": "伊宁县"
            },
            {
                "id": 4525476,
                "areaName": "察布查尔锡伯自治县"
            },
            {
                "id": 4525477,
                "areaName": "霍城县"
            },
            {
                "id": 4525478,
                "areaName": "巩留县"
            },
            {
                "id": 4525479,
                "areaName": "新源县"
            },
            {
                "id": 4525480,
                "areaName": "昭苏县"
            },
            {
                "id": 4525481,
                "areaName": "特克斯县"
            },
            {
                "id": 4525482,
                "areaName": "尼勒克县"
            }
        ],
        "4525483": [
            {
                "id": 4525484,
                "areaName": "塔城市"
            },
            {
                "id": 4525485,
                "areaName": "乌苏市"
            },
            {
                "id": 4525486,
                "areaName": "额敏县"
            },
            {
                "id": 4525487,
                "areaName": "沙湾县"
            },
            {
                "id": 4525488,
                "areaName": "托里县"
            },
            {
                "id": 4525489,
                "areaName": "裕民县"
            },
            {
                "id": 4525490,
                "areaName": "和布克赛尔蒙古自治县"
            }
        ],
        "4525491": [
            {
                "id": 4525492,
                "areaName": "阿勒泰市"
            },
            {
                "id": 4525493,
                "areaName": "布尔津县"
            },
            {
                "id": 4525494,
                "areaName": "富蕴县"
            },
            {
                "id": 4525495,
                "areaName": "福海县"
            },
            {
                "id": 4525496,
                "areaName": "哈巴河县"
            },
            {
                "id": 4525497,
                "areaName": "青河县"
            },
            {
                "id": 4525498,
                "areaName": "吉木乃县"
            }
        ],
        "4525499": [
            {
                "id": 4525500,
                "areaName": "石河子市"
            },
            {
                "id": 4525501,
                "areaName": "阿拉尔市"
            },
            {
                "id": 4525502,
                "areaName": "图木舒克市"
            },
            {
                "id": 4525503,
                "areaName": "五家渠市"
            }
        ]
    };





//合并成一个对象
    for(var i= 0,l=provincelocation.length;i<l;i++){
        var ji_2 = citySectionJson[provincelocation[i].id];
        provincelocation[i].children = ji_2;

        for(var z= 0,zl=ji_2.length;z<zl;z++){
            var ji_2_id = ji_2[z].id;
            ji_2[z].children = sectionJson[ji_2_id];
        }
    }


    window.areaData =  provincelocation;
})();


