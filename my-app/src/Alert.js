export default function Alert (){

       
        window.alert=function(message,timeout=null){
            const alert = document.createElement('div');
            const alertButtoon = document.createElement('button');
            alertButtoon.innerText='ok';
            alert.classList.add('alert');
            alert.setAttribute('style',`
            position:fixed;,
            top: 100px;,
            left:50%`
            );
            alert.innerHTML=`<span>${message}</span>`
            alert.appendChild(alertButtoon);
            alertButtoon.addEventListener('click',(e)=>{
                alert.remove();
            });
            if(timeout !=null){
                setTimeout(()=>{
                    alertButtoon.remove();
                },Number(timeout))
            }
           
            document.body.appendChild(alert);
        }
    

return(

    alert("hhhh")

);


} 