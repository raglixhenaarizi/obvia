/**
 * This is a Loader Element
 * 
 * Kreatx 2018
 */

import { Component } from "/flowerui/components/base/Component.js";
import { ObjectUtils } from "/flowerui/lib/ObjectUtils.js";
var Loader = function(_props)
{ 
    this.template = function () 
    {
        return  "<div id='" + this.domID + "'>" +
                    "<style>" +
                        ".se-pre-con {" +
                            "position: fixed;" +
                            "left: 0px;" +
                            "top: 0px;" +
                            "width: 100%;" +
                            "height: 100%;" +
                            "z-index: 999999;" +
                            "opacity: 0.9;" +
                            "background: url('"+(Env.getInstance().baseurl)+"/flowerui/lib/dependencies/images/loader.gif')center no-repeat #fff;" +
                        "}" +
                    "</style>"+
                    "<div class='se-pre-con'></div>" +                    
                "</div>";
    };
    var _defaultParams = {
        visible: true
    };

    _props = ObjectUtils.extend(false, false, _defaultParams, _props);

    Component.call(this, _props);
};

//component prototype
Loader.prototype.ctor = 'Loader';
export {
    Loader
};