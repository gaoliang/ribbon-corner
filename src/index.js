/**
 * @author gaoliang
 * @param {*} options: see defaults for detail
 */
export function ribbonCorner(options) {
    var defaults = {
        backgroundColor: '#67C23A',
        toCorner: 100,
        height: 50,
        horizontalAlign: 'left',
        verticalAlign: 'top',    // 新增垂直方向选项
        text: 'Ribbon Corner',
        textColor: 'white',
        position: 'fixed',
        fontSize: 15,
        hoverEffect: false // 控制是否启用hover效果
    };

    options = Object.assign({}, defaults, options);
    let element = document.createElement('div')
    element.className = 'ribbon-corner'
    element.style.zIndex = 10000
    element.style.display = 'flex'
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    element.style.transformOrigin = 'center';
    // 添加以下样式确保文字完全居中
    element.style.textAlign = 'center';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.justifyContent = 'flex-end';
    element.style.whiteSpace = 'nowrap';  // 防止文字换行
    element.style.overflow = 'hidden';     // 防止文字溢出
    element.style.position = options.position;
    element.style.backgroundColor = options.backgroundColor;
    element.style.color = options.textColor;
    element.style.fontSize = options.fontSize + 'px';
    element.style.fontFamily = '"PingFang SC","Helvetica Neue","Helvetica","Hiragino Sans GB","Microsoft YaHei","Noto Sans CJK SC","WenQuanYi Micro Hei","Arial",sans-serif';
    element.style.height = options.height + 'px'
    element.innerText = options.text

    let toTop = (options.toCorner / Math.sqrt(2)) - (options.height / 2)
    let width = options.toCorner * 2 + options.height;
    let offset = (options.toCorner / Math.sqrt(2)) - width / 2

    element.style.width = width + 'px';

    // 根据垂直方向调整位置和旋转角度
    if (options.verticalAlign === 'top') {
        element.style.top = toTop + 'px';
        if (options.horizontalAlign === 'left') {
            element.style.transform = 'rotate(-45deg)'
            element.style.left = offset + 'px'
        } else {
            element.style.transform = 'rotate(45deg)'
            element.style.right = offset + 'px'
        }
    } else {
        element.style.justifyContent = 'flex-start';
        element.style.bottom = toTop + 'px';
        if (options.horizontalAlign === 'left') {
            element.style.transform = 'rotate(45deg)'
            element.style.left = offset + 'px'
        } else {
            element.style.transform = 'rotate(-45deg)'
            element.style.right = offset + 'px'
        }
    }
    document.body.appendChild(element);
    return element;
}




// 辅助函数：检测鼠标是否在元素内（考虑旋转）
function isMouseInElement(mouseX, mouseY, element) {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    const transform = style.transform;

    // 元素中心坐标
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 转换为相对于中心的坐标
    let x = mouseX - centerX;
    let y = mouseY - centerY;

    if (transform !== 'none') {
        // 解析变换矩阵
        const matrix = new DOMMatrix(transform);
        // 计算逆矩阵
        const inverse = matrix.inverse();
        // 应用逆变换到坐标
        [x, y] = [inverse.a * x + inverse.c * y, inverse.b * x + inverse.d * y];
    }

    // 判断是否在原始矩形范围内
    return Math.abs(x) <= rect.width / 2 && Math.abs(y) <= rect.height / 2;
}