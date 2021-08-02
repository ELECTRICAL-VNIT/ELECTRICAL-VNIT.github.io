// Theory

const SUBJECTS = {
  "slotA": {
    name: "slot A",
    link: ""
  },

  "slotB": {
    name: "slot B",
    link: ""
  },

  "slotC": {
    name: "slot C",
    link: ""
  },

  "slotD": {
    name: "slot D",
    link: ""
  },

  "slotE": {
    name: "slot E",
    link: ""
  },

  "slotF": {
    name: "slot F",
    link: ""
  },

  "slotG": {
    name: "slot G",
    link: ""
  },

  "slotH": {
    name: "slot H",
    link: ""
  }
};

// Practicals

const PRACTICALS = [
  [
    ['slotB (B1)', 'slotC (B2)', 'slotD (B3)', 'slotE (B4)', 'slotF (B5)'], // Mon 4:00pm-4:45pm
    ['slotG (B1)', 'slotH (B2)', 'slotA (B3)']          // Mon 5:00pm-5:45pm
  ], 
  [
    ['slotB (B2)', 'slotC (B3)', 'slotD (B4)', 'slotE (B5)', 'slotF (B1)'], // Tue 4:00pm-4:45pm
    ['slotG (B)', 'slotH (B)', 'slotA (B)']           // Tue 5:00pm-5:45pm
  ], 
  [
    ['slotB (B3)', 'slotC (B4)', 'slotD (B5)', 'slotE (B1)', 'slotF (B2)'], // Wed 4:00pm-4:45pm
    ['slotG (B2)', 'slotH (B3)', 'slotA (B4)']           // Wed 5:00pm-5:45pm
  ], 
  [
    ['slotB (B4)', 'slotC (B5)', 'slotD (B1)', 'slotE (B2)', 'slotF (B3)'], // Thu 4:00pm-4:45pmr
    ['slotG (B3)', 'slotH (B5)', 'slotA (B1)']           // Thur 5:00pm-5:45pm
  ], 
  [
    ['slotB (B5)', 'slotC (B1)', 'slotD (B2)', 'slotE (B3)', 'slotF (B4)'], // Fri 4:00pm-4:45pm
    ['slotG (B5)', 'slotH (B1)', 'slotA (B2)']           // Fri 5:00pm-5:45pm
  ], 
  [
    ['', '', '', '', ''], // Sat 4:00pm-4:45pm
    ['', '', '']           // Sat 5:00pm-5:45pm
  ], 
]