var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "大廳",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 376.5,
      "initialViewParameters": {
        "yaw": 0.065895084003877,
        "pitch": -0.18573105357346265,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.2227794784813373,
          "pitch": -0.0929743593250425,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": 0.017645376555115888,
          "pitch": 0.03544764384065502,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": -1.1771800043831178,
          "pitch": 0.060963648134174875,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": -0.9285713864215932,
          "pitch": 0.03683241146490879,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5977944854537718,
          "pitch": -0.18538109647152368,
          "title": "排行榜",
          "text": "等級排行 每日獲勝次數 每日擊殺數 每日挖床次數"
        }
      ]
    },
    {
      "id": "1-",
      "name": "大廳的跑酷",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.5234083728265713,
          "pitch": 0.2170809346978153,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "商店",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.9013654679359817,
          "pitch": 0.09456129639113087,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": 3.0854130871376366,
          "pitch": 0.09027874847708262,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": -2.477606270285854,
          "pitch": -0.08942567230469223,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0319424920166167,
          "pitch": 0.12025494374249668,
          "title": "商店",
          "text": "可以買特效"
        }
      ]
    },
    {
      "id": "3-",
      "name": "單人床戰",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "yaw": 0.040786474165287245,
        "pitch": -0.322533859799794,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.019180887059864205,
          "pitch": -0.14904934627908162,
          "rotation": 0,
          "target": "4-"
        },
        {
          "yaw": -2.1643258906508684,
          "pitch": -0.16588259174856645,
          "rotation": 0,
          "target": "1-"
        },
        {
          "yaw": 2.836178713911231,
          "pitch": 0.0467239626160989,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": 1.383054936598704,
          "pitch": -0.005936861016325068,
          "rotation": 0,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-",
      "name": "單人床戰等待大廳",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08903136715628257,
          "pitch": 0.09290723152600933,
          "rotation": 0,
          "target": "5-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.613855646381797,
          "pitch": 0.225349317595672,
          "title": "等待大廳",
          "text": "玩家會先被匿名"
        }
      ]
    },
    {
      "id": "5-",
      "name": "單人床戰開始",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 804,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.007677992389966,
          "pitch": 0.14848756257322293,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9961961372292159,
          "pitch": 0.047277778919312397,
          "title": "物品商店",
          "text": "以鐵跟黃金交易"
        },
        {
          "yaw": 0.9872521949749036,
          "pitch": 0.06304335388028193,
          "title": "升級商店",
          "text": "以鑽石交易"
        },
        {
          "yaw": 2.9264039403409603,
          "pitch": 0.8919390643274419,
          "title": "資源點",
          "text": "會定時生成鐵跟黃金資源"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
