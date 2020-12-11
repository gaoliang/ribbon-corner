# ribbon-corner
Add a ribbon in the corner of your website.

## Screenshot
![screenshot](https://raw.githubusercontent.com/gaoliang/ribbon-corner/main/docs/screenshot.jpg)


## Getting started

### Installation

```shell
npm install ribbon-corner
```

In browser:

```html
<script src="/path/to/ribben-corner.js"></script>
```

The [unpkg](https://unpkg.com/) provides CDN support for Ribben corner. You can find the links [here](http://unpkg.com/ribbon-corner).

### Usage

#### Syntax

```js
import { ribbenCorner } from 'ribbon-corner'
ribbenCorner(options)
```

- **options** (optional)
```javascript
    var defaultOptions = {
        backgroundColor: '#67C23A',
        toCorner: 100, // the distance of ribben to cornor in px
        height: 50, // height of ribben in px
        horizontalAlign: 'left',
        text: 'Ribben Corner',
        textColor: 'white',
        position: 'fixed', // fixed or absolute
        fontSize: 15,
    };
```


#### Example

Source code of screenshot
```javascript
    ribbenCorner({
        backgroundColor: '#67C23A',
        horizontalAlign: 'left',
        toCorner: 200,
        height: 120,
        text: 'At Left',
    });
    ribbenCorner({
        backgroundColor: '#E6A23C',
        horizontalAlign: 'right',
        text: 'At Right',
    });
```