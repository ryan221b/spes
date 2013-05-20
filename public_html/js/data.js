/* Data for forms:
 * Provide options for autocomplete
 */

// Mass
var atcm_mass = [
  "-1.3e-10",
  "-1.21e-10",
  "-1e-9",
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
	{
		name: "Lightest neutrino",
		mass: -1.3e-10,
		charge: 0,
		spin: "1/2",
		family: "Leptons",
	},
	{
		name: "Electron",
		mass: 5.11e-4,
		charge: -1,
		spin: "1/2",
		family: "Leptons"
	},
	{
		name: "Middle Neutrino",
		mass: -1.21e-10,
		charge: 0,
		spin: "1/2",
		family: "Leptons"
	},
	{
		name: "Muon",
		mass: 0.106,
		charge: -1,
		spin: "1/2",
		family: "Leptons"
	},
	{
		name: "Heaviest Neutrino",
		mass: -1e-10,
		charge: 0,
		spin: "1/2",
		family: "Leptons"
	},
	{
		name: "Tau",
		mass: 1.777,
		charge: -1,
		spin: "1/2",
		family: "Leptons"
	},
	
	// Quarks
	{
		name: "Up Quark",
		mass: 0.002,
		charge: "2/3",
		spin: "1/2",
		family: "Quarks"
	},
	{
		name: "Down Quark",
		mass: 0.005,
		charge: "-1/3",
		spin: "1/2",
		family: "Quarks"
	},
	{
		name: "Charm Quark",
		mass: 1.3,
		charge: "2/3",
		spin: "1/2",
		family: "Quarks"
	},
	{
		name: "Stange Quark",
		mass: 0.1,
		charge: "-1/3",
		spin: "1/2",
		family: "Quarks"
	},
	{
		name: "Top Quark",
		mass: 173,
		charge: "2/3",
		spin: "1/2",
		family: "Quarks"
	},
	{
		name: "Bottom Quark",
		mass: 4.2,
		charge: "-1/3",
		spin: "1/2",
		family: "Quarks"
	},
	
	// U-EW Bossons
	{
		name: "Photon",
		mass: 0,
		charge: "0",
		spin: "1",
		family: "Electroweak Bosons"
	},
	{
		name: "Photon",
		mass: 0,
		charge: "0",
		spin: "1",
		family: "Electroweak Bosons"
	}
];
