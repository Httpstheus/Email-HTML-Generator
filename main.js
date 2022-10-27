
   function enableDownload(){
    document.getElementById("download-btn").disabled = false;
   }

this.$(".btnCustom").click(function() {
        var value = $(this).attr('id');
          $("#myModal #selection option[value="+value+"]").attr('selected', 'selected');
});

    function substituir01(){
        document.getElementById('img-example').innerHTML = "<img src=\"http://marketing.mixd.com.br/admin/temp/user/128/bookplay_banner_diadascrian%C3%A7as.jpg\" width=\"500px\">";
    }
    function substituir02(){
        document.getElementById('img-example').innerHTML = "<img src=\"http://marketing.mixd.com.br/admin/temp/user/128/mundial_banner_diadascrian%C3%A7as.jpg\" width=\"500px\">";
    }

    function substituir03(){
        document.getElementById('img-example').innerHTML = "<img src=\" http://marketing.mixd.com.br/admin/temp/user/128/editbrasil_banners_diadascrian%C3%A7as.jpg\" width=\"500px\">";
    }

    function substituir04(){
        document.getElementById('img-example').innerHTML = "<img src=\"http://marketing.mixd.com.br/admin/temp/user/128/faculdadebookplay_banner_diadascrian%C3%A7as.jpg\" width=\"500px\">";
    }

    function substituir05(){
        document.getElementById('img-example').innerHTML = "<img src=\" http://marketing.mixd.com.br/admin/temp/user/128/faculdadeplay_banner_diadascrian%C3%A7as.jpg\" width=\"500px\">";
    }

 

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      }

      function download_html() {

        
        var html = document.body.outerHTML;
            
        download("my-file.html", html);

      }


      // ALTER COLOR OF VARIABLES
      $(document).ready(function(){
        $('#enviar').on('click', validarDados);
      
        function validarDados() {
          let tipo           = $('#tipo').val();
      
          switch(tipo) {
            // Message for Option == Mundial Editora
            case 'MundialEditora':
                // document.documentElement.style.setProperty('--primary-color', '#004f9e');
                document.getElementById('name-welcome').innerHTML = "<h2 style=\"color: #004f9e;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Fugiat illum asperiores ducimus adipisci totam amet</h2><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br>A nostrum totam ipsum voluptatem quod officiis perspiciatis <br> ipsam, reprehenderit <br>iusto nobis consequuntur non nesciunt doloremque <br>commodi cumque id fugit delectus provident? </b>  </p>"
                document.getElementById('how-agend').innerHTML = "<img src=\"http://marketing.mixd.com.br/admin/temp/user/128/mundial_banner_pagamento.jpg\" width=\"500px\">";
                document.getElementById('contatos').style.backgroundColor ="#004f9e"
                document.getElementById('footer-contatos').style.backgroundColor ="#004f9e"

            // footer
              document.getElementById('footer-contatos').innerHTML = "<h2>Central de Atendimento</h2><p>0800 779 4000<br/>negocie@mundialeditora.com.br</p>"

                break;
            // Message for Option == Bookplay
            case 'Bookplay':
                // document.documentElement.style.setProperty('--primary-color', '#48a0dc');
                document.getElementById('name-welcome').innerHTML = "<h2 style=\"color: #48a0dc;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Fugiat illum asperiores ducimus adipisci totam amet</h2><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br>A nostrum totam ipsum voluptatem quod officiis perspiciatis <br> ipsam, reprehenderit <br>iusto nobis consequuntur non nesciunt doloremque <br>commodi cumque id fugit delectus provident? </b>  </p>"
                document.getElementById('how-agend').innerHTML = "<img src=\"http://marketing.mixd.com.br/admin/temp/user/128/bookplay_banner_pagamento.jpg\" width=\"500px\">";
                document.getElementById('contatos').style.backgroundColor ="#48a0dc"
                document.getElementById('footer-contatos').style.backgroundColor ="#48a0dc"
            
            // footer
            document.getElementById('footer-contatos').innerHTML = "<h2>Central de Atendimento</h2><p>0800 779 6000<br/>negocie@bookplay.com.br</p>"
                
                break;
            // Message for Option == EditBrasiç
            case 'EditBrasil':
                // document.documentElement.style.setProperty('--primary-color', '#12a19b');
                document.getElementById('name-welcome').innerHTML = "<h2 style=\"color: #12a19b;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Fugiat illum asperiores ducimus adipisci totam amet</h2><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br>A nostrum totam ipsum voluptatem quod officiis perspiciatis <br> ipsam, reprehenderit <br>iusto nobis consequuntur non nesciunt doloremque <br>commodi cumque id fugit delectus provident? </b>  </p>"
                document.getElementById('how-agend').innerHTML = "<img src=\"http://marketing.mixd.com.br/admin/temp/user/128/editbrasil_banner_pagamento.jpg\" width=\"500px\">";
                document.getElementById('contatos').style.backgroundColor ="#12a19b"
                document.getElementById('footer-contatos').style.backgroundColor ="#12a19b"
                
            // footer
              document.getElementById('footer-contatos').innerHTML = "<h2>Central de Atendimento</h2><p>0800 779 4000<br/>negocie@mundialeditora.com.br</p>"
                break;
           

            // Message for Option == Faculdade Play
            case 'FaculdadePlay':
                // document.documentElement.style.setProperty('--primary-color', '#004f9e');
                document.getElementById('name-welcome').innerHTML = "<h2 style=\"color: #004f9e;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Fugiat illum asperiores ducimus adipisci totam amet</h2><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br>A nostrum totam ipsum voluptatem quod officiis perspiciatis <br> ipsam, reprehenderit <br>iusto nobis consequuntur non nesciunt doloremque <br>commodi cumque id fugit delectus provident? </b>  </p>"
                document.getElementById('how-agend').innerHTML = "<img src=\"http://marketing.mixd.com.br/admin/temp/user/128/faculdadeplay_banner_pagamento.jpg\" width=\"500px\">";
                document.getElementById('contatos').style.backgroundColor ="#004f9e"
                document.getElementById('footer-contatos').style.backgroundColor ="#004f9e"
                
            // footer
            document.getElementById('footer-contatos').innerHTML = "<h2>Central de Atendimento</h2><p>0800 777 2020<br/>pagamento@faculdadeplay.edu.br</p>"
                break;
            // Message for Option == Faculdade Bookplay
            case 'FaculdadeBookplay':
                // document.documentElement.style.setProperty('--primary-color', '#004f9e');
                document.getElementById('name-welcome').innerHTML = "<h2 style=\"color: #004f9e;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Fugiat illum asperiores ducimus adipisci totam amet</h2><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br>A nostrum totam ipsum voluptatem quod officiis perspiciatis <br> ipsam, reprehenderit <br>iusto nobis consequuntur non nesciunt doloremque <br>commodi cumque id fugit delectus provident? </b>  </p>"
                document.getElementById('how-agend').innerHTML = "<img src=\"http://marketing.mixd.com.br/admin/temp/user/128/faculdadebookplay_banner_pagamento.jpg\" width=\"500px\">";
                document.getElementById('contatos').style.backgroundColor ="#004f9e"
                document.getElementById('footer-contatos').style.backgroundColor ="#004f9e"
                
            // footer
            document.getElementById('footer-contatos').innerHTML = "<h2>Central de Atendimento</h2><p>0800 777 2020<br/>sac@faculdadebookplay.edu.br</p>"
                break;

          }

        }
      }) 
    
