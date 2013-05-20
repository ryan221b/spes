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
    $("#appSubmit").click(function() {
        var button = $(this);
        var wait = $("#appWait");
        var results = $(".ctntResult");
        
        // initProgress
        results.hide("fast");
        button.hide("fast");
        wait.show("fast");
        
        // Do querys
        
        // stopProgress
        wait.hide("fast");
        button.show("fast");
        
       // Show results
       results.show("fast");
        
    });
});