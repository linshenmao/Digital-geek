  window.onload=function(){
    function getLength(str){
      return str.replace(/[^\x00-xff]/g,'xx').length;
    }

    ainput=document.getElementsByTagName('input');
    name1=ainput[0];
    psd=ainput[1];
    psd2=ainput[2];
    ap=document.getElementsByTagName('p');
    n_msg=ap[0];
    p_msg=ap[1];
    p2_msg=ap[2];
    count=document.getElementById('count');
    re_n=/\D/g;
    re_t=/[^a-zA-Z]/g;



    psd.onfocus=function(){
      p_msg.innerHTML='6-16个字符，请使用字母加数字加符号组成';
    }
    psd.onblur=function(){
      if(this.value.length<6||this.value.length>20){
        p_msg.innerHTML='<i class="no"></i>密码长度必须在6-20个字符之间';
        this.style.borderColor='#f30';
      }
      else{
        p_msg.innerHTML='<i class="ok"></i>';
      }
    }
    psd2.onblur=function(){
      if(this.value!=psd.value){
        p2_msg.innerHTML='<i class="no"></i>两次密码输入不一致！';
        this.style.borderColor='#f30';
      }else{
        p2_msg.innerHTML='<i class="ok"></i>密码输入正确';
        this.style.borderColor='';
        psd.style.borderColor='';
      }
    }
  }