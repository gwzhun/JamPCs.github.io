// --------------- Option ---------------

document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const cpuForm = document.getElementById('cpuForm');
    // Get the element where we will display the selected CPU
    const selectedCPUElement = document.getElementById('selectedCPU');

    // Function to update the selected CPU
    function updateSelectedCPU() {
        // Get the selected radio button value
        const selectedCPU = document.querySelector('input[name="cpu"]:checked');

        // Update the content of the mod-choice element
        selectedCPUElement.innerText = selectedCPU ? selectedCPU.value : '';
    }

    // Add a change event listener to the form
    cpuForm.addEventListener('change', updateSelectedCPU);

    // Trigger the change event to display the default selected radio button
    updateSelectedCPU();
});

document.addEventListener("DOMContentLoaded", function () {
    const gpuForm = document.getElementById('gpuForm');
    const selectedGPUElement = document.getElementById('selectedGPU');

    function updateSelectedGPU() {
        const selectedGPU = document.querySelector('input[name="gpu"]:checked');
        selectedGPUElement.innerText = selectedGPU ? selectedGPU.value : '';
    }

    gpuForm.addEventListener('change', updateSelectedGPU);

    updateSelectedGPU();
});

document.addEventListener("DOMContentLoaded", function () {
    const ramForm = document.getElementById('ramForm');
    const selectedRAMElement = document.getElementById('selectedRAM');

    function updateSelectedRAM() {
        const selectedRAM = document.querySelector('input[name="ram"]:checked');
        selectedRAMElement.innerText = selectedRAM ? selectedRAM.value : '';
    }

    ramForm.addEventListener('change', updateSelectedRAM);

    updateSelectedRAM();
});

document.addEventListener("DOMContentLoaded", function () {
    const ssdForm = document.getElementById('ssdForm');
    const selectedSSDElement = document.getElementById('selectedSSD');

    function updateSelectedSSD() {
        const selectedSSD = document.querySelector('input[name="ssd"]:checked');
        selectedSSDElement.innerText = selectedSSD ? selectedSSD.value : '';
    }

    ssdForm.addEventListener('change', updateSelectedSSD);

    updateSelectedSSD();
});

// --------------- Summary ---------------

document.addEventListener("DOMContentLoaded", function () {
    // Get the form elements
    const cpuForm = document.getElementById('cpuForm');
    const gpuForm = document.getElementById('gpuForm');
    const ramForm = document.getElementById('ramForm');
    const ssdForm = document.getElementById('ssdForm');

    // Get the elements where we will display the selected components and items
    const selectedCPUElement = document.getElementById('selectedCPU');
    const selectedGPUElement = document.getElementById('selectedGPU');
    const selectedRAMElement = document.getElementById('selectedRAM');
    const selectedSSDElement = document.getElementById('selectedSSD');
    const selectedItemsElement = document.getElementById('selectedItems');
    const totalPriceElement = document.getElementById('totalPrice');

    // Initialize prices
    const componentPrices = {
        cpu: {
            "Intel Core i3-13100 Processor (4 Cores) - RM 650": 650,
            "Intel Core i5-13400 Processor (10 Cores) - RM 1080": 1080,
            "Intel Core i7-13700 Processor (16 Cores) - RM 1800": 1800,
            "Intel Core i9-13900 Processor (24 Cores) - RM 2700": 2700,
        },
        gpu: {
            "NVIDIA GeForce RTX 3050 6GB GDDR6 - RM 1350": 1350,
            "NVIDIA Geforce RTX 4060 8GB GDDR6 - RM 1800": 1800,
            "NVIDIA Geforce RTX 4090 16GB GDDR6 - RM 3600": 3600,
        },
        ram: {
            "16GB Samsung DDR5 5600MHz (8x2) - RM 480": 480,
            "32GB Samsung DDR5 5600MHz (16x2) - RM 880": 880,
            "64GB Patriot SL DDR5 5600MHz (32x2) - RM 1800": 1800,
        },
        ssd: {
            "1TB Lexar NM790 Gen4 SSD (7400/6500) - RM 600": 600,
            "2TB Lexar NM790 Gen4 SSD (7400/6500) - RM 1200": 1200,
            "4TB Lexar NM790 Gen4 SSD (7400/6500) - RM 2400": 2400,
        }
    };

    // Add change event listeners to the forms
    cpuForm.addEventListener('change', function () {
        updateSelectedComponent(cpuForm, selectedCPUElement);
    });
    gpuForm.addEventListener('change', function () {
        updateSelectedComponent(gpuForm, selectedGPUElement);
    });
    ramForm.addEventListener('change', function () {
        updateSelectedComponent(ramForm, selectedRAMElement);
    });
    ssdForm.addEventListener('change', function () {
        updateSelectedComponent(ssdForm, selectedSSDElement);
    });

    // Function to update the selected component
    function updateSelectedComponent(form, element) {
        const selectedComponent = form.querySelector('input:checked');

        element.innerText = selectedComponent ? selectedComponent.value : '';
        updateSummary();
    }

    // Function to update the summary
    function updateSummary() {
        const selectedCPU = selectedCPUElement.innerText;
        const selectedGPU = selectedGPUElement.innerText;
        const selectedRAM = selectedRAMElement.innerText;
        const selectedSSD = selectedSSDElement.innerText;

        // Get the corresponding prices
        const selectedCPUPrice = componentPrices.cpu[selectedCPU] || 0;
        const selectedGPUPrice = componentPrices.gpu[selectedGPU] || 0;
        const selectedRAMPrice = componentPrices.ram[selectedRAM] || 0;
        const selectedSSDPrice = componentPrices.ssd[selectedSSD] || 0;

        const totalMYRPrice = selectedCPUPrice + selectedGPUPrice + selectedRAMPrice + selectedSSDPrice;
        localStorage.setItem("Customtotal", totalMYRPrice);


        totalPriceElement.innerHTML = `Total : RM ${totalMYRPrice.toFixed(2)}`;

        //store the total in local storage to pass to the payment page


        // Display the selected items
        const selectedItems = [selectedCPU, selectedGPU, selectedRAM, selectedSSD].filter(Boolean);
        selectedItemsElement.innerHTML = selectedItems.join('<br>');
    }

    // Call the updateSummary function initially to display default selections
    updateSummary();
});


function payment() {

    alert("Item added!")
    window.location.href = "payment-info.html";
}