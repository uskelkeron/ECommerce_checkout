



const calculateItem = (qty,costprice,ext_price,qty_display)=>
{
  
        if(qty>=0)
        {
            qty_display.innerHTML = `${qty}`
            let answer = qty * costprice
            ext_price.innerHTML = `${answer.toFixed(2)}`;
            return answer;
        }


}




const main = (()=>{

    const addButton_4pants = document.querySelector(".Addbutton_4pants");
    const subButton_4pants = document.querySelector(".subtractbutton_4pants");
    const cost_price_pants = document.querySelector("#cp_pants");
    const pants_qty = document.querySelector("#pants_qty");
    const ext_price_pants = document.querySelector("#ext_price_pants");

    const addButton_4shirts = document.querySelector(".Addbutton_4shirt");
    const subButton_4shirts = document.querySelector(".subtractbutton_4shirt");
    const cost_price_shirt = document.querySelector("#cp_shirt");
    const shirt_qty = document.querySelector("#shirt_qty");
    const ext_price_shirts = document.querySelector("#ext_price_shirts");
    const CalculateButton = document.querySelector("#calculateButton");
    const checkout = document.querySelector("#checkout");

    const subtotal = checkout.children[0].children[0];
    const tax = checkout.children[1].children[0];
    const total = checkout.children[2].children[0];

    let grand_total = 0, sub_total_sales = 0,  tax_rate =0;

 

    let pants_count = 0;
    let sub_total_pants = 0;
    let sub_total_shirts = 0;
    addButton_4pants.addEventListener("click",()=>
    {
      pants_count++;
      sub_total_pants =  calculateItem(pants_count,cost_price_pants.innerHTML,ext_price_pants,pants_qty);
    });

    subButton_4pants.addEventListener("click",()=>
    {
        pants_count--;
        sub_total_pants = calculateItem(pants_count,cost_price_pants.innerHTML,ext_price_pants,pants_qty);

    });

    let shirt_count = 0;

    addButton_4shirts.addEventListener("click", ()=>
    {
       
        shirt_count++;
        sub_total_shirts = calculateItem(shirt_count,cost_price_shirt.innerHTML,ext_price_shirts,shirt_qty);


    });

    subButton_4shirts.addEventListener("click", ()=>
    {
       
        shirt_count--;
        sub_total_shirts = calculateItem(shirt_count,cost_price_shirt.innerHTML,ext_price_shirts,shirt_qty);


    });



    CalculateButton.addEventListener("click", ()=>
    {
        sub_total_sales = (sub_total_pants+sub_total_shirts);
        let TAX_PERCENT = .13;

        tax_rate = (parseFloat(sub_total_sales)  * TAX_PERCENT);

        grand_total = (sub_total_sales + tax_rate);

        subtotal.innerHTML = `$ ${sub_total_sales.toFixed(2)}`;
        tax.innerHTML = `$ ${tax_rate.toFixed(2)}`;
        total.innerHTML = `$ ${grand_total.toFixed(2)}`;

       
    })

    const Enter_promo = document.querySelector(".Enter_promo");
    const Submit_promo = document.querySelector(".Submit_promo");
    const Capture_promo = document.querySelector(".Capture_promo");
    const promoStatement1 = document.querySelector(".promoStatement1");
    const promoStatement2 = document.querySelector(".promoStatement2");

    Enter_promo.addEventListener("click", ()=>
    {
        promoStatement1.classList.add("hide");
        Enter_promo.classList.add("hide");

        Submit_promo.classList.remove("hide");
        Capture_promo.classList.remove("hide");
        promoStatement2.classList.remove("hide");

    });

    Submit_promo.addEventListener("click", ()=>
    {
       if(Capture_promo.value === "NOTAX")
       {
        tax_rate = 0;
        subtotal.innerHTML = `$ ${sub_total_sales.toFixed(2)}`;
        tax.innerHTML = `$ ${tax_rate.toFixed(2)}`;
        total.innerHTML = `$ ${sub_total_sales.toFixed(2)}`;

        promoStatement1.classList.remove("hide");
        Enter_promo.classList.remove("hide");

        Submit_promo.classList.add("hide");
        Capture_promo.classList.add("hide");
        promoStatement2.classList.add("hide");
        Capture_promo.value = " ";


       }
       else if (Capture_promo.value === "FIFTYFIFTY")
       {
        
        subtotal.innerHTML = `$ ${(sub_total_sales)-((sub_total_sales.toFixed(2))*.50)}`;
        tax.innerHTML = `$ ${(sub_total_sales * .13).toFixed(2)}`;
        total.innerHTML = `$ ${(sub_total_sales.toFixed(2))+((sub_total_sales * .13).toFixed(2))}`;

        promoStatement1.classList.remove("hide");
        Enter_promo.classList.remove("hide");

        Submit_promo.classList.add("hide");
        Capture_promo.classList.add("hide");
        promoStatement2.classList.add("hide");
        Capture_promo.value = " ";
       }
       else
       {
           alert("invalid promo");
       }
        
    })

  
    

   
})();