(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RibbonCorner = {}));
}(this, (function (exports) { 'use strict';

    /**
     * @author gaoliang
     * @param {*} options: see defaults for detail
     */
    function ribbonCorner(options) {
      var defaults = {
        backgroundColor: '#67C23A',
        toCorner: 100,
        height: 50,
        horizontalAlign: 'left',
        verticalAlign: 'top',
        // 新增垂直方向选项
        text: 'Ribbon Corner',
        textColor: 'white',
        position: 'fixed',
        fontSize: 15,
        hoverEffect: false // 控制是否启用hover效果

      };
      options = Object.assign({}, defaults, options);
      var element = document.createElement('div');
      element.className = 'ribbon-corner';
      element.style.zIndex = 10000;
      element.style.display = 'flex';
      element.style.justifyContent = 'center';
      element.style.alignItems = 'center';
      element.style.transformOrigin = 'center'; // 添加以下样式确保文字完全居中

      element.style.textAlign = 'center';
      element.style.display = 'flex';
      element.style.flexDirection = 'column';
      element.style.justifyContent = 'flex-end';
      element.style.whiteSpace = 'nowrap'; // 防止文字换行

      element.style.overflow = 'hidden'; // 防止文字溢出

      element.style.position = options.position;
      element.style.backgroundColor = options.backgroundColor;
      element.style.color = options.textColor;
      element.style.fontSize = options.fontSize + 'px';
      element.style.fontFamily = '"PingFang SC","Helvetica Neue","Helvetica","Hiragino Sans GB","Microsoft YaHei","Noto Sans CJK SC","WenQuanYi Micro Hei","Arial",sans-serif';
      element.style.height = options.height + 'px';
      element.innerText = options.text;
      var toTop = options.toCorner / Math.sqrt(2) - options.height / 2;
      var width = options.toCorner * 2 + options.height;
      var offset = options.toCorner / Math.sqrt(2) - width / 2;
      element.style.width = width + 'px'; // 根据垂直方向调整位置和旋转角度

      if (options.verticalAlign === 'top') {
        element.style.top = toTop + 'px';

        if (options.horizontalAlign === 'left') {
          element.style.transform = 'rotate(-45deg)';
          element.style.left = offset + 'px';
        } else {
          element.style.transform = 'rotate(45deg)';
          element.style.right = offset + 'px';
        }
      } else {
        element.style.justifyContent = 'flex-start';
        element.style.bottom = toTop + 'px';

        if (options.horizontalAlign === 'left') {
          element.style.transform = 'rotate(45deg)';
          element.style.left = offset + 'px';
        } else {
          element.style.transform = 'rotate(-45deg)';
          element.style.right = offset + 'px';
        }
      }

      document.body.appendChild(element);
      return element;
    } // 辅助函数：检测鼠标是否在元素内（考虑旋转）

    exports.ribbonCorner = ribbonCorner;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
