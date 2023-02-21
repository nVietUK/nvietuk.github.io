<script setup lang="ts">
</script>

<template>
    <div class="redBack fillDiv">
        <pre class="consola whiteFont">
        &#BBGGGGBB#&          &#BBGGGGBB#&        
      #GPPPPPPPPPPPPGB&    &BGPPPPPPPPPPPPG#      
    #GPPPPPPPPPPPPPPPPPB  BPPPPPPPPPPPPPPPPPG#    
   #PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP#   
   PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP   
  &PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP&  
  &PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP&  
  &PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP&  
   BPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPB   
   &GPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPG&   
    &GPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPG&    
      BPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPB      
       &BPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPB&       
         &BPPPPPPPPPPPPPPPPPPPPPPPPPPPPB&         
            #GPPPPPPPPPPPPPPPPPPPPPPG#            
              &BPPPPPPPPPPPPPPPPPPB&              
                &BGPPPPPPPPPPPPGB&                
                   #GPPPPPPPPG#                   
                     &BPPPPB&                     
                       &BB&                       
        </pre>
        <pre class="handwriting">Anh yêu bé</pre>
    </div>
</template>

<style>
@font-face {
    font-family: handwriting;
    src: url(../ttf/Callista.ttf);
}
.consola {
    font-family: "Consolas", monospace;
    position: absolute;
}
.handwriting {
    font-family: handwriting;
    position: absolute;
    z-index: 10;
    font-size: 20vh;
    color: #BAD7E9;
}
.whiteFont {
    color: #FCFFE7;
    line-height: 1.2;
}

.redBack {
    background-color: #EB455F;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.fillDiv {
    height: 100%;
    width: 100%;
}</style>