function writePaymentHTML(){
	return "<div class='panel panel-success'><div class='panel-heading'><b>Payment</b></div><div class='panel-body'><ul><li>We only accept PayPal payments.</li><li>Please pay within 5 days after auction is finished.</li><li class='text-danger'>We do not responsible for any custom duty or import tax.</li></ul></div></div>";
}

function writeShippingHTML(){
	return "<div class='panel panel-success'><div class='panel-heading'><b>Shiping &amp; Handing</b></div><div class='panel-body'><ul><li>We will ship at the paypal confirmation address. Please make sure that the paypal confirmation address and the receiving address are the same.</li><li>The item will be processed within 3 days of the payment is complete (not include the holidays).</li><li>If you want to ship multiple products to the same address. Please contact us in the 'Contact' section.</li></ul><table class='table table-bordered text-center'><thead><tr><th class='text-center'>Shipping Type</th><th class='text-center'>First Zone</th><th class='text-center'>Second Zone</th><th class='text-center'>Third Zone</th></tr></thead><tbody><tr><td>Airmail</td><td>3 - 21 days</td><td>6 - 28 days</td><td>14 - 28 days</td></tr></tbody></table><div class='small '><p><i><u>First Zone</u>: Asia, Overseas Territories of USA, Palau, and others.</i></p><p><i><u>Second Zone</u>: Oceania, Middle East, North America, Central America, and West Indies, Europe.</i></p><p><i><u>Third Zone</u>: South America and Africa.</i></p><p><i>**** Shipping time is not include the holidays.</i></p></div></div></div>";
}

function writeReturnHTML(){
	return "<div class='panel panel-success'><div class='panel-heading'><b>Return policy</b></div><div class='panel-body'><ul><li>For returnable item</li><ul><li>You can return the item to us if the item is still in store condition (unused, unopened, undamaged ...). Please allow us 5 days to process your return order.</li><li>You will have to pay the cost of the return order.</li></ul><li>Please contact us if there is any trouble or do not receive the item within 30 days. I will answer you soonest</li></ul></div></div>";
}

function writeAboutusHTML(){
	return "<div class='panel panel-success'><div class='panel-heading'><b>About us</b></div><div class='panel-body'><ul><li><b>Our store in Japan</b>. All the products we sell are also selling in Japan.</li><li>The product you buy will be <b>shipped from Japan</b>.</li></ul></div></div>";
}

function writeFeedbackHTML(){
	return "<div class='panel panel-success'><div class='panel-heading'><b>Feedback</b></div><div class='panel-body'>We do business so we need trust and trust from buyers. Because of that we need your help by leaving <b>positive feedback</b> and <b>5 star rating</b> for us at the product you bought.Please contact us immediately if any of the products do not satisfy you, we sincerely apologize for that. We are always here to serve you.</div></div>";
}

function writeContactHTML(){
	return "<div class='panel panel-success'><div class='panel-heading'><b>Contact us</b></div><div class='panel-body'><p class='small'><i>Please message for us via Ebay Message.</i></p><a style='display: block;overflow: hidden;position: relative;text-indent: 9999px; width: 156px;height: 59px;' href='www.ebay.com/usr/i_sell_goods_from_japan'><img style='position:absolute;top:-56px;left:0px' src='https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png' alt='Message for us' width='304' height='236'></a></div></div>";
}



document.getElementById("list-template-3").innerHTML += writePaymentHTML();
document.getElementById("list-template-3").innerHTML += writeShippingHTML();
document.getElementById("list-template-3").innerHTML += writeReturnHTML();
document.getElementById("list-template-3").innerHTML += writeAboutusHTML();
document.getElementById("list-template-3").innerHTML += writeFeedbackHTML();
document.getElementById("list-template-3").innerHTML += writeContactHTML();
