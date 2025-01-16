$(document).ready(function() {
    const prices = {
        hp: { mobile: 300, laptop: 800 },
        nokia: { mobile: 250, laptop: 700 },
        samsung: { mobile: 400, laptop: 900 },
        motorola: { mobile: 280, laptop: 750 },
        apple: { mobile: 800, laptop: 1200 }
    };

    $("#calculateBill").click(function() {
        const brand = $("#brand").val();
        const quantity = parseInt($("#quantity").val());
        let total = 0;
        let selectedTypes = [];

        $("input[name='type']:checked").each(function() {
            selectedTypes.push($(this).val());
        });

        if (selectedTypes.length === 0) {
            alert("Please select at least one product type (Mobile or Laptop)");
            return;
        }

        selectedTypes.forEach(type => {
            total += prices[brand][type] * quantity;
        });

        alert(`Total Bill Amount: $${total}`);
    });
});
