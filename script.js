function calculateCost() {
    const numShirts = parseInt(document.getElementById("numShirts").value);
    const shirtType = document.getElementById("shirtType").value;
    const printType = document.getElementById("printType").value;
    const colors = parseInt(document.getElementById("colors").value);
    const printSides = document.getElementById("printSides").value;
    const rushOrder = document.getElementById("rushOrder").checked;

    // Base prices
    let basePrice = 10;

    // Adjust base price based on shirt type
    if (shirtType === "cotton") {
        basePrice += 2;
    } else if (shirtType === "polyester") {
        basePrice += 1;
    }

    // Print type adjustment
    if (printType === "screen") {
        basePrice += 3;
    } else if (printType === "vinyl") {
        basePrice += 4;
    } else if (printType === "embroidery") {
        basePrice += 5;
    } else if (printType === "dtg") {
        basePrice += 6;
    }

    // Color adjustment
    basePrice += colors * 1;

    // Print sides adjustment
    if (printSides === "both") {
        basePrice += 2;
    }

    // Rush order fee
    if (rushOrder) {
        basePrice += 5;
    }

    // Calculate total cost
    const totalCost = numShirts * basePrice;
    
    // Display the result
    document.getElementById("cost").innerText = totalCost.toFixed(2);
}
