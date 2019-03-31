<!DOCTYPE html>
<html>
<head>
    <title>233</title>
</head>
<body>
    <popup-info ></popup-info>



<script type="text/javascript" >class PopUpInfo extends HTMLElement{
    constructor(){
        super();
        var shadow = this.attachShadow({mode: 'open'});

        var style = document.createElement('style');

        style.textContent = `
        *{
          margin: 0;
          padding: 0;
        }
        ul,li{
          list-style: none;
        }
        #container{
          position:relative;
          width:1180px;
          height:340px;
          overflow:hidden;
          z-index:3;
        }
        img{
          width: 600px;
          height: 350px;
          top: 1px;
          left: 1px;
          position: absolute;
        }
        li{
          opacity: 0;
          transition: 1s;
        }
        #img-list{
          position:absolute;
          width:5900px;
          height:340px;
          z-index:1;
        }
        #pre-btn{
          width: 70px;
          height: 30px;
          position: absolute;
          left: 1px;
          top: 150px;
          text-align: center;
          color: #FFFFFF;
          background-color: rgb(0,0,0,0.7);
          cursor: pointer;
        }
        #next-btn{
          width: 70px;
          height: 30px;
          position: absolute;
          top: 150px;
          right: 1px;
          text-align: center;
          color: #FFFFFF;
          background-color: rgb(0,0,0,0.7);
          cursor: pointer;
        }
      `;
      var timer =  setInterval(function () {
        liIndex++;
        if (liIndex ==li.length) {
            liIndex = 0;
        }
        li[liIndex].style.opacity = 1;
      },2000)
        var contain = document.createElement('div');
        contain.setAttribute('id','container');
        contain.setAttribute('onmouseover','clear(this)');
        // contain.setAttribute('onmouseleave','set(this)');
        var ullist = document.createElement('ul');
        ullist.setAttribute('id','img-list');
        var pre = document.createElement('button');
        pre.setAttribute('id','pre-btn');
        pre.setAttribute('onclick','leftClick()')
        var next = document.createElement('button');
        next.setAttribute('id','next-btn');
        next.setAttribute('onclick','rightClick()')
        shadow.appendChild(style);
        shadow.appendChild(contain);
        contain.appendChild(ullist);
        contain.appendChild(pre);
        contain.appendChild(next);
        for(var i=1;i<=4;i++){
          var ew = document.createElement('li');
          ew.setAttribute('class','n')
          ullist.appendChild(ew);
          var img = document.createElement('img');
          img.setAttribute('src','010.jpg');
          ew.appendChild(img);
        }

        var container = document.getElementById('container');
        var li=ullist.children;
        var pre_btn=document.getElementById('pre-btn');
        var next_btn=document.getElementById('next-btn');
        var liIndex=0;


        function clear(x){
          x.clearInterval(timer);
        }
        // function set(x){
        //   x.setInterval(function () {
        //     liIndex++;
        //     if (liIndex ==li.length) {
        //         liIndex = 0;
        //     }
        //     li[liIndex].style.opacity = 1;
        //   },2000);
        // }
        // container.onmouseover = clearInterval(timer);
        // container.onmouseleave = timer;

        function leftClick() {
          clearInterval(timer);
          liIndex++;
          if (liIndex ==li.length) {
              liIndex = 0;
          }
          for (var i=0;i<li.length;i++) {
              li[i].style.opacity = 0;
          }
          li[liIndex].style.opacity = 1;
        }
        function rightClick() {
          clearInterval(timer);
          liIndex--;
          if (liIndex == -li.length) {
              liIndex = 0;
          }
          switch (liIndex)
          {
              case -1:
                  liIndex = 3;
                  break;
              case -2:
                  liIndex = 2;
                  break;
              case -3:
                  liIndex = 1;
                  break;
              case -4:
                  liIndex = 0;
                  break;
          }
          for (var i=0;i<li.length;i++) {  
              li[i].style.opacity = 0;
          }
          li[liIndex].style.opacity = 1;
          }

        // // Create spans
        // var wrapper = document.createElement('span');
        // wrapper.setAttribute('class','wrapper');
        // var icon = document.createElement('span');
        // icon.setAttribute('class','icon');
        // icon.setAttribute('tabindex', 0);
        // var info = document.createElement('span');
        // info.setAttribute('class','info');

        // // Take attribute content and put it inside the info span
        // var text = this.getAttribute('text');
        // info.textContent = text;

        // // Insert icon
        // var imgUrl;
        // if(this.hasAttribute('img')) {
        // imgUrl = this.getAttribute('img');
        // } else {
        // imgUrl = 'img/default.png';
        // }
        // var img = document.createElement('img');
        // img.src = imgUrl;
        // icon.appendChild(img);

        // Create some CSS to apply to the shadow dom
        // CSS truncated for brevity

        // attach the created elements to the shadow dom
    }
}
customElements.define('popup-info',PopUpInfo);</script>

</body>
</html>
