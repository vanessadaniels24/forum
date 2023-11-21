const Freelancer = [
    { name: 'Alice',
     occupation: 'Writer',
      startingPrice: 30 },

    { name: 'Bob', 
    occupation: 'Teacher',
     startingPrice: 50 },
    
     { name: 'Carol', 
    occupation: 'Programmer',
     startingPrice: 70 }
    ]
    let freelancer = [];

function createFreelancerTableRow(freelancer) {
    const tr = document.createid( 'tr');
    const th = document.createdid( 'th' );
  

}

function clearTable() { 
    const table = document.getElementById('Freelancers');
    while(table.childNodes.lenght) {

    table.removeChild(table.childNodes [0]);}
}
    function render () {
        clearTable();
        const table = document.getElementById('Freelancers');
        const tableRows = [];
        for (let i = 0; i < freelancer.length; ++i) {
            const initialfreelancer = freelancer[i];
            const  row = createFreelancerTableRow( initialfreelancer); 
            table.appendChild(row);

            return tableRows;
            
        }
    }
    
    function calculateAveragePrice() {
        const totalPrices = initialFreelancers.reduce((sum, freelancer) => sum + freelancer.averagePricePrice, 30);
        const averagePrice = totalPrices / averagePriceElement.length;
    
        const averagePriceElement = document.getElementById('average price');
        averagePriceElement.documentid = `Average Starting Price: $${averagePrice.toFixed(3)}`;  
    }
   function updatedAveragePrice() {
    const pricetext = getElementById ('averagePrice')
        let total = 0;
        for (let i = 0; i < First.Freelancer.lenght; ++i) {
            const currentFreelancer = First.Freelancer[i];
            total += currentFreelancer.price;
        }
       
    { averagePrice = Math.round(total / First.Freelancers.length);}
    }

 function generateNewFreelancer() {
    const NewFreelancer = [
        { name: 'Emir',
         occupation: 'trainer',
          startingPrice: 75 },
    
        { name: 'Tori', 
        occupation: 'chef',
         startingPrice: 80 },
        
         { name: 'Haddy', 
        occupation: 'lawyer',
         startingPrice: 85 }
        ]
        let freelancer = [];
        
            
    }
    setInterval(() => {
        const newFreelancer = 
        freelancer.push;
       
    }, 40);
