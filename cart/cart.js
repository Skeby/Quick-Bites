var subBtns = document.querySelectorAll('.sub');
var addBtns = document.querySelectorAll('.add');
var allPrices = document.querySelectorAll('.price');

var cartContent = document.getElementById('cartContent');
cartContent.textContent = subBtns.length;

//Convert nodelist to array to aid the removal process
const allPrice = [];
allPrices.forEach(price => {
    allPrice.push(price);
})

//Creates a new array and set all it's value to zero
const totalQuantities = Array.from({length: subBtns.length}, () => 1);
var cartAmountCointainer = document.getElementById('totalCartAmount');
var checkoutAmount = document.getElementById('checkoutAmount');
let totalCartAmount = 0;

var checkoutButton = document.getElementById('checkoutBtn');

subBtns.forEach((sub, index) => {
    //Get the initial amount of the order
    const amount = parseFloat(allPrices[index].textContent);
    calculateCartTotal();
    sub.onclick = () => {
        if(totalQuantities[index] > 1) {
            totalQuantities[index]--;
            sub.nextElementSibling.textContent = totalQuantities[index];
        }

        //Calculate the total amount for each order
        const totalAmount = amount * totalQuantities[index];
        //Update amount on the page
        allPrices[index].textContent = totalAmount;
        calculateCartTotal();
    }
})

addBtns.forEach((add, index) => {
    const amount = parseFloat(allPrices[index].textContent);

    //Gets the total cart amount before any order quantity is updated
    calculateCartTotal();
    add.onclick = () => {
        totalQuantities[index]++;
        add.previousElementSibling.textContent =totalQuantities[index];
        const totalAmount = amount * totalQuantities[index];
        allPrices[index].textContent = totalAmount;
        calculateCartTotal();
    }
})


function calculateCartTotal() {
    var deliveryFee;
    var deliveryAmount = document.getElementById('deliveryAmount');

    //loop through all the prices and calculate the cart total amount
    allPrice.forEach(price => {
        totalCartAmount += Number(price.textContent);
    });

    //Determine delivery fee
    if (totalCartAmount >= 500 && totalCartAmount <= 1000) {
        deliveryFee = 100;
        deliveryAmount.textContent = `N${deliveryFee}`;
    } else if (totalCartAmount > 1000) {
        var deliveryFee = 0.1 * totalCartAmount;
        deliveryAmount.textContent = `N${deliveryFee}`;
    }

    //Toggle checkout button display
    if (totalCartAmount >= 500) {
        checkoutButton.style.display = 'block';
    } else {
        checkoutButton.style.display = 'none';
    }

    //Update the corresponding containers
    cartAmountCointainer.textContent = `${totalCartAmount}`;
    checkoutAmount.textContent = `${totalCartAmount + deliveryFee}.00`;
    totalCartAmount = 0;
}

//Functionality for the remove buttons on the page
var removeBtns = document.querySelectorAll('.remove');
const removeBtn = [];
removeBtns.forEach(removeb => {
    removeBtn.push(removeb);
})

removeBtn.forEach((remove, index) => {
    remove.onclick = () => {
        removeBtn.splice(index, 1);
        allPrice.splice(index, 1);
        cartContent.textContent = Number(cartContent.textContent) - 1;
        var parent = removeBtns[index].parentElement.parentElement;
        parent.previousElementSibling.remove();
        parent.remove();
        calculateCartTotal();
    }
});
