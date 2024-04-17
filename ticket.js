let count =0;

function keypress(event){
    if(count<4){
    event.classList.remove("bg-slate-50")
    event.classList.add("bg-green-400","text-white");
    event.onclick= "";
    count+=1;
    document.getElementById('numOfTicket').innerText = count;
    let seat = parseInt(document.getElementById("seat-left").innerText);
    seat = seat-1;
    document.getElementById('seat-left').innerText=seat;
    const ticket = document.getElementById('selected-tickets');
    ticket.innerHTML += event.innerText;
    ticket.innerHTML += `<p>Economy</p><p>550</p>`;
    document.getElementById('total-price').innerText = 550*count;
    document.getElementById('grand-total').innerText=550*count;
    }else{
        event.onclick=my_modal_5.showModal();
    }

}

document.getElementById('Coupon').addEventListener('keyup',function(event){
    const text2 = event.target.value;
    if((text2 === 'NEW15' || text2 === 'Couple20') && count === 4){
        document.getElementById('btn-coupon').removeAttribute('disabled');
    }else{
        document.getElementById('btn-coupon').setAttribute('disabled',true);
    }
})

document.getElementById('btn-coupon').addEventListener('click',function(){
    document.getElementById('Coupon').classList.add('hidden');
    document.getElementById('btn-coupon').classList.add('hidden');
    const text3 = document.getElementById('Coupon').value
    let total= 550*count;
    let dis=0;
    if(text3 === 'NEW15'){
        dis= total*.15;
    }else if(text3==='Couple20'){
        dis= total*.20;
    }
    document.getElementById('discount').classList.add('grid','grid-cols-3','text-black', 'font-medium');
    document.getElementById('discount').innerHTML = "<P>Discount</P><P></P>"+dis
    let grandTotal = total-dis;
    document.getElementById('grand-total').innerText=grandTotal;

})

document.getElementById('phn').addEventListener('keyup',function(){
    if(count>0){
        document.getElementById('next').removeAttribute('disabled');
    }
    
})

document.getElementById('next').addEventListener('click',function(){
    document.getElementById('next').onclick=my_modal_6.showModal();
})