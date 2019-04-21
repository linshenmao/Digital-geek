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

    name1.onfocus=function(){
      n_msg.innerHTML='请输入5-25个字符，一个汉字为2个字符';
      p_msg.style.display = 'block';
    }
    name1.onkeyup=function(){
      count.style.display='block';
      n_len=getLength(this.value);
      count.innerHTML=n_len+'个字符';
      if(n_len==0){
        count.style.display='none';
      }
    }
    name1.onblur=function(){
      if(this.value==''){
        n_msg.innerHTML='<i class="no"></i>用户名不得为空！';
        this.style.borderColor='#f30';
      }
      else if(n_len<5){
        n_msg.innerHTML='<i class="no"></i>用户名长度不得少于5个字符';
        this.style.borderColor='#f30';
      }
      else if(n_len>25){
        n_msg.innerHTML='<i class="no"></i>用户名长度不得超出25个字符';
        this.style.borderColor='#f30';
      }
      else if(!re_n.test(this.value)){
        n_msg.innerHTML='<i class="no"></i>用户名不得为纯数字！';
        this.style.borderColor='#f30';
      }
      else if(!re_t.test(this.value)){
        n_msg.innerHTML='<i class="no"></i>用户名不得为纯字母！';
        this.style.borderColor='#f30';
      }
      else{
        n_msg.innerHTML='<i class="ok"></i>用户名正确';
        this.style.borderColor='';
      }
    }

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
      if(psd.value != ''){
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
  }