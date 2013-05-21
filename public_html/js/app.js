$(document).ready(function() {
    // Hide gif
    $("#appWait").hide();
    // Activate tool tips
    $(document).tooltip();
    
    // Configure inputs
    $("#mass").autocomplete({source: atcm_mass});
    $("#charge").autocomplete({source: atcm_charge});
    $("#spin").autocomplete({source: atcm_spin});
    $("#family").autocomplete({source: atcm_family});
    
    // Configure button
    $("#appSubmit").click(onQuery);
});


// Implememtn event handlers

function onQuery() {
    var button = $(this);
        var wait = $("#appWait");
        var results = $(".ctntResult");
        
        // initProgress
        results.hide("fast");
        button.hide("fast");
        wait.show("fast");
        
        // Do querys
        var fMass = $("#mass").val();
        var fCharge = $("#charge").val();
        var fSpin = $("#spin").val();
        var fFamily = $("#family").val();
        
        var res = knoledgeBase(fMass, fCharge, fSpin, fFamily);
        
        $("#resName").find(".resData").text(res[0].name);
        $("#resMass").find(".resData").text(res[0].mass);
        $("#resCharge").find(".resData").text(res[0].charge);
        $("#resSpin").find(".resData").text(res[0].spin);
        $("#resFamily").find(".resData").text(res[0].family);
        
        // stopProgress
        wait.hide("fast");
        button.show("fast");
        
       // Show results
       results.show("fast");
}