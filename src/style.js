const string = `
/* 我来画一个卡通版的钢铁侠吧！*/
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    min-width: 100vw;
    min-height: 100vh;
  }
  
  .ironman {
    width: 150px;
    height: 200px;
    position: relative;
    left: 50%;
    top: 25px;
    margin-left: -75px;
  }
 /* 我来画他的头部*/ 
  .head {
    border: 8px solid #630102;
    border-radius: 45px;
    width: 105px;
    height: 115px;
    background: #c70305;
    position: relative;
    left: 50%;
    margin-left: -56.5px;
  }
  
  .face {
    width: 83px;
    height: 88px;
    background: #fedb10;
    border: 3px solid #630102;
    border-radius: 30px;
    position: relative;
    left: 3px;
    top: 8px;
    overflow: hidden;
  }
  
  .face-top {
    width: 20px;
    height: 12px;
    border-bottom: 3px solid #630102;
    left: 50%;
    margin-left: -10px;
    top: 8px;
    position: absolute;
    background: #c70305;
    z-index: 1;
  }
  
  .face-top .left-line {
    height: 12px;
    width: 4px;
    background: #fedb10;
    border-top: 3px solid #630102;
    border-right: 3px solid #630102;
    border-radius: 0px px 0px 0px;
    position: absolute;
    left: -4px;
  }
  
  .face-top .right-line {
    height: 12px;
    width: 4px;
    background: #fedb10;
    border-top: 3px solid #630102;
    border-left: 3px solid #630102;
    border-radius: 0px px 0px 0px;
    position: absolute;
    left: 20px;
  }
  
  .left-eye {
    background: #fff;
    width: 20px;
    height: 7px;
    border: 2.95px solid  rgba(0, 0, 0, 1);
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: 30px;
    transform: rotate(10deg);
  }
  
  .right-eye {
    background: #fff;
    width: 20px;
    height: 7px;
    border: 2.95px solid  rgba(0, 0, 0, 1);
    position: absolute;
    left: 50%;
    margin-left: 10px;
    top: 30px;
    transform: rotate(-10deg);
  }
  
  .mouth {
    width: 25px;
    height: 4px;
    background: black;
    position: absolute;
    left: 50%;
    margin-left: -12.5px;
    bottom: 15px;
  }
  
  .mouth::before {
    content: "";
    width: 17px;
    height: 4px;
    background: black;
    position: absolute;
    top: 3.5px;
    right: 22px;
    transform: rotate(-25deg);
  }

  .mouth::after {
    content: "";
    width: 17px;
    height: 4px;
    background: black;
    position: absolute;
    top: 3.5px;
    left: 22px;
    transform: rotate(25deg);
  }
  
  .fix-face {
    width: 83px;
    height: 88px;
    border-radius: 30px;
    position: absolute;
    left: 3px;
    top: 8px;
    overflow: hidden;
  }
  
  .fix-face-left {
    width: 35px;
    height: 40px;
    border-radius: 30px;
    border: 3px solid #630102;
    background: #c70305;
    position: absolute;
    bottom: -10px;
    left: -17.5px;
  }
  
  .fix-face-right {
      width: 35px;
      height: 40px;
      border-radius: 30px;
      border: 3px solid #630102;
      background: #c70305;
      position: absolute;
      bottom: -10px;
      right: -17.5px;
    }
  /*  钢铁侠之躯！ */  
  .body{
    width: 80px;
    height: 90px;
    border-radius: 30px;
    background: #c70305;
    border: 8px solid #630102;
    position: relative;
    left: 50%;
    margin-left: -44px;
    top: -30px;
    z-index: -1;
  }
  
  .body .heart{
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    left: 50%;
    margin-left: -12.5px;
    top: 25px;
    background: #fff;
    border: 5px solid #630102;
  }
  /*  能射出激光的双手 */  
  .left-hand {
    z-index: -2;
    width: 50px;
    height: 18px;
    border-radius: 12px 0 0 0;
    border: 5px solid #630102;
    background: #c70305;
    position: absolute;
    top: 102px;
    left: 10px;
  }
  
  .left-hand::before{
    content: "";
    border: 5px solid #630102;
    background: #fedb10;
    width: 18px;
    height: 23px;
    border-top: 0;
    border-radius: 0 0 10px 10px;
    position: absolute;
    top: 13px;
  }
  
  .left-hand::after{
    content: "";
    border: 5px solid #630102;
    width: 25px;
    height: 25px;
    background: #c70305;
    border-radius: 20px;
    position: absolute;
    top: 28px;
    left: -3px;
  }
  
  .right-hand {
    z-index: -2;
    width: 50px;
    height: 18px;
    border-radius: 0 12px 0 0;
    border: 5px solid #630102;
    background: #c70305;
    position: absolute;
    top: 102px;
    right: 20px;
  }
  
  .right-hand::before{
    content: "";
    border: 5px solid #630102;
    background: #fedb10;
    width: 18px;
    height: 23px;
    border-top: 0;
    border-radius: 0 0 10px 10px;
    position: absolute;
    top: 13px;
    right: 0px;
  }
  
  .right-hand::after{
    content: "";
    border: 5px solid #630102;
    width: 25px;
    height: 25px;
    background: #c70305;
    border-radius: 20px;
    position: absolute;
    top: 28px;
    right: -3px;
  }
  /* 最后是他的双腿 */
  .left-foot {
    height: 40px;
    width: 27px;
    background: #c70305;
    border: 5px solid #630102;
    border-radius: 0 0 0 30px;
    position: absolute;
    bottom: 0px;
    right: 50%;
    z-index: -2;
  }
  
  .right-foot {
    height: 40px;
    width: 27px;
    background: #c70305;
    border: 5px solid #630102;
    border-radius: 0 0 30px 0;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -5px;
    z-index: -2;
  }
  /* 绘画完毕！ 
  卡通版钢铁侠送给你，
  希望你喜欢  */
`;

export default string;
