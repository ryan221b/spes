/* Data for forms:
 * Provide options for autocomplete
 */

// Mass
var atcm_mass = [
  "(0-0.13)e-9",
  "(0.009-0.13)e-9",
  "(0.04-0.14)e-9",
  "5.11e-4",
  "0",
  "0.002",
  "0.005",
  "0.1",
  "0.106",
  "1.3",
  "1.777",
  "4.2",
  "80.39",
  "91.188",
  "173"
];

// Charge
var atcm_charge = [
  "0",
  "-1",
  "1",
  "-1/3",
  "2/3"
];

// Spin
var atcm_spin = [
    "1/2",
    "1"
];

// Family
var atcm_family = [
    "Leptons",
    "Quarks",
    "Electroweak Bosons",
    "Strong Bosons"
];

/* Particle Database: 
 * Contains a list of all the particles
 * and their properties
 */
 
var particles_db = [
    // Leptons
    {   // 0
	name: "Lightest Neutrino",
	mass: "(0-0.13)e-9",
	charge: "0",
	spin: "1/2",
	family: "Leptons",
    },
    {   // 1
	name: "Electron",
	mass: "5.11e-4",
	charge: "-1",
	spin: "1/2",
	family: "Leptons"
    },
    {   // 2
	name: "Middle Neutrino",
	mass: "(0.009-0.13)e-9",
	charge: "0",
	spin: "1/2",
	family: "Leptons"
    },
    {   // 3
        name: "Muon",
	mass: "0.106",
	charge: -1,
	spin: "1/2",
	family: "Leptons"
    },
    {   // 4
	name: "Heaviest Neutrino",
	mass: "(0.04-0.14)e-9",
	charge: "0",
	spin: "1/2",
	family: "Leptons"
    },
    {   // 5
	name: "Tau",
	mass: "1.777",
	charge: "-1",
	spin: "1/2",
	family: "Leptons"
    },

	// Quarks
    {   // 6
	name: "Up Quark",
	mass: "0.002",
	charge: "2/3",
	spin: "1/2",
	family: "Quarks"
    },
    {   // 7
	name: "Down Quark",
	mass: "0.005",
	charge: "-1/3",
	spin: "1/2",
	family: "Quarks"
    },
    {   // 8
	name: "Charm Quark",
	mass: "1.3",
	charge: "2/3",
	spin: "1/2",
	family: "Quarks"
    },
    {   // 9
	name: "Stange Quark",
	mass: "0.1",
	charge: "-1/3",
	spin: "1/2",
	family: "Quarks"
    },
    {   // 10
	name: "Top Quark",
	mass: "173",
	charge: "2/3",
	spin: "1/2",
	family: "Quarks"
    },
    {   // 11
	name: "Bottom Quark",
	mass: "4.2",
	charge: "-1/3",
	spin: "1/2",
	family: "Quarks"
    },
	
	// U-EW Bossons
    {   // 12
	name: "Photon",
	mass: "0",
	charge: "0",
	spin: "1",
	family: "Electroweak Bosons"
    },
    {   // 13
	name: "W⁻ Bosson",
	mass: "80.39",
	charge: "-1",
	spin: "1",
	family: "Electroweak Bosons"
    },
    {   // 14
	name: "W⁺ Bosson",
	mass: "80.39",
	charge: "1",
	spin: "1",
	family: "Electroweak Bosons"
    },
    {   // 15
	name: "Z⁰ Bosson",
	mass: "91.188",
	charge: "0",
	spin: "1",
	family: "Electroweak Bosons"
    },
    
    // Strong Bossons
    {   // 16
	name: "Gluon",
	mass: "0",
	charge: "0",
	spin: "1",
	family: "Strong Bosons"
    },
];
