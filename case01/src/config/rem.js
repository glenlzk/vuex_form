/**
 * Created by Administrator on 2017/6/8 0008.
 */

// 非缩放版：border: 1px 无需缩放(特殊处理border，缩放为1/dpr)，

// ----------------------------页面布局---------------或者1rem大小75px ----> 放大多一倍，即可无需缩放处理

// 页面按照(如:iphone6: 375 * 667 dpr:2 ) 设计稿750 * 1334 布局，width/height 全部必须根据dpr2：(750 * 1334)/2来布局
// 此时，布局时：height/width ==> 根据设计稿750 * 1334 ==> 按设计稿实际大小布局，即可，如以下例子：
/*
 // 例如: .px2rem(height, 80);
 .px2rem(@name, @px){
  @{name}: @px / 75 * 1rem;
 }

 所以，对于宽高750×300px的div(根据设计稿750 * 1334实际px大小)，我们用less就这样写：

 .px2rem(width, 375);   // 750/2
 .px2rem(height, 150);  // 300/2
 */

// ---------------------border:1px 特殊处理：
//
/*
  // -------------------------------------------根据media dpr，进行缩放--------------------------

  // 1.先画出1px的border
  border-1px($color) {
     position: relative
     &::after
     content: ''
     position: absolute
     left: 0
     bottom: 0
     display: block
     width: 100%
     border: 1px solid $color
  }

    // 2.再缩放----根据不同的DPR做适配：

    @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-aspect-ratio: 1.5) {
       .border-1px {
         &::after {
           -webkit-transform: scaleY(0.7)
           transform: scale(0.7)
         }
       }
    }


    @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
       .border-1px  {
           &::after {
             -webkit-transform: scaleY(0.5)
             transform: scaleY(0.5)
           }
       }
    }


  // -------------------------------------------根据html标签dpr属性，进行缩放--------------------------

    // 2.再缩放----根据不同的DPR做适配：
   border-scale() {
       -webkit-transform: scaleY(1);
       transform: scaleY(1);
     [data-dpr="2"] & {
       -webkit-transform: scaleY(1/2);
       transform: scaleY(1/2);
     }
     [data-dpr="3"] & {
       -webkit-transform: scaleY(1/3);
       transform: scaleY(1/3);
     }
   }

 // 1.先画出1px的border
 border-1px($color) {
   position: relative
   &::after {
     content: ''
     position: absolute
     left: 0
     bottom: 0
     display: block
     width: 100%
     border: 1px solid $color
     .border-scale()
   }
 }
 */
// ----------------- 字体处理：----------------非缩放页面：字体也需要进行缩放处理----------------------再除以2，即可实现无需缩放
/*
 .px2px(@name, @px){
   @{name}: round(@px / 2) * 1px;
   [data-dpr="2"] & {
    @{name}: @px * 1px;
   }
   // for mx3
   [data-dpr="2.5"] & {
    @{name}: round(@px * 2.5 / 2) * 1px;
   }
   // for 小米note
   [data-dpr="2.75"] & {
    @{name}: round(@px * 2.75 / 2) * 1px;
   }
   [data-dpr="3"] & {
    @{name}: round(@px / 2 * 3) * 1px
   }
   // for 三星note4
   [data-dpr="4"] & {
    @{name}: @px * 2px;
   }
 }
 */
// ----------------- background图片适配
/*
 // --------------根据媒体标签进行适配，
 bg-image($url)
   background-image: url($url + '@2x.png')
   @media (-webkit-min-device-pixel-ratio:3),(min-divce-pixel-ratio:3)
   background-image: url($url + '@3x.png')

 应用:
 .brand
   display: inline-block
   margin-right: 6px
   width: 30px
   height: 18px
   bg-image('brand')               // 应用
   background-size: 100% 100%
   background-repeat: no-repeat
   vertical-align: top

 // --------------根据html标签属性dpr进行适配
 bg-image(@url) {
   background-image: url(@url + '@1x.png');
   [data-dpr="2"] & {
    background-image:url(@url + '@2x.png');;
   }
   [data-dpr="3"] & {
    background-image: url(@url + '@3x.png')
   }
 }

 应用:
 .brand
   display: inline-block
   margin-right: 6px
   width: 30px
   height: 18px
   bg-image('brand')               // 应用
   background-size: 100% 100%
   background-repeat: no-repeat
   vertical-align: top
 */

//

;(function (win, document) {
  var dpr, rem, scale;
  var docEl = document.documentElement;
  var fontEl = document.createElement('style');
  var metaEl = document.querySelector('meta[name="viewport"]');

  dpr = win.devicePixelRatio || 1;
  scale = 1 / dpr;
  rem = docEl.clientWidth / 10;
  // <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
  // 设置viewport，进行缩放，达到高清效果
  metaEl.setAttribute('content', 'width= device-width,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no');

  // 设置data-dpr属性，留作的css hack之用
  docEl.setAttribute('data-dpr', dpr);

  // 动态写入样式
  docEl.firstElementChild.appendChild(fontEl);
  fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';

  // 给js调用的，某一dpr下rem和px之间的转换函数
  win.rem2px = function(v) {
    v = parseFloat(v);
    return v * rem;
  };

  win.px2rem = function(v) {
    v = parseFloat(v);
    return v / rem;
  };

  win.dpr = dpr;
  win.rem = rem;

})(window, document);


// ------------------------------------------根据不同的设计稿尺寸，布局等变动
