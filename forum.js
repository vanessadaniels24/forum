const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
    { name: "Carol", occupation: "Programmer", startingPrice: 70 },
  ];
  
  function createFreelancerTableRow(freelancer) {
    const tr = document.createElement("tr");
  
    const nameTd = document.createElement("td");
    nameTd.textContent = freelancer.name;
    tr.appendChild(nameTd);
    
    const occupationTd = document.createElement("td");
    occupationTd.textContent = freelancer.occupation;
    tr.appendChild(occupationTd);
     
    const startingPriceTd = document.createElement("td");
    startingPriceTd.textContent = `$${freelancer.startingPrice}`;
    tr.appendChild(startingPriceTd);
    
    tr.appendChild(nameTd);
       
    return tr;
  }
  function clearTable() {
    const table = document.getElementById("Freelancers");
    while (table.childNodes.lenght) {
      table.removeChild(table.childNodes[0]);
    }
  }
  
  function render() {
    const table = document.querySelector("#Freelancers");
  
    for (let i = 0; i < freelancers.length; ++i) {
      const initialfreelancer = freelancers[i];
      const row = createFreelancerTableRow(initialfreelancer);
      table.appendChild(row);
    }
  }
  
  function calculateAveragePrice() {
    let total = 0;
    for (let i = 0; i < freelancers.length; i++) {
      const currentFreelancer = freelancers[i];
      total += currentFreelancer.startingPrice;
    }
    return Math.round(total / freelancers.length);
  }
  
  function calculateAveragePriceAveragePrice() {
    const pricetext = document.querySelector("#averagePrice");
    pricetext.textContent = calculateAveragePrice();
  }
  
function generaterandomfreelancers ()  {
    const newfreelancers = 
        [
      { name: "Emir", occupation: "trainer", startingPrice: 75 },
  
      { name: "Tori", occupation: "chef", startingPrice: 80 },
  
      { name: "Haddy", occupation: "lawyer", startingPrice: 85 },
    ];
    const table = document.getElementById("Freelancer");
    freelancers.push("name: Emir", "occupation: trainer", "startingPrice 75" ,
    );

   table.appendChild(newfreelancers);
     return newfreelancers;
 
  }
   
  setInterval(() => {
    render();
    updatedAveragePrice(1);
  
  }, 3000);