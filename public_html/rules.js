// Rules

function knoledgeBase(mass, charge, spin, family) { 
    var results = new Array();
	
    // Mass only checks
    if ( mass == "(0-0.13)e-9" && !charge && !spin && !family ) {
        // neutrino l
        results.push(particles_db[0]);
        
        return results;
    }
    else if ( mass == "5.11e-4" && !charge && !spin && !family ) {
        // electron
        results.push(particles_db[1]);
        
        return results;
    }
    else if ( mass == "(0.009-0.13)e-9" && !charge && !spin && !family ) {
        // neutrino m		
        results.push(particles_db[2]);
        
        return results;
    }
    else if ( mass == "0.106" && !charge && !spin && !family ) {
        // muon
       results.push(particles_db[3]);
       
       return results;
    }
    else if ( mass == "(0.04-0.14)e-9" && !charge && !spin && !family ) {
        // neutrino h
        results.push(particles_db[4]);
        
        return results;
    }
    else if ( mass == "1.777" && !charge && !spin && !family ) {
        // tau
        results.push(particles_db[5]);
        
        return results;
    }
    else if ( mass == "0.002" && !charge && !spin && !family ) {
        // up quark
        results.push(particles_db[6]);
        
        return results;
    }
    else if ( mass == "0.005" && !charge && !spin && !family ) {
        // down quark
        results.push(particles_db[7]);
        
        return results;
    }
    else if ( mass == "1.3" && !charge && !spin && !family ) {
        // charm quark
        results.push(particles_db[8]);
        
        return results;
    }
    else if ( mass == "0.1" && !charge && !spin && !family ) {
        // strange quark
        results.push(particles_db[9]);
        
        return results;
    }
    else if ( mass == "173" && !charge && !spin && !family ) {
        // top quark
        results.push(particles_db[10]);
        
        return results;
    }
    else if ( mass == "4.2" && !charge && !spin && !family ) {
        // bottom quark
        results.push(particles_db[11]);
        
        return results;
    }
    else if ( mass == "0" && !charge && !spin && !family ) {
        // photon
        results.push(particles_db[12]);
        // or gluon
        results.push(particles_db[16]);
        
        return results;
    }
    else if ( mass == "80.39" && !charge && !spin && !family ) {
        // W- bosson
        results.push(particles_db[13]);
        // or W+ bosson
        results.push(particles_db[14]);
        
        return results;
    }
    else if ( mass == "91.188" && !charge && !spin && !family ) {
        // Z bosson
        results.push(particles_db[15]);
        
        return results;
    }
    
    return results;
}
