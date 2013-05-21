// Rules

function knoledgeBase(mass, charge, spin, family) {
	var results = new Array();
	
	// Mass only checks
	if ( mass == "(0-0.13)e-9" && !charge && !spin && !family ) {
		// neutrino l
		results.push(particles_db[0]);
	}
	else if ( mass == "5.11e-4" && !charge && !spin && !family ) {
		// electron
		results.push(particles_db[1]);
	}
	else if ( mass == "(0.009-0.13)e-9" && !charge && !spin && !family ) {
		// neutrino m		
		results.push(particles_db[2]);
	}
	else if ( mass == "0.106" && !charge && !spin && !family ) {
		// muon
		results.push(particles_db[3]);
	}
	else if ( mass == "(0.04-0.14)e-9" && !charge && !spin && !family ) {
		// neutrino h
		results.push(particles_db[4]);
	}
	else if ( mass == "1.777" && !charge && !spin && !family ) {
		// tau
		results.push(particles_db[5])
	}
}
