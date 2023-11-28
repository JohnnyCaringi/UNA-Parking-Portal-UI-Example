const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

const vehicleMakes = [
  "Acura",
  "Alfa Romeo",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "Genesis",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Lexus",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
  "Other"
];

const vehicleTypes = [
  "Mini Van",
  "Van",
  "Cargo Van",
  "Compact",
  "Bus",
  "Sport Utility Vehicle",
  "Sedan",
  "Motorcycle",
  "Pickup Truck",
  "Station Wagon",
  "Mid-Size",
  "Sports Car",
  "Cybercar",
  "Hatchback"
];

const colors = [
  "Blue",
  "Green",
  "Black",
  "Brown",
  "Silver",
  "Burgundy",
  "White",
  "Yellow",
  "Tan",
  "Orange",
  "Pink",
  "Purple",
  "Red",
  "Gold",
  "Grey",
  "Beige",
  "Multi-Color",
  "Cream"
];

let vehicleInfo = {
  plate: "UNALIONS",
  state: "Alabama",
  type: "Passenger",
  make: "Honda",
  vehicleType: "Civic",
  color: "Black",
  year: 2013
}

function updateVehicleInfo(){
  $("#vehicleCard").html("Plate: " + vehicleInfo.plate + "<br>" + 
                         "State: " + vehicleInfo.state + "<br>" + 
                         "Type: " + vehicleInfo.type + "<br>" + 
                         "Make: " + vehicleInfo.make + "<br>" + 
                         "Model: " + vehicleInfo.vehicleType + "<br>" + 
                         "Color: " + vehicleInfo.color + "<br>" + 
                         "Year: " + vehicleInfo.year);
}

function loadVehicleForm(){
  states.forEach(function(st){
    $("#state").append(
      '<option value="' + st + '">' + st + '</option>'
    );
  });

  vehicleMakes.forEach(function(vm){
    $("#make").append(
      '<option value="' + vm + '">' + vm + '</option>'
    );
  });

  vehicleTypes.forEach(function(vt){
    $("#vehicleType").append(
      '<option value="' + vt + '">' + vt + '</option>'
    );
  });

  colors.forEach(function(cl){
    $("#color").append(
      '<option value="' + cl + '">' + cl + '</option>'
    );
  });
}

$(document).ready(function(){
  updateVehicleInfo();
  loadVehicleForm();

  $("#visitorButton").click(function(){
    $("#infoModal").css("display", "block");
  });

  $("#registerButton").click(function(){
    $("#vehicleModal").css("display", "block");
  });

  $("#submit").click(function(){
    vehicleInfo.plate = $("#plate").val();
    vehicleInfo.state = $("#state").val();
    vehicleInfo.type = $("#type").val();
    vehicleInfo.make = $("#make").val();
    vehicleInfo.vehicleType = $("#vehicleType").val();
    vehicleInfo.color = $("#color").val();
    vehicleInfo.year = $("#year").val();

    updateVehicleInfo();

    $("#vehicleModal").css("display", "none");
  });

  $("#termsOfServiceLink").click(function(){
    $("#termsOfService").html("<h5>I agree to</h5> <br>" +
                              "•Assume all responsibilities for the vehicles registered herein <br>" +
                              "•Adhere to the University's Traffic and Parking Regulations and to accept all the conditions contained therein <br>" +
                              "•Acknowledge having read these regulations, and further certify that I am in possession of a valid   driver's license and that the vehicle registered for parking is properly licensed and insured <br>" +
                              "•Properly manage my Vehicles by maintaining correct registration information and properly identifying my active vehicle as changes occur <br>" +
                              "•Update my vehicle information as if it changes <br>");
  });
});
