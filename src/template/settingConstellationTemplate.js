export const settingConstellationTemplate = {
  type: "flex",
  altText: "this is a flex template",
  contents: {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "請選擇你的星座",
          "weight": "bold",
          "size": "xl"
        },
        {
          "type": "separator"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "牡羊座 3/21 - 4/19",
                "data": "action=constellation&value=Aries&label=牡羊座"
              },
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "金牛座 4/20 - 5/20",
                "data": "action=constellation&value=Taurus&label=金牛座"
              },
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "雙子座 5/21 - 6/20",
                "data": "action=constellation&value=Gemini&label=雙子座"
              },
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "巨蟹座 6/21 - 7/22",
                "data": "action=constellation&value=Cancer&label=巨蟹座"
              },
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "獅子座 7/23 - 8/22",
                "data": "action=constellation&value=Leo&label=獅子座"
              },
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "處女座 8/23 - 9/22",
                "data": "action=constellation&value=Virgo&label=處女座"
              },
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "天秤座 9/23 - 10/22",
                "data": "action=constellation&value=Libra&label=天秤座"
              },
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "天蠍座 10/23 - 11/21",
                "data": "action=constellation&value=Scorpio&label=天蠍座"
              },
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "射手座 11/22 - 12/21",
                "data": "action=constellation&value=Sagittarius&label=射手座"
              },
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "魔羯座 12/22 - 1/19",
                "data": "action=constellation&value=Capricorn&label=魔羯座"
              },
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "水瓶座 1/20 - 2/18",
                "data": "action=constellation&value=Aquarius&label=水瓶座"
              },
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "雙魚座 2/19 - 3/20",
                "data": "action=constellation&value=Pisces&label=雙魚座"
              },
              "height": "sm"
            }
          ]
        }
      ]
    }
  }
}
