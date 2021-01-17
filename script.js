TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": {
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": "this.panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB",
          "class": "AdjacentPanorama",
          "yaw": -58.44,
          "backwardYaw": -37.17
         },
         {
          "distance": 1,
          "panorama": {
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": "this.panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66",
             "class": "AdjacentPanorama",
             "yaw": 4.32,
             "backwardYaw": 33.79
            }
           ],
           "label": "StanzaTavoli",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_00307D34_0E55_EF4B_41A4_95882FA37DEF",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66, this.camera_09A18385_0E6A_D946_41AB_EBCDAC1453AE); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_0_HS_0_0.png",
                    "height": 130,
                    "class": "ImageResourceLevel",
                    "width": 130
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 4.32,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -9.07,
                 "hfov": 8.02
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_0_HS_0_0_0_map.gif",
                    "height": 65,
                    "class": "ImageResourceLevel",
                    "width": 65
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -9.07,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 4.32,
                 "hfov": 8.02
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_r_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_f_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_b_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_u_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_d_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_l_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_t.jpg",
           "cardboardMenu": {
            "selectedBackgroundColor": "#202020",
            "rollOverFontColor": "#FFFFFF",
            "label": "Media",
            "rollOverBackgroundColor": "#000000",
            "backgroundColor": "#404040",
            "opacity": 0.4,
            "selectedFontColor": "#FFFFFF",
            "rollOverOpacity": 0.8,
            "id": "Menu_09C6034A_0E6A_D9C2_4181_7E4A0EEB8B2B",
            "class": "Menu",
            "children": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "label": "Esterno1",
              "class": "MenuItem"
             },
             {
              "click": "this.mainPlayList.set('selectedIndex', 1)",
              "label": "Esterno2",
              "class": "MenuItem"
             },
             {
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "label": "Stanza1 (2)",
              "class": "MenuItem"
             },
             {
              "click": "this.mainPlayList.set('selectedIndex', 3)",
              "label": "Stanza1",
              "class": "MenuItem"
             },
             {
              "click": "this.mainPlayList.set('selectedIndex', 4)",
              "label": "Stanza1Bagno",
              "class": "MenuItem"
             },
             {
              "click": "this.mainPlayList.set('selectedIndex', 5)",
              "label": "Stanza2 (2)",
              "class": "MenuItem"
             },
             {
              "click": "this.mainPlayList.set('selectedIndex', 6)",
              "label": "Stanza2 (3)",
              "class": "MenuItem"
             },
             {
              "click": "this.mainPlayList.set('selectedIndex', 7)",
              "label": "Stanza2",
              "class": "MenuItem"
             },
             {
              "click": "this.mainPlayList.set('selectedIndex', 8)",
              "label": "StanzaTavoli (2)",
              "class": "MenuItem"
             },
             {
              "click": "this.mainPlayList.set('selectedIndex', 9)",
              "label": "StanzaTavoli",
              "class": "MenuItem"
             }
            ],
            "fontColor": "#FFFFFF",
            "fontFamily": "Arial"
           },
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A"
          },
          "class": "AdjacentPanorama",
          "yaw": 33.79,
          "backwardYaw": 4.32
         }
        ],
        "label": "StanzaTavoli (2)",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_0054EEED_0E54_AAD5_41A2_327685A205D1",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB, this.camera_09D5635C_0E6A_D9C6_4196_27947A6532F0); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_0_HS_1_0.png",
                 "height": 130,
                 "class": "ImageResourceLevel",
                 "width": 130
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -58.44,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -6.81,
              "hfov": 8.07
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_0_HS_1_0_0_map.gif",
                 "height": 65,
                 "class": "ImageResourceLevel",
                 "width": 65
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -6.81,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -58.44,
              "hfov": 8.07
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_000F002A_0E54_955C_41A6_FA1C01B9E75F",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A, this.camera_09D6A364_0E6A_D9C6_41A5_67B8DAF7F149); this.mainPlayList.set('selectedIndex', 9)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_0_HS_0_0.png",
                 "height": 130,
                 "class": "ImageResourceLevel",
                 "width": 130
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 33.79,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -7.85,
              "hfov": 8.05
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_0_HS_0_0_0_map.gif",
                 "height": 65,
                 "class": "ImageResourceLevel",
                 "width": 65
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -7.85,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 33.79,
              "hfov": 8.05
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_r_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_f_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_b_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_u_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_d_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_l_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_t.jpg",
        "cardboardMenu": "this.Menu_09C6034A_0E6A_D9C2_4181_7E4A0EEB8B2B",
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66"
       },
       "class": "AdjacentPanorama",
       "yaw": -37.17,
       "backwardYaw": -58.44
      },
      {
       "distance": 1,
       "panorama": {
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": {
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": "this.panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B",
             "class": "AdjacentPanorama",
             "yaw": 54.88,
             "backwardYaw": -67.68
            }
           ],
           "label": "Stanza1Bagno",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_005FE86C_0E54_75DB_41A0_739FA4CE56BF",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B, this.camera_09BC638D_0E6A_D946_419A_038364638F2B); this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_0_HS_0_0.png",
                    "height": 130,
                    "class": "ImageResourceLevel",
                    "width": 130
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 54.88,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -25.11,
                 "hfov": 7.36
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_0_HS_0_0_0_map.gif",
                    "height": 65,
                    "class": "ImageResourceLevel",
                    "width": 65
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -25.11,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 54.88,
                 "hfov": 7.36
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_r_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_f_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_b_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_u_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_d_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_l_hq.jpeg",
                "height": 1832,
                "class": "ImageResourceLevel",
                "width": 1832
               },
               {
                "url": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_t.jpg",
           "cardboardMenu": "this.Menu_09C6034A_0E6A_D9C2_4181_7E4A0EEB8B2B",
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF"
          },
          "class": "AdjacentPanorama",
          "yaw": -67.68,
          "backwardYaw": 54.88
         },
         {
          "distance": 1,
          "panorama": "this.panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB",
          "class": "AdjacentPanorama",
          "yaw": 39.54,
          "backwardYaw": 141
         }
        ],
        "label": "Stanza1",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_03AA8817_0E54_7575_4197_FC44C5AA682D",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB, this.camera_09AED375_0E6A_D9C6_41A6_1BAE51B08941); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_0_HS_1_0.png",
                 "height": 130,
                 "class": "ImageResourceLevel",
                 "width": 130
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 39.54,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -16.4,
              "hfov": 7.79
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_0_HS_1_0_0_map.gif",
                 "height": 65,
                 "class": "ImageResourceLevel",
                 "width": 65
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -16.4,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 39.54,
              "hfov": 7.79
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_03A933DF_0E54_9AF4_41AC_2E1848832BFD",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF, this.camera_09AD336C_0E6A_D9C6_41A3_7BC1BC73ED05); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_0_HS_0_0.png",
                 "height": 130,
                 "class": "ImageResourceLevel",
                 "width": 130
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -67.68,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -11.52,
              "hfov": 7.96
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_0_HS_0_0_0_map.gif",
                 "height": 65,
                 "class": "ImageResourceLevel",
                 "width": 65
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -11.52,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -67.68,
              "hfov": 7.96
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_r_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_f_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_b_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_u_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_d_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_l_hq.jpeg",
             "height": 1832,
             "class": "ImageResourceLevel",
             "width": 1832
            },
            {
             "url": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_t.jpg",
        "cardboardMenu": "this.Menu_09C6034A_0E6A_D9C2_4181_7E4A0EEB8B2B",
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B"
       },
       "class": "AdjacentPanorama",
       "yaw": 141,
       "backwardYaw": 39.54
      },
      {
       "distance": 1,
       "panorama": "this.panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F",
       "class": "AdjacentPanorama",
       "yaw": 179.88,
       "backwardYaw": 2.93
      }
     ],
     "label": "Esterno2",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_047B1042_0E5C_95CF_4140_24BC8967E078",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B, this.camera_09B4E39D_0E6A_D946_41A9_06448BB273A0); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_0_HS_2_0.png",
              "height": 130,
              "class": "ImageResourceLevel",
              "width": 130
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 141,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -8.73,
           "hfov": 8.03
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_0_HS_2_0_0_map.gif",
              "height": 65,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -8.73,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 141,
           "hfov": 8.03
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_04452C8F_0E5C_AD54_41A0_DAE44082DA21",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66, this.camera_09B88395_0E6A_D946_41A4_41F6FFA537AF); this.mainPlayList.set('selectedIndex', 8)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_0_HS_1_0.png",
              "height": 130,
              "class": "ImageResourceLevel",
              "width": 130
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -37.17,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -2.62,
           "hfov": 8.12
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_0_HS_1_0_0_map.gif",
              "height": 65,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.62,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -37.17,
           "hfov": 8.12
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_0033A3DD_0E6B_9AF5_41A9_2567CE172E70",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F, this.camera_09B303A5_0E6A_D946_41A3_0FBACF179C37); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_0_HS_0_0.png",
              "height": 130,
              "class": "ImageResourceLevel",
              "width": 130
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 179.88,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -9.25,
           "hfov": 8.02
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_0_HS_0_0_0_map.gif",
              "height": 65,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.25,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 179.88,
           "hfov": 8.02
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_r_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_f_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_b_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_u_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_d_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_l_hq.jpeg",
          "height": 1832,
          "class": "ImageResourceLevel",
          "width": 1832
         },
         {
          "url": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_t.jpg",
     "cardboardMenu": "this.Menu_09C6034A_0E6A_D9C2_4181_7E4A0EEB8B2B",
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB"
    },
    "class": "AdjacentPanorama",
    "yaw": 2.93,
    "backwardYaw": 179.88
   }
  ],
  "label": "Esterno1",
  "hfovMax": 120,
  "partial": false,
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_076E8ECC_0E5B_AADB_4186_75D1C9FC427B",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_0_HS_2_0.png",
           "height": 130,
           "class": "ImageResourceLevel",
           "width": 130
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -32.46,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -3.15,
        "hfov": 8.11
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_0_HS_2_0_0_map.gif",
           "height": 65,
           "class": "ImageResourceLevel",
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.15,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -32.46,
        "hfov": 8.11
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_07E98D72_0E5C_AFCF_418A_C8A7870F7C39",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_0_HS_1_0.png",
           "height": 130,
           "class": "ImageResourceLevel",
           "width": 130
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 117.12,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -10.64,
        "hfov": 7.99
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_0_HS_1_0_0_map.gif",
           "height": 65,
           "class": "ImageResourceLevel",
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.64,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 117.12,
        "hfov": 7.99
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_0009228A_0E54_955F_4181_246BD2C8C355",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB, this.camera_09A5737D_0E6A_D9C6_41A6_1F4D3041A097); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_0_HS_0_0.png",
           "height": 130,
           "class": "ImageResourceLevel",
           "width": 130
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 2.93,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.53,
        "hfov": 7.66
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_0_HS_0_0_0_map.gif",
           "height": 65,
           "class": "ImageResourceLevel",
           "width": 65
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.53,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 2.93,
        "hfov": 7.66
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_r_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_f_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_b_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_u_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_d_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_l_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_t.jpg",
  "cardboardMenu": "this.Menu_09C6034A_0E6A_D9C2_4181_7E4A0EEB8B2B",
  "hfovMin": 60,
  "pitch": 0,
  "id": "panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F"
 },
 {
  "buttonRestart": {
   "transparencyActive": false,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "iconURL": "skin/IconButton_1F7BB61B_0E6C_9D7D_41AC_BE2D643D4005.png",
   "verticalAlign": "middle",
   "mode": "push",
   "minWidth": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_1F7BB61B_0E6C_9D7D_41AC_BE2D643D4005_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_1F7BB61B_0E6C_9D7D_41AC_BE2D643D4005_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "borderSize": 0,
   "id": "IconButton_1F7BB61B_0E6C_9D7D_41AC_BE2D643D4005",
   "paddingRight": 0
  },
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "buttonZoomOut": {
   "transparencyActive": false,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "iconURL": "skin/IconButton_1F7BA61B_0E6C_9D7D_41AA_EBDC45179951.png",
   "verticalAlign": "middle",
   "mode": "push",
   "minWidth": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_1F7BA61B_0E6C_9D7D_41AA_EBDC45179951_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_1F7BA61B_0E6C_9D7D_41AA_EBDC45179951_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "id": "IconButton_1F7BA61B_0E6C_9D7D_41AA_EBDC45179951",
   "paddingRight": 0
  },
  "displayPlaybackBar": true,
  "buttonMoveRight": {
   "transparencyActive": false,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "iconURL": "skin/IconButton_1F7B261B_0E6C_9D7D_41A0_68F3DF24A325.png",
   "verticalAlign": "middle",
   "mode": "push",
   "minWidth": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_1F7B261B_0E6C_9D7D_41A0_68F3DF24A325_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_1F7B261B_0E6C_9D7D_41A0_68F3DF24A325_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "id": "IconButton_1F7B261B_0E6C_9D7D_41A0_68F3DF24A325",
   "paddingRight": 0
  },
  "buttonPause": {
   "transparencyActive": false,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "iconURL": "skin/IconButton_1F7B461B_0E6C_9D7D_41AC_2483C9EC277D.png",
   "verticalAlign": "middle",
   "mode": "toggle",
   "minWidth": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "shadow": false,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_1F7B461B_0E6C_9D7D_41AC_2483C9EC277D_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "width": 40,
   "height": 40,
   "horizontalAlign": "center",
   "borderSize": 0,
   "id": "IconButton_1F7B461B_0E6C_9D7D_41AC_2483C9EC277D",
   "paddingRight": 0
  },
  "buttonMoveUp": {
   "transparencyActive": false,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "iconURL": "skin/IconButton_1F7B761B_0E6C_9D7D_4136_C83E23B4E5D6.png",
   "verticalAlign": "middle",
   "mode": "push",
   "minWidth": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_1F7B761B_0E6C_9D7D_4136_C83E23B4E5D6_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_1F7B761B_0E6C_9D7D_4136_C83E23B4E5D6_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "id": "IconButton_1F7B761B_0E6C_9D7D_4136_C83E23B4E5D6",
   "paddingRight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomIn": {
   "transparencyActive": false,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "iconURL": "skin/IconButton_1F7B161B_0E6C_9D7D_4185_EFE33F203710.png",
   "verticalAlign": "middle",
   "mode": "push",
   "minWidth": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_1F7B161B_0E6C_9D7D_4185_EFE33F203710_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_1F7B161B_0E6C_9D7D_4185_EFE33F203710_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "id": "IconButton_1F7B161B_0E6C_9D7D_4185_EFE33F203710",
   "paddingRight": 0
  },
  "buttonMoveDown": {
   "transparencyActive": false,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "iconURL": "skin/IconButton_1F7B561B_0E6C_9D7D_41A1_4B3B65D194A2.png",
   "verticalAlign": "middle",
   "mode": "push",
   "minWidth": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_1F7B561B_0E6C_9D7D_41A1_4B3B65D194A2_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_1F7B561B_0E6C_9D7D_41A1_4B3B65D194A2_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "id": "IconButton_1F7B561B_0E6C_9D7D_41A1_4B3B65D194A2",
   "paddingRight": 0
  },
  "buttonMoveLeft": {
   "transparencyActive": false,
   "paddingLeft": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "iconURL": "skin/IconButton_1F7B961B_0E6C_9D7D_4184_AF82900BE496.png",
   "verticalAlign": "middle",
   "mode": "push",
   "minWidth": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_1F7B961B_0E6C_9D7D_4184_AF82900BE496_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_1F7B961B_0E6C_9D7D_4184_AF82900BE496_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "width": 32,
   "height": 32,
   "horizontalAlign": "center",
   "borderSize": 0,
   "id": "IconButton_1F7B961B_0E6C_9D7D_4184_AF82900BE496",
   "paddingRight": 0
  }
 },
 {
  "id": "panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB",
 {
  "id": "panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "label": "Stanza1 (2)",
  "hfov": 360,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_r_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_f_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_b_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_u_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_d_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_l_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_089C9AD1_0E55_EACD_4197_08991CC8E136",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_09C6034A_0E6A_D9C2_4181_7E4A0EEB8B2B",
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_t.jpg"
 },
 {
  "id": "panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B",
 {
  "id": "panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF",
 {
  "id": "panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "label": "Stanza2 (2)",
  "hfov": 360,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_r_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_f_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_b_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_u_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_d_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_l_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_09C6034A_0E6A_D9C2_4181_7E4A0EEB8B2B",
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_t.jpg"
 },
 {
  "id": "panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "label": "Stanza2 (3)",
  "hfov": 360,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_r_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_f_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_b_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_u_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_d_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_l_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_09C6034A_0E6A_D9C2_4181_7E4A0EEB8B2B",
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_t.jpg"
 },
 {
  "id": "panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "label": "Stanza2",
  "hfov": 360,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_r_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_f_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_b_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_u_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_d_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_l_hq.jpeg",
       "height": 1832,
       "class": "ImageResourceLevel",
       "width": 1832
      },
      {
       "url": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_t.jpg"
   }
  ],
  "hfovMax": 120,
  "id": "panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_09C6034A_0E6A_D9C2_4181_7E4A0EEB8B2B",
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_t.jpg"
 },
 {
  "id": "panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66",
 {
  "id": "panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A",
 {
  "id": "panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "media": "this.panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_08832229_0E55_F55D_41A8_90EBD8FA8B9F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_089CF685_0E55_FD55_41A8_25F24E0AA7CB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_089C9AD1_0E55_EACD_4197_08991CC8E136",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_089C9AD1_0E55_EACD_4197_08991CC8E136_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_089C9F1D_0E55_EB75_41A0_D1A70751AD2B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_089CD369_0E55_9BDD_41A1_300B0D4E57CF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_089CE7D7_0E55_9AF5_41A8_AFCA207E2BC7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_089CCC33_0E55_AD4D_41A9_2929C73EBF50_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_089CC0A1_0E55_B54D_4194_B13FE0F44916_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_089CD50F_0E55_BF55_41AB_0A4C78BC6E66_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_089CF96C_0E55_B7DB_4170_3F94AAA0CE3A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.Menu_09C6034A_0E6A_D9C2_4181_7E4A0EEB8B2B",
 {
  "id": "camera_09D5635C_0E6A_D9C6_4196_27947A6532F0",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 142.83
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09D6A364_0E6A_D9C6_41A5_67B8DAF7F149",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -175.68
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09AD336C_0E6A_D9C6_41A3_7BC1BC73ED05",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -125.12
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09AED375_0E6A_D9C6_41A6_1BAE51B08941",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -39
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09A5737D_0E6A_D9C6_41A6_1F4D3041A097",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -0.12
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09A18385_0E6A_D946_41AB_EBCDAC1453AE",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -146.21
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09BC638D_0E6A_D946_419A_038364638F2B",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 112.32
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09B88395_0E6A_D946_41A4_41F6FFA537AF",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 121.56
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09B4E39D_0E6A_D946_41A9_06448BB273A0",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -140.46
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_09B303A5_0E6A_D946_41A3_0FBACF179C37",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -177.07
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "top": 0,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "transitionMode": "blending",
  "paddingLeft": 0,
  "minHeight": 50,
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontFamily": "Arial",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "minWidth": 100,
  "toolTipBorderRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontSize": 12,
  "shadow": false,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "progressLeft": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingBottom": 0,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowSpread": 0,
  "borderSize": 0,
  "width": "100%",
  "playbackBarHeadHeight": 15,
  "id": "MainViewer",
  "playbackBarHeadBorderSize": 0,
  "paddingRight": 0,
  "progressRight": 0,
  "progressOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressBarBorderColor": "#000000",
  "height": "100%",
  "progressBackgroundOpacity": 1,
  "toolTipPaddingLeft": 6,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "playbackBarBottom": 5,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingTop": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "left": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarRight": 0,
  "playbackBarBorderColor": "#FFFFFF"
 },
 {
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "children": [
   "this.IconButton_1F7BA61B_0E6C_9D7D_41AA_EBDC45179951",
   "this.IconButton_1F7BB61B_0E6C_9D7D_41AC_BE2D643D4005",
   "this.IconButton_1F7B961B_0E6C_9D7D_4184_AF82900BE496",
   {
    "scrollBarColor": "#000000",
    "height": "100%",
    "scrollBarOpacity": 0.5,
    "children": [
     "this.IconButton_1F7B761B_0E6C_9D7D_4136_C83E23B4E5D6",
     "this.IconButton_1F7B461B_0E6C_9D7D_41AC_2483C9EC277D",
     "this.IconButton_1F7B561B_0E6C_9D7D_41A1_4B3B65D194A2"
    ],
    "layout": "vertical",
    "paddingLeft": 0,
    "minHeight": 20,
    "borderRadius": 0,
    "contentOpaque": false,
    "verticalAlign": "middle",
    "minWidth": 20,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "class": "Container",
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "overflow": "hidden",
    "horizontalAlign": "center",
    "gap": 4,
    "borderSize": 0,
    "width": 40,
    "id": "Container_1F7B661B_0E6C_9D7D_41AB_4FA4E701D1A1",
    "paddingRight": 0
   },
   "this.IconButton_1F7B261B_0E6C_9D7D_41A0_68F3DF24A325",
   {
    "transparencyActive": false,
    "paddingLeft": 0,
    "minHeight": 0,
    "borderRadius": 0,
    "iconURL": "skin/IconButton_1F7B061B_0E6C_9D7D_4196_D7557CBF31B0.png",
    "verticalAlign": "middle",
    "mode": "toggle",
    "minWidth": 0,
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "shadow": false,
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_1F7B061B_0E6C_9D7D_4196_D7557CBF31B0_pressed.png",
    "cursor": "hand",
    "paddingBottom": 0,
    "width": 40,
    "height": 40,
    "horizontalAlign": "center",
    "borderSize": 0,
    "id": "IconButton_1F7B061B_0E6C_9D7D_4196_D7557CBF31B0",
    "paddingRight": 0
   },
   "this.IconButton_1F7B161B_0E6C_9D7D_4185_EFE33F203710"
  ],
  "layout": "horizontal",
  "bottom": "1.09%",
  "paddingLeft": 0,
  "minHeight": 20,
  "borderRadius": 0,
  "contentOpaque": false,
  "verticalAlign": "middle",
  "minWidth": 20,
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "shadow": false,
  "class": "Container",
  "left": "43.67%",
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "overflow": "hidden",
  "height": 139,
  "horizontalAlign": "center",
  "gap": 4,
  "borderSize": 0,
  "id": "Container_1F78E61B_0E6C_9D7D_419F_95541D8C2A57",
  "paddingRight": 0
 },
 {
  "maxWidth": 128,
  "height": 38,
  "toolTipBorderSize": 1,
  "maxHeight": 128,
  "transparencyActive": true,
  "toolTipFontColor": "#606060",
  "toolTipPaddingTop": 4,
  "top": "1.64%",
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingLeft": 6,
  "paddingLeft": 0,
  "minHeight": 1,
  "borderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontFamily": "Arial",
  "toolTipFontWeight": "normal",
  "verticalAlign": "middle",
  "mode": "toggle",
  "minWidth": 1,
  "toolTipBorderRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "backgroundOpacity": 0,
  "toolTipShadowHorizontalLength": 0,
  "paddingTop": 0,
  "toolTipFontSize": 12,
  "toolTipFontStyle": "normal",
  "shadow": false,
  "class": "IconButton",
  "toolTipPaddingBottom": 4,
  "iconURL": "skin/IconButton_1F7F20D8_0E6C_96FB_416A_CFACC5BA5F3E.png",
  "toolTipOpacity": 1,
  "cursor": "hand",
  "toolTipPaddingRight": 6,
  "paddingBottom": 0,
  "right": "0.96%",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "width": 41,
  "toolTipShadowSpread": 0,
  "horizontalAlign": "center",
  "toolTip": "Fullscreen",
  "borderSize": 0,
  "toolTipBorderColor": "#767676",
  "id": "IconButton_1F7F20D8_0E6C_96FB_416A_CFACC5BA5F3E",
  "paddingRight": 0
 }
], 
 "scrollBarColor": "#000000",
 "buttonToggleMute": "this.IconButton_1F7B061B_0E6C_9D7D_4196_D7557CBF31B0",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scripts": {
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getKey": function(key){    return window[key]; },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "existsKey": function(key){    return key in window; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "unregisterKey": function(key){    delete window[key]; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; }
 },
 "start": "this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_1F7F20D8_0E6C_96FB_416A_CFACC5BA5F3E].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_1F7F20D8_0E6C_96FB_416A_CFACC5BA5F3E",
 "layout": "absolute",
 "paddingLeft": 0,
 "minHeight": 20,
 "borderRadius": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "mouseWheelEnabled": true,
 "class": "Player",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "gap": 10,
 "borderSize": 0,
 "width": "100%",
 "id": "rootPlayer",
 "paddingRight": 0
})