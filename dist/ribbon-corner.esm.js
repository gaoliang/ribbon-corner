/**
 * @author gaoliang
 * @param {*} options: see defaults for detail
 */
function ribbenCorner(options) {
  var defaults = {
    backgroundColor: '#67C23A',
    toCorner: 100,
    height: 50,
    horizontalAlign: 'left',
    text: 'Ribben Corner',
    textColor: 'white',
    position: 'fixed',
    fontSize: 15
  };
  options = Object.assign({}, defaults, options);
  var element = document.createElement('div');
  element.className = 'ribben-corner';
  element.style.zIndex = 10000;
  element.style.display = 'flex';
  element.style.justifyContent = 'center';
  element.style.alignItems = 'center';
  element.style.transformOrigin = 'center';
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
  element.style.width = width + 'px';
  element.style.top = toTop + 'px';

  if (options.horizontalAlign === 'left') {
    element.style.transform = 'rotate(-45deg)';
    element.style.left = offset + 'px';
  } else {
    element.style.transform = 'rotate(45deg)';
    element.style.right = offset + 'px';
  }

  document.body.appendChild(element);
}

export { ribbenCorner };
