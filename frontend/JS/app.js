// ========================================
// CUBITRACK - SIMULATION CALCULATOR
// ========================================


// Get the Calculate button from the HTML
const calculateButton = document.getElementById("calculateBtn");


// Listen for a click on the Calculate button
calculateButton.addEventListener("click", function () {

    // ========================================
    // 1. GET BOX INFORMATION
    // ========================================

    const boxLength = Number(
        document.getElementById("boxLength").value
    );
    const boxWidth = Number(
        document.getElementById("boxWidth").value
    );
    const boxHeight = Number(
        document.getElementById("boxHeight").value
    );
    const boxWeight = Number(
        document.getElementById("boxWeight").value
    );
    const boxQuantity = Number(
        document.getElementById("boxQuantity").value
    );


    // ========================================
    // 2. GET PALLET INFORMATION
    // ========================================

    const palletLength = Number(
        document.getElementById("palletLength").value
    );
    const palletWidth = Number(
        document.getElementById("palletWidth").value
    );
    const palletHeight = Number(
        document.getElementById("palletHeight").value
    );

    const palletWeight = Number(
        document.getElementById("palletWeight").value
    );

    const palletMaxLoadHeight = Number(
        document.getElementById("palletMaxLoadHeight").value
    );

    // ========================================
    // 3. VALIDATE THE INFORMATION
    // ========================================

    if (
        boxLength <= 0 ||
        boxWidth <= 0 ||
        boxHeight <= 0 ||
        boxWeight <= 0 ||
        boxQuantity <= 0 ||
        palletLength <= 0 ||
        palletWidth <= 0 ||
        palletHeight <= 0 ||
        palletWeight <= 0 ||
        palletMaxLoadHeight <= 0
    ) {

    alert("Please enter valid values for all fields.");

    return;
}


    // ========================================
    // 4. CALCULATE BOXES PER LAYER
    // ========================================

    const boxesLength = Math.floor(
        palletLength / boxLength
    );
    const boxesWidth = Math.floor(
        palletWidth / boxWidth
    );


    const boxesPerLayer = boxesLength * boxesWidth;


    // ========================================
    // 5. CALCULATE NUMBER OF LAYERS
    // ========================================
    const layers = Math.floor(
        palletHeight / boxHeight
    );


    // ========================================
    // 6. CALCULATE MAXIMUM BOXES
    // ========================================
    const maximumBoxes = boxesPerLayer * layers;


    // ========================================
    // 7. CALCULATE ACTUAL BOXES
    // ========================================
    const totalBoxes = Math.min(
        boxQuantity,
        maximumBoxes
    );


    // ========================================
    // 8. CALCULATE TOTAL WEIGHT
    // ========================================
    const boxTotalWeight = totalBoxes * boxWeight;
    const totalWeight = boxTotalWeight + palletWeight;

    // ========================================
// 10. CALCULATE LOAD DIMENSIONS
// ========================================
const loadLength =
    boxesLength * boxLength;
const loadWidth =
    boxesWidth * boxWidth;
const loadHeight =
    layers * boxHeight;


// Total height includes the physical pallet
const totalHeight =
    palletHeight + loadHeight;


    // ========================================
    // 9. SHOW RESULTS
    // ========================================
    document.getElementById("boxesPerLayer").textContent =
        boxesPerLayer;
    document.getElementById("layers").textContent =
        layers;
    document.getElementById("totalBoxes").textContent =
        totalBoxes;
    document.getElementById("totalWeight").textContent =
        `${totalWeight.toFixed(2)} kg`;

    document.getElementById("loadLength").textContent =
    `${loadLength} cm`;

    document.getElementById("loadWidth").textContent =
        `${loadWidth} cm`;

    document.getElementById("loadHeight").textContent =
        `${loadHeight} cm`;

    document.getElementById("totalHeight").textContent =
        `${totalHeight} cm`;
});